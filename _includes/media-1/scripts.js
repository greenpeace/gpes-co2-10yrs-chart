document.addEventListener("DOMContentLoaded", function (event) {
    var ctx = document.getElementById("line_chart_by_year");
    var line_chart_1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: window.climate_chart_1_labels,
            datasets: [{
                label: 'Media Concentración CO2',
                data: window.climate_chart_1_data,
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
                        fontColor: '#212529',
                        autoSkip: false
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