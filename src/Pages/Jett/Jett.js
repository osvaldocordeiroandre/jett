import React, { useState } from 'react'
import '../../index.css'

import Jett from '../../gif/jett-Q-demostred.gif'

import { NavLink, useLocation } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

import ScrollToTop from 'react-scroll-to-top'

import Title from '../../Title';

export default function App() {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');
    
  return (
    <div className='container'>

      <ScrollToTop color='#ff4b61'/>

      <Title title="Jett | Valorant"/>
      
      <div className='jett-container'>

        <ul className='agentes-container'>

          <NavLink to={'/jett'} onClick={() => setActiveLink('/jett')}  >
              <li className={location.pathname === '/jett' || activeLink === '/jett' ? 'active-link' : ''}> JETT </li>
          </NavLink>

          <NavLink to={'/sage'} onClick={() => setActiveLink('/sage')}>
              <li className={location.pathname === '/sage' || activeLink === '/sage' ? 'active-link' : ''}> SAGE </li>
          </NavLink>

          <NavLink to={'/omen'} onClick={() => setActiveLink('/omen')}>
              <li className={location.pathname === '/omen' || activeLink === '/omen' ? 'active-link' : ''}> OMEN </li>
          </NavLink>

          <NavLink to={'/reyna'} onClick={() => setActiveLink('/reyna')}>
              <li className={location.pathname === '/reyna' || activeLink === '/reyna' ? 'active-link' : ''}> REYNA </li>
          </NavLink>

        </ul>

        <div className='jett-content'>

        <NavLink to={'/sage'}>
          <AiOutlineArrowRight size={30} />
        </NavLink>

          <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png" alt="jett" />

          <div className="jett-text">

              <span> // FUNÇÃO </span>
              <h1> DUELISTA  <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png" alt="Função Duelista" /> </h1>

              <br />

              <span> // BIOGRAFIA </span>
              <div className='jett-biografia-text'>
                <p> Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu. </p>
              </div>

              <section className='line'></section>

          </div>

        </div>

      </div>

      <div className="skills-container">

       <div className='skills-content'>

        <div className="habilidades-text"> 

        <h1> HABILIDADE ESPECIAIS </h1> 

        <ul>
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png" alt="skill Q " /> </li>
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png" alt="skill E " /> </li>
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png" alt="skill C " /> </li>
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png" alt="Skill R " /> </li>
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
