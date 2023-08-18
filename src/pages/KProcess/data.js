export var options = {
    series: [20,13],
    // fill:{
    //     colors: ['#8BD742', '#BCC1C8', '#78AEFF', '']
    // },
    colors: ['#d10f0f', '#78AEFF'],
    chart: {
        width: 380,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            // startAngle: 10,
            donut: {
                // size: '90%',
                dataLabels: {
                    enabled: false
                },
                labels: {
                    show: true,
                    name: {
                        show: true,
                        // offsetY: 38,
                        formatter: () => 'Risk Review'
                    },
                    value: {
                        show: true,
                        color: '#000',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        fontSize:"20px",
                        offsetY: 5,
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        color: '#000',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize:"12px",
                        formatter: (w) => {
                            const total = w.globals.seriesTotals.reduce(
                                (a, b) => a + b,
                                0
                            );
                            return `${total}%`;
                        }
                    }
                }
            }
        },
    },
    labels: ["Comedy", "Action"],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['horizontalLines', 'horizontalLines'],
        },
    },
    legend: {
        // position: 'bottom',
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 100
            },
            legend: {
                // position: 'bottom',
                show: false
            }
        }
    }]
};
export var options2 = {
    series: [40, 21],
    // fill:{
    //     colors: ['#8BD742', '#BCC1C8', '#78AEFF', '']
    // },
    colors: ['#ffbf00', '#78AEFF'],
    chart: {
        width: 380,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            // startAngle: 10,
            donut: {
                // size: '90%',
                dataLabels: {
                    enabled: false
                },
                labels: {
                    show: true,
                    name: {
                        show: true,
                        // offsetY: 38,
                        formatter: () => 'Impact Review'
                    },
                    value: {
                        show: true,
                        color: '',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        fontSize:"20px",
                        offsetY: 5,
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        color: '',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize:"12px",
                        formatter: (w) => {
                            const total = w.globals.seriesTotals.reduce(
                                (a, b) => a + b,
                                0
                            );
                            return `${total}%`;
                        }
                    }
                }
            }
        },
    },
    labels: ["Comedy", "Action"],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['horizontalLines', 'horizontalLines'],
        },
    },
    legend: {
        // position: 'bottom',
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 100
            },
            legend: {
                // position: 'bottom',
                show: false
            }
        }
    }]
};
export var options3 = {
    series: [70, 14],
    // fill:{
    //     colors: ['#8BD742', '#BCC1C8', '#78AEFF', '']
    // },
    colors: ['#39c734', '#78AEFF'],
    chart: {
        width: 380,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            // startAngle: 10,
            donut: {
                // size: '90%',
                dataLabels: {
                    enabled: false
                },
                labels: {
                    show: true,
                    name: {
                        show: true,
                        // offsetY: 38,
                        formatter: () => 'BCP'
                    },
                    value: {
                        show: true,
                        color: '',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        fontSize:"20px",
                        offsetY: 5,
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        color: '',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize:"12px",
                        formatter: (w) => {
                            const total = w.globals.seriesTotals.reduce(
                                (a, b) => a + b,
                                0
                            );
                            return `${total}%`;
                        }
                    }
                }
            }
        },
    },
    labels: ["Comedy", "Action"],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['horizontalLines', 'horizontalLines'],
        },
    },
    legend: {
        // position: 'bottom',
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 100
            },
            legend: {
                // position: 'bottom',
                show: false
            }
        }
    }]
};

export var options4 = {
    series: [20,13],
    // fill:{
    //     colors: ['#8BD742', '#BCC1C8', '#78AEFF', '']
    // },
    colors: ['#d10f0f', '#78AEFF'],
    chart: {
        width: 380,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            // startAngle: 10,
            donut: {
                // size: '90%',
                dataLabels: {
                    enabled: false
                },
                labels: {
                    show: true,
                    name: {
                        show: true,
                        // offsetY: 38,
                        formatter: () => 'Survival Time'
                    },
                    value: {
                        show: true,
                        color: '',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        fontSize:"20px",
                        offsetY: 5,
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        color: '',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize:"12px",
                        formatter: (w) => {
                            const total = w.globals.seriesTotals.reduce(
                                (a, b) => a + b,
                                0
                            );
                            return `${total}%`;
                        }
                    }
                }
            }
        },
    },
    labels: ["Comedy", "Action"],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['horizontalLines', 'horizontalLines'],
        },
    },
    legend: {
        // position: 'bottom',
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 100
            },
            legend: {
                // position: 'bottom',
                show: false
            }
        }
    }]
};
export var options5 = {
    series: [40, 21],
    // fill:{
    //     colors: ['#8BD742', '#BCC1C8', '#78AEFF', '']
    // },
    colors: ['#ffbf00', '#78AEFF'],
    chart: {
        width: 380,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            // startAngle: 10,
            donut: {
                // size: '90%',
                dataLabels: {
                    enabled: false
                },
                labels: {
                    show: true,
                    name: {
                        show: true,
                        // offsetY: 38,
                        formatter: () => 'Revival Time'
                    },
                    value: {
                        show: true,
                        color: '',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        fontSize:"20px",
                        offsetY: 5,
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        color: '',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize:"12px",
                        formatter: (w) => {
                            const total = w.globals.seriesTotals.reduce(
                                (a, b) => a + b,
                                0
                            );
                            return `${total}%`;
                        }
                    }
                }
            }
        },
    },
    labels: ["Comedy", "Action"],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['horizontalLines', 'horizontalLines'],
        },
    },
    legend: {
        // position: 'bottom',
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 100
            },
            legend: {
                // position: 'bottom',
                show: false
            }
        }
    }]
};
export var options6 = {
    series: [70, 14],
    // fill:{
    //     colors: ['#8BD742', '#BCC1C8', '#78AEFF', '']
    // },
    colors: ['#39c734', '#78AEFF'],
    chart: {
        width: 380,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            // startAngle: 10,
            donut: {
                // size: '90%',
                dataLabels: {
                    enabled: false
                },
                labels: {
                    show: true,
                    name: {
                        show: true,
                        offsetY: -15,
                        formatter: () => ['Business','Continuity Plan']
                    },
                    value: {
                        show: true,
                        color: '',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        fontSize:"20px",
                        offsetY: 5,
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        color: '',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize:"12px",
                        formatter: (w) => {
                            const total = w.globals.seriesTotals.reduce(
                                (a, b) => a + b,
                                0
                            );
                            return `${total}%`;
                        }
                    }
                }
            }
        },
    },
    labels: ["Comedy", "Action"],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['horizontalLines', 'horizontalLines'],
        },
    },
    legend: {
        // position: 'bottom',
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 100
            },
            legend: {
                // position: 'bottom',
                show: false
            }
        }
    }]
};