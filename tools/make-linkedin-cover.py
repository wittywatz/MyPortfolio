"""Builds the LinkedIn cover image, 1584x396.

The background is literally Watson's shirt: a crop of the oxford fabric from
the profile photo, blurred and darkened until only the weave and the fall of
light survive. That ties the cover to the profile picture sitting on top of it
without either competing with the other.

Layout respects two LinkedIn constraints. The avatar overlaps the lower left,
so nothing important goes there. Mobile crops the sides, so the text block sits
inside the middle band rather than running to the edges.
"""

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter, ImageFont

W, H = 1584, 396
SCALE = 2

BG = (8, 9, 12)
TEXT = (237, 240, 246)
MUTED = (163, 172, 190)
SHIRT = (199, 225, 252)  # sampled from the shirt in profile.jpg
ACCENT_2 = (49, 208, 170)

SANS = "/System/Library/Fonts/SFNS.ttf"
MONO = "/System/Library/Fonts/SFNSMono.ttf"

PHOTO = "src/assets/profile.jpg"

# Nothing essential left of this line: the avatar sits over it.
CONTENT_X = 520
# Nothing essential right of this one: LinkedIn trims the sides on mobile, and
# a URL is useless with its tail cut off.
RIGHT_SAFE = int(0.845 * W)


def font(path, size, weight):
    f = ImageFont.truetype(path, size * SCALE)
    f.set_variation_by_name(weight)
    return f


def shirt_texture(size):
    """A wide strip of shirt fabric, blurred back to a suggestion of itself."""
    photo = Image.open(PHOTO).convert("RGB")
    pw, ph = photo.size
    # Chest and sleeve only: no face, no blossoms, no buttons down the placket.
    crop = photo.crop((int(0.10 * pw), int(0.58 * ph), int(0.92 * pw), int(0.86 * ph)))
    tex = crop.resize(size, Image.LANCZOS)
    tex = tex.filter(ImageFilter.GaussianBlur(9 * SCALE))
    tex = ImageEnhance.Brightness(tex).enhance(0.30)
    tex = ImageEnhance.Color(tex).enhance(0.75)
    return tex


def main(out_path):
    size = (W * SCALE, H * SCALE)
    img = Image.new("RGB", size, BG)

    # Fabric, kept low enough that it reads as texture rather than a photograph.
    img = Image.blend(img, shirt_texture(size), 0.55)

    # Light in the shirt's own colour, sweeping from the upper right so it
    # falls away from the avatar rather than behind it.
    glow = Image.new("RGB", size, (0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse(
        [int(0.55 * W) * SCALE, int(-0.7 * H) * SCALE, int(1.25 * W) * SCALE, int(1.1 * H) * SCALE],
        fill=(44, 62, 104),
    )
    gd.ellipse(
        [int(-0.15 * W) * SCALE, int(0.35 * H) * SCALE, int(0.35 * W) * SCALE, int(1.6 * H) * SCALE],
        fill=(10, 46, 44),
    )
    glow = glow.filter(ImageFilter.GaussianBlur(130 * SCALE))
    img = Image.blend(img, Image.blend(img, glow, 0.9), 0.5)

    d = ImageDraw.Draw(img)

    # Grid, faded in from the left rather than started abruptly: a hard vertical
    # seam where the lines begin reads as a rendering artifact.
    grid = Image.new("RGB", size, (0, 0, 0))
    gdd = ImageDraw.Draw(grid)
    for x in range(0, W + 1, 66):
        gdd.line([(x * SCALE, 0), (x * SCALE, H * SCALE)], fill=(30, 35, 45), width=SCALE)
    for y in range(0, H + 1, 66):
        gdd.line([(0, y * SCALE), (W * SCALE, y * SCALE)], fill=(30, 35, 45), width=SCALE)

    fade = Image.new("L", size, 0)
    fd = ImageDraw.Draw(fade)
    x0, x1 = int(0.20 * W) * SCALE, int(0.52 * W) * SCALE
    for x in range(x0, x1):
        fd.line([(x, 0), (x, H * SCALE)], fill=int(210 * (x - x0) / (x1 - x0)))
    fd.rectangle([x1, 0, W * SCALE, H * SCALE], fill=210)
    img.paste(Image.blend(img, ImageChops.add(img, grid), 1.0), (0, 0), fade)
    d = ImageDraw.Draw(img)

    # Eyebrow.
    d.text(
        (CONTENT_X * SCALE, 116 * SCALE),
        "SENIOR SOFTWARE ENGINEER",
        font=font(MONO, 18, "Medium"),
        fill=SHIRT,
        anchor="lm",
    )

    # Headline.
    hl = font(SANS, 54, "Bold")
    d.text((CONTENT_X * SCALE, 182 * SCALE), "Data platforms and AI systems,", font=hl, fill=TEXT, anchor="lm")
    d.text((CONTENT_X * SCALE, 244 * SCALE), "built to scale.", font=hl, fill=TEXT, anchor="lm")

    # Footer line: availability and URL, kept above the avatar's reach.
    fy = 312
    d.ellipse(
        [CONTENT_X * SCALE, (fy - 5) * SCALE, (CONTENT_X + 10) * SCALE, (fy + 5) * SCALE],
        fill=ACCENT_2,
    )
    d.text(
        ((CONTENT_X + 24) * SCALE, fy * SCALE),
        "Open to new opportunities",
        font=font(SANS, 22, "Regular"),
        fill=MUTED,
        anchor="lm",
    )

    uf = font(MONO, 21, "Medium")
    url = "watsonagbramu.com"
    uw = d.textlength(url, font=uf) / SCALE
    d.text(((RIGHT_SAFE - uw) * SCALE, fy * SCALE), url, font=uf, fill=SHIRT, anchor="lm")

    img.resize((W, H), Image.LANCZOS).save(out_path, "PNG", optimize=True)
    print(out_path)


if __name__ == "__main__":
    import sys

    main(sys.argv[1])
