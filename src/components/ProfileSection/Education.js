import React from 'react';

const Education = () => {
  const education = [
    {
      course: 'Electrical and Computer Engineering',
      degree: 'M.Eng ',
      school: 'University of Waterloo, Ontario, Canada',
      grade: 'Distinction',
      duration: 'December 2020',
    },
    {
      course: 'Electrical and Electronics Engineering',
      degree: 'B.Eng ',
      school: 'Federal University Oye-Ekiti, Ekiti-State (FUOYE), Nigeria ',
      grade: 'First Class Honors',
      duration: 'January 2018',
    },
  ];

  return (
    <div className="pt-3">
      {education.map((edu, i) => {
        return (
          <div key={i} className="education p-3 m-4">
            <div className="degree-section">
              <h5>
                <span style={{ color: '#00B4D8' }}>{edu.degree}</span>
                {edu.course}
              </h5>
              <h5 style={{ color: '#00B4D8' }}>{edu.duration}</h5>
            </div>

            <h6>{edu.school}</h6>
            {edu.grade && (
              <p>
                <span style={{ color: '#00B4D8' }}>Grade: </span>
                {edu.grade}{' '}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Education;
