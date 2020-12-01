import React from 'react';

import GquatroGeral from '../../graphics/RaeOpinionGraphics/Gquatro/GquatroGeral';
import Gcinco from '../../graphics/RaeOpinionGraphics/Gcinco';
import Gseis from '../../graphics/RaeOpinionGraphics/Gseis';
import Gsete from '../../graphics/RaeOpinionGraphics/Gsete';
import Goito from '../../graphics/RaeOpinionGraphics/Goito';
import GnoveGeral from '../../graphics/RaeOpinionGraphics/Gnove/GnoveGeral';
import Gdez from '../../graphics/RaeOpinionGraphics/Gdez'
import Gdoze from '../../graphics/RaeOpinionGraphics/Gdoze'

const RaeOpinion = () => {
    return (
        <div>
            <GquatroGeral />
            <Gcinco />
            <Gseis />
            <Gsete />
            <Goito />
            <GnoveGeral />
            <Gdez />
            <Gdoze />
        </div>
    );
};

export default RaeOpinion;