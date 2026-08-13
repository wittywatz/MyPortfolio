export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  bullets: string[];
  /**
   * Screenshots from public/projects/. Empty when no asset exists yet.
   * Curated rather than exhaustive: each shot should evidence a bullet above.
   */
  media: MediaShot[];
  /**
   * How the shots are laid out. 'wide' stacks desktop captures across the full
   * card; 'phones' sets tall mobile captures side by side at a readable size.
   * Null when there is no media.
   */
  mediaLayout: 'wide' | 'phones' | null;
  /** Renders the hand-built architecture diagram in place of media. */
  diagram: 'voice' | null;
};

export type MediaShot = {
  /** Filename inside public/projects/. */
  file: string;
  /** What the shot actually shows, for readers who cannot see it. */
  alt: string;
};

export const projects: Project[] = [
  {
    slug: 'nl-bi-platform',
    name: 'Natural-Language Business Intelligence Platform',
    summary:
      'A multi-tenant BI platform where a LangGraph agent turns plain-English questions into SQL, picks a visualization, and assembles shareable dashboards.',
    stack: ['FastAPI', 'LangGraph', 'Next.js', 'Celery', 'Redis', 'Snowflake', 'Stripe'],
    bullets: [
      'Queries across Postgres, MySQL, SQLite, and Snowflake from a single natural-language interface.',
      'Semantic business-term layer, natural-language alerts, and automated anomaly and root-cause analysis.',
      'Usage-based Stripe billing, with Celery and Redis running scheduled and long-running jobs.',
    ],
    media: [
      {
        file: 'bi-01-ask.jpg',
        alt: 'Answering a plain-English question about revenue by product category: a bar chart with the generated SQL available beneath it, a banner flagging an inferred meaning for an ambiguous term, and the connected Postgres schema listed alongside.',
      },
    ],
    mediaLayout: 'wide',
    diagram: null,
  },
  {
    slug: 'voice-dictation',
    name: 'On-Device Voice Dictation',
    summary:
      'Push-to-talk dictation that transcribes speech straight to the cursor in any application, with recognition and cleanup running entirely on device.',
    stack: ['Rust', 'Swift', 'Kotlin', 'whisper.cpp', 'Silero VAD', 'UniFFI'],
    bullets: [
      'A single Rust core containing whisper.cpp, Silero VAD, and the session state machine, exposed through UniFFI.',
      'Native shells on both platforms: a Swift menu-bar app on macOS and a Kotlin input method on Android.',
      'No audio leaves the machine at runtime.',
    ],
    media: [],
    mediaLayout: null,
    diagram: 'voice',
  },
  {
    slug: 'strength-training',
    name: 'AI-Assisted Strength Training App',
    summary:
      'An offline-first mobile app that turns a conversational intake into a multi-week training program and auto-progresses weights from logged performance.',
    stack: ['React Native', 'Expo', 'TypeScript', 'FastAPI', 'SQLite', 'Supabase'],
    bullets: [
      'LLM calls constrained to the edges of a deterministic training engine.',
      'Every model output validated against program invariants before it can modify a plan.',
      'Full offline capability with local SQLite and Supabase sync.',
    ],
    media: [
      {
        file: 'forge-02-workout.jpg',
        alt: 'Logging a live workout: the set grid for barbell back squat with a rest timer running, and a prompt reading that every working set hit ten reps so it is time to add weight.',
      },
    ],
    mediaLayout: 'phones',
    diagram: null,
  },
];
