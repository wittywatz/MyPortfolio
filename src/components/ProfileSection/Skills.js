import React from 'react';
const Skills = () => {
  const skills = [
    { language: 'Python', value: '93', percentage: '93%' },
    { language: 'Javascript', value: '85', percentage: '85%' },
    { language: 'HTML', value: '83', percentage: '83%' },
    { language: 'CSS', value: '80', percentage: '80%' },
    { language: 'TypeScript', value: '70', percentage: '70%' },
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
                style={{ width: skill.percentage, backgroundColor: '#42f55d' }}
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
      <h5 style={{ color: '#14df33' }}>PROGRAMMING</h5>
      <div className="row pb-4">{renderContent}</div>
      <h5 style={{ color: '#14df33' }}>STACKS</h5>
      <p>
        <span style={{ color: '#42f55d' }}>Webdevelopment:</span>
        <em>
          {' '}
          React JS, Redux, Express JS, Node JS, Bootstrap, Materialize CSS,
          Semantic UI, jQuery.
        </em>
      </p>
      <p>
        <span style={{ color: '#42f55d' }}>Data Analysis:</span>
        <em> NumPy, Pandas, Scikit-learn, Matplotlib, TensorFlow, Keras.</em>
      </p>
      <p>
        <span style={{ color: '#42f55d' }}>Database:</span>
        <em> MySQL, PostgreSQL, MongoDB.</em>
      </p>
      <p>
        <span style={{ color: '#42f55d' }}>Others:</span>
        <em> Git, Linux, Heroku, Agile (Scrum).</em>
      </p>
    </div>
  );
};

export default Skills;
