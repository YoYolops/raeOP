import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* Na sua opinião, em comparação com o regime presencial, no RAE os professores estão: */

const GquinzeGeral= () => {
    return (
        <div className="gContainer" id="g15Geral">
            <HorizontalBar
                data={{
                    labels: [
                        'Mais Exigentes', 'Tão Exigentes Quanto', 'Menos Exigentes', 'Não Responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [659, 491, 264, 153],
                            backgroundColor: '#EEAD2D',
                            barThickness: 'flex',
                            hoverBackgroundColor: "#b8831c",
                        },
                    ],
                }}
                height={280}
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
                        text: "Os professores estão:",
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

export default GquinzeGeral;