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
            <NavLink to="/portafolio/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/portafolio/works">Trabajos</NavLink>
          </li>
          <li>
          <NavLink to="/portafolio/skills">Skills</NavLink>
          </li>
          <li>
          <NavLink to="/portafolio/notes">Apuntes</NavLink>
          </li>
          <li>
          <NavLink to="/portafolio/contact">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}