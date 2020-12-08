import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Na sua opinião, em comparação com o regime presencial, no RAE os professores estão: */

const GquinzeCampi = () => {
    return(
        <div className="gContainer" id="g15Campi">
            <HorizontalBar
                data={{
                    labels: ['Mais Exigentes', 'Tão Exigentes Quanto', 'Menos Exigentes', 'Não Responderam'],
                    datasets: [
                        {
                            label: "Campina Grande",
                            hidden: false,
                            data: [221, 197, 100, 57],
                            backgroundColor: '#eead2d',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Cajazeiras",
                            hidden: true,
                            data: [79, 83, 51, 25],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Cuité",
                            hidden: true,
                            data: [164, 106, 60, 47],
                            backgroundColor: '#753bff',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Patos",
                            hidden: true,
                            data: [32, 14, 9, 6],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Pombal",
                            hidden: true,
                            data: [84, 47, 20, 10],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Sousa",
                            hidden: true,
                            data: [77, 41, 24, 7],
                            backgroundColor: '#cf13cb',
                            barThickness: 'flex',
                        },                                                                                                                                                
                    ],
                }}
                height={550}
                width={100}
                options={{
                    maintainAspectRatio: false,
                    align: 'center',
                    layout: {
                        padding: 60,
                    },

                    legend: {
                        display: true,
                        labels: {
                            fontSize: 13,
                            fontColor: "#e6e7ea",
                            fontFamily: 'Roboto',
                            boxWidth: 15,
                        },

                    },

                    title: {
                        display: false,
                        padding: 20,
                        text: "por Campi",
                        fontSize: 25,
                        fontColor: "#e6e7ea",
                        fontFamily: 'Roboto',
                    },

                    scales: {
                        yAxes:[
                            {
                                barPercentage: .9,

                                gridLines: {
                                    display: false,
                                },

                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 14,
                                    fontColor: "#e6e7ea",
                                    fontFamily: 'Roboto',
                                },

                                barThickness: 'flex',
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

export default GquinzeCampi;