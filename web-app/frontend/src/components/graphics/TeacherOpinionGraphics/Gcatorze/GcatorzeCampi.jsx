import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Na sua experiência, o atendimento individual dos professores aos alunos está sendo: */

const GcatorzeCampi = () => {
    return(
        <div className="gContainer" id="g14Campi">
            <HorizontalBar
                data={{
                    labels: ['Excelente', 'Bom', 'Razoável','Insuficiente', 'Inexistente', 'Não Responderam'],
                    datasets: [
                        {
                            label: "Campina Grande",
                            hidden: false,
                            data: [32, 143, 167, 118, 57, 58],
                            backgroundColor: '#eead2d',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Cajazeiras",
                            hidden: true,
                            data: [16, 65, 78, 40, 21, 18],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Cuité",
                            hidden: true,
                            data: [18, 128, 106, 67, 38, 20],
                            backgroundColor: '#753bff',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Patos",
                            hidden: true,
                            data: [4, 12, 20, 14, 7, 4],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Pombal",
                            hidden: true,
                            data: [7, 31, 56, 53, 10, 4],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Sousa",
                            hidden: true,
                            data: [3, 29, 52, 47, 13, 5],
                            backgroundColor: '#cf13cb',
                            barThickness: 'flex',
                        },                                                                                                                                              
                    ],
                }}
                height={700}
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

export default GcatorzeCampi;