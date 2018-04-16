import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {

    return (
      <div>
      <div>
      <Link to="/">
        <h2>Shiratie Prodhan</h2>
      </Link>
    </div>
        <div className="nav">
          <Link to="/about">
            <h4>About</h4>
          </Link>
          <Link to="/skills">
            <h4>Skills</h4>
          </Link>
          <Link to="/projects">
            <h4>Projects</h4>
          </Link>
          <Link to="/contact">
          <h4>Contact</h4>
        </Link>
        </div>

      </div>
    )
}