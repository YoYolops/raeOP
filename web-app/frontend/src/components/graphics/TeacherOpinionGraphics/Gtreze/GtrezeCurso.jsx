import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Em geral, você acha que a atuação dos professores no RAE é/está sendo: */

const GtrezeCurso = () => {
    return(
        <div className="gContainer" id="g13Curso">
            <HorizontalBar
                data={{
                    labels: ['Excelente', 'Boa', 'Razoável', 'Ruim', 'Péssima', 'Não Responderam'],
                    datasets: [
                        {
                            label: 'Direito',
                            hidden: true,
                            data: [2, 18, 59, 36, 20, 3],
                            backgroundColor: '#F0D267',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Eng Civil',
                            hidden: true,
                            data: [2, 42, 59, 20, 4, 1],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Ciência da Computação',
                            hidden: false,
                            data: [15, 49, 38, 9, 2, 1],
                            backgroundColor: '#F0BB00',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Eng Elétrica',
                            hidden: true,
                            data: [6, 33, 42, 18, 12, 1],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Geografia',
                            hidden: true,
                            data: [2, 51, 34, 7, 3, 2],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Ciências Biológicas',
                            hidden: true,
                            data: [6, 33, 29, 13, 8, 3],
                            backgroundColor: '#F0EE67',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Nutrição',
                            hidden: true,
                            data: [8, 40, 32, 7, 3, 0],
                            backgroundColor: '#00F0CA',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Farmácia',
                            hidden: true,
                            data: [4, 31, 34, 13, 0, 0],
                            backgroundColor: '#F0EC00',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Enfermagem',
                            hidden: true,
                            data: [11, 40, 17, 4, 0, 0],
                            backgroundColor: '#6C00F0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Matemática',
                            hidden: true,
                            data: [13, 30, 26, 0, 1, 1],
                            backgroundColor: '#F04500',
                            barThickness: 'flex',
                        },

                        {
                            label: 'História',
                            hidden: true,
                            data: [13, 34, 14, 1, 1, 3],
                            backgroundColor: '#9DF067',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Medicina',
                            hidden: true,
                            data: [0, 17, 32, 10, 3, 1],
                            backgroundColor: '#009BF0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Design',
                            hidden: true,
                            data: [10, 24, 16, 0, 1, 2],
                            backgroundColor: '#5EF000',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Química',
                            hidden: true,
                            data: [0, 13, 16, 12, 5, 0],
                            backgroundColor: '#E800F0',
                            barThickness: 'flex',
                        },
                    ],
                }}
                height={750}
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

export default GtrezeCurso;