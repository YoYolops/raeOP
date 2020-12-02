import React from 'react';

import GquatroGeral from '../../graphics/RaeOpinionGraphics/Gquatro/GquatroGeral';
/* import GquatroCurso from '../../graphics/RaeOpinionGraphics/Gquatro/GquatroCurso'; */
import Gcinco from '../../graphics/RaeOpinionGraphics/Gcinco';
import Gseis from '../../graphics/RaeOpinionGraphics/Gseis';
import Gsete from '../../graphics/RaeOpinionGraphics/Gsete';
import Goito from '../../graphics/RaeOpinionGraphics/Goito';
import GnoveGeral from '../../graphics/RaeOpinionGraphics/Gnove/GnoveGeral';
/* import GnoveCurso from '../../graphics/RaeOpinionGraphics/Gnove/GnoveCurso'; */
import Gdez from '../../graphics/RaeOpinionGraphics/Gdez'
import Gdoze from '../../graphics/RaeOpinionGraphics/Gdoze'

/* Este componente traz todos os gráficos que dizem respeito ao RAE */

const RaeOpinion = () => {
    return (
        <div>
            <GquatroGeral />
            {/* <GquatroCurso /> */}
            <Gcinco />
            <Gseis />
            <Gsete />
            <Goito />
            <GnoveGeral />
            {/* <GnoveCurso /> */}
            <Gdez />
            <Gdoze />
        </div>
    );
};

export default RaeOpinion;