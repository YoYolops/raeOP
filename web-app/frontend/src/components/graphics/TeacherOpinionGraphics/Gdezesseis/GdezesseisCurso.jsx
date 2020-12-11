import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Na sua opinião, em comparação com o regime presencial, no RAE os professores estão: */

const GdezesseisCurso = () => {
    return(
        <div className="gContainer" id="g16Curso">
            <HorizontalBar
                data={{
                    labels: ['Muito Maior', 'Maior', 'Igual', 'Menor', 'Muito Menor','Não Responderam'],
                    datasets: [
                        {
                            label: "Direito",
                            hidden: true,
                            data: [79, 33, 17, 8, 1, 0],
                            backgroundColor: '#F0D267',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Engenharia Civil",
                            hidden: true,
                            data: [67, 40, 14, 3, 1, 3],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Ciência da Computação",
                            hidden: false,
                            data: [41, 38, 19, 9, 0, 7],
                            backgroundColor: '#F0BB00',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Engenharia Elétrica",
                            hidden: true,
                            data: [57, 37, 15, 0, 1, 2],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Geografia",
                            hidden: true,
                            data: [44, 29, 21, 2, 2, 1],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Ciências Biológicas",
                            hidden: true,
                            data: [46, 27, 7, 5, 0, 7],
                            backgroundColor: '#F0EE67',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Nutrição",
                            hidden: true,
                            data: [40, 28, 14, 0, 1, 7],
                            backgroundColor: '#00F0CA',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Farmácia",
                            hidden: true,
                            data: [52, 17, 7, 4, 0, 2],
                            backgroundColor: '#F0EC00',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Enfermagem",
                            hidden: true,
                            data: [37, 24, 7, 2, 0, 3],
                            backgroundColor: '#6C00F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Matemática",
                            hidden: true,
                            data: [29, 18, 17, 2, 1, 4],
                            backgroundColor: '#F04500',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "História",
                            hidden: true,
                            data: [12, 20, 13, 11, 1, 9],
                            backgroundColor: '#9DF067',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Medicina",
                            hidden: true,
                            data: [19, 24, 9, 6, 1, 4],
                            backgroundColor: '#009BF0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Design",
                            hidden: true,
                            data: [7, 16, 20, 5, 0, 5],
                            backgroundColor: '#5EF000',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Química",
                            hidden: true,
                            data: [29, 10, 1, 2, 0, 4],
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

export default GdezesseisCurso;