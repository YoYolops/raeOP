import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Como você avalia a atuação da UFCG diante da pandemia? */

const GdezenoveCurso = () => {
    return(
        <div className="gContainer" id="g19Curso">
            <HorizontalBar
                data={{
                    labels: ['Excelente', 'Bom', 'Regular', 'Ruim', 'Péssimo', 'Não Responderam'],
                    datasets: [
                        {
                            label: "Direito",
                            hidden: true,
                            data: [9, 28, 40, 26, 18, 17],
                            backgroundColor: '#F0D267',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Engenharia Civil",
                            hidden: true,
                            data: [51, 36, 27, 6, 3, 5],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Ciência da Computação",
                            hidden: false,
                            data: [43, 49, 8, 3, 1, 10],
                            backgroundColor: '#F0BB00',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Engenharia Elétrica",
                            hidden: true,
                            data: [41, 35, 19, 7, 1, 9],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Geografia",
                            hidden: true,
                            data: [18, 43, 29, 1, 2, 6],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Ciências Biológicas",
                            hidden: true,
                            data: [13, 41, 25, 7, 2, 4],
                            backgroundColor: '#F0EE67',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Nutrição",
                            hidden: true,
                            data: [8, 28, 34, 11, 6, 3],
                            backgroundColor: '#00F0CA',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Farmácia",
                            hidden: true,
                            data: [12, 23, 29, 6, 8, 4],
                            backgroundColor: '#F0EC00',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Enfermagem",
                            hidden: true,
                            data: [15, 29, 17, 3, 3, 6],
                            backgroundColor: '#6C00F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Matemática",
                            hidden: true,
                            data: [17, 31, 15, 1, 0, 7],
                            backgroundColor: '#F04500',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "História",
                            hidden: true,
                            data: [27, 30, 5, 0, 0, 4],
                            backgroundColor: '#9DF067',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Medicina",
                            hidden: true,
                            data: [3, 11, 14, 12, 22, 1],
                            backgroundColor: '#009BF0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Design",
                            hidden: true,
                            data: [16, 25, 5, 3, 1, 3],
                            backgroundColor: '#5EF000',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Química",
                            hidden: true,
                            data: [7, 21, 11, 3, 2, 2],
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

export default GdezenoveCurso;