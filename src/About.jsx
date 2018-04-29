import React from 'react';
import './App.css';
import Me from './images/Me.png'

export default function About() {
  return (
    <div className= "title" >
    <h1 style={{ textDecoration: 'underline' }}> About Me </h1>
    <img 
     className="my-image"
     src={Me}
     alt="Me"
     />
      <h2 className="my-blurb">
        I'm a developer based in New York City working mainly with JavaScript. 
        I have expertise throughout the tech stack but I am most excited about the front-end. 
        Currently, I'm leveling up my CSS/Sass skills and am interested in learning new technologies including Mobile Development, Python and C#.
        <br/>
        Aside from writing coding, I love art & music. I love being in the outdoors and gaming on my phone! 
      </h2>
    </div>
  );
}