/**
 * Hand-built rather than generated, so every fill and stroke can be a CSS
 * variable and the drawing re-themes with the rest of the page.
 *
 * Traced from the project's own architecture notes: the shell captures at
 * 48 kHz and inserts the result, and everything that could be wrong lives in
 * the Rust core, in this order. The audio path is the one coloured thread and
 * it stops at recognition, which is the whole privacy claim in one line.
 */
export default function VoiceArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 440 340"
      role="img"
      aria-labelledby="voice-diagram-title voice-diagram-desc"
      className="h-full w-full"
    >
      <title id="voice-diagram-title">On-device voice dictation architecture</title>
      <desc id="voice-diagram-desc">
        A platform shell, either a Swift menu-bar app on macOS or a Kotlin input method on Android,
        captures microphone audio at 48 kHz and passes it across a UniFFI boundary into a shared Rust
        core. The core resamples to 16 kHz, segments speech on pauses with Silero VAD, transcribes
        with whisper.cpp using local weights, and applies a rules formatter. The finished text
        returns to the shell and is inserted at the caret. Every stage runs on the device, and the
        audio never leaves it.
      </desc>

      <defs>
        <marker id="vd-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--faint)" />
        </marker>
        <marker id="vd-arrow-audio" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--accent-2)" />
        </marker>
      </defs>

      {/* Device boundary. Nothing crosses it, which is the point. */}
      <rect
        x="8"
        y="26"
        width="424"
        height="306"
        rx="12"
        fill="none"
        stroke="var(--line)"
        strokeDasharray="3 5"
      />
      <text x="10" y="16" fill="var(--faint)" fontSize="10" fontFamily="var(--font-mono)">
        THIS DEVICE / NO NETWORK AT RUNTIME
      </text>

      {/* Shell lane */}
      <text x="28" y="52" fill="var(--faint)" fontSize="9.5" fontFamily="var(--font-mono)">
        SHELL
      </text>

      <rect x="24" y="60" width="112" height="44" rx="8" fill="var(--surface)" stroke="var(--line)" />
      <text x="80" y="79" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">
        Hold a key
      </text>
      <text x="80" y="94" textAnchor="middle" fill="var(--muted)" fontSize="9.5">
        macOS bar app · Android IME
      </text>

      <rect
        x="24"
        y="116"
        width="112"
        height="44"
        rx="8"
        fill="var(--surface)"
        stroke="var(--accent-2)"
      />
      <text x="80" y="135" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">
        Capture
      </text>
      <text x="80" y="150" textAnchor="middle" fill="var(--muted)" fontSize="9.5">
        48 kHz float, mono
      </text>

      <rect x="24" y="264" width="112" height="44" rx="8" fill="var(--surface)" stroke="var(--line)" />
      <text x="80" y="283" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">
        Insert at caret
      </text>
      <text x="80" y="298" textAnchor="middle" fill="var(--muted)" fontSize="9.5">
        any app, no plugin
      </text>

      {/* UniFFI seam */}
      <line x1="152" y1="56" x2="152" y2="316" stroke="var(--line)" />
      <text
        x="152"
        y="50"
        textAnchor="middle"
        fill="var(--accent-2)"
        fontSize="9.5"
        fontFamily="var(--font-mono)"
      >
        UniFFI
      </text>

      {/* Core lane */}
      <text x="172" y="52" fill="var(--faint)" fontSize="9.5" fontFamily="var(--font-mono)">
        SHARED RUST CORE
      </text>

      <rect x="168" y="60" width="248" height="40" rx="8" fill="var(--surface)" stroke="var(--line)" />
      <text x="292" y="78" textAnchor="middle" fill="var(--text)" fontSize="11.5" fontWeight="600">
        Resampler
      </text>
      <text x="292" y="92" textAnchor="middle" fill="var(--muted)" fontSize="9.5">
        to 16 kHz, phase correct
      </text>

      <rect x="168" y="112" width="248" height="40" rx="8" fill="var(--surface)" stroke="var(--line)" />
      <text x="292" y="130" textAnchor="middle" fill="var(--text)" fontSize="11.5" fontWeight="600">
        Silero VAD
      </text>
      <text x="292" y="144" textAnchor="middle" fill="var(--muted)" fontSize="9.5">
        segments on pauses
      </text>

      <rect
        x="168"
        y="164"
        width="248"
        height="40"
        rx="8"
        fill="var(--surface)"
        stroke="var(--accent)"
      />
      <text x="292" y="182" textAnchor="middle" fill="var(--text)" fontSize="11.5" fontWeight="600">
        whisper.cpp
      </text>
      <text x="292" y="196" textAnchor="middle" fill="var(--muted)" fontSize="9.5">
        small.en, local weights
      </text>

      <rect x="168" y="216" width="248" height="40" rx="8" fill="var(--surface)" stroke="var(--line)" />
      <text x="292" y="234" textAnchor="middle" fill="var(--text)" fontSize="11.5" fontWeight="600">
        Rules formatter
      </text>
      <text x="292" y="248" textAnchor="middle" fill="var(--muted)" fontSize="9.5">
        punctuation, dictionary
      </text>

      {/* Audio in: the one coloured thread, and it stops at recognition. */}
      <path
        d="M136,138 H146 V80 H162"
        fill="none"
        stroke="var(--accent-2)"
        strokeWidth="1.6"
        markerEnd="url(#vd-arrow-audio)"
      />
      <text x="120" y="110" fill="var(--accent-2)" fontSize="9.5" fontFamily="var(--font-mono)">
        audio
      </text>

      {/* Through the core */}
      <line x1="292" y1="100" x2="292" y2="106" stroke="var(--faint)" markerEnd="url(#vd-arrow)" />
      <line x1="292" y1="152" x2="292" y2="158" stroke="var(--faint)" markerEnd="url(#vd-arrow)" />
      <line x1="292" y1="204" x2="292" y2="210" stroke="var(--faint)" markerEnd="url(#vd-arrow)" />

      {/* Text back out */}
      <path
        d="M292,256 V286 H142"
        fill="none"
        stroke="var(--faint)"
        strokeWidth="1.6"
        markerEnd="url(#vd-arrow)"
      />
      <text x="196" y="280" fill="var(--muted)" fontSize="9.5" fontFamily="var(--font-mono)">
        text, committed at each pause
      </text>
    </svg>
  );
}
