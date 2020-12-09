import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Como você avalia a atuação da UFCG diante da pandemia? */

const GdezoitoCampi = () => {
    return(
        <div className="gContainer" id="g18Campi">
            <HorizontalBar
                data={{
                    labels: ['Excelente', 'Boa', 'Regular', 'Ruim', 'Péssima', 'Não Responderam'],
                    datasets: [
                        {
                            label: "Campina Grande",
                            hidden: false,
                            data: [20, 99, 222, 109, 111, 14],
                            backgroundColor:  '#EEAD2D',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Cajazeiras",
                            hidden: true,
                            data: [12, 67, 83, 34, 29, 13],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Cuité",
                            hidden: true,
                            data: [12, 102, 131, 60, 61, 11],
                            backgroundColor: '#753bff',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Patos",
                            hidden: true,
                            data: [1, 9, 15, 16, 19, 1],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Pombal",
                            hidden: true,
                            data: [5, 40, 56, 36, 20, 4],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Sousa",
                            hidden: true,
                            data: [2, 14, 52, 39, 41, 1],
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

export default GdezoitoCampi;