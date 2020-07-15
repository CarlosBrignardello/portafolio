import React from 'react'
import {ProjectCard} from '../components/ProjectCard'
import { works } from '../data/Works'
import '../styles/pages/Works.sass'

export const Works = () => {

  return (
    <div className="works-container">
      <h2 className="section-title">works</h2>
      <p>En esta sección encontraras todos los proyectos en los que he trabajado. Puedes ver el repositorio del proyecto por si te interesa el código o ir directamente a ver la página en acción.</p>
      <hr/>

      <div className="grid">
        {
          works.map( (data) => {
            return (
            <div className="Link">
              <ProjectCard title={data.title} techs={data.techs} image={data.img}/>
              <div className="buttons">
                <a className="button-work" href={data.repo} target="_blank">Ir al repositorio</a>
                <a className="button-work" href={data.url} target="_blank">Ir al Sitio</a>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}
