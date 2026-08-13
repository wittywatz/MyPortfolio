export default function VoiceArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 420 260"
      role="img"
      aria-labelledby="voice-diagram-title voice-diagram-desc"
      className="h-full w-full"
    >
      <title id="voice-diagram-title">On-device voice dictation architecture</title>
      <desc id="voice-diagram-desc">
        A single Rust core containing whisper.cpp, Silero VAD, and a session state machine is
        exposed through a UniFFI boundary to two native shells: a Swift menu-bar application on
        macOS and a Kotlin input method on Android. All processing stays on the device.
      </desc>

      <defs>
        <marker id="vd-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--faint)" />
        </marker>
      </defs>

      <rect
        x="8" y="8" width="404" height="244" rx="12"
        fill="none" stroke="var(--line)" strokeDasharray="4 4"
      />
      <text x="20" y="28" fill="var(--faint)" fontSize="10" fontFamily="var(--font-mono)">
        DEVICE / NO NETWORK
      </text>

      <rect x="130" y="52" width="160" height="76" rx="10"
            fill="var(--surface)" stroke="var(--accent)" />
      <text x="210" y="76" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="600">
        Rust core
      </text>
      <text x="210" y="94" textAnchor="middle" fill="var(--muted)" fontSize="10">
        whisper.cpp · Silero VAD
      </text>
      <text x="210" y="110" textAnchor="middle" fill="var(--muted)" fontSize="10">
        session state machine
      </text>

      <line x1="210" y1="128" x2="210" y2="150" stroke="var(--faint)" />
      <text x="210" y="146" textAnchor="middle" fill="var(--accent-2)" fontSize="10"
            fontFamily="var(--font-mono)">
        UniFFI
      </text>

      <line x1="210" y1="152" x2="105" y2="152" stroke="var(--faint)" />
      <line x1="210" y1="152" x2="315" y2="152" stroke="var(--faint)" />
      <line x1="105" y1="152" x2="105" y2="182" stroke="var(--faint)" markerEnd="url(#vd-arrow)" />
      <line x1="315" y1="152" x2="315" y2="182" stroke="var(--faint)" markerEnd="url(#vd-arrow)" />

      <rect x="36" y="188" width="138" height="46" rx="9"
            fill="var(--surface)" stroke="var(--line)" />
      <text x="105" y="207" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">
        macOS
      </text>
      <text x="105" y="223" textAnchor="middle" fill="var(--muted)" fontSize="10">
        Swift menu-bar app
      </text>

      <rect x="246" y="188" width="138" height="46" rx="9"
            fill="var(--surface)" stroke="var(--line)" />
      <text x="315" y="207" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">
        Android
      </text>
      <text x="315" y="223" textAnchor="middle" fill="var(--muted)" fontSize="10">
        Kotlin input method
      </text>
    </svg>
  );
}
