import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ListaUsuarios from './components/ListaUsuarios'

function App() {
  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ListaUsuarios></ListaUsuarios>
    </div>
  )
}

export default App
