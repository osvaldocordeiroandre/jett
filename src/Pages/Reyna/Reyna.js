import React, { useState } from 'react'
import '../../index.css'

import { NavLink, useLocation } from 'react-router-dom'
import Title from '../../Title';

export default function App() {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');
    
  return (
    <div className='container'>

      <Title title="Reyna | Valorant" />
      
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

          <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png" alt="Reyna" />

          <div className="jett-text">

              <span> // FUNÇÃO </span>
              <h1> DUELISTA  <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png" alt="Função Duelista" /> </h1>

              <br />

              <span> // BIOGRAFIA </span>
              <div className='jett-biografia-text'>
                <p> Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.</p>
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
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf10078de1865cc3a/5eb7cf1e241e5e628430676c/TX_Reyna_Q.png" alt="skill Q " /> </li>
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7f61a763092dca17/5eb7cf1e7e251a2d4a46fdb3/TX_Reyna_E.png" alt="skill E " /> </li>
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1df6153d75480d43/5eb7cf1e8682422a765fc997/TX_Reyna_C.png" alt="skill C " /> </li>
          <li> <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte8a8889d3b17a9b9/5eb7cf1e1ea0c32e33b95fa6/TX_Reyna_X.png" alt="Skill R " /> </li>
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
