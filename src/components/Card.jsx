import React from 'react'
import '../styles/components/Card.sass'
import { Link } from 'react-router-dom'

export const Card = ({ title, type, description, image, url }) => {
  return (
  <a className="Link" href={url} target="_blank">
    <div className="card">
      <div className="card__image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card__content">
        <div className="card__content__header">
          <h3 className="card__content__title">{title}</h3>
          <span className="card__content__context">{type}</span>
        </div>
        <p className="card__content__description">{description}</p>
      </div>
    </div>
  </a>
  )
}
