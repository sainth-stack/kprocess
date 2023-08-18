export const series1 = [
    {
        name: 'Actual',
        data: [
            {
                x: 'Scope 1',
                y: 8000,
                color: "#41B883",
            },
            {
                x: 'Scope 2',
                y: 7000,
                color: "#00D8FF",
            },
            {
                x: 'Scope 3',
                y: 5000,
                color: "#00D8FF",
            },
            {
                x: 'Scope 4',
                y: 3000,
                color: "#00D8FF",
            }
        ]
    }
]


export const options1 = {
    chart: {
        // height: '400px',
        // width:'100px',
        type: 'bar'
    },

    colors: [
        "#39c734",
        "#0000FF"
    ],
    plotOptions: {
        bar: {
            columnWidth: '5px',
            horizontal: false,
            borderRadius: 0,
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'last',
            columnWidth: '30%',
            barHeight: '40%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            hideZeroBarsWhenGrouped: false,
            isDumbbell: false,
            dumbbellColors: undefined,
            isFunnel: false,
            isFunnel3d: true,
            dataLabels: {
                position: 'top',
            }
        },
    },
    grid: {
        show: false
    },

    dataLabels: {
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        },
        offsetY: -20,
        formatter: function (val, opt) {
            const goals =
                opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                    .goals
            return `${val}`
        }
    }
    // colors: colors
}

export const series2 = [
    {
        name: 'Actual',
        data: [
            {
                x: 'Miscelleneous',
                y: 1450,
                color: "#41B883",
            },
            {
                x: 'General',
                y: 1200,
                color: "#00D8FF",
            },
            {
                x: 'Recyclable',
                y: 500,
                color: "#00D8FF",
            },
            {
                x: 'critical',
                y: 200,
                color: "#00D8FF",
            },
            {
                x: 'waste',
                y: 100,
                color: "#00D8FF",
            }
        ]
    }
]


export const options2 = {
    chart: {
        // height: '400px',
        // width:'100px',
        type: 'bar'
    },

    colors: [
        "#000",
        "#0000FF"
    ],
    plotOptions: {
        bar: {
            columnWidth: '5px',
            horizontal: false,
            borderRadius: 0,
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'last',
            columnWidth: '30%',
            barHeight: '40%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            hideZeroBarsWhenGrouped: false,
            isDumbbell: false,
            dumbbellColors: undefined,
            isFunnel: false,
            isFunnel3d: true,
            dataLabels: {
                position: 'top',
            }
        }
    },
    grid: {
        show: false
    },
    dataLabels: {
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        },
        offsetY: -20,
        formatter: function (val, opt) {
            const goals =
                opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                    .goals
            return `${val}`
        }
    }
    // colors: colors
}

export const seriesplantation = [
    {
        name: 'Actual',
        data: [
            {
                x: 'Jan',
                y: 30,
                color: "#41B883",
            },
            {
                x: 'Feb',
                y: 80,
                color: "#00D8FF",
            },
            {
                x: 'Mar',
                y: 90,
                color: "#00D8FF",
            },
            {
                x: 'Apr',
                y: 40,
                color: "#00D8FF",
            },
            {
                x: 'May',
                y: 22,
                color: "#00D8FF",
            },
            {
                x: 'Jun',
                y: 45,
                color: "#00D8FF",
            },
            {
                x: 'Jul',
                y: 75,
                color: "#00D8FF",
            }
        ]
    }
]


export const optionsplantation = {
    chart: {
        // height: '400px',
        // width:'100px',
        type: 'bar'
    },

    colors: [
        "#39c734",
        "#0000FF"
    ],
    plotOptions: {
        bar: {
            columnWidth: '5px',
            horizontal: false,
            borderRadius: 0,
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'last',
            columnWidth: '30%',
            barHeight: '40%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            hideZeroBarsWhenGrouped: false,
            isDumbbell: false,
            dumbbellColors: undefined,
            isFunnel: false,
            isFunnel3d: true,
            dataLabels: {
                position: 'top',
            }
        }
    },
    grid: {
        show: false
    },
    dataLabels: {
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        },
        offsetY: -20,
        formatter: function (val, opt) {
            const goals =
                opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                    .goals
            return `${val}`
        }
    }
    // colors: colors
}



export const series3 = [
    {
        name: 'Actual',
        data: [
            {
                x: ["Total", "Withdrawls"],
                y: 195000,
                color: "#41B883",
            },
            {
                x: ['Total', 'Recycling'],
                y: 138400,
                color: "#00D8FF",
            },
            {
                x: ['Total', 'Reacharges'],
                y: 220502,
                color: "#00D8FF",
            },
            {
                x: ['Total', 'Refuses'],
                y: 58000,
                color: "#00D8FF",
            }
        ]
    }
]


export const options3 = {
    chart: {
        // height: '400px',
        // width:'100px',
        type: 'bar'
    },

    colors: [
        "#427ae3",
        "#0000FF"
    ],
    plotOptions: {
        bar: {
            columnWidth: '5px',
            horizontal: false,
            borderRadius: 0,
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'last',
            columnWidth: '30%',
            barHeight: '40%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            hideZeroBarsWhenGrouped: false,
            isDumbbell: false,
            dumbbellColors: undefined,
            isFunnel: false,
            isFunnel3d: true,
            dataLabels: {
                position: 'top',
            }
        },
    },
    grid: {
        show: false
    },

    dataLabels: {
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        },
        offsetY: -20,
        formatter: function (val, opt) {
            const goals =
                opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                    .goals
            return `${val}`
        }
    }
    // colors: colors
}


export var dounut1 = {
    series: [15, 85],
    labels: ["Wind Energy", "Solar Energy"],
    colors: ["#445d7c",
        "#504262"],
    fill: {
        colors: ["#445d7c",
            "#504262"]
    },
    chart: {
        width: 390,
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: -100,
            endAngle: 270
        }
    },
    // dataLabels: {
    //   enabled: false
    // },
    // fill: {
    //   type: 'gradient',
    // },
    legend: {
        show: true,
        position: 'right',
        bottom: 0
        //   align:'center'
    },
    // title: {
    //   display:false,
    //   text: 'Gradient Donut with custom Start-angle'
    // },
};
