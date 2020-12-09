import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* Como você avalia a atuação da UFCG diante da pandemia? */

const GdezoitoGeral= () => {
    return (
        <div className="gContainer" id="g18Geral">
            <HorizontalBar
                data={{
                    labels: [
                        'Excelente', 'Boa', 'Regular', 'Ruim', 'Péssima', 'Não Responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [52, 331, 561, 298, 281, 44],
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
                        text: "avaliação da UFCG:",
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

export default GdezoitoGeral;