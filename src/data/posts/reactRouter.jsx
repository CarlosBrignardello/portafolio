import React from 'react'
import '../../styles/pages/postsStyles.sass'

export const reactRouter = () => {

  const code = `
  import React from 'react'
  import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { Navbar } from '../components/Navbar';
  import { Works } from '../pages/Works';
  import { Skills } from '../pages/Skills';
  import { Notes } from '../pages/Notes';
  import { Contact } from '../pages/Contact';
  import { App } from '../pages/App';

  export const AppRouter = () => {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/works" component={ Works } />
            <Route exact path="/skills" component={ Skills } />
            <Route exact path="/notes" component={ Notes } />
            <Route exact path="/contact" component={ Contact } />
            <Route path="/" component={ App } />
          </Switch>
        </div>
      </Router>
    )
  }
  `
  
  const code2 = `
  import React from 'react'
  import { Link, NavLink } from 'react-router-dom'
  import './styles/Navbar.sass'

  export const Navbar = () => {
    return (
      <header>
        <nav>
          <div className="img_container">
            {/* <img src="" alt=""/> */}
            <h1>Carlos Brignardello</h1>
          </div>
          <ul>

            <li>
              <Link to="/">Inicio</Link>
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
  `

  return (
    <>
      <div className="post__background" style={{backgroundImage: `url(https://repository-images.githubusercontent.com/19872456/05dca500-f010-11e9-9588-a96554294e4e)`}}></div>
      <div className="post">
        <h1 className="post__title">Guía esencial para subir proyectos a git</h1>
        <p className="post__description">React es una herramienta sumamente poderosa, sin embargo, si lo que necesitas es generar una SPA rápidamente, React Router puede serte de mucha utilidad.</p>

        <h3>Agregar React Router a React</h3>
        <p>Primero debemos instalar React Router mediante npm:</p>
        <pre><code class='language-shell' lang='shell'>
          npm install react-router-dom
        </code></pre>

        <h3>Directorio de rutas</h3>
        <p>Para utilizar React Router es conveniente generar un directorio donde guardar las rutas, como por ejemplo: " /src/routes/AppRoutes.jsx" y en su interior generar el componente que controle la lógica de las mismas, para ello generamos el siguiente archivo:</p>
        <pre><code class='language-shell' lang='shell'>
        {code}
        </code></pre>

        <blockquote><p>Es archivo trae varios componentes provenientes de la librería que instalamos y nos permite declarar rutas que cargan distintos componentes en su interior, como se puede ver con el componente "Route". "Switch" Por su parte aglomera varias rutas y "Router" es el componente padre en donde cualquier ruta debe contenerse.</p>
        </blockquote>

      <h3>Redireccionar mediante Link</h3>
      <p>Una vez generadas las rutas podremos seleccionar las rutas en el navegador y ver como se cargan los distintos componentes. Pero surge la necesidad de redireccionar a las distintas páginas mediante un botón o una cierta acción. Para ello comparto el siguiente componente, se trata de un navbar(El mismo que aparece declarado en el código de arriba) que permite redireccionar a cada ruta.</p>
      <pre><code class='language-shell' lang='shell'>
      {code2}
      </code></pre>
    </div>
  </>
  )
}
