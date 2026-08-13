import profilePhoto from '../assets/profile.jpg';
import resumePdf from '../assets/Resume.pdf';

export const profile = {
  name: 'Watson Agbramu',
  title: 'Senior Software Engineer',
  location: 'Ontario, Canada',
  availability: 'Open to new opportunities',
  headline: 'Data platforms and AI systems, built to scale.',
  lede: 'Senior Software Engineer with 8+ years building production systems across SaaS, media, and fintech, spanning client-facing APIs and interfaces, data pipelines, and cloud infrastructure. Recent work covers LLM-powered products, multi-tenant platforms, and event-driven architecture.',
  photo: profilePhoto,
  resume: resumePdf,
  email: 'watsonagbramu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/watson-agbramu/',
  github: 'https://github.com/wittywatz',
} as const;

export type Capability = {
  label: string;
  title: string;
  body: string;
};

export const capabilities: Capability[] = [
  {
    label: 'LLM products',
    title: 'RAG and agents in production',
    body: 'LangGraph and LangChain systems with vector search and tool calling, tuned against real query patterns rather than demos.',
  },
  {
    label: 'Data platforms',
    title: 'Enterprise pipelines',
    body: 'Multi-source ingestion on Azure Databricks, Data Factory, and Data Lake, consolidating overlapping pipelines across client products.',
  },
  {
    label: 'Cloud and infrastructure',
    title: 'Event-driven on AWS',
    body: 'CloudFront and Route 53 edge routing with Terraform, ArgoCD, and GitHub Actions standardising deployment across services.',
  },
];
