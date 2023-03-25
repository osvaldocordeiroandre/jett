import React from 'react'

import Jett from './gif/jett-Q-demostred.gif'

import './index.css'

export default function App() {
  return (
    <div className='container'>
      
      <div className='jett-container'>

        <div className='jett-content'>

          <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png" alt="jett image" />

          <div className="jett-text">

              <span> // FUNÇÃO </span>
              <h1> DUELISTA </h1>

              <br />

              <span> // BIOGRAFIA </span>
              <div className='jett-biografia-text'>
                <p> Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu. </p>
              </div>

              <section className='line'></section>

              <iframe className='iframne-youtube' src="https://www.youtube.com/embed/xU2U73Tk-DM" frameborder="0"></iframe>

          </div>

        </div>

      </div>

      <div className="skills-container">

       <div className='skills-content'>

        <div className="habilidades-text"> 

        <h1> HABILIDADE ESPECIAIS </h1> 

        <ul>
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png" alt="skill Q image" /> </li>
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png" alt="skill E image" /> </li>
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png" alt="skill C image" /> </li>
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png" alt="Skill R image" /> </li>
        </ul>

          <span className='skill-Q'> Q - CORRENTE ASCENDENTE </span> <br /> <br />
          <span className='skill-Q'> INSTANTANEAMENTE impele Jett bem alto no ar. </span>
          
        </div>


        <img className='Q-video' src={Jett} alt="" />
         
       </div>

      </div>

    </div>
  )
}
