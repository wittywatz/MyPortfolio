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
    }, {
      name: 'Natours',
      liveApp: 'https://natours-watson.herokuapp.com',
      videoDemo: 'https://youtu.be/yUF2wyzE8YA',
      github: 'https://github.com/wittywatz/natours-project',
      stack:
        'Express, MongoDB, Mapbox, Pug, Redux, CSS, Stripe, Multer, Cors.',
      description: [
        'Created a server side rendered e-commerce web application using EXPRESS JS, PUG TEMPLATE, CSS, JWT, MongoDB etc.',
        'Integrated STRIPE API to handle payment on both the front and backend.',
        'Deployed application to heroku'
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
    }, {
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
      title: 'Software Developer',
      duration: 'Jun 2021 - Aug 2021',
      organization: 'Neo Financial, Calgary, Alberta, Canada',
      roles: [
        'Implemented logic to create credit statements and also send to Symcor for printing using Node, React, AWS, Terraform, Typescript, GraphQL, MongoDB, Jest',
        'Implemented code to send declined transactions to third-party API (Fraud Net) and store the response using Node, AWS, Typescript, Terraform, MongoDB, Jest',
      ],
    },
    {
      title: "Data Scientist",
      duration: 'Sep 2019 - Dec 2020',
      organization: 'University of Waterloo, Waterloo, Ontario, Canada',
      roles: [
        'Created a dog breed classification model with Python using transfer learning on fine-tuned Inception-Resnet-V2 and Efficientnet-80 architectures and obtained an accuracy of 92.18% and 85.38% respectively on 120 dog breeds which surpassed existing literatures.',
        'Created and proposed new annotations for a subset of INRIA person dataset using Label-Img Software to improve detection performance by over 20%.',
        'Performed Data Augmentation using Python and trained Faster RCNN using Inception-Resnet-V2 and Resnet-50 as backbone architecture on pedestrian images obtaining an average performance of 89.6% and 86.0% respectively.',
        'Developed part of the Teachers without Frontiers (TWF) Project deliverables by employing project management methodologies on the Science Curriculum for Grade VI and Grade VII to improve education access in remote areas of Pakistan by over 30%',
      ],
    },
    {
      title: 'Graduate Assistant',
      duration: 'May 2018 - Mar 2019',
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
