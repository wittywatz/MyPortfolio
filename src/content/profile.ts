import profilePhoto from '../assets/profile.jpg';
import resumePdf from '../assets/Resume.pdf';

export const profile = {
  name: 'Watson Agbramu',
  title: 'Senior Software Engineer',
  location: 'Ontario, Canada',
  availability: 'Open to new opportunities',
  headline: 'Data platforms and AI systems, built to scale.',
  lede: 'Senior Software Engineer with 8+ years building production systems across SaaS, media, and fintech — from client-facing APIs and interfaces through data pipelines and cloud infrastructure. Recent work in LLM-powered products, multi-tenant platforms, and event-driven architecture.',
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
    body: 'LangGraph and LangChain systems with vector search, tool calling, and evals — tuned against real query patterns, not demos.',
  },
  {
    label: 'Data platforms',
    title: 'Enterprise pipelines',
    body: 'Multi-source ingestion on Azure Databricks, Data Factory, and Data Lake, consolidating overlapping pipelines across client products.',
  },
  {
    label: 'Cloud and infrastructure',
    title: 'Event-driven on AWS',
    body: 'Lambda, SQS, CloudFront and Route 53 with Terraform, ArgoCD, and GitHub Actions standardising deployment across services.',
  },
];
