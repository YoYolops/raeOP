import React from 'react';

import GquatroGeral from '../../graphics/RaeOpinionGraphics/Gquatro/GquatroGeral';
import GquatroCurso from '../../graphics/RaeOpinionGraphics/Gquatro/GquatroCurso';
import Gcinco from '../../graphics/RaeOpinionGraphics/Gcinco';
import Gseis from '../../graphics/RaeOpinionGraphics/Gseis';
import Gsete from '../../graphics/RaeOpinionGraphics/Gsete';
import Goito from '../../graphics/RaeOpinionGraphics/Goito';
import GnoveGeral from '../../graphics/RaeOpinionGraphics/Gnove/GnoveGeral';
import GnoveCurso from '../../graphics/RaeOpinionGraphics/Gnove/GnoveCurso';
import Gdez from '../../graphics/RaeOpinionGraphics/Gdez'
import Gdoze from '../../graphics/RaeOpinionGraphics/Gdoze'
import Button from '../../Button';
import { Switch, Route, Link } from 'react-router-dom';
/* Este componente traz todos os gráficos que dizem respeito ao RAE */

const RaeOpinion = () => {
    return (
        <div>
            <hr size='2' id='about_rae'/>
            <div className='presentation' id='raePresentation'>
                <h1 className='blockTitle'>
                    <strong>Sobre o RAE</strong>
                </h1>

                <div className='text'>
                    <p className='p1'>
                        Depois de questionados sobre diversos aspectos do RAE (Regime Acadêmico Extraordinário),
                        fica aparente a baixa popularidade do mesmo entre os estudantes de graduação. Quando
                        perguntada diretamente, por exemplo, sua opinião geral sobre o sistema, 41%
                        o classificaram como ruim ou péssimo em contraste aos 21% que declararam opinião positiva.
                    </p>
                    <p>
                        Em questões mais específicas, a impopularidade do regime fica ainda mais evidente: 71% dos
                        respondentes avaliam a qualidade do ensino como pior, em relação ao presencial.
                        Além disso, 91% dos consultados declararam ter tido, ao menos uma vez, algum tipo de
                        problema técnico que dificultou ou inviabilizou a realização de atividades nesse período.
                        Destes, 79% dizem ter seu desempenho afetado por esses imprevistos.
                    </p>
                </div>
                <hr size='2'/>
            </div>

            <h1 className='gTitle' id='vac_offered'>
                Você acredita que as vagas ofertadas no RAE foram suficientes?
            </h1>
            <div className='menu-graph'>
                <Link to='/'>
                    <Button>Geral</Button>
                </Link>

                <Link to='/about_rae/g1/curso'>
                    <Button>Por Curso</Button>
                </Link>

            </div>
            <Switch>
                <Route path='/about_rae/g1/curso' component={ GquatroCurso }/>
                <Route to='/' component={ GquatroGeral } />
            </Switch>

            <hr size='2'/>

            <h1 className='gTitle' id='courses_taken'>
                Com relação às disciplinas que queria cursar, você conseguiu se matricular em:
            </h1>
            <Gcinco />
            <hr size='2'/>

            <h1 className='gTitle' id='general_opinion'>
                No geral, você acha o RAE:
            </h1>
            <Gseis />
            <hr size='2'/>

            <h1 className='gTitle' id='rae_performance'>
                Você acredita que o seu desempenho no RAE, em comparação com o presencial:
            </h1>
            <Gsete />
            <hr size='2'/>

            <h1 className='gTitle' id='teaching_quality'>
                Na sua opinião, a qualidade do ensino no RAE, em comparação com o presencial, é:
            </h1>
            <Goito />
            <hr size='2'/>

            <h1 className='gTitle' id='mental_health'>
                Você acredita que o RAE afetou sua saúde mental para:
            </h1>
            <div className='menu-graph'>
                <Link to='/'>
                    <Button>Geral</Button>
                </Link>

                <Link to='/about_rae/g2/curso'>
                    <Button>Por Curso</Button>
                </Link>

            </div>

            <Switch>
                <Route path='/about_rae/g2/curso' component={ GnoveCurso }/>
                <Route to='/' component={ GnoveGeral } />
            </Switch>
            <hr size='2'/>

            <h1 className='gTitle' id='technical_difficulties'>
                No que diz respeito a dificuldades técnicas (queda de internet ou energia,
                indisponibilidade de equipamento etc), você passa por elas:
            </h1>
            <Gdez />
            <hr size='2'/>

            <h1 className='gTitle' id='performance impact'>
                No geral, você acha que essas dificuldades prejudicam o seu desempenho?
            </h1>
            <Gdoze />
        </div>
    );
};

export default RaeOpinion;