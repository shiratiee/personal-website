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
      <p className="my-blurb">
      I'm a developer based in New York City working mainly with JavaScript. 
      I have expertise throughout the tech stack but I am most excited about the front-end. 
      Currently, I'm leveling up my CSS/Sass skills and am interested in learning new technologies like Mobile Development, Python and C#.
      When I'm not coding, I love being in the outdoors and using makeup as an art form!
      </p>
    </div>
  );
}