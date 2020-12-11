import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Como você avalia a atuação da UFCG diante da pandemia? */

const GdezoitoCurso = () => {
    return(
        <div className="gContainer" id="g18Curso">
            <HorizontalBar
                data={{
                    labels: ['Excelente', 'Boa', 'Regular', 'Ruim', 'Péssima', 'Não Responderam'],
                    datasets: [
                        {
                            label: "Direito",
                            hidden: true,
                            data: [1, 10, 46, 39, 41, 1],
                            backgroundColor: '#F0D267',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Engenharia Civil",
                            hidden: true,
                            data: [4, 31, 45, 28, 15, 5],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Ciência da Computação",
                            hidden: false,
                            data: [8, 26, 42, 22, 13, 3],
                            backgroundColor: '#F0BB00',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Engenharia Elétrica",
                            hidden: true,
                            data: [5, 21, 34, 21, 28, 3],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Geografia",
                            hidden: true,
                            data: [7, 41, 32, 10, 2, 7],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Ciências Biológicas",
                            hidden: true,
                            data: [3, 21, 30, 17, 18, 3],
                            backgroundColor: '#F0EE67',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Nutrição",
                            hidden: true,
                            data: [2, 17, 38, 15, 16, 2],
                            backgroundColor: '#00F0CA',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Farmácia",
                            hidden: true,
                            data: [1, 13, 29, 18, 15, 6],
                            backgroundColor: '#F0EC00',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Enfermagem",
                            hidden: true,
                            data: [2, 16, 20, 21, 14, 0],
                            backgroundColor: '#6C00F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Matemática",
                            hidden: true,
                            data: [7, 33, 24, 3, 2, 2],
                            backgroundColor: '#F04500',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "História",
                            hidden: true,
                            data: [3, 15, 30, 10, 3, 5],
                            backgroundColor: '#9DF067',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Medicina",
                            hidden: true,
                            data: [0, 1, 7, 15, 40, 0],
                            backgroundColor: '#009BF0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Design",
                            hidden: true,
                            data: [0, 16, 23, 9, 3, 2],
                            backgroundColor: '#5EF000',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Química",
                            hidden: true,
                            data: [1, 16, 15, 6, 8, 0],
                            backgroundColor: '#E800F0',
                            barThickness: 'flex',
                        },                                                                          
                    ],
                }}
                height={800}
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
                        text: "por Curso",
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

export default GdezoitoCurso;