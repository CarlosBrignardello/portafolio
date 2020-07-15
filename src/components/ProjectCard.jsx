import React from 'react'
import '../styles/components/ProjectCard.sass'

export const ProjectCard = ({ title, techs, image }) => {

  return (
    <div className="project-card">
        <div className="project-card__content">
          <h3 className="project-card__content__title">{title}</h3>
        <div className="project-card__content__tech">
          {  
            techs.map((t) => {
              return <span key="t">{t}</span>
            })
          }
        </div>
        </div>
      <div className="project-card__image" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  )
}
