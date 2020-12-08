import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Na sua opinião, os professores são tolerantes com imprevistos que impossibilitem a realização de atividades? */

const GonzeCampi = () => {
    return(
        <div className="gContainer" id="g11Campi">
            <HorizontalBar
                data={{
                    labels: ['Sim', 'Não', 'Não responderam'],
                    datasets: [
                        {
                            label: "Campina Grande",
                            hidden: false,
                            data: [335, 173, 67],
                            backgroundColor: '#EEAD2D',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Cajazeiras",
                            hidden: true,
                            data: [145, 60, 33],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Cuité",
                            hidden: true,
                            data: [227, 113, 37],
                            backgroundColor: '#753bff',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Patos",
                            hidden: true,
                            data: [16, 34, 11],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Pombal",
                            hidden: true,
                            data: [93, 53, 15],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Sousa",
                            hidden: true,
                            data: [73, 56, 20],
                            backgroundColor: '#cf13cb',
                            barThickness: 'flex',
                        },                                                                                                  
                    ],
                }}
                height={480}
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

export default GonzeCampi;