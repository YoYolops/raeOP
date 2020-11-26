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
                        },

                        {
                            label: "Porcentagem",
                            data: [
                                8.81, 8.17, 7.28, 7.15, 6.32, 5.87, 5.74, 5.23, 4.66, 4.53, 4.21, 4.02, 3.38,
                                2.94, 2.43, 2.36, 2.17, 1.6, 1.6, 1.6, 1.53, 1.53, 0.77, 0.64, 0.57, 0.51, 0.51,
                                0.45, 0.45, 0.38, 0.32, 0.32, 0.32, 0.26, 0.26, 0.26, 0.19, 0.13, 0.13, 0.13, 0.13,
                                0.06, 0.06, 0.06
                            ],
                            backgroundColor: '#1DB954',
                            barThickness: 'flex',
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
                        display: true,
                        labels: {
                            fontSize: 15,
                            fontColor: "white",
                        },
                    },

                    title: {
                        display: true,
                        padding: 10,
                        text: "Nº de Respondentes",
                        fontSize: 25,
                        fontColor: "#d3d3d3"
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
                                    fontColor: "#d3d3d3"
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