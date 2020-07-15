import React from 'react'
import '../styles/pages/Skills.sass'

export const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="section-title">skills</h2>
      <p>Si te interesa mi perfil aquí puedes ver las skills que poseo. Para garantizar esta información puedes pasar por los trabajos, las notas y las publicaciones que están disponibles en el sitio.</p>
      <hr/>

    <h3>Front End</h3>
    <div className="grid">
      <div className="item">
        <span>HTML</span>
      </div>
      <div className="item">
        <span>CSS</span>
      </div>
      <div className="item">
        <span>JavaScript</span>
      </div>
      <div className="item">
        <span>ES6</span>
      </div>
      <div className="item">
        <span>Vue</span>
      </div>
      <div className="item">
        <span>React</span>
      </div>
      <div className="item">
        <span>Bootstrap</span>
      </div>
      <div className="item">
        <span>JQuery</span>
      </div>
      <div className="item">
        <span>Jest</span>
      </div>
    </div>

    <h3>Back End</h3>
    <div className="grid">
      <div className="item">
        <span>MySQL</span>
      </div>
      <div className="item">
        <span>Node</span>
      </div>
    </div>

    <h3>Pre Procesadores</h3>
    <div className="grid">
      <div className="item">
        <span>Pug</span>
      </div>
      <div className="item">
        <span>Less</span>
      </div>
      <div className="item">
        <span>Sass</span>
      </div>
    </div>

    <h3>Herramientas adicionales</h3>
    <div className="grid">
      <div className="item">
        <span>Git</span>
      </div>
      <div className="item">
        <span>GitHub</span>
      </div>
      <div className="item">
        <span>Linux</span>
      </div>
      <div className="item">
        <span>Excel</span>
      </div>
    </div>

    <h3>Lenguajes de programación</h3>
    <div className="grid">
      <div className="item">
        <span>Java</span>
      </div>
      <div className="item">
        <span>Python</span>
      </div>
    </div>

    <h3>Inglés</h3>
    <div className="grid">
      <div className="item">
        <span>Escrito: Medio</span>
      </div>
      <div className="item">
        <span>Hablado: Medio</span>
      </div>
    </div>


  </div>
  )
}
