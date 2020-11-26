import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Gráfico da pergunta 4 GERAL */

const Gquatro = () => {
    return(
        <div className="gquatro">
            <HorizontalBar 
                data={{
                    labels: ["Sim", "Não", "Não Responderam"],
                    datasets: [
                        {
                            label: '',
                            data: [623, 706, 238],
                            backgroundColor: '#EEAD2D',
                            barThickness: 'flex',
                            hoverBackgroundColor: "#b8831c",
                        },
                    ],
                }}
                height={300}
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
                        text: "p4",
                        fontSize: 25,
                        fontColor: "#d3d3d3",
                        fontFamily: "roboto",
                    },

                    scales:{
                        yAxes: [
                            {
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                },

                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 14,
                                    fontColor: "#d3d3d3",
                                    fontStyle: "bold",
                                    fontFamily: "roboto"
                                },
                            },
                        ],

                        xAxes: [
                            {
                                display: false,
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                },

                                ticks: {
                                    display: false,
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    )
};

export default Gquatro;