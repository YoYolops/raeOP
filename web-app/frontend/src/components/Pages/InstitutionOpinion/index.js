import React from 'react';

import GdezoitoGeral from '../../graphics/InstitutionOpinionGraphics/Gdezoito/GdezoitoGeral';
import GdezoitoCurso from '../../graphics/InstitutionOpinionGraphics/Gdezoito/GdezoitoCurso';
import GdezenoveGeral from '../../graphics/InstitutionOpinionGraphics/Gdezenove/GdezenoveGeral';
import GdezenoveCurso from '../../graphics/InstitutionOpinionGraphics/Gdezenove/GdezenoveCurso';


const InstitutionOpinion = () => {
    return (
        <div>
            <GdezoitoGeral />
            <GdezoitoCurso />
            <GdezenoveGeral />
            <GdezenoveCurso />
        </div>
    );
};

export default InstitutionOpinion;