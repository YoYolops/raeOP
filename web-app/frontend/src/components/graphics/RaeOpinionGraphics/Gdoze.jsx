import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* No geral, você acha que essas dificuldades prejudicam o seu desempenho? */

const Gdoze= () => {
    return (
        <div className="gContainer" id="g12">
            <HorizontalBar
                data={{
                    labels: [
                        'Sim', 'Não', ['Não Passo Por', 'Essas Dificuldades'], 'Não responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [1148, 179, 165, 75],
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
                        text: "Afetam seu desempenho?",
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

export default Gdoze;