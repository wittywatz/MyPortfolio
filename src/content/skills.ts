export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Rust'] },
  {
    label: 'AI',
    items: [
      'LangChain',
      'LangGraph',
      'LiteLLM',
      'OpenAI SDK',
      'Anthropic SDK',
      'RAG',
      'Vector search',
      'Embeddings',
      'Agentic workflows',
      'Tool calling',
      'Evals',
    ],
  },
  {
    label: 'Backend',
    items: ['FastAPI', 'Flask', 'Node.js', 'Express', 'GraphQL', 'REST', 'Celery', 'Event-driven architecture'],
  },
  { label: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Tailwind CSS'] },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Vector DB', 'DBT', 'Snowflake', 'Airbyte', 'Databricks'],
  },
  {
    label: 'Infra',
    items: [
      'AWS Lambda',
      'SQS',
      'S3',
      'CloudFront',
      'Route 53',
      'AWS SAM',
      'GCP',
      'Azure',
      'Docker',
      'Terraform',
      'ArgoCD',
      'Argo Workflows',
      'GitHub Actions',
    ],
  },
];
