document.addEventListener("DOMContentLoaded", function (event) {
    var ctx = document.getElementById("line_chart_by_year");
    var line_chart_1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: window.climate_chart_1_labels,
            datasets: [{
                label: 'Media Concentración CO2',
                data: [
                        315.241,
                        315.9741667,
                        316.9075,
                        317.6375,
                        318.4508333,
                        318.9941667,
                        319.6175,
                        320.0441667,
                        321.3833333,
                        322.1575,
                        323.045,
                        324.6241667,
                        325.68,
                        326.32,
                        327.4533333,
                        329.6766667,
                        330.185,
                        331.1158333,
                        332.04,
                        333.8316667,
                        335.4033333,
                        336.8416667,
                        338.7516667,
                        340.105,
                        341.4475,
                        343.0541667,
                        344.65,
                        346.1166667,
                        347.4208333,
                        349.1941667,
                        351.5675,
                        353.1208333,
                        354.3941667,
                        355.6075,
                        356.4458333,
                        357.1,
                        358.8325,
                        360.82,
                        362.6066667,
                        363.7291667,
                        366.6991667,
                        368.3775,
                        369.5491667,
                        371.1425,
                        373.2791667,
                        375.8016667,
                        377.5225,
                        379.7958333,
                        381.8958333,
                        383.7916667,
                        385.6041667,
                        387.43,
                        389.8991667,
                        391.6516667,
                        393.8533333,
                        396.5208333,
                        398.6475,
                        400.8341667,
                        404.2091667,
                        406.5283333,
                        408.5593889,
                        411.4212778
                    ],
                borderColor: 'rgba(255, 77, 22, 1)',
                backgroundColor: 'rgba(0,0,0,0)'
                }]
        },
        options: {
            title: {
                display: false,
                text: 'Análisis concentraciones de CO2 - 1958 a 2019',
                fontSize: 16,
                fontFamily: '"Work Sans",sans-serif',
                fontColor: '#212529'
            },
            legend: {
                display: true,
                labels: {
                    fontName: '"Work Sans",sans-serif',
                    fontColor: '#212529',
                    fontSize: 13
                }
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            },
            layout: {
                padding: {
                    bottom: 20
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        // beginAtZero: true,
                        fontFamily: '"Work Sans",sans-serif',
                        fontColor: '#212529'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'ppm',
                        fontFamily: '"Work Sans",sans-serif',
                        fontColor: '#212529'
                    }
                    }],
                xAxes: [{
                    ticks: {
                        // beginAtZero: true,
                        fontFamily: '"Work Sans",sans-serif',
                        fontColor: '#212529'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'años',
                        fontFamily: '"Work Sans",sans-serif',
                        fontColor: '#212529'
                    }
                    }]
            }
        }
    });

});