import React from 'react';
import './App.css';
import github from './images/github.png'
import linkedin from './images/linkedin.png'

export default function Contact() {
  return (

    <div>
      <h4>
      Want to get in touch? Email me at shiratiee@gmail.com
      </h4>
      <img src={github}/>
      <img src={linkedin}/>
    </div>
  );
}
