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
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/works">Trabajos</Link>
          </li>
          <li>
          <Link to="/skills">Skills</Link>
          </li>
          <li>
          <Link to="/notes">Apuntes</Link>
          </li>
          <li>
          <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}