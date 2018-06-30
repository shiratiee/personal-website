import React from 'react';
import './App.css';
import me2 from './images/me2.png'

export default function About() {
  return (
    <div className= "title" >
    <h1 style={{ textDecoration: 'underline' }}> About Me </h1>
    <img 
     className="my-image"
     src={me2}
     alt="Me"
     />
      <h2 className="my-blurb">
        I'm a developer based in New York City working mainly with JavaScript. 
        I have skills throughout the tech stack but I am most excited about the front-end. 
        Currently, I'm leveling up my CSS/Sass skills and am interested in learning new technologies including Python and Apollo/GraphQL.
        <br/>
      </h2>
    </div>
  );
}