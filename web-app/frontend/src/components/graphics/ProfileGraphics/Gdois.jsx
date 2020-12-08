import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const Gdois = () => {
    return (
        <div className="gContainer" id="g2">
            <HorizontalBar
                data = {{
                    labels: [
                        '1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '10º +'
                    ],

                    datasets: [
                        {
                            label: "Quantidade",
                            data: [
                                273, 155, 253, 136, 254, 105, 167, 95, 74, 55 
                            ],
                            backgroundColor: "#EEAD2D",
                            barThickness: "flex",
                            hoverBackgroundColor: "#b8831c",
                        },
                    ],
                }}

                height={485}
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
                    },

                    title: {
                        display: false,
                        padding: 10,
                        text: "Nº de Respondentes/Período",
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

                    tooltips: {
                        mode: 'index',
                    },
                }}
            />
        </div>
    );
};

export default Gdois;