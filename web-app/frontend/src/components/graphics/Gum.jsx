import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Gráfico 1: de Perfil dos Respondentes - Por Curso */

const Gum = () => {
    return (
        <div className="gum">
            <HorizontalBar 
                data = {{
                    labels: [
                        'Direito', 'Engenharia Civil', 'Ciência da Computação',
                        'Engenharia Elétrica', 'Geografia', 'Ciências Biológicas',
                        'Nutrição', 'Farmácia', 'Enfermagem', 'Matemática', 'História',
                        'Medicina', 'Design', 'Química', 'Administração',
                        'Engenharia de Petróleo', 'Arte e Mídia', 'Letras', 'Estatística',
                        'Engenharia Ambiental', 'Psicologia', 'Engenharia de Alimentos',
                        'Engenharia Mecânica', 'Física', 'Filosofia', 'Engenharia Florestal',
                        'Engenharia Agrícola', 'Engenharia Química', 'Engenharia de Produção',
                        'Pedagogia', 'Ciências Sociais', 'Arquitetura e Urbanismo', 'Agronomia',
                        'Odontologia', 'Meteorologia', 'Medicina Veterinária',
                        'Ciências Econômicas', 'Engenharia de Minas', 'Engenharia de Materiais',
                        'Engenharia de Biotecnologia e Bioprocessos', 'Ciências Contábeis',
                        'Gestão Pública', 'Engenharia de Biossistemas', 'Comunicação Social'
                    ],

                    datasets: [
                        {
                            label: "Quantidade",
                            data: [
                                138, 128, 114, 112, 99, 92, 90, 82, 73, 71, 66, 63, 53, 46,
                                38, 37, 34, 25, 25, 25, 24, 24, 12, 10, 9, 8, 8, 7, 7, 6, 5,
                                5, 5, 4, 4, 4, 3, 2, 2, 2, 2, 1, 1, 1
                            ],
                            backgroundColor: '#EEAD2D',
                            barThickness: 'flex',
                            hoverBackgroundColor: "#b8831c",
                        },
                    ],

            
                }}
                height = {1500}
                width = {400}
                options = {{
                    maintainAspectRatio: false,

                    layout: {
                        padding: 60,
                    },

                    legend: {
                        display: false,
/*                         labels: {
                            fontSize: 15,
                            fontColor: "white",
                            fontFamily: "roboto",
                        }, */
                    },

                    title: {
                        display: true,
                        padding: 10,
                        text: "Nº de Respondentes",
                        fontSize: 25,
                        fontColor: "#d3d3d3",
                        fontFamily: "roboto",
                    },

                    scales: {
                        yAxes:[
                            {
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                },

                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 14,
                                    fontColor: "#d3d3d3",
                                    fontStyle: "bold",
                                    fontFamily: "roboto"
                                },

                            },
                        ],

                        xAxes:[
                            {
                                display: false,
                                gridLines: {
                                    color: "rgba(0,0,0,0)",
                                },
                            }
                        ],
                    },
                }}
            />
        </div>
    )
};

export default Gum;