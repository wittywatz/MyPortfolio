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
      title: 'Full Stack Developer',
      duration: 'Feb 2022 - Present',
      organization: 'Filament AI, Toronto, Ontario, Canada',
      roles: [
        'Expertly designed and developed ETL pipelines utilizing Azure technologies including Data Factory, Functions, SQL Database, and Blob Storage, enabling efficient data transformation and migration for clients from multiple sources.',
        'Delivered workshops to educate clients on the Azure platform, providing guidance, documentation, and hands-on assistance to successfully spin up their staging and production environments.',
        "Built a cutting-edge financial service tool utilizing Node Js, React JS, Flask, Machine Learning, and GCP to meet client's needs for data extraction and deal sheet generation.",
        'Provided mentorship and guidance to interns, fostering their professional growth and helping them to achieve successful project deliverables.',
        'Created a customized API using Node Js, Express JS, EBM, and GCP to support client requirements for BRIE chatbot functionality.',
        'Designed and implemented a database schema, developed API endpoints, and a client-facing portal using React JS, Knex JS, MySql, and Express JS for Rising Academy.',
        'Created an optimized, automated python script using Python, Numpy, Pandas, tabula-py, and Camelot-py to streamline data processing and table extraction from pdfs, resulting in significant time and cost savings for clients.',
      ],
    },
    {
      title: 'Web Application Developer',
      duration: 'Aug 2021 - Oct 2021',
      organization: 'Divergence Neuro, Toronto, Ontario, Canada',
      roles: [
        'Collaborated with the backend team to develop a client-facing web application using React JS and AWS,integrating API endpoints to deliver a seamless user experience.',
        "Implemented Progressive Web App (PWA) compliance and integrated service workers to ensure the application's robustness and offline capabilities.",
        'Developed a customized solution to integrate QR scanner and Bluetooth functionality using React JS, enabling seamless connection to Neurosity devices for users.',
      ],
    },
    {
      title: 'Software Developer',
      duration: 'Jun 2021 - Aug 2021',
      organization: 'Neo Financial, Calgary, Alberta, Canada',
      roles: [
        'Developed and implemented complex logic utilizing Node, React, AWS, Terraform, Typescript, GraphQL, MongoDB, and Jest to design and generate credit statements for printing at Symcor.',
        'Optimized the bank microservice to provide a smooth and efficient payment gateway experience via MasterCard integration.',
        'Engineered the decider microservice to send declined transactions to a third-party API (Fraud Net) and effectively store responses, utilizing Node, AWS, Typescript, Terraform, MongoDB, and Jest.',
      ],
    },
    {
      title: 'Data Scientist (Masters)',
      duration: 'Sep 2019 - Dec 2020',
      organization: 'University of Waterloo, Waterloo, Ontario, Canada',
      roles: [
        'Developed and implemented a dog breed classification model using transfer learning on fine-tuned Inception-Resnet-V2 and Efficientnet-80 architectures, achieving an accuracy of 92.18% and 85.38% respectively on 120 dog breeds',
        'Proposed and implemented new annotations for a subset of the INRIA person dataset using Label-Img software, resulting in a significant improvement in detection performance by over 20%.',
        'Utilized data augmentation techniques in Python to train Faster RCNN models on pedestrian images, achieving an average performance of 89.6% and 86.0% using Inception-Resnet-V2 and Resnet-50 as backbone architectures respectively.',
      ],
    },
    {
      title: 'Software Developer',
      duration: 'Jan 2018 - Jul 2019',
      organization: 'Finklassic, Lagos State, Nigeria',
      roles: [
        'Developed an algorithm and automated script to optimize the dispatch of text messages to targeted audiences, resulting in a 30% increase in company revenue.',
        'Implemented robust documentation and testing procedures, including unit and integrated test cases, to ensure high product quality across all projects.',
        'Designed the logic flow of a survey administrator tool that processed, collated, and tracked user feedback retrieved via text with a high level of accuracy',
      ],
    },
    {
      title: 'Graduate Assistant',
      duration: 'April 2018 - Mar 2019',
      organization: 'University of Ilorin, Ilorin, Kwara State, Nigeria',
      roles: [
        'Lead discussion sections, tutorials, or laboratory sections for 200, 300 and 400 level students',
        'Evaluated and graded laboratory exams and assignments in compliance to the provided marking scheme.',
        'Developed marking schemes and answer keys for student assignments.',
        'Secretary at final Year Defence accessed students and graded them based on performance.',
        'Took meeting minutes at departmental meetings by using MS Word to account for all issues discussed.',
      ],
    },
    {
      title: 'Student Intern',
      duration: 'Apr 2016 - Oct 2016',
      organization:
        'Alcon Nigeria Limited & Shell Workshop, Warri, Delta State, Nigeria.',
      roles: [
        'Suggested a series-parallel battery connection using knowledge of electronics to aid boost the current required to drive the CAT engine to restore power to Brotobor community after a power outage of over 2 weeks',
        'Calibrated Pressure and Temperature gauges to be used at the Forcados Yokri Integrated Project (FYIP) using a dead weight tester and dry block calibrator.',
        'Troubleshooted and repaired CAT generators using the CAT tester and troubleshooting guide.',
        'Installed and positioned cable trays, switch gears, lighting fixtures, HVACs, and air conditioners.',
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
