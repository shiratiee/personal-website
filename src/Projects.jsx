import React from 'react';
import ecommerce from './images/ecommerce.png';
import seaadventure from './images/seaadventure.png';
import whiskr from './images/whiskr.png';
import gol from './images/gol.png';

export default function Portfolio() {
  return (
    <div className= "title">
    <h1 style={{ textDecoration: 'underline' }}> Portfolio </h1>
      <ul className="portfolio">
        <li>
          <h3 style={{ textDecoration: 'underline' }}>Whiskr</h3>
          <p className="description">
            A tinder-like progressive web app. You can swipe left/right on pets you might
            want to adopt. Built with React, Redux, Express, Sequelize, OAuth, PetFinder API
          </p>
          <img
            className="portfolio-image"
            src={whiskr}
            alt="whiskr"
          />
          <div className="buttons">
            <button>
              <a href="https://whiskrapp.herokuapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              >
                Demo
              </a>
            </button>
            <button>
              <a
                href="https://github.com/Whiskr/whiskr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </button>
            <button>
              <a
                href="https://www.youtube.com/watch?v=qW5-C7skuU0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Presentation
              </a>
            </button>
          </div>
        </li>
        <li>
          <h3 style={{ textDecoration: 'underline' }}>Sea Adventure</h3>
          <p className="description">
            A platform game inspired by Mario Kart. You are a pokeball in the sea and your
            goal is to catch all the pokemon in a specific time frame.
            Built using Phaser.js, HTML5 and JavaScript

          </p>
          <img
            className="portfolio-image"
            src={seaadventure}
            alt="seaadventure"
          />
          <div className="buttons">
          <button>
              <a href="https://boiling-hamlet-25801.herokuapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              >
                Demo
              </a>
            <button>
              <a
                href="https://github.com/shiratiee/Stackathon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </button>
            <button>
            <a
              href="https://www.youtube.com/watch?v=x9gQXCwP9Ks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Presentation
            </a>
          </button>
          </div>
        </li>
        <li>
          <h3 style={{ textDecoration: 'underline' }}>Dragon Adoption</h3>
          <p className="description">
            An e-commerce site that allows clients to buy/adopt mystical dragons. Dragons can be filtered by color.
            Built using React/Redux, Sequelize, Express, Node.js, CSS3
          </p>
          <img className="portfolio-image" src={ecommerce} alt="ecommerce" />
          <div className="buttons">
            <button>
              <a href="https://fathomless-dawn-86558.herokuapp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                Demo
              </a>
            </button>
            <button>
              <a
                href="https://github.com/shiratiee/jars-shopper"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </button>
          </div>
        </li>
        <li>
        <h3 style={{ textDecoration: 'underline' }}>Game of Life</h3>
        <p className="description">
          Conway's game of life allows a user to create an initial state and watch the creation of patterns based on that state. Built using JavaScript and CSS3.
        </p>
        <img className="portfolio-image" src={gol} alt="gol" />
        <div className="buttons">
          <button>
            <a href="https://shiratiee.github.io/gameoflife/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </button>
          <button>
            <a
              href="https://github.com/shiratiee/gameoflife"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </button>
        </div>
      </li>
    
      </ul>
    </div>
  );
}