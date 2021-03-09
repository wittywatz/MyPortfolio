import { combineReducers } from 'redux';

const section = () => {
  return [
    { title: 'education' },
    { title: 'experience' },
    { title: 'skills' },
    { title: 'certification' },
    { title: 'awards' },
  ];
};
const projects = () => {
  return [
    {
      name: 'Crown Enterprise',
      liveApp: 'https://crown-enterprise.herokuapp.com',
      videoDemo: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
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
      name: 'Crown Enterprise',
      liveApp: 'https://crown-enterprise.herokuapp.com',
      videoDemo: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
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
      name: 'Crown Enterprise',
      liveApp: 'https://crown-enterprise.herokuapp.com',
      videoDemo: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
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
      name: 'Crown Enterprise',
      liveApp: 'https://crown-enterprise.herokuapp.com',
      videoDemo: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
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
  ];
};

const selectedSection = (state = section()[2], action) => {
  if (action.type === 'SECTION_SELECTED') {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  section,
  selectedSection,
  projects,
});
