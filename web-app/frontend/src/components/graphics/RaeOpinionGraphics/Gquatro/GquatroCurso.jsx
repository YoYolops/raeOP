import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

/* você acredita que as vagas ofertadas no RAE foram suficientes? */

const GquatroCurso = () => {
    return(
        <div className="gContainer" id="g4Curso">
            <HorizontalBar 
                data={{
                    labels: ["Sim", "Não", "Não Responderam"],
                    datasets: [
                        {
                            label: 'Direito',
                            hidden: true,
                            data: [93, 15, 30],
                            backgroundColor: '#F0D267',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Eng Civil',
                            hidden: true,
                            data: [35, 75, 18],
                            backgroundColor: '#00F042',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Ciência da Computação',
                            hidden: false,
                            data: [74, 29, 11],
                            backgroundColor: '#F0BB00',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Eng Elétrica',
                            hidden: true,
                            data: [31, 71, 10],
                            backgroundColor: '#0017F0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Geografia',
                            hidden: true,
                            data: [46, 28, 25],
                            backgroundColor: '#F00106',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Ciências Biológicas',
                            hidden: true,
                            data: [27, 55, 10],
                            backgroundColor: '#F0EE67',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Nutrição',
                            hidden: true,
                            data: [22, 55, 13],
                            backgroundColor: '#00F0CA',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Farmácia',
                            hidden: true,
                            data: [25, 46, 11],
                            backgroundColor: '#F0EC00',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Enfermagem',
                            hidden: true,
                            data: [18, 45, 10],
                            backgroundColor: '#6C00F0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Matemática',
                            hidden: true,
                            data: [25, 33, 13],
                            backgroundColor: '#F04500',
                            barThickness: 'flex',
                        },

                        {
                            label: 'História',
                            hidden: true,
                            data: [22, 27, 17],
                            backgroundColor: '#9DF067',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Medicina',
                            hidden: true,
                            data: [37, 20, 6],
                            backgroundColor: '#009BF0',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Design',
                            hidden: true,
                            data: [26, 19, 8],
                            backgroundColor: '#5EF000',
                            barThickness: 'flex',
                        },

                        {
                            label: 'Química',
                            hidden: true,
                            data: [14, 28, 4],
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

export default GquatroCurso;