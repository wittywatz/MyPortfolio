import React from 'react';

const Certifications = () => {
  return (
    <div className="pt-3">
      <div className="certts mb-4">
        <div className="certts-title" style={{ color: '#42f55d' }}>
          Coursera
        </div>
        <ul>
          <li>Programming for Everybody (Getting Started with Python)</li>
          <li>Python Data Structures</li>
          <li>Using Python to Access Web Data</li>
          <li>IBM Exploratory data analysis for Machine Learning.</li>
        </ul>
      </div>
      <div className="certts mb-4">
        <div className="certts-title" style={{ color: '#42f55d' }}>
          DataCamp
        </div>

        <ul>
          <li>Introduction to Python,</li>
          <li>Intermediate Python,</li>
          <li>Data Manipulation with pandas,</li>
          <li>Python Data Science Toolbox (Part 1 & 2),</li>
          <li>Introduction to Data Visualization with Matplotlib.</li>
        </ul>
      </div>
      <div className="certts mb-4">
        <div className="certts-title" style={{ color: '#42f55d' }}>
          LinkedIn Learning
        </div>
        <ul>
          <li>Applied Machine Learning: Foundations,</li>
          <li>React.js Essential Training,</li>
          <li>React.js: Building an Interface</li>
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
// style={{ color: '#42f55d' }}
