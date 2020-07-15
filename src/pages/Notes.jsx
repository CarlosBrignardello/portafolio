import React from 'react'
import '../styles/pages/Notes.sass'
import {Card} from '../components/Card'
import { notes } from '../data/Notes'

export const Notes = () => {
  return (
    <div className="notes-container">
      <h2 className="section-title">Apuntes</h2>
      <p>A continuación, están disponibles todos mis apuntes. Tanto como si eres un reclutador como si eres un estudiante o trabajador, el contenido de estos documentos puede resultarte útil.</p>
      <hr/>
      <div className="grid">
      {
        notes.map( (data) => {
          return <Card title={data.title} description={data.description} type="Notes" image={data.img} url={data.url} />
        })
      }
      </div>
    </div>
  )
}
