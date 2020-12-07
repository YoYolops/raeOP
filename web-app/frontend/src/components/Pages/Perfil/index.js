import React from 'react';
import Gum from '../../graphics/ProfileGraphics/Gum';
import Gdois from '../../graphics/ProfileGraphics/Gdois';
import Gtres from '../../graphics/ProfileGraphics/Gtres';
import './Profile.css';

const Profile = () => {
    return(
        <div>
            <div className="presentation" id="profilePresentation">
                <h1 id="title">
                    <strong>Perfil dos Respondentes</strong>
                </h1>
                <div className="text">
                    <p>
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
                <hr />
            </div>

            <Gum />
            <Gdois />
            <Gtres />
        </div>
    )
}

export default Profile;