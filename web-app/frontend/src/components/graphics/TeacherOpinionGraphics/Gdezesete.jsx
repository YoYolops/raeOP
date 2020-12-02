import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'

/* Você julga esse volume de atividades abusivo? */

const Gdezesete = () => {
    return (
        <div className="gContainer" id="g17">
            <HorizontalBar
                data={{
                    labels: [
                        'Sim', 'Não', 'Não Responderam'
                    ],
                    
                    datasets: [
                        {
                            data: [829, 482, 256],
                            backgroundColor: '#EEAD2D',
                            barThickness: 'flex',
                            hoverBackgroundColor: "#b8831c",
                        },
                    ],
                }}
                height={300}
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
                        text: "O volume de atividades é abusivo? ",
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

export default Gdezesete;