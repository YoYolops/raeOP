import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* 6 - No geral, você acha o RAE: */

const Gseis = () => {
    return (
        <div className="gContainer" id="g6">
            <HorizontalBar
                data={{
                    labels: [
                        'Excelente', 'Bom', 'Razoável', 'Ruim', 'Péssimo', 'Não Responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [49, 287, 569, 352, 288, 22],
                            backgroundColor: '#EEAD2D',
                            barThickness: 'flex',
                            hoverBackgroundColor: "#b8831c",
                        },
                    ],
                }}
                height={350}
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
                        text: "No geral, você acha o RAE:",
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

export default Gseis;