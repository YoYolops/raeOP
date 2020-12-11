import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* Na sua opinião, os professores são tolerantes com imprevistos que impossibilitem a realização de atividades? */

const GonzeCurso = () => {
    return(
        <div className="gContainer" id="g11Curso">
            <HorizontalBar 
                data={{
                    labels: ['Sim', 'Não', 'Não responderam'],
                    datasets: [
                        {
                            label: 'Direito',
                            hidden: true,
                            data: [66, 54, 18],
                            backgroundColor: '#F0D267',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Eng Civil',
                            hidden: true,
                            data: [71, 42, 15],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Ciência da Computação',
                            hidden: false,
                            data: [77, 24, 13],
                            backgroundColor: '#F0BB00',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Eng Elétrica',
                            hidden: true,
                            data: [49, 49, 14],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Geografia',
                            hidden: true,
                            data: [61, 25, 13],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Ciências Biológicas',
                            hidden: true,
                            data: [41, 37, 14],
                            backgroundColor: '#F0EE67',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Nutrição',
                            hidden: true,
                            data: [60, 18, 12],
                            backgroundColor: '#00F0CA',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Farmácia',
                            hidden: true,
                            data: [41, 37, 4],
                            backgroundColor: '#F0EC00',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Enfermagem',
                            hidden: true,
                            data: [51, 14, 8],
                            backgroundColor: '#6C00F0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Matemática',
                            hidden: true,
                            data: [46, 17, 8],
                            backgroundColor: '#F04500',
                            barThickness: 'flex',
                        },

                        {
                            label: 'História',
                            hidden: true,
                            data: [48, 7, 11],
                            backgroundColor: '#9DF067',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Medicina',
                            hidden: true,
                            data: [34, 22, 7],
                            backgroundColor: '#009BF0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Design',
                            hidden: true,
                            data: [41, 8, 4],
                            backgroundColor: '#5EF000',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Química',
                            hidden: true,
                            data: [19, 23, 4],
                            backgroundColor: '#E800F0',
                            barThickness: 'flex',
                        },
                    ],
                }}
                height={500}
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

export default GonzeCurso;