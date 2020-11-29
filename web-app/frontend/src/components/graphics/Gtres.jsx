import React from 'react';
import { Pie } from 'react-chartjs-2';

const Gtres = () => {
    return (
        <div className="gtres">
            <Pie
                data={{
                    labels: [
                        "Campina Grande", "Cuité", "Cajazeiras",
                        "Pombal", "Sousa", "Patos", "Sumé"
                    ],
                
                    datasets: [
                        {
                            data: [575, 377, 238, 161, 149, 61, 6],
                            backgroundColor: ["#EEAD2D", '#1DB954', '#172bc2', '#c42727', '#1bc4b9', '#c314c9', '#e6e617'],
                            hoverBackgroundColor: ["#b8831c", '#00ff5a', '#001eff', '#ed0909', '#00ffee', '#e60ced', '#ffff00'],
                        },
                    ],
                }}
                height={400}
                width={100}
                options={{
                    maintainAspectRatio: false,

                    layout: {
                        padding: 10,
                    },

                    legend: {
                        display: true,
                        labels: {
                            fontSize: 15,
                            fontColor: "white",
                            fontFamily: "roboto",
                        },
                        position: "right",
                    },

                    title: {
                        display: true,
                        padding: 60,
                        text: "Nº de Respondentes/Campi",
                        fontSize: 25,
                        fontColor: "#d3d3d3",
                        fontFamily: "roboto",
                    },
                }}
            />     
        </div>
    );
};

export default Gtres;
