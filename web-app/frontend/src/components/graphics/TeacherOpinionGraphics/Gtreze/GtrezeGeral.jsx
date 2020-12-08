import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* Em geral, você acha que a atuação dos professores no RAE é/está sendo: */

const GtrezeGeral= () => {
    return (
        <div className="gContainer" id="g13Geral">
            <HorizontalBar
                data={{
                    labels: [
                        'Excelente', 'Boa', 'Razoável', 'Ruim', 'Péssima', 'Não Responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [115, 557, 598, 191, 80, 26],
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
                        text: "Atuação dos professores é:",
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

export default GtrezeGeral;