import React from 'react';
import './App.css';
import Me from './images/Me.png'

export default function About() {
  return (

    <div>
    <img 
     className="my-image"
     src={Me}
     alt="Me"/>
      <p>
      After delving into the clinical aspect of medicine, I became inspired by how the technical side is revolutionizing healthcare. This led me to the world of computer programming where I realized that I love problem solving. I can make a substantial impact on people's lives by building software that solves real-life problems. 
      I am a full stack engineer with a focus on the front end, and I am eager to continue learning more technologies in the future.
      </p>
    </div>
  );
}