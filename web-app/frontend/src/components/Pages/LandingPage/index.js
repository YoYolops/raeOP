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
            Lorem ipsum dolor sit amet colu, consectetur adipiscing delit karm. Praesent nec erat ac tortor camul faucibus dignissim eufor efficitur. 
            </p>
            <div class='title-btn'>
              <Button variant='primary' >Documentação</Button>
              <Button variant='primary' >Metodologia</Button>
            </div>
          </div>
        </div>
    )
}

export default LandingPage;