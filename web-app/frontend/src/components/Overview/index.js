import React from 'react';

import './Overview.css'


function Overview() {
    return (
        <div>
            <hr size="2" id="overview"/>
            <div className="presentation" id="overviewPresentation">
                <div className="text">
                    <p className="p1">
                        Ao longo do Regime Acadêmico Extraordinário (RAE) da UFCG, ouvimos diversas queixas e comentários
                        de alunos sobre os mais variados aspectos, desde a falta de vagas até a baixa qualidade do ensino
                        em algumas disciplinas. Apesar de serem pertinentes, nos demos conta de que, naturalmente, as
                        opiniões que nos atingem são, frequentemente, reflexos da "bolha" social em que nos encontramos.
                        Nasceu aí o questionamento, será que os estudantes de outros campi ou de outros cursos passam
                        por essas mesmas situações? Será a nossa realidade compartilhada pelos outros graduandos?
                    </p>
                    <p className="p1">
                        Para conseguir essas respostas, nós fizemos o que qualquer bom estudante faz diariamente:
                        <strong> Perguntar</strong>. Assim começou a nossa jornada, cheia de pedras pelo caminho,
                        e o resultado é o que vocês encontrarão a seguir. Infelizmente, ao longo do desenvolvimento, 
                        encontramos diversos pontos fracos que certamente serão reforçados em atividades futuras. Não há 
                        problema algum em cometer erros, desde que eles sejam usados como degraus para o progresso, certo?
                    </p>
                    <p className="p1">
                        Também gostaríamos de dizer que esta pesquisa de opinião foi desenvolvida por estudantes e para estudantes, 
                        com o objetivo de dar voz à comunidade acadêmica de graduação, que raramente tem seus anseios e opiniões 
                        ouvidos. Por isso, esperamos que esta seja a primeira de muitas e que vocês encontrem aqui um ambiente de 
                        representatividade.
                    </p>
                    <p>
                        Por fim, deixamos registrado o agradecimento à <strong>Assessoria de Comunicação</strong> da UFCG, que nos ajudou
                        a divulgar o projeto, elevando o número de respondentes a níveis aceitáveis. Agradecemos também aos CAs e às 
                        diversas coordenações, que repassaram nosso formulário aos estudantes, e aos prórios alunos, que tiveram 
                        a boa vontade de opinar. Sem vocês nada teria sido possível. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Overview;