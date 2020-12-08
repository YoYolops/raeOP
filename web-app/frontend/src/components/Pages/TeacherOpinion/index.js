import React from 'react';
import './Teacher.css'

import GonzeGeral from '../../graphics/TeacherOpinionGraphics/Gonze/GonzeGeral';
/* import GonzeCurso from '../../graphics/TeacherOpinionGraphics/Gonze/GonzeCurso'; */
/* import GonzeCampi from '../../graphics/TeacherOpinionGraphics/Gonze/GonzeCampi'; */

import GtrezeGeral from '../../graphics/TeacherOpinionGraphics/Gtreze/GtrezeGeral';
/* import GtrezeCurso from '../../graphics/TeacherOpinionGraphics/Gtreze/GtrezeCurso'; */
/* import GtrezeCampi from '../../graphics/TeacherOpinionGraphics/Gtreze/GtrezeCampi'; */

import GcatorzeGeral from '../../graphics/TeacherOpinionGraphics/Gcatorze/GcatorzeGeral';
/* import GcatorzeCurso from '../../graphics/TeacherOpinionGraphics/Gcatorze/GcatorzeCurso'; */
/* import GcatorzeCampi from '../../graphics/TeacherOpinionGraphics/Gcatorze/GcatorzeCampi'; */

import GquinzeGeral from '../../graphics/TeacherOpinionGraphics/Gquinze/GquinzeGeral';
/* import GquinzeCurso from '../../graphics/TeacherOpinionGraphics/Gquinze/GquinzeCurso'; */
/* import GquinzeCampi from '../../graphics/TeacherOpinionGraphics/Gquinze/GquinzeCampi'; */

import GdezesseisGeral from '../../graphics/TeacherOpinionGraphics/Gdezesseis/GdezesseisGeral';
/* import GdezesseisCurso from '../../graphics/TeacherOpinionGraphics/Gdezesseis/GdezesseisCurso'; */
/* import GdezesseisCampi from '../../graphics/TeacherOpinionGraphics/Gdezesseis/GdezesseisCampi'; */

import Gdezesete from '../../graphics/TeacherOpinionGraphics/Gdezesete';

const TeacherOpinion = () => {
    return (
        <div>
            <hr size="2" />
            <div className="presentation" id="teacherPresentation">
                <h1 className="blockTitle">
                    <strong>Sobre os Professores</strong>
                </h1>

                <div className="text">
                    <p className="p1">
                        Nesta seção, nós observamos a opinião dos estudantes sobre a atuação dos
                        professores no RAE. Foram consultados sobre diversos tópicos, como o
                        atendimento individual, tendo boa aceitação pela maioria dos estudantes (61%),
                        que têm opinião positiva ou neutra.
                    </p>
                    <p>
                        De modo geral, apesar de serem considerados mais exigentes (por 42% dos respondentes),
                        pedindo um volume de atividades mais alto que o normal, dito abusivo por 52% dos
                        alunos, os professores gozam de uma boa avaliação geral, tendo opiniões positivas de
                        42% dos que responderam à pesquisa.<br />
                        Vale destacar os cursos que melhor avaliaram seus professores: <strong>Enfermagem, Matemática, História,
                        Design e Ciência da Computação.</strong><br />
                        E os que pior avaliaram: <strong>Direito, Química, Medicina, Engenharia Elétrica e
                        Ciências Biológicas</strong>
                    </p>
                </div>
            </div>
            <hr size="2"/>

            <h1 className="gTitle">
                Na sua opinião, os professores são tolerantes com imprevistos que impossibilitem a realização de atividades?
            </h1>
            <GonzeGeral />
            {/* <GonzeCurso /> */}
            {/* <GonzeCampi /> */}
            <hr size="2"/>

            <h1 className="gTitle">
                Em geral, você acha que a atuação dos professores no RAE é/está sendo:
            </h1>
            <GtrezeGeral />
            {/* <GtrezeCurso /> */}
            {/* <GtrezeCampi /> */}
            <hr size="2"/>

            <h1 className="gTitle">
                Na sua experiência, o atendimento individual dos professores aos alunos está sendo:
            </h1>
            <GcatorzeGeral />
            {/* <GcatorzeCurso /> */}
            {/* <GcatorzeCampi /> */}
            <hr size="2"/>

            <h1 className="gTitle">
                Na sua opinião, em comparação com o regime presencial, no RAE os professores estão:
            </h1>
            <GquinzeGeral />
            {/* <GquinzeCurso /> */}
            {/* <GquinzeCampi /> */}
            <hr size="2"/>

            <h1 className="gTitle">
                No geral, em comparação com o regime presencial, você acha que o volume de atividades exigidas no RAE é:
            </h1>
            <GdezesseisGeral />
            {/* <GdezesseisCurso /> */}
            {/* <GdezesseisCampi /> */}
            <hr size="2"/>

            <h1 className="gTitle">
                Você julga esse volume de atividades abusivo?
            </h1>
            <Gdezesete />
            <hr size="2"/>
        </div>
    );
};

export default TeacherOpinion;