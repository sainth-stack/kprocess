import cyber from '../../assets/svg/cyber.png'
import vulner from '../../assets/svg/vulnar.png'
import inci from '../../assets/svg/incident.png'
import config from '../../assets/svg/config.png'
import risk from '../../assets/svg/risks.png'
import train from '../../assets/svg/train.png'
import cont from '../../assets/svg/conti.png'
import com from '../../assets/svg/commun.png'
import ser from '../../assets/svg/service.png'
import build from '../../assets/svg/build.png'

export const data = [
    {
        img: cyber,
        name: "Cyber Security Policy Creation and Distribution",
        series: [{
            name: 'Planned',
            data: [9, 6]
        }],
        inferences: [66],
        recomondations: ["Adhere to planned activities"],
        predictions: []
    },
    {
        img: risk,
        name: "Risk Management Initiatives",
        series: [{
            name: 'Planned',
            data: [3, 1]
        }],
        inferences: [33],
        recomondations: ["Make up missed/lost activities"],
        predictions: []
    },
    {
        img: train,
        name: "Cyber Security Training",
        series: [{
            name: 'Planned',
            data: [12, 7]
        }],
        inferences: [58],
        recomondations: ["Adhere to planned activities"],
        predictions: []
    },
    {
        img: vulner,
        name: "Vulnerability Management Reviews",
        series: [{
            name: 'Planned',
            data: [4, 1]
        }],
        inferences: [25],
        recomondations: ["Make up missed/lost activities"],
        predictions: []
    },
    {
        img: cont,
        name: "Continuity Supervision Meetings",
        series: [{
            name: 'Planned',
            data: [24, 11]
        }],
        inferences: [45],
        recomondations: ["Adhere to planned activities"],
        predictions: []
    },
    {
        img: build,
        name: "Mock BCP Drills",
        series: [{
            name: 'Planned',
            data: [3, 1]
        }],
        inferences: [33],
        recomondations: ["Make up missed/lost activities"],
        predictions: []
    },
    {
        img: inci,
        name: "Incident Management",
        series: [{
            name: 'Occurred',
            data: [27, 27]
        }],
        inferences: [100],
        recomondations: ["Keep up Good work"],
        predictions: ["Incident forecast over next 3 months - 2, 0, 0"]
    },
    {
        img: ser,
        name: "Continuity of Service and Management (Post Facto)",
        series: [{
            name: 'Occurred',
            data: [27, 27]
        }],
        inferences: [100],
        recomondations: ["Keep up Good work"],
        predictions: []
    },
    {
        img: config,
        name: "Configuration and Change Management",
        series: [{
            name: 'Planned',
            data: [12, 6]
        }],
        inferences: [50],
        recomondations: ["Adhere to planned activities"],
        predictions: []
    },
    {
        img: com,
        name: "Communications",
        series: [{
            name: 'Planned',
            data: [48, 32]
        }],
        inferences: [66],
        recomondations: ["Adhere to planned activities"],
        predictions: ["Expected communications over next 3 months - 5, 4, 4"]
    }
]

export var roptions = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: true
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Planned', "Completed"],
    },
    legend: {
        show: false,
        position: 'right',
        //  bottom:0
        //   align:'center'
    },
    // yaxis: {
    //     labels: {
    //         show: true,
    //     }
    // },

    colors: [
        function ({ value, seriesIndex, dataPointIndex, w }) {
            if (dataPointIndex == 0) {
                return "#1b3c7a";
            } else {
                return "#39c734";
            }
        }
    ],
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
};


export const heading = [
    {
        name: "ANTICIPATE",
        mum: 11
    },
    {
        name: "RESIST",
        mum: 11
    },
    {
        name: "RECOVER",
        mum: 11
    },
    // {
    //     name: "EVOLVE",
    //     mum: 11
    // }
]