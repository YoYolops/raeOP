import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const Gtres = () => {
    return (
        <div className="gContainer" id="g3">
            <HorizontalBar
                data={{
                    labels: [
                        "Campina Grande", "Cuité", "Cajazeiras",
                        "Pombal", "Sousa", "Patos", "Sumé"
                    ],
                
                    datasets: [
                        {
                            data: [575, 377, 238, 161, 149, 61, 6],
                            backgroundColor: "#EEAD2D",
                            hoverBackgroundColor: "#b8831c",
                        },
                    ],
                }}
                height={380}
                width={100}
                options={{
                    maintainAspectRatio: false,

                    layout: {
                        padding: 60,
                    },

                    legend: {
                        display: false,
                        labels: {
                            fontSize: 15,
                            fontColor: "white",
                            fontFamily: "roboto",
                        },
                        position: "right",
                    },

                    title: {
                        display: false,
                        padding: 30,
                        text: "Nº de Respondentes/Campi",
                        fontSize: 25,
                        fontColor: "#d3d3d3",
                        fontFamily: "roboto",
                    },

                    scales: {
                        yAxes:[
                            {
                                display: true,
                                gridLines: {
                                    display: false,
                                },

                                barThickness: 23,

                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 14,
                                    fontColor: "#e6e7ea",
                                    fontFamily: 'Roboto',
                                },
                            },
                        ],

                        xAxes:[
                            {
                                display: false,
                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 14,
                                    fontColor: "#e6e7ea",
                                    fontFamily: 'Roboto',
                                },

                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                    },
                }}
            />     
        </div>
    );
};

export default Gtres;
