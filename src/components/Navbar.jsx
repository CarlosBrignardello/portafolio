import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/components/Navbar.sass'

export const Navbar = () => {
  return (
    <header>
      <nav>
        <h1 className="nav__logo">Carlos Brignardello </h1>
        <ul>
          <li>
            <Link to="/portafolio/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio/posts">Posts</Link>
          </li>
          <li>
            <Link to="/portafolio/works">Trabajos</Link>
          </li>
          <li>
          <Link to="/portafolio/skills">Skills</Link>
          </li>
          <li>
          <Link to="/portafolio/notes">Apuntes</Link>
          </li>
          <li>
          <Link to="/portafolio/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}