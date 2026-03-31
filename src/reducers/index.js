import { combineReducers } from 'redux';

const section = () => {
  return [
    { title: 'experience' },
    { title: 'skills' },
    { title: 'education' },

    { title: 'certification' },
    { title: 'awards' },
  ];
};
const projects = () => {
  return [
    {
      name: 'Crown Enterprise',
      liveApp: 'https://crown-enterprise.herokuapp.com',
      videoDemo: 'https://www.youtube.com/watch?v=DKCa4JhFfRs&t=27s',
      github: 'https://github.com/wittywatz/crown-clothing',
      stack:
        'Express, React, Redux, SCSS, Styled Components, Firebase, Firestore, Stripe, Express-SSLify, Cors.',
      description: [
        'Created an E-COMMERCE web application using EXPRESS JS, REACT JS, SCSS, STYLED COMPONENTS and hosted it on HEROKU.',
        'Ensured data security by integrating FIREBASE to handle authentication.',
        'Integrated FIRESTORE to handle data storage while using REDUX to cater for state management.',
        'Accomplished payment handling by integrating STRIPE API on both the front and backend.',
        'Ensured URL redirect from HTTP to HTTPS by integrating EXPRESS-SSLIFY.',
        'Ensured the web application was PWA compliant.',
      ],
    },
    {
      name: 'Natours',
      liveApp: 'https://natours-watson.herokuapp.com',
      videoDemo: 'https://youtu.be/yUF2wyzE8YA',
      github: 'https://github.com/wittywatz/natours-project',
      stack: 'Express, MongoDB, Mapbox, Pug, Redux, CSS, Stripe, Multer, Cors.',
      description: [
        'Created a server side rendered e-commerce web application using EXPRESS JS, PUG TEMPLATE, CSS, JWT, MongoDB etc.',
        'Integrated STRIPE API to handle payment on both the front and backend.',
        'Deployed application to heroku',
      ],
    },
    {
      name: 'Mailer',
      liveApp: 'https://mailer-app-watson.herokuapp.com',
      videoDemo: 'https://www.youtube.com/watch?v=bcJVTxR3KCg&t=19s',
      github: 'https://github.com/wittywatz/Mailer',
      stack:
        'Express JS, React JS, Passport JS, CSS, Redux, Redux Form, Mongoose, MongoDB, Stripe, SendGrid',
      description: [
        'Created a CUSTOMER FEEDBACK web application using EXPRESS JS, REACT JS, CSS, and hosted it on HEROKU.',
        'Enforced security by integrating PASSPORT JS using Google oauth strategy to handle authentication.',
        'Created EXPRESSS JS routes to handle surveys, payment and also emails.',
        'Integrated MONGODB using MONGOOSE to handle data storage while using REDUX and REDUX FORM to cater for state management.',
        'Accomplished payment handling by integrating STRIPE API on both the front and backend.',
        'Accomplished email handling by integrating SENDGRID API on the backend.',
        'Ensured URL redirect from HTTP to HTTPS by integrating EXPRESS-SSLIFY.',
        'Ensured the web application was PWA compliant.',
      ],
    },
    {
      name: 'Share Me',
      liveApp: 'https://shareme-social-app.netlify.app/',
      videoDemo: 'https://youtu.be/Nc21pFIA6eQ',
      github: 'https://github.com/wittywatz/ShareMe',
      stack: 'React JS, CSS, SCSS, Styled Components.',
      description: [
        'Built a social media application using React JS, Tailwind CSS and Sanity IO for sharing, downloading and saving pictures',
        'Hosted on netlify',
      ],
    },

    {
      name: 'Color Picker',
      liveApp: 'https://wittywatz.github.io/color-picker/',
      videoDemo: 'https://www.youtube.com/watch?v=IHOwoQFW8eo',
      github: 'https://github.com/wittywatz/color-picker',
      stack: 'React JS, CSS, SCSS, Styled Components.',
      description: [
        'A fun color picker app built using React JS and CSS to aid background color selection when designing apps.',
        'Integrated the ability to copy the color and also alter the background on click.',
        'Hosted on github pages',
      ],
    },
  ];
};

const certs = () => {
  return [
    {
      title: 'Conrad',
      certifications: [
        'Certificate in Business and Entrepreneurship (Conrad School of Business) ',
      ],
    },
    {
      title: 'Coursera',
      certifications: [
        'Programming for Everybody (Getting Started with Python)',
        'Python Data Structures',
        'Using Python to Access Web Data',
        'IBM Exploratory data analysis for Machine Learning.',
      ],
    },
    {
      title: 'Data Camp',
      certifications: [
        'Introduction to Python,',
        'Intermediate Python,',
        'Data Manipulation with pandas,',
        'Python Data Science Toolbox (Part 1 & 2),',
        'Introduction to Data Visualization with Matplotlib.',
      ],
    },
    {
      title: 'LinkedIn Learning',
      certifications: [
        'Applied Machine Learning: Foundations,',
        'React.js Essential Training,',
        'React.js: Building an Interface',
        'React for Web Designers',
        'Python Data Structures: Linked Lists',
        'Vanilla JavaScript: Animations',
      ],
    },
  ];
};

