import React from 'react'
import '../styles/pages/Posts.sass'
import { posts } from '../data/Posts'
import { PostCard } from '../components/PostCard'

export const Posts = () => {
  
  return (
    <div className="posts-container">
      <h2 className="section-title">Publicaciones</h2>
      <p>En este sitio están disponibles todas mis publicaciones. Puedes seleccionar la que sea de tu interés haciendo clic en el card. Estas se abrirán en una ruta interna.</p>
      <hr/>
      {
        posts.map( (data) => {
          return <PostCard key={data.contextData} context={data.contextData} title={data.titleData} description={data.descriptionData} date={data.dateData} image={data.image} route={data.route}/>
        })
      }
    </div>
  )
}
