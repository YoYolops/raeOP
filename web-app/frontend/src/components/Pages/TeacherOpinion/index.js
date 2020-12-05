import React from 'react';

import GonzeGeral from '../../graphics/TeacherOpinionGraphics/Gonze/GonzeGeral';
/* import GonzeCurso from '../../graphics/TeacherOpinionGraphics/Gonze/GonzeCurso'; */
import GonzeCampi from '../../graphics/TeacherOpinionGraphics/Gonze/GonzeCampi';
import GtrezeGeral from '../../graphics/TeacherOpinionGraphics/Gtreze/GtrezeGeral';
/* import GtrezeCurso from '../../graphics/TeacherOpinionGraphics/Gtreze/GtrezeCurso'; */
import GtrezeCampi from '../../graphics/TeacherOpinionGraphics/Gtreze/GtrezeCampi';
import GcatorzeGeral from '../../graphics/TeacherOpinionGraphics/Gcatorze/GcatorzeGeral';
/* import GcatorzeCurso from '../../graphics/TeacherOpinionGraphics/Gcatorze/GcatorzeCurso'; */
import GcatorzeCampi from '../../graphics/TeacherOpinionGraphics/Gcatorze/GcatorzeCampi';
import GquinzeGeral from '../../graphics/TeacherOpinionGraphics/Gquinze/GquinzeGeral';
/* import GquinzeCurso from '../../graphics/TeacherOpinionGraphics/Gquinze/GquinzeCurso'; */
import GquinzeCampi from '../../graphics/TeacherOpinionGraphics/Gquinze/GquinzeCampi';
import GdezesseisGeral from '../../graphics/TeacherOpinionGraphics/Gdezesseis/GdezesseisGeral';
/* import GdezesseisCurso from '../../graphics/TeacherOpinionGraphics/Gdezesseis/GdezesseisCurso'; */
import GdezesseisCampi from '../../graphics/TeacherOpinionGraphics/Gdezesseis/GdezesseisCampi';
import Gdezesete from '../../graphics/TeacherOpinionGraphics/Gdezesete';

const TeacherOpinion = () => {
    return (
        <div>
            <GonzeGeral />
            {/* <GonzeCurso /> */}
            <GonzeCampi />
            <GtrezeGeral />
            {/* <GtrezeCurso /> */}
            <GtrezeCampi />
            <GcatorzeGeral />
            {/* <GcatorzeCurso /> */}
            <GcatorzeCampi />
            <GquinzeGeral />
            {/* <GquinzeCurso /> */}
            <GquinzeCampi />
            <GdezesseisGeral />
            {/* <GdezesseisCurso /> */}
            <GdezesseisCampi />
            <Gdezesete />
        </div>
    );
};

export default TeacherOpinion;