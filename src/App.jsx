import { useState } from 'react'
import './App.css'
import Sliiderr from './Slider.jsx'
import Sliders from './PaginaGit.jsx';
import Jantinha from './Componentes/Jantinha.jsx';
import Caldos from './Componentes/Caldos.jsx';
import Espetos from './Componentes/Espetos.jsx';
import Cervejas from './Componentes/Cervejas.jsx';
import Drinks from './Componentes/Drinks.jsx';  
import Porcoes from './Componentes/Porcoes.jsx';
import NaoAlcool from './Componentes/NaoAlcoll.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="Container">

        <nav className="menu">
          <div className="logo"></div>
          
          <div className="nav01">
             <Sliders></Sliders>
           
          </div>
        </nav>
        
       
        <div className="cardapio">
          <Jantinha></Jantinha>
          <Espetos></Espetos>
          <Cervejas></Cervejas>
          <Caldos></Caldos>
          <Drinks></Drinks>
          <Porcoes></Porcoes>
         <NaoAlcool></NaoAlcool>


        </div>

        <footer>
          <div>&copy; Desenvolvido por Venilson Rocha</div>
        </footer>

        
      </section>
     
    </>
  )
}

export default App
