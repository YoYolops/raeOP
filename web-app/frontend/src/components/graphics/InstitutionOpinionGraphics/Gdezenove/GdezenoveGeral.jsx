import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* Como você avalia o desempenho da coordenação do seu curso no atendimento e suporte aos estudantes no RAE? */

const GdezenoveGeral = () => {
    return (
        <div className="gContainer" id="g19Geral">
            <HorizontalBar
                data={{
                    labels: [
                        'Excelente', 'Bom', 'Regular', 'Ruim', 'Péssimo', 'Não Responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [354, 547, 366, 118, 88, 94],
                            backgroundColor: '#EEAD2D',
                            barThickness: 'flex',
                            hoverBackgroundColor: "#b8831c",
                        },
                    ],
                }}
                height={370}
                width={100}
                options={{
                    maintainAspectRatio: false,
                    layout: {
                        padding: 60,
                    },

                    legend: {
                        display: false,
        /*                         labels: {
                            fontSize: 15,
                            fontColor: "#e6e7ea",
                            fontFamily: 'Roboto',
                        },
        */
                    },

                    title: {
                        display: false,
                        padding: 20,
                        text: "avaliação das coordenações:",
                        fontSize: 25,
                        fontColor: "#e6e7ea",
                        fontFamily: 'Roboto',
                    },

                    scales: {
                        yAxes:[
                            {
                                barPercentage: 1,

                                gridLines: {
                                    display: false,
                                },

                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 14,
                                    fontColor: "#e6e7ea",
                                    fontFamily: 'Roboto',
                                },

                                barThickness: 23,
                            },
                        ],

                        xAxes:[
                            {
                                display: false,
                                gridLines: {
                                    display: false,
                                },
                            }
                        ],
                    },
                }}
            />
        </div>
    );
};

export default GdezenoveGeral;