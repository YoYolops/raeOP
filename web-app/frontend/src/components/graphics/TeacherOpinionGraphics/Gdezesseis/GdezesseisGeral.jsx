import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* No geral, em comparação com o regime presencial, você acha que o volume de atividades exigidas no RAE é: */

const GdezesseisGeral= () => {
    return (
        <div className="gContainer" id="g16Geral">
            <HorizontalBar
                data={{
                    labels: [
                        'Muito Maior', 'Maior', 'Igual', 'Menor', 'Muito Menor','Não Responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [712, 456, 238, 74, 13, 74],
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
                        text: "O volume de atividades está:",
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

export default GdezesseisGeral;