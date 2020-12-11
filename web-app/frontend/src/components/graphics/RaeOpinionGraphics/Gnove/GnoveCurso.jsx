import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Você acredita que o RAE afetou sua saúde mental para: */

const GnoveCurso = () => {
    return(
        <div className="gContainer" id="g9Curso">
            <HorizontalBar 
                data={{
                    labels: ['Melhor', 'Pior', 'Não Afetou', 'Não responderam'],
                    datasets: [
                        {
                            label: 'Direito',
                            hidden: true,
                            data: [5, 99, 26, 8],
                            backgroundColor: '#F0D267',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Eng Civil',
                            hidden: true,
                            data: [4, 76, 39, 9],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Ciência da Computação',
                            hidden: false,
                            data: [20, 51, 39, 4],
                            backgroundColor: '#F0BB00',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Eng Elétrica',
                            hidden: true,
                            data: [12, 58, 35, 7],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Geografia',
                            hidden: true,
                            data: [3, 52, 35, 9],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Ciências Biológicas',
                            hidden: true,
                            data: [3, 58, 18, 13],
                            backgroundColor: '#F0EE67',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Nutrição',
                            hidden: true,
                            data: [0, 60, 21, 9],
                            backgroundColor: '#00F0CA',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Farmácia',
                            hidden: true,
                            data: [3, 49, 24, 6],
                            backgroundColor: '#F0EC00',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Enfermagem',
                            hidden: true,
                            data: [1, 51, 14, 7],
                            backgroundColor: '#6C00F0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Matemática',
                            hidden: true,
                            data: [1, 30, 34, 6],
                            backgroundColor: '#F04500',
                            barThickness: 'flex',
                        },

                        {
                            label: 'História',
                            hidden: true,
                            data: [3, 39, 15, 9],
                            backgroundColor: '#9DF067',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Medicina',
                            hidden: true,
                            data: [4, 35, 24, 0],
                            backgroundColor: '#009BF0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Design',
                            hidden: true,
                            data: [2, 21, 23, 7],
                            backgroundColor: '#5EF000',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Química',
                            hidden: true,
                            data: [0, 31, 13, 2],
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

export default GnoveCurso;