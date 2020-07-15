import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} 
from "react-router-dom";
import { Curriculum } from '../components/Curriculum';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Works } from '../pages/Works';
import { Posts } from '../pages/Posts';
import { Skills } from '../pages/Skills';
import { Notes } from '../pages/Notes';
import { Contact } from '../pages/Contact';
import App from '../pages/App';
import { gitSubirProyecto } from '../data/posts/gitSubirProyecto'
import { reactRouter } from '../data/posts/reactRouter'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/portafolio/posts" component={ Posts } />
          <Route exact path="/portafolio/posts/git-subir-proyectos" component={ gitSubirProyecto } />
          <Route exact path="/portafolio/posts/react-router" component={ reactRouter } />
          <Route exact path="/portafolio/works" component={ Works } />
          <Route exact path="/portafolio/skills" component={ Skills } />
          <Route exact path="/portafolio/notes" component={ Notes } />
          <Route exact path="/portafolio/contact" component={ Contact } />
          <Route path="/portafolio/" component={ App } />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}