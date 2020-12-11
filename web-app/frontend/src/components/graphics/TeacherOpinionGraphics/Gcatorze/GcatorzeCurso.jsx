import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Na sua experiência, o atendimento individual dos professores aos alunos está sendo: */

const GcatorzeCurso = () => {
    return(
        <div className="gContainer" id="g14Curso">
            <HorizontalBar
                data={{
                    labels: ['Excelente', 'Bom', 'Razoável','Insuficiente', 'Inexistente', 'Não Responderam'],
                    datasets: [
                        {
                            label: 'Direito',
                            hidden: true,
                            data: [3, 26, 45, 46, 13, 5],
                            backgroundColor: '#F0D267',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Eng Civil',
                            hidden: true,
                            data: [7, 21, 47, 39, 10, 4],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Ciência da Computação',
                            hidden: false,
                            data: [10, 36, 33, 16, 8, 11],
                            backgroundColor: '#F0BB00',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Eng Elétrica',
                            hidden: true,
                            data: [1, 24, 30, 31, 15, 11],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Geografia',
                            hidden: true,
                            data: [3, 28, 38, 12, 11, 7],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Ciências Biológicas',
                            hidden: true,
                            data: [6, 30, 30, 14, 6, 6],
                            backgroundColor: '#F0EE67',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Nutrição',
                            hidden: true,
                            data: [6, 43, 19, 14, 6, 2],
                            backgroundColor: '#00F0CA',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Farmácia',
                            hidden: true,
                            data: [4, 23, 19, 20, 14, 2],
                            backgroundColor: '#F0EC00',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Enfermagem',
                            hidden: true,
                            data: [4, 30, 23, 7, 3, 6],
                            backgroundColor: '#6C00F0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Matemática',
                            hidden: true,
                            data: [2, 23, 22, 14, 4, 6],
                            backgroundColor: '#F04500',
                            barThickness: 'flex',
                        },

                        {
                            label: 'História',
                            hidden: true,
                            data: [10, 21, 23, 3, 2, 7],
                            backgroundColor: '#9DF067',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Medicina',
                            hidden: true,
                            data: [0, 10, 16, 24, 9, 4],
                            backgroundColor: '#009BF0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Design',
                            hidden: true,
                            data: [2, 15, 18, 10, 3, 5],
                            backgroundColor: '#5EF000',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Química',
                            hidden: true,
                            data: [0, 4, 16, 14, 10, 2],
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

export default GcatorzeCurso;