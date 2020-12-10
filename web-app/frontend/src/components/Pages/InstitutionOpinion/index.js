import React from 'react';
import './Institution.css';

import GdezoitoGeral from '../../graphics/InstitutionOpinionGraphics/Gdezoito/GdezoitoGeral';
import GdezoitoCurso from '../../graphics/InstitutionOpinionGraphics/Gdezoito/GdezoitoCurso';
import GdezoitoCampi from '../../graphics/InstitutionOpinionGraphics/Gdezoito/GdezoitoCampi';
import GdezenoveGeral from '../../graphics/InstitutionOpinionGraphics/Gdezenove/GdezenoveGeral';
import GdezenoveCurso from '../../graphics/InstitutionOpinionGraphics/Gdezenove/GdezenoveCurso';
import GdezenoveCampi from '../../graphics/InstitutionOpinionGraphics/Gdezenove/GdezenoveCampi';
import Button from '../../Button';
import { Switch, Route, Link } from 'react-router-dom';



const InstitutionOpinion = () => {

    return (
        <div>
            <hr size='2' id='about_institution'/>
            <div className='presentation' id='teacherPresentation'>
                <h1 className='blockTitle'>
                    <strong>Sobre a Instituição</strong>
                </h1>

                <div className='text'>
                    <p className='p1'>
                        Por fim, foi solicitado que opinassem sobre a atuação da UFCG, como instituição, diante
                        das dificuldades imposta pela pandemia, e das coordenações, no atendimento e suporte
                        aos estudantes durante o RAE. A respeito da UFCG, os que declararam considerar sua atuação
                        'Péssima' ou 'Ruim' somam 38% das respostas válidas, enquantos os que declaram considerá-la 'Boa'
                        ou 'Excelente' somam 25%. Com isso, observamos uma avaliação negativa por parte da comunidade
                        acadêmica de graduação.
                    </p>

                    <p>
                        Por outro lado, ao observar os dados que dizem respeito à atuação da coordenações durante o
                        RAE, vemos um cenário completamente diferente. Aqui, 61% das respostas válidas consideram

                        a atuação das coordenações como 'Boa' ou 'Excelente', enquanto apenas 14% a classificaram
                        como 'Ruim' ou 'Péssima'.
                        Atribuindo uma pontuação de 1 a 5 àqueles que responderam 'Péssimo', 'Ruim', 'Razoável', 'bom' e
                        'Excelente', respectivamente, podemos abstrair os resultados da pesquisa em uma nota e analisar

                        o nível de aprovação das coordenações entre os estudantes de alguns cursos. Assim, obtemos a
                        seguinte relação: <br />
                        <div id='bloquinho'>
                            <p>
                                <strong>1.</strong> História (<strong>4,09</strong>)<br />
                                <strong>2.</strong> Computação (<strong>3,87</strong>)<br />
                                <strong>3.</strong> Eng. Civil (<strong>3,86</strong>)<br />
                                <strong>4.</strong> Design (<strong>3,81</strong>)<br />
                                <strong>5.</strong> Eng. Elétrica (<strong>3,72</strong>)<br />
                                <strong>6.</strong> Matemática (<strong>3,60</strong>)<br />
                                <strong>7.</strong> Geografia (<strong>3,56</strong>)<br />
                                <strong>8.</strong> Biologia (<strong>3,47</strong>)<br />
                                <strong>9.</strong> Química (<strong>3,47</strong>)<br />
                                <strong>10.</strong> Enfermagem (<strong>3,15</strong>)<br />
                                <strong>11.</strong> Farmácia (<strong>3,15</strong>)<br />
                                <strong>12.</strong> Nutrição (<strong>3,13</strong>)<br />
                                <strong>13.</strong> Direito (<strong>2,86</strong>)<br />
                                <strong>14.</strong> Medicina (<strong>2,33</strong>)<br />
                            </p>
                        </div>

                    </p>
                </div>
            </div>
            <hr size='2'/>

            <h1 className='gTitle' id='ufcg_performance'>
                Como você avalia a atuação da UFCG diante da pandemia?
            </h1>
            <div className='menu-graph'>
                <Link to='/'>
                    <Button>Geral</Button>
                </Link>

                <Link to='/about_institution/g1/course'>
                    <Button>Por Curso</Button>
                </Link>

                <Link to='/about_institution/g1/campus'>
                    <Button>Por Campus</Button>
                </Link>

            </div>
            <Switch>
                <Route path='/about_institution/g1/course' component={ GdezoitoCurso }/>
                <Route path='/about_institution/g1/campus' component={ GdezoitoCampi }/>
                <Route to='/' component={ GdezoitoGeral } />
            </Switch>
            <hr size='2'/>

            <h1 className='gTitle' id='coordination_performance'>
                Como você avalia o desempenho da coordenação do seu curso no atendimento e suporte aos estudantes no RAE?
            </h1>
            <div className='menu-graph'>
                <Link to='/'>
                    <Button>Geral</Button>
                </Link>

                <Link to='/about_institution/g2/course'>
                    <Button>Por Curso</Button>
                </Link>

                <Link to='/about_institution/g2/campus'>
                    <Button>Por Campus</Button>
                </Link>

            </div>
            <Switch>
                <Route path='/about_institution/g2/course' component={ GdezenoveCurso }/>
                <Route path='/about_institution/g2/campus' component={ GdezenoveCampi }/>
                <Route to='/' component={ GdezenoveGeral } />
            </Switch>
        </div>
    );
};

export default InstitutionOpinion;