// import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {
  
  return (
    <div className='container'>
      <img src={logoImg} alt="Logo" className='logo'/>
      <section className='category-area'>
        <h2 className="category-title">Categorias</h2>
        <div className='category-btn-area'>
          <button className='category-btn'>Motivação</button>
          <button className='category-btn'>Bem estar</button>
        </div>
        <button className='frase-btn'>Obter frase</button>
        <p className="frase-area">Um frase aqui</p>
      </section>  
    </div>
  )
}

export default App
