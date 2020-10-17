import React from 'react';
import './../styles/global.css';
import './../styles/pages/landing.css'
import logoimg from './../images/logo.svg';

import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';
function Landing(){

    return (<div id="page-landing">
    <div className="content-wrapper">
      <img src={logoimg} alt="Happy" />
    
      <main>
        
        <h1>Leve felicidade para o mundo</h1>

        <p>Visite os orfanatos e mude o dia de muitas crianças</p>

        <div className="location">
          <strong>
            Praia grande / SP
          </strong>

        </div>
        <Link to="/orphanages" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.8)"/>
        </Link>
      </main>
    </div>
  </div>)
}

export default Landing;
