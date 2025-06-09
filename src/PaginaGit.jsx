import React, { useState, useEffect } from "react";
import './App.css';

function SimpleSlider() {
  

  return (
    
      <>
      <nav className="main-nav-scroll-snap">
    <ul className="nav-list-scroll-snap">
    <li className="nav-item-scroll-snap"><a href="#comidas">Jantinha</a></li>
    <li className="nav-item-scroll-snap"><a href="#espeto">Espetos</a></li>
    <li className="nav-item-scroll-snap"><a href="#bebidas">Cervejas</a></li>
    <li className="nav-item-scroll-snap"><a href="#caldos">Caldos</a></li>
    <li className="nav-item-scroll-snap"><a href="#drinks">Drinks</a></li>
    <li className="nav-item-scroll-snap"><a href="#porcoes">Porções</a></li>
    <li className="nav-item-scroll-snap"><a href="#naoAlcool">Outros</a></li>
  
  </ul>
</nav></>
   
  );
}

export default SimpleSlider;