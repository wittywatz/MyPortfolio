export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  bullets: string[];
  /** Filename inside public/projects/, or null when no asset exists yet. */
  media: string | null;
  /** Describes what the media actually shows. Required whenever media is set. */
  mediaAlt: string | null;
  /** Renders the hand-built architecture diagram in place of media. */
  diagram: 'voice' | null;
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
    media: 'nl-bi-platform.jpg',
    mediaAlt:
      'The platform answering a plain-English question about revenue by product category: a bar chart with the generated SQL available beneath it, a banner flagging an inferred meaning for an ambiguous term, and the connected Postgres schema listed alongside.',
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
    media: null,
    mediaAlt: null,
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
    media: null,
    mediaAlt: null,
    diagram: null,
  },
];
