import React from 'react';
const Skills = () => {
  const skills = [
    { language: 'Python', value: '93', percentage: '93%' },
    { language: 'Javascript', value: '85', percentage: '85%' },
    { language: 'HTML', value: '83', percentage: '83%' },
    { language: 'CSS', value: '80', percentage: '80%' },
    { language: 'TypeScript', value: '83', percentage: '83%' },
    { language: 'Matlab', value: '84', percentage: '84%' },
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
        <span style={{ color: '#00B4D8' }}>Web development:</span>
        <em>
          {' '}
          React JS, Redux, Express JS, Node JS, Bootstrap, Materialize CSS,
          Material UI, Tailwind CSS, Chakra UI, Semantic UI, GraphQL, jQuery.
        </em>
      </p>
      <p>
        <span style={{ color: '#00B4D8' }}>Data Analysis:</span>
        <em> NumPy, Pandas, Scikit-learn, Matplotlib, TensorFlow, Keras.</em>
      </p>
      <p>
        <span style={{ color: '#00B4D8' }}>Database:</span>
        <em> MySQL, PostgreSQL, MongoDB.</em>
      </p>
      <p>
        <span style={{ color: '#00B4D8' }}>Cloud:</span>
        <em> AWS, GCP, Azure.</em>
      </p>
      <p>
        <span style={{ color: '#00B4D8' }}>Others:</span>
        <em> Git, Linux, Heroku, Agile (Scrum).</em>
      </p>
    </div>
  );
};

export default Skills;
