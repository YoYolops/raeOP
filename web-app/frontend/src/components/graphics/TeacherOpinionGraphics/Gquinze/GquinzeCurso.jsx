import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Na sua opinião, em comparação com o regime presencial, no RAE os professores estão: */

const GquinzeCurso = () => {
    return(
        <div className="gContainer" id="g15Curso">
            <HorizontalBar
                data={{
                    labels: ['Mais Exigentes', 'Tão Exigentes Quanto', 'Menos Exigentes', 'Não Responderam'],
                    datasets: [
                        {
                            label: "Direito",
                            hidden: true,
                            data: [73, 39, 19, 7],
                            backgroundColor: '#F0D267',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Engenharia Civil",
                            hidden: true,
                            data: [65, 41, 15, 7],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Ciência da Computação",
                            hidden: false,
                            data: [35, 35, 32, 12],
                            backgroundColor: '#F0BB00',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Engenharia Elétrica",
                            hidden: true,
                            data: [53, 45, 11, 3],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Geografia",
                            hidden: true,
                            data: [38, 44, 12, 5],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Ciências Biológicas",
                            hidden: true,
                            data: [36, 24, 22, 10],
                            backgroundColor: '#F0EE67',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Nutrição",
                            hidden: true,
                            data: [40, 23, 16, 11],
                            backgroundColor: '#00F0CA',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Farmácia",
                            hidden: true,
                            data: [47, 17, 11, 7],
                            backgroundColor: '#F0EC00',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Enfermagem",
                            hidden: true,
                            data: [31, 24, 12, 6],
                            backgroundColor: '#6C00F0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Matemática",
                            hidden: true,
                            data: [23, 25, 10, 13],
                            backgroundColor: '#F04500',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "História",
                            hidden: true,
                            data: [12, 23, 19, 12],
                            backgroundColor: '#9DF067',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Medicina",
                            hidden: true,
                            data: [22, 16, 15, 10],
                            backgroundColor: '#009BF0',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Design",
                            hidden: true,
                            data: [9, 31, 8, 5],
                            backgroundColor: '#5EF000',
                            barThickness: 'flex',
                        },
                        
                        {
                            label: "Química",
                            hidden: true,
                            data: [24, 10, 6, 6],
                            backgroundColor: '#E800F0',
                            barThickness: 'flex',
                        },                        
                    ],
                }}
                height={600}
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

export default GquinzeCurso;