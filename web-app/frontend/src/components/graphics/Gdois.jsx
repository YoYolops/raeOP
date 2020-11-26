import React from 'react';
import { Bar } from 'react-chartjs-2';

const Gdois = () => {
    return (
        <div className="gdois">
            <Bar
                data = {{
                    labels: [
                        '1º', '5º', '3º', '7º', '2º', '4º', '6º', '8º', '9º', '10º +'
                    ],

                    datasets: [
                        {
                            data: [
                                273, 254, 253, 167, 155, 136, 105, 95, 74, 55 
                            ],
                            backgroundColor: "#EEAD2D",
                            barThickness: "flex",
                        },
                    ],
                }}

                height={600}
                width={100}
                options={{
                    maintainAspectRatio: false,

                    layout: {
                        padding: 60,
                    },

                    legend: {
                        display: false,
                    },

                    title: {
                        display: true,
                        padding: 10,
                        text: "Nº de Respondentes/Período",
                        fontSize: 25,
                        fontColor: "#d3d3d3"
                    },

                    scales: {
                        yAxes:[
                            {
                                display: false,
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                },
                            },
                        ],

                        xAxes:[
                            {
                                display: true,
                                gridLines: {
                                    color: "rgba(0,0,0,0)",
                                },

                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 14,
                                    fontColor: "#d3d3d3"
                                },
                            }
                        ],
                    },
                }}
            />
        </div>
    );
};

export default Gdois;