import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../styles/pages/App.sass'
import { Card } from '../components/Card'
import { PostCard } from '../components/PostCard'
import { ProjectCard } from '../components/ProjectCard'
import {posts} from '../data/Posts'
import {works} from '../data/Works'
import {notes} from '../data/Notes'

function App() {
  return (
    <>
      <div className="main">
        <div className="grid">
          <div className="item">
            <h1 className="main__title">Hola, soy Carlos Brignardello Desarrollador Front End</h1>
            <p className="main__text">Este es mi portafolio digital, en él encontraras todos los proyectos en los que he trabajado además de las habilidades y tecnologías que domino.</p>
            <p className="main__text">También tengo disponibles una serie de publicaciones y los apuntes de desarrollo que he ido tomando en mi continuo aprendizaje.</p>
            <p className="main__text">Finalmente, si deseas comunicarte conmigo existe la sección de contacto con enlace directo a mis redes sociales profesionales como son LinkedIn y GitHub.</p>
          </div>
        </div>
      </div>

      <section className="posts section">
        <h2 className="section-title">últimas publicaciones</h2>
        <p>En esta sección encontraras el último contenido que he ido publicando acerca de tecnología y sobre temas de mi interés.</p>
        <PostCard context={posts[0].contextData} title={posts[0].titleData} description={posts[0].descriptionData} date={posts[0].dateData} image={posts[0].image} route="/portafolio/posts"/>
        <PostCard context={posts[1].contextData} title={posts[1].titleData} description={posts[1].descriptionData} date={posts[1].dateData} image={posts[1].image} route="/portafolio/posts"/>
        <div className="btn">
          <Link to="/portafolio/posts">ir a publicaciones</Link>
        </div>
      </section>

      <section className="works section">
        <h2 className="section-title">Trabajos</h2>
        <p>En esta sección puedes ver todos los proyectos en los que he trabajado. Dentro encontraras enlaces al repositorio y al sitio donde esta publicado cada proyecto.</p>
        <div className="grid">
          <Link className="Link" to="/portafolio/works">
            <ProjectCard title={works[0].title} techs={works[0].techs} image={works[0].img}/>
          </Link>
          <Link className="Link" to="/portafolio/works">
            <ProjectCard title={works[1].title} techs={works[1].techs} image={works[1].img}/>
          </Link>
        </div>
        <div className="btn">
          <Link to="/portafolio/works">ir a trabajos</Link>
        </div>
      </section>

      <section className="skills section">
        <h2 className="section-title">Skills</h2>
        <p>Si eres un reclutador y estas interesado en mi perfil puedes ver las skills relacionadas que poseo.</p>
        <Link to="/portafolio/skills">
          <div className="skills__image"></div>
        </Link>
        <div className="btn">
          <Link to="/portafolio/skills">ir a skills</Link>
        </div>
      </section>

      <section className="notes section">
        <h2 className="section-title">Apuntes</h2>
        <p>Uno de mis intereses más grandes es estudiar y aprender nuevas tecnologías. Es por eso que documento mi proceso de aprendizaje en cada nueva herramienta que aprendo. Además, está disponible para lo comunidad, por lo que siempre puede serle útil a alguien.</p>
        <div className="grid">
          <Link className="Link" to="/portafolio/notes">
            <Card title={notes[0].title} type="Notes" description={notes[0].description} image={notes[0].img}/>

          </Link>
          <Link className="Link" to="/portafolio/notes">
            <Card title={notes[1].title} type="Notes" description={notes[1].description} image={notes[1].img}/>
          </Link>
        </div>
        <div className="btn">
          <Link to="/portafolio/notes">ir a apuntes</Link>
        </div>
      </section>
    </>
  );
}

export default App;
