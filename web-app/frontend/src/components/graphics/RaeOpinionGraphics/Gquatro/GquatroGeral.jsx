import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* você acredita que as vagas ofertadas no RAE foram suficientes? */

const GquatroGeral = () => {
    return(
        <div className="gContainer" id="g4Geral">
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
                height={230}
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
                        text: "Vagas RAE suficientes?",
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
    )
};

export default GquatroGeral;