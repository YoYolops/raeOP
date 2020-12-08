import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* Na sua experiência, o atendimento individual dos professores aos alunos está sendo: */

const GcatorzeGeral= () => {
    return (
        <div className="gContainer" id="g14Geral">
            <HorizontalBar
                data={{
                    labels: [
                        'Excelente', 'Bom', 'Razoável','Insuficiente', 'Inexistente', 'Não Responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [80, 409, 481, 341, 147, 109],
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
                        text: "Atendimento Individual é:",
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

export default GcatorzeGeral;