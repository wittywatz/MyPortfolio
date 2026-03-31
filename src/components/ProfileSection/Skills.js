import React from 'react';
const Skills = () => {
  const skills = [
    { language: 'Python', value: '95', percentage: '95%' },
    { language: 'TypeScript', value: '90', percentage: '90%' },
    { language: 'JavaScript', value: '90', percentage: '90%' },
    { language: 'Rust', value: '75', percentage: '75%' },
  ];

  const renderContent = skills.map((skill, i) => {
    return (
      <div key={i} className="col-md-6 col-sm-12 col-xs-8">
        <div className="pb-1">{skill.language.toUpperCase()}</div>
        <div className="row">
          <div className="col-md-10 col-sm-8 col-xs-8 pb-2">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow={skill.value}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: skill.percentage, backgroundColor: '#00B4D8' }}
              />
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-4">
            <div className="mt-0 pb-2" style={{ lineHeight: '1' }}>
              {skill.percentage}
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="pt-3">
      <h5 style={{ color: '#00B4D8' }}>PROGRAMMING</h5>
      <div className="row pb-4">{renderContent}</div>
      <h5 style={{ color: '#00B4D8' }}>STACKS</h5>
      <p>
        <span style={{ color: '#00B4D8' }}>Backend:</span>
        <em> Node.js, Express, FastAPI, GraphQL, REST.</em>
      </p>
      <p>
        <span style={{ color: '#00B4D8' }}>Frontend:</span>
        <em> React, Next.js, Tailwind CSS.</em>
      </p>
      <p>
        <span style={{ color: '#00B4D8' }}>Data Engineering:</span>
        <em> DBT, Snowflake, Airbyte, Azure Databricks, Azure Data Factory.</em>
      </p>
      <p>
        <span style={{ color: '#00B4D8' }}>AI / ML:</span>
        <em> LangChain, OpenAI, Claude, RAG, Vector Search, TensorFlow.</em>
      </p>
      <p>
        <span style={{ color: '#00B4D8' }}>Databases:</span>
        <em> PostgreSQL, MongoDB, MySQL, Firestore.</em>
      </p>
      <p>
        <span style={{ color: '#00B4D8' }}>Cloud:</span>
        <em> AWS (Lambda, SQS, S3, SAM), GCP, Azure.</em>
      </p>
      <p>
        <span style={{ color: '#00B4D8' }}>DevOps:</span>
        <em> Docker, Terraform, GitHub Actions, Jenkins, AWS SAM.</em>
      </p>
      <p>
        <span style={{ color: '#00B4D8' }}>Practices:</span>
        <em> System Design, Distributed Systems, Multi-tenant Architecture, Agile.</em>
      </p>
    </div>
  );
};

export default Skills;
