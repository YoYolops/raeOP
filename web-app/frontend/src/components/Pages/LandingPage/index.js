import React from 'react';
import './LandingPage.css';
import Button from '../../Button';

const LandingPage = () => {

    return(
        <div class='landing'>
          <section id="sec-curve">
            <svg id="curve" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 600"><defs></defs><title>Prancheta 1</title><path class="cls-1" d="M.5,521.5s184-585,650-293,750,272,750,272V-.5H.5Z"/></svg>
          </section>
          <div class='title-page'>
            <h1><i class="fas fa-database"/> Datablo</h1>
            <p>
              Resultados da consulta de opinião pública da comunidade acadêmica de graduação da UFCG
              a respeito do Regime Acadêmico Extraordinário - RAE
            </p>
            <div class='title-btn'>
              <a className='btn-link' href='https://github.com/YoYolops/raeOP' rel="noreferrer" target="_blank">
                <Button variant='primary' >GitHub</Button>
              </a>
              <a className='btn-link' href='#metodologia'>
                <Button variant='primary' >Metodologia</Button>
              </a>
            </div>
          </div>
        </div>
    )
}

export default LandingPage;