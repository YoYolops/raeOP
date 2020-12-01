import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* Você acredita que o RAE afetou sua saúde mental para: */

const GnoveGeral= () => {
    return (
        <div className="gContainer" id="g9Geral">
            <HorizontalBar
                data={{
                    labels: [
                        'Melhor', 'Pior', 'Não Afetou', 'Não responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [76, 911, 466, 114],
                            backgroundColor: '#EEAD2D',
                            barThickness: 'flex',
                            hoverBackgroundColor: "#b8831c",
                        },
                    ],
                }}
                height={325}
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
                        display: true,
                        padding: 20,
                        text: "afetou sua saúde mental para:",
                        fontSize: 25,
                        fontColor: "#e6e7ea",
                        fontFamily: 'Roboto',
                    },

                    scales: {
                        yAxes:[
                            {
                                barPercentage: 1,

                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
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
                                    color: "rgba(0,0,0,0)",
                                },
                            }
                        ],
                    },
                }}
            />
        </div>
    );
};

export default GnoveGeral;