const experiences = () => {
  return [
    {
      title: 'Senior Software Developer, Insights & Data Platform',
      duration: 'Sept 2024 - Present',
      organization: 'ThinkLP, Remote',
      roles: [
        'Built a multi-tenant data platform using DBT, Snowflake, Airbyte, and Python, reducing data processing latency by 60% and enabling scalable onboarding of enterprise retail clients across North America and Europe.',
        'Engineered a high-throughput XML ingestion system processing 1M+ records, eliminating failures in the legacy importer and enabling onboarding of a major European client.',
        'Developed a configurable SFTP ingestion framework supporting multiple file formats and schema mapping, enabling zero-code onboarding of new data sources and reducing manual ingestion effort.',
        'Integrated Salesforce location data into Snowflake via Airbyte, eliminating manual reconciliation workflows and standardizing reporting data across teams.',
        'Implemented row-level security in Snowflake using role-based access for tenant isolation and built a permission sync pipeline using SQS, Lambda, and AWS SAM, replacing a fully manual access control process.',
        'Built a customer-facing insights platform using Next.js with JWT-authenticated Sigma dashboards, a transaction explorer powered by a composable query builder, and an event-driven alerting system, reducing time-to-insight from days to minutes.',
        'Led architecture and execution across data and insights systems, owning delivery end-to-end and ensuring system reliability and scalability.',
      ],
    },
    {
      title: 'Senior Software Developer',
      duration: 'Feb 2022 - Nov 2024',
      organization: 'Arctic AI, Remote',
      roles: [
        'Built an enterprise data platform on Azure (Databricks, Data Factory, Data Lake), reducing operational costs by 40% and enabling scalable analytics across multiple client products.',
        'Developed RAG-based AI systems using LangChain and LLMs, improving retrieval accuracy by 25% across production workflows.',
        'Implemented vector search infrastructure for semantic retrieval, improving response quality and reducing token usage.',
        'Scaled data pipelines using Azure Databricks to support multi-source ingestion and advanced analytics, improving efficiency by 20%.',
        'Led a full platform redesign using Next.js, increasing web traffic by 40% and improving user engagement.',
        'Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment reliability and speed by 30%.',
        'Built a financial data processing tool on GCP that reduced manual workflows by over 60%.',
        'Mentored engineers and contributed to system design and technical direction across projects.',
      ],
    },
    {
      title: 'Web Application Developer',
      duration: 'Aug 2021 - Oct 2021',
      organization: 'Divergence Neuro, Remote',
      roles: [
        'Collaborated with the backend team to develop a client-facing web application using React JS and AWS, integrating API endpoints to deliver a seamless user experience.',
        "Implemented Progressive Web App (PWA) compliance and integrated service workers to ensure the application's robustness and offline capabilities.",
        'Developed a customized solution to integrate QR scanner and Bluetooth functionality using React JS, enabling seamless connection to Neurosity devices for users.',
      ],
    },
    {
      title: 'Software Developer',
      duration: 'Jun 2021 - Aug 2021',
      organization: 'Neo Financial, Remote',
      roles: [
        'Developed a system for designing and generating credit statements for printing at Symcor, using Node, React, AWS, Terraform, Typescript, GraphQL, MongoDB, and Jest.',
        'Optimized the bank micro-service to provide a smooth and efficient payment gateway experience via MasterCard integration to reduce latency and declining transactions.',
        'Increased transaction processing efficiency by 15% by engineering the decider microservice to send declined transactions to a third-party API (Fraud Net) and effectively store responses.',
      ],
    },
    {
      title: 'Data Scientist (M.Eng Research)',
      duration: 'Sept 2019 - Dec 2020',
      organization: 'University of Waterloo, Waterloo, ON',
      roles: [
        'Built image classification models using transfer learning (Inception-ResNet-V2, EfficientNet), achieving up to 92.18% accuracy across 120 classes.',
        'Improved pedestrian detection performance by over 20% by re-annotating datasets and training Faster R-CNN models with optimized data pipelines.',
      ],
    },
    {
      title: 'Software Developer',
      duration: 'Jan 2018 - Jul 2019',
      organization: 'Finklassic, Lagos, Nigeria',
      roles: [
        'Increased company revenue by 30% by developing an algorithm for optimized text message dispatch to targeted audiences.',
        'Implemented robust documentation and testing procedures, including unit and integrated test cases, to ensure high product quality across all projects.',
        'Designed a survey administrator tool for accurate user feedback retrieval and tracking.',
      ],
    },
  ];
};
const selectedSection = (state = section()[0], action) => {
  if (action.type === 'SECTION_SELECTED') {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  section,
  selectedSection,
  projects,
  certs,
  experiences,
});
