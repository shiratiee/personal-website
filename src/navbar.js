import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {

    return (
      <div>
      <div className ="my-name">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>Shiratie Prodhan</h1>
      </Link>
    </div>
        <div className="nav">
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <h3 className= "nav-links">About</h3>
          </Link>
          <Link to="/skills" style={{ textDecoration: 'none' }}>
            <h3 className= "nav-links">Skills</h3>
          </Link>
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <h3 className= "nav-links">Projects</h3>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
          <h3 className="nav-links">Contact</h3>
        </Link>
        </div>

      </div>
    )
}