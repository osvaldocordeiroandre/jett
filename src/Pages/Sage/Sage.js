import React, { useState } from 'react'
import '../../index.css'

import { NavLink, useLocation } from 'react-router-dom'

export default function App() {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  return (
    <div className='container'>

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

          <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png" alt="Sage" />

          <div className="jett-text">

            <span> // FUNÇÃO </span>
            <h1> SENTINELA  <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt72ffc2e48d4a7a58/5eaa06852b79652f27c31ff6/Sentinel.png" alt="Função Sentinela"/></h1>

            <br />

            <span> // BIOGRAFIA </span>
            <div className='jett-biografia-text'>
              <p> Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha. </p>
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
              <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt295acba83a83496d/5eaf85beb8a6356e4ddc1007/TX_Sage_Q.png" alt="skill Q " /> </li>
              <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc6355bb295e64ba1/5efa55c138fa326e2aaf5c3f/TX_Sage_E.png" alt="skill E " /> </li>
              <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt368b2f4136858aed/5eaf85becf88d36e47cf029f/TX_Sage_C.png" alt="skill C " /> </li>
              <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt39a8fe8deb6389f8/5efa55d38732f51d8514604f/TX_Sage_X.png" alt="Skill R " /> </li>
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
