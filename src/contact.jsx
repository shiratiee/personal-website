import React from 'react';
import './App.css';
import github from './images/github.png'
import linkedin from './images/linkedin.png'

export default function Contact() {
  return (

    <div>
      <h4 className="contact">
      Want to get in touch? Email me at shiratiee@gmail.com
      </h4>
      <a href="https://github.com/">
      <img src={github} alt="github" />
    </a>
    <a href="https://www.linkedin.com/in/shiratie-prodhan/">
    <img src={linkedin} alt="linkedin" />
  </a>
    </div>
  );
}
