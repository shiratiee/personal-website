import React from 'react';

export default function Skills() {
  return (
    <div className="title">
      <h1 style={{ textDecoration: 'underline' }}> Skills </h1>
      <h3 style={{ textDecoration: 'underline' }}>Front End</h3>
      <ul className="list">
        <li>JavaScript(ES5/ES6)</li>
        <li>React</li>
        <li>Redux</li>
        <li>React-Native</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Flexbox</li>
        <li>AJAX</li>
      </ul>
      <h3 style={{ textDecoration: 'underline' }}>Back End</h3>
      <ul className="list">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Passport.js</li>
        <li>OAuth</li>
      </ul>
      <h3 style={{ textDecoration: 'underline' }}>Databases</h3>
      <ul className="list">
      <li>SQL</li>
      <li>Sequelize ORM</li>
      <li>PostgreSQL</li>
      <li>Firebase</li>
      </ul>
      <h3 style={{ textDecoration: 'underline' }}>Other</h3>
      <ul className="list">
        <li>Mocha</li>
        <li>Chai</li>
        <li>Postman</li>
        <li>Webpack</li>
        <li>Git/Github</li>
        <li>Agile Workflow</li>
        <li>RESTful APIs</li>
        <li>Heroku</li> 
      </ul>
    </div>
  );
}