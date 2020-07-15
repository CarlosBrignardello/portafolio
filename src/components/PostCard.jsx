import React from 'react'
import '../styles/components/PostCard.sass'
import { Link } from 'react-router-dom'

export const PostCard = ({ context, title, description, date, image, route }) => {

  return (
    <>
      <Link to={route} className="post-card">
        <div className="post-card__image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="post-card__content">
          <span>{context}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <span>{date}</span>
        </div>
      </Link>
    </>
  )
}
