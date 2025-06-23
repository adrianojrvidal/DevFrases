import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'
import allFrases from './allFrases'

function App() {
  const [fraseTexto, setFraseTexto] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  
  function handleSwitchCategory (index:number) {
    setCategoriaSelecionada(index);
  }

  function obterFrase () {
    const numeroAleatorio : number = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);
   
    setFraseTexto(allFrases[categoriaSelecionada].frases[numeroAleatorio]);
  }
  
  return (
    <div className='container'>
      <img src={logoImg} alt="Logo" className='logo'/>
      <section className='category-area'>
        <h2 className="category-title">Categorias</h2>
        <div className='category-btn-area'>
          {
            allFrases.map( (item, index)=> (
              <button 
                className='category-btn'
                key={item.id}
                style={{ 
                  borderWidth: item.categoria === allFrases[categoriaSelecionada].categoria ? 2 : 0,
                  borderColor: "#1fa4db" 
                }}

                onClick={ () => handleSwitchCategory(index)}
              >
                {item.categoria}
              </button>
            ))
          }
        </div>

        <button 
          className='frase-btn'
          onClick={ () => obterFrase()}
        >
          Obter frase
        </button>
       
        {fraseTexto !== "" && <p className="frase-area">{fraseTexto}</p>}
        
      </section>  
    </div>
  )
}

export default App
