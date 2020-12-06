import React from 'react';

import GdezoitoGeral from '../../graphics/InstitutionOpinionGraphics/Gdezoito/GdezoitoGeral';
/* import GdezoitoCurso from '../../graphics/InstitutionOpinionGraphics/Gdezoito/GdezoitoCurso'; */
/* import GdezoitoCampi from '../../graphics/InstitutionOpinionGraphics/Gdezoito/GdezoitoCampi'; */

import GdezenoveGeral from '../../graphics/InstitutionOpinionGraphics/Gdezenove/GdezenoveGeral';
/* import GdezenoveCurso from '../../graphics/InstitutionOpinionGraphics/Gdezenove/GdezenoveCurso'; */
/* import GdezenoveCampi from '../../graphics/InstitutionOpinionGraphics/Gdezenove/GdezenoveCampi'; */


const InstitutionOpinion = () => {
    return (
        <div>
            <GdezoitoGeral />
            {/* <GdezoitoCurso /> */}
            {/* <GdezoitoCampi /> */}
            <GdezenoveGeral />
            {/* <GdezenoveCurso /> */}
            {/* <GdezenoveCampi /> */}
        </div>
    );
};

export default InstitutionOpinion;