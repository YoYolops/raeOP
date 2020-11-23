import React from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';
import './teste.css'

const BarChart = () => {
    return (
        <div className="caps">
            <HorizontalBar 
                data = {{
                    labels: [
                        "Administração",
                        "Agronomia",
                        "Arquitetura e Urbanismo",
                        "Arte e Mídia",
                        "Ciência da Computação",
                        "Ciências Biológicas",
                        "Ciências Contábeis",
                        "Ciências Econômicas",
                        "Ciências Sociais",
                        "Comunicação Social",
                        "Design",
                        "Direito",
                        "Enfermagem",
                        "Engenharia Agrícola",
                        "Engenharia Ambiental",
                        "Engenharia Civil",
                        "Engenharia de Alimentos",
                        "Engenharia de Biossistemas",
                        "Engenharia de Biotecnologia e Bioprocessos",
                        "Engenharia de Materiais",
                        "Engenharia de Minas",
                        "Engenharia de Petróleo",
                        "Engenharia de Produção",
                        "Engenharia Elétrica",
                        "Engenharia Florestal",
                        "Engenharia Mecânica",
                        "Engenharia Química",
                        "Estatística",
                        "Farmácia",
                        "Filosofia",
                        "Física",
                        "Geografia",
                        "Gestão Pública",
                        "História",
                        "Letras",
                        "Matemática",
                        "Medicina",
                        "Medicina Veterinária",
                        "Meteorologia",
                        "Nutrição",
                        "Odontologia",
                        "Pedagogia",
                        "Psicologia",
                        "Química"
                    ],

                    datasets: [
                        {
                            label: "Nº de Respondentes",
                            data: [
                                38,5, 5, 34, 114, 92, 2, 3, 5, 1,
                                53, 138, 73, 8, 25, 128, 24, 1, 2, 2,
                                2, 37, 7, 112, 8, 12, 7, 25, 82, 9,
                                10, 99, 1, 66, 25, 71, 63, 4, 4, 90,
                                4, 6, 24, 46
                            ],
                            backgroundColor: '#FFBF00',
                            borderRadius: 3,
                            barThickness: 10
                        }
                    ],

                

                }}
                height = {400}
                width = {600}
                options = {{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes:[
                            {
                                ticks: {
                                    beginAtZero: true
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    )
};

export default BarChart;