import React from 'react';

import GonzeGeral from '../../graphics/TeacherOpinionGraphics/Gonze/GonzeGeral';
/* import GonzeCurso from '../../graphics/TeacherOpinionGraphics/Gonze/GonzeCurso'; */
import GtrezeGeral from '../../graphics/TeacherOpinionGraphics/Gtreze/GtrezeGeral';
/* import GtrezeCurso from '../../graphics/TeacherOpinionGraphics/Gtreze/GtrezeCurso'; */
import GcatorzeGeral from '../../graphics/TeacherOpinionGraphics/Gcatorze/GcatorzeGeral';
/* import GcatorzeCurso from '../../graphics/TeacherOpinionGraphics/Gcatorze/GcatorzeCurso'; */
import GquinzeGeral from '../../graphics/TeacherOpinionGraphics/Gquinze/GquinzeGeral';
/* import GquinzeCurso from '../../graphics/TeacherOpinionGraphics/Gquinze/GquinzeCurso'; */
import GdezesseisGeral from '../../graphics/TeacherOpinionGraphics/Gdezesseis/GdezesseisGeral';
/* import GdezesseisCurso from '../../graphics/TeacherOpinionGraphics/Gdezesseis/GdezesseisCurso'; */
import Gdezesete from '../../graphics/TeacherOpinionGraphics/Gdezesete';

const TeacherOpinion = () => {
    return (
        <div>
            <GonzeGeral />
            {/* <GonzeCurso /> */}
            <GtrezeGeral />
            {/* <GtrezeCurso /> */}
            <GcatorzeGeral />
            {/* <GcatorzeCurso /> */}
            <GquinzeGeral />
            {/* <GquinzeCurso /> */}
            <GdezesseisGeral />
            {/* <GdezesseisCurso /> */}
            <Gdezesete />
        </div>
    );
};

export default TeacherOpinion;