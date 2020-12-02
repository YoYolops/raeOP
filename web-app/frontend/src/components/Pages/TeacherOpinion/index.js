import React from 'react';

import GonzeGeral from '../../graphics/TeacherOpinionGraphics/Gonze/GonzeGeral';
import GtrezeGeral from '../../graphics/TeacherOpinionGraphics/Gtreze/GtrezeGeral';
import GcatorzeGeral from '../../graphics/TeacherOpinionGraphics/Gcatorze/GcatorzeGeral';
import GquinzeGeral from '../../graphics/TeacherOpinionGraphics/Gquinze/GquinzeGeral';
import GdezesseisGeral from '../../graphics/TeacherOpinionGraphics/Gdezesseis/GdezesseisGeral';
import Gdezesete from '../../graphics/TeacherOpinionGraphics/Gdezesete';

const TeacherOpinion = () => {
    return (
        <div>
            <GonzeGeral />
            <GtrezeGeral />
            <GcatorzeGeral />
            <GquinzeGeral />
            <GdezesseisGeral />
            <Gdezesete />
        </div>
    );
};

export default TeacherOpinion;