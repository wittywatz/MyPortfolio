export type DetailedRole = {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
};

export type PreviousRole = {
  company: string;
  role: string;
  dates: string;
  summary: string;
};

export const detailedRoles: DetailedRole[] = [
  {
    company: 'LipDub AI (MARZ)',
    role: 'Senior Software Engineer',
    dates: 'Sept 2024 – Present',
    location: 'Remote',
    bullets: [
      'Initiated and designed the personalization epic, delivering the API in production today that regenerates voice and lip-sync for edited text segments, eliminating full-asset re-renders on client revisions.',
      'Built and own the public video-generation API and the internal service layer behind the Next.js frontend using Python, Flask, and FastAPI, covering generation, asset management, and account workflows.',
      'Architected feature gating on Stripe entitlements as the plan-level source of truth with LaunchDarkly as a per-tenant resolver, avoiding a bespoke entitlements service, with short-TTL caching invalidated on Stripe plan-change webhooks to keep gate checks off the critical path.',
      'Shipped custom subdomain support on AWS CloudFront and Route 53, automating CNAME delegation and TLS provisioning while scoping edge routing to expose only client-facing watch routes.',
      'Built a media ingestion worker accepting public and YouTube URLs, and added workflow prioritization for Argo generation jobs, moving download and validation server-side.',
      'Delivered voice cloning, occlusion handling, AI avatars, video looping, translation memory, and the assets library across Python services and Next.js, deployed via ArgoCD.',
    ],
  },
  {
    company: 'Arctic AI',
    role: 'Senior Software Developer',
    dates: 'Feb 2022 – Sept 2024',
    location: 'Remote',
    bullets: [
      'Developed RAG-based AI systems using LangChain and LLMs in production workflows, tuning chunking and retrieval strategy against domain-specific query patterns.',
      'Implemented vector search infrastructure for semantic retrieval, improving answer grounding and reducing token spend by narrowing context to relevant messages.',
      'Built an enterprise data platform on Azure (Databricks, Data Factory, Data Lake), consolidating overlapping pipelines and scaling multi-source ingestion across client products.',
      'Led a full platform redesign in Next.js and implemented CI/CD with GitHub Actions and Docker, standardizing deployments across services.',
      'Mentored engineers and contributed to system design and technical direction across projects.',
    ],
  },
];

export const previousRoles: PreviousRole[] = [
  {
    company: 'Divergence Neuro',
    role: 'Web Application Developer',
    dates: 'Aug 2021 – Oct 2021',
    summary:
      'Client-facing React and AWS application with PWA offline support, plus a custom QR scanner and Bluetooth pairing for Neurosity devices.',
  },
  {
    company: 'Neo Financial',
    role: 'Software Developer',
    dates: 'Jun 2021 – Aug 2021',
    summary:
      'Credit statement generation on Node, React, Terraform and GraphQL, and the decider microservice routing declined transactions to third-party fraud detection.',
  },
  {
    company: 'University of Waterloo',
    role: 'Data Scientist (M.Eng Research)',
    dates: 'Sept 2019 – Dec 2020',
    summary:
      'Transfer-learning image classification reaching 92.18% across 120 classes, and Faster R-CNN pedestrian detection on re-annotated datasets.',
  },
];
