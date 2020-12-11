import React from 'react';

const Metodologia = () => {
    return (
        <div>
            <hr size="2" id="metodologia"/>
            <div className="presentation" id="metodologiaPresentation">
                <h1 className="blockTitle">
                    <strong>Metodologia & Informações</strong>
                </h1>

                <div className="text">
                    <p className="p1">
                        Esta pesquisa foi desenvolvida sobre as informações coletadas a partir das respostas dadas
                        por 1567 estudantes de graduação da Universidade Federal de Campina Grande (UFCG). A coleta
                        dessas respostas ocorreu dos dias 26 de Outubro de 2020 a 8 de Novembro de 2020.
                    </p>
                    <p className="p1">
                        Para coleta dos dados foi utilizado um formulário google, com todas as perguntas de múltipla
                        escolha. Sendo este, divulgado através das redessociais pelo perfil oficial da UFCG e pelos
                        Centros Acadêmicos de alguns cursos.
                    </p>
                    <p className="p1">
                        Esta pesquisa tenta exibir um panorama geral da opinião da comunidade acadêmica de graduação
                        sobre o RAE em seus variados aspectos, sem restrição de curso ou campus.
                        As perguntas foram elaboradas com base em questões que acreditávamos ser as mais pertinentes 
                        nesse contexto. Elas foram divididas em três blocos. O primeiro diz respeito ao perfil do 
                        respondente, onde procuramos saber o seu curso e campus por exemplo. O segundo trata do RAE
                        diretamente, com tópicos como a qualidade de ensino, disponibilidade de vagas etc.
                        O terceiro se preocupa em discutir a atuação dos professores no regime, enquanto o quarto e
                        último tenta avaliar o desempenho da instituição, através de suas coordenações e administração geral.
                    </p>
                    <p className="p1">
                        <strong>Por que algumas perguntas trazem resultados por período/curso e outras não?</strong><br />
                        Apesar de ser possível trazer essas análises para todas as perguntas da pesquisa, nós optamos
                        por fazê-lo somente nas que acreditamos que seriam relevantes.
                    </p>
                    <p className="p1">
                        <strong>Por que os gráficos por curso não trazem informações sobre todas as graduações?</strong><br />
                        Primeiramente, o número de graduações é muito alto, são 48 ao todo, e apenas algumas dessas 
                        tiveram um número significativo de respondentes. Então, para manter a qualidade da informação e evitar
                        o plot de gráficos muito grandes, optamos por exibir os resultados daqueles que tiveram no mínimo 40 
                        respondentes. Mas lembre-se, os dados das respostas dessas graduações só foram omitidos nos gráficos "por Curso", 
                        nos gráficos gerais todas as 1567 respostas foram consideradas.
                    </p>
                    <p className="p1">
                        <strong>Posso ter acesso aos dados brutos da pesquisa?</strong><br />
                        Sim! Como sempre gostamos de lembrar, o <strong>Datablo</strong> é um projeto com o objetivo
                        de democratizar o acesso a informação para que ela possa ser usada em prol dos estudantes.
                        Para ter acesso aos dados, <strong>
                            <a className="outLink" 
                                href="./backup.csv"
                                download="backup.csv">
                                 clique aqui
                            </a>
                        </strong>
                    </p>
                    <p>
                        <strong>Onde encontro o Datablo nas reder sociais?</strong><br />
                        <strong><a className="outLink" href="https://twitter.com/datablo" rel="noreferrer" target="_blank">Twitter</a></strong><br />
                        <strong><a className="outLink" href="https://www.instagram.com/datablo/" rel="noreferrer" target="_blank">Instagram</a></strong><br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Metodologia;