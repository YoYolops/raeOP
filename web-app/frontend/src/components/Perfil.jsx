import React from 'react';

import './Perfil.css'
import Gum from './graphics/Gum.jsx';
import Gdois from './graphics/Gdois.jsx';
import Gtres from './graphics/Gtres.jsx';
import Gquatro from './graphics/Gquatro.jsx';

/* uso do chart.js: https://www.youtube.com/watch?v=c_9c5zkfQ3Y&ab_channel=WornOffKeys */

function Perfil() {
    return (
        <>
            <Gum />
            <Gdois />
            <Gtres />
            <Gquatro />
        </>
    )
};

export default Perfil;