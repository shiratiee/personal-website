import React from 'react';
import ecommerce from './images/ecommerce.png';
import seaadventure from './images/seaadventure.png';
import whiskr from './images/whiskr.png';

export default function Portfolio() {
  return (
    <div>
      <ul className="portfolio">
        <li>
          <h3>Whiskr</h3>
          <p className="description">
            A tinder-like progressive web app. You can swipe left/right on pets you might
            want to adopt. However, since pets cannot swipe back, a shelter will gauge whether
            the pet is the right fit for you.
            Built with React/Redux/Express/Sequelize/PetFinder API
          </p>
          <img
            className="portfolio-image"
            src={whiskr}
            alt="whiskr"
          />
          <div className="buttons">
            <button>
              <a href="https://whiskrapp.herokuapp.com/" target="_blank">
                Demo
              </a>
            </button>
            <button>
              <a
                href="https://github.com/Whiskr/whiskr"
                target="_blank"
              >
                Code
              </a>
            </button>
          </div>
        </li>
        <li>
          <h3>Sea Adventure</h3>
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
              <a
                href="https://www.youtube.com/watch?v=x9gQXCwP9Ks"
                target="_blank"
              >
                Demo
              </a>
            </button>
            <button>
              <a
                href="https://github.com/shiratiee/Stackathon"
                target="_blank"
              >
                Code
              </a>
            </button>
          </div>
        </li>
        <li>
          <h3>Dragon Adoption</h3>
          <p className="description">
            An e-commerce site selling dragons.
            Built using React/Redux, Sequelize, Express, Node
          </p>
          <img className="portfolio-image" src={ecommerce} alt="ecommerce" />
          <div className="buttons">
            <button>
              <a href="https://fathomless-dawn-86558.herokuapp.com/" target="_blank">
                Demo
              </a>
            </button>
            <button>
              <a
                href="https://github.com/shiratiee/jars-shopper"
                target="_blank"
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