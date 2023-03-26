import React, { useState } from 'react'
import '../../index.css'

import { NavLink, useLocation } from 'react-router-dom'
import Title from '../../Title';

export default function App() {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  return (
    <div className='container'>

      <Title title="Omen | Valorant" />

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

          <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png" alt="jett" />

          <div className="jett-text">

            <span> // FUNÇÃO </span>
            <h1> CONTROLADOR  <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png" alt="Função Controlador" /> </h1>

            <br />

            <span> // BIOGRAFIA </span>
            <div className='jett-biografia-text'>
              <p> Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.</p>
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
              <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt323e0178def67d36/5eaf85f4cf88d36e47cf02a5/TX_Omen_Q.png" alt="skill Q " /> </li>
              <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta95e6968cb32f519/5eaf85f44398082ffe24019b/TX_Omen_E.png" alt="skill E " /> </li>
              <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7016fed86331500b/5eaf85f41b51e36d7c1b6ad6/TX_Omen_C.png" alt="skill C " /> </li>
              <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd7b44696b74076d4/5eaf85f4f66b2515dea76b2c/TX_Omen_X.png" alt="Skill R " /> </li>
            </ul>

            <span className='skill-Q'>  </span> <br /> <br />
            <span className='skill-Q'>  </span>

          </div>


          <img className='Q-video' src='#' alt="" />

        </div>

      </div>

    </div>
  )
}
