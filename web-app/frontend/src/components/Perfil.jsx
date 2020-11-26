import React from 'react';
import { Bar } from 'react-chartjs-2';

import Gum from './graphics/Gum.jsx';
import Gdois from './graphics/Gdois.jsx'

/* uso do chart.js: https://www.youtube.com/watch?v=c_9c5zkfQ3Y&ab_channel=WornOffKeys */

function Perfil() {
    return (
        <>
            <Gum />
            <Gdois />
        </>
    )
};

export default Perfil;