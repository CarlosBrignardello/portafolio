import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/pages/Contact.sass'
import IconCV from '../assets/icons/pdf.svg'
import IconGitHub from '../assets/icons/github.svg'
import IconLinkedin from '../assets/icons/linkedin.png'

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container resume">
        <h2 className="section-title">Resumen profesional</h2>
        <p>Soy una persona con grandes habilidades comunicativas, trabajo colaborativo, planificado, perseverante y muy organizado. Me apasiona mucho enseñar, disfruto los nuevos desafíos en especial que me lleven a aprender nuevas herramientas y tecnologías. Tengo profundo interés en seguir desarrollando nuevas habilidades y profundizando en las que ya poseo superándome día a día.</p>
      </div>
      <div className="contact-container links">
        <div className="contact-container__image"></div>

        <div className="contact-container__buttons">
          <img className="buttons__image" src="https://i.imgur.com/aMBpVw7.png" />
          <div className="btn">
            <a href="https://www.linkedin.com/in/carlos-alberto-brignardello-cerda-360a12170/">linkedin</a>
          </div>
        </div>
        <div className="contact-container__buttons">
          <img className="buttons__image" src={IconGitHub} />
          <div className="btn">
            <a href="https://github.com/CarlosBrignardello">GitHub</a>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <h2 className="section-title">Información personal</h2>
        <div className="grid">
          <div className="item">
            <p><strong>Fecha de nacimiento</strong>: 11/09/1998 </p>
          </div>
          <div className="item">
            <p><strong>Ubicación</strong>: V Región, Valparaíso</p>
          </div>
          <div className="item">
            <p><strong>Número</strong>: +56 9 58039062</p>
          </div>
          <div className="item">
            <p><strong>Correo</strong>: carlos.alb.brig@gmail.com</p>
          </div>
          <div className="item">
            <p><strong>Github</strong>: CarlosBrignardello</p>
          </div>
        </div>
      </div>
    </div>
  )
}
