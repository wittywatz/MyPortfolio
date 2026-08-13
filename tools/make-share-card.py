"""Builds the LinkedIn share card in the site's own palette.

Designed for feed size: at roughly 300px wide only the headline and the name
need to survive, so everything else is deliberately secondary.
"""

from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
SCALE = 2  # supersample, then downscale, so the type edges stay clean

BG = (8, 9, 12)
SURFACE = (18, 20, 26)
LINE = (38, 41, 50)
TEXT = (232, 234, 240)
MUTED = (152, 160, 180)
FAINT = (125, 133, 154)
ACCENT = (109, 139, 255)
ACCENT_2 = (49, 208, 170)

SANS = "/System/Library/Fonts/SFNS.ttf"
MONO = "/System/Library/Fonts/SFNSMono.ttf"


def font(path, size, weight):
    f = ImageFont.truetype(path, size * SCALE)
    f.set_variation_by_name(weight)
    return f


def main(out_path):
    img = Image.new("RGB", (W * SCALE, H * SCALE), BG)

    # Glow, painted large and blurred so it reads as light rather than a shape.
    glow = Image.new("RGB", (W * SCALE, H * SCALE), BG)
    gd = ImageDraw.Draw(glow)
    gd.ellipse(
        [-260 * SCALE, -420 * SCALE, 720 * SCALE, 300 * SCALE], fill=(46, 58, 120)
    )
    gd.ellipse(
        [820 * SCALE, -300 * SCALE, 1500 * SCALE, 240 * SCALE], fill=(12, 62, 58)
    )
    glow = glow.filter(ImageFilter.GaussianBlur(150 * SCALE))
    img = Image.blend(img, glow, 0.55)

    d = ImageDraw.Draw(img)

    # Faint grid, fading out down the page.
    for x in range(0, W + 1, 60):
        d.line([(x * SCALE, 0), (x * SCALE, 330 * SCALE)], fill=(20, 23, 30), width=SCALE)
    for y in range(0, 331, 60):
        d.line([(0, y * SCALE), (W * SCALE, y * SCALE)], fill=(20, 23, 30), width=SCALE)

    M = 84  # margin

    # Monogram, same mark as the favicon.
    d.rounded_rectangle(
        [M * SCALE, 70 * SCALE, (M + 56) * SCALE, 126 * SCALE],
        radius=14 * SCALE,
        fill=SURFACE,
        outline=LINE,
        width=SCALE,
    )
    w_pts = [(12, 16), (19, 40), (28, 25), (37, 40), (44, 16)]
    w_pts = [((M + x) * SCALE, (70 + y) * SCALE) for x, y in w_pts]
    d.line(w_pts, fill=ACCENT, width=5 * SCALE, joint="curve")

    d.text(
        ((M + 74) * SCALE, 84 * SCALE),
        "Watson Agbramu",
        font=font(SANS, 24, "Semibold"),
        fill=TEXT,
    )
    d.text(
        ((M + 74) * SCALE, 112 * SCALE),
        "Senior Software Engineer",
        font=font(SANS, 18, "Regular"),
        fill=MUTED,
    )

    # Availability pill.
    pill_f = font(MONO, 15, "Medium")
    label = "OPEN TO NEW OPPORTUNITIES"
    tw = d.textlength(label, font=pill_f)
    pill_w = tw / SCALE + 58
    px0 = W - M - pill_w
    d.rounded_rectangle(
        [px0 * SCALE, 78 * SCALE, (W - M) * SCALE, 118 * SCALE],
        radius=20 * SCALE,
        fill=SURFACE,
        outline=LINE,
        width=SCALE,
    )
    d.ellipse(
        [(px0 + 20) * SCALE, 94 * SCALE, (px0 + 28) * SCALE, 102 * SCALE], fill=ACCENT_2
    )
    d.text(((px0 + 38) * SCALE, 90 * SCALE), label, font=pill_f, fill=ACCENT_2)

    # Headline: the only thing that must survive at feed size.
    hl = font(SANS, 74, "Bold")
    d.text((M * SCALE, 236 * SCALE), "Data platforms and AI", font=hl, fill=TEXT)
    d.text((M * SCALE, 322 * SCALE), "systems, built to scale.", font=hl, fill=TEXT)

    d.text(
        (M * SCALE, 428 * SCALE),
        "8+ years across SaaS, media and fintech.",
        font=font(SANS, 27, "Regular"),
        fill=MUTED,
    )

    # Stack row. The URL owns the right end of this line, so drop tags from the
    # tail until the row clears it rather than letting the two collide.
    tf = font(MONO, 17, "Regular")
    uf_probe = font(MONO, 19, "Medium")
    url = "wittywatz.github.io/MyPortfolio"
    url_w = d.textlength(url, font=uf_probe) / SCALE
    limit = W - M - url_w - 48

    tags = ["Python", "TypeScript", "Rust", "LangGraph", "Snowflake", "AWS"]
    while tags:
        row = sum(d.textlength(t, font=tf) / SCALE + 42 for t in tags) - 42 + 30 * len(tags)
        if M + row <= limit:
            break
        tags.pop()

    x = M
    for t in tags:
        tw = d.textlength(t, font=tf) / SCALE
        d.rounded_rectangle(
            [x * SCALE, 500 * SCALE, (x + tw + 30) * SCALE, 540 * SCALE],
            radius=9 * SCALE,
            outline=LINE,
            width=SCALE,
        )
        d.text(((x + 15) * SCALE, 511 * SCALE), t, font=tf, fill=FAINT)
        x += tw + 42

    # URL, bottom right.
    uf = uf_probe
    uw = url_w
    d.text(((W - M - uw) * SCALE, 511 * SCALE), url, font=uf, fill=ACCENT)

    img.resize((W, H), Image.LANCZOS).save(out_path, "PNG", optimize=True)
    print(out_path)


if __name__ == "__main__":
    import sys

    main(sys.argv[1])
