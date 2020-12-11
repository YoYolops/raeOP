import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Gum from '../../graphics/ProfileGraphics/Gum';
import Gdois from '../../graphics/ProfileGraphics/Gdois';
import Gtres from '../../graphics/ProfileGraphics/Gtres';
import './Profile.css';
import Button from '../../Button';

const Profile = () => {
    return(
        <div>
            <hr size="2" id="student_profile"/>
            <div className="presentation" id="profilePresentation">
                <h1 className="blockTitle">
                    <strong>Perfil dos Respondentes</strong>
                </h1>
                <div className="text">
                    <p className="p1">
                        Ao todo, 1567 estudantes, o que corresponde a pouco menos de 10% do total de alunos de
                        graduação da UFCG, responderam à pesquisa de opinião ao longo de duas semanas,
                        dos quais a maior parte são dos campi de Campina Grande, Cuité e Cajazeiras, que juntos
                        representam mais de 75% dos respondentes.
                    </p>
                    <p>
                        Além disso, é notável que a grande maioria dos participantes se encontram nos períodos
                        iniciais de seus cursos. Cerca de 43% deles ainda não chegaram no 4º período letivo.
                        Percebe-se, com isso, que o engajamento nesta consulta tende a ser consideravelmente
                        menor entre os estudantes mais veteranos.
                    </p>
                </div>
                <hr size="2"/>
            </div>

            <h1 className="gTitle" id='quant_students'>
                Quantidade de Respondentes
            </h1>
            <div className='menu-graph'>
                <Link to='/'>
                    <Button>Por Curso</Button>
                </Link>

                <Link to='/student_profile/period'>
                    <Button>Por Período</Button>
                </Link>

                <Link to='/student_profile/campus'>
                    <Button>Por Campus</Button>
                </Link>
            </div>
            <Switch> 
                <Route path='/student_profile/period' component={ Gdois }/>
                <Route path='/student_profile/campus' component={ Gtres }/>
                <Route path='/' component={ Gum }/>
            </Switch>
        </div>
    )
}

export default Profile;