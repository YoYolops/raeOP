import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* No que diz respeito a dificuldades técnicas (queda de internet ou energia, indisponibilidade de equipamento etc), você passa por elas: */

const Gdez= () => {
    return (
        <div className="gContainer" id="g10">
            <HorizontalBar
                data={{
                    labels: [
                        'Frequentemente', 'Raramente', 'Nunca', 'Não responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [673, 765, 113, 16],
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
                        text: "dificuldades técnicas",
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

export default Gdez;