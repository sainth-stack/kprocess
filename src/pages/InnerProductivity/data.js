export var options = {
  series1: [{
    name: 'Robotic Arm',
    data: [14000, 30000, 22000, 25000, 40000, 46000]
  }, {
    name: 'Roller Belts',
    data: [34000, 42000, 12000, 33000, 41000, 29000]
  }, {
    name: 'Boilers',
    data: [35000, 41000, 36000, 26000, 45000, 39000]
  },
  {
    name: 'Chillers',
    data: [35000, 41000, 36000, 26000, 45000, 39000]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  colors: ["#1b3c7a", "#427ae3", "#3dc7d1", '#faa93e'],
  fill: {
    colors: ["#1b3c7a", "#427ae3", "#3dc7d1", '#faa93e']
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    labels: {
      show: true,
    }
  },
  yaxis: {
    title: {
      text: 'Throughout'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val
      }
    }
  }
};
export const options2 = {
  data2: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [     
      {
        label: 'Robotic Arm',
        data: [100, 300, 400, 900, 500, 600, 900, 660],
        borderColor: '#1b3c7a',
        backgroundColor: '#1b3c7a',
      },
      {
        label: 'Roller Belts',
        data: [150, 200, 400, 800,900,1200,900,800],
        borderColor: '#427ae3',
        backgroundColor: '#427ae3',
      },
      {
        label: 'Boilers',
        data: [1100, 2500, 2500, 1700,1200, 2000, 4500, 3300],
        borderColor: '#3dc7d1',
        backgroundColor: '#3dc7d1',
      },
      {
        label: 'Chillers',
        data: [1200, 2000, 3500, 3300,1100, 3000, 2500, 1000],
        borderColor: '#faa93e',
        backgroundColor: '#faa93e',
      },
    ],
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      width: 12,
        height: 12,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
        color: 'black',
        fontWeight: 700,
        padding: 5
      },
      grid: {
        display: false,
      }
    },
    y: {
      title: {
        display: true,
        text: 'Operational Expenses',
        color: 'black',
        fontWeight: 700,
        padding: 5
      },
      grid: {
        display: false
      }
    }
  }
};



export var options3 = {
  series1: [{
    name: 'Robotic Arm',
    data: [91]
  }, {
    name: 'Roller Belts',
    data: [78]
  }, {
    name: 'Boilers',
    data: [81]
  },
  {
    name: 'Chillers',
    data: [94]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['2023'],
    labels: {
      show: true,
    }
  },
  colors: ["#1b3c7a", "#427ae3", "#3dc7d1", "#faa93e"],
  fill: {
    colors: ["#1b3c7a", "#427ae3", "#3dc7d1", ""]
  },
  // yaxis: {
  //   title: {
  //     text: 'Machine'
  //   },
  // },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "%"
      }
    }
  }
};

export const options4 = {
  data2: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [     
      {
        label: 'Robotic Arm',
        data: [4246, 4346, 4546, 4446, 4146, 4246, 4346, 4546],
        borderColor: '#1b3c7a',
        backgroundColor: '#1b3c7a',
      },
      {
        label: 'Roller Belts',
        data: [3898, 3698, 3598, 3498,3598,3898,3898,3998],
        borderColor: '#427ae3',
        backgroundColor: '#427ae3',
      },
      {
        label: 'Boilers',
        data: [4024, 4224, 4324, 4224,4024, 3924, 4024, 4124],
        borderColor: '#3dc7d1',
        backgroundColor: '#3dc7d1',
      },
      {
        label: 'Chillers',
        data: [4687, 4487, 4287, 4487,4787, 4687, 4587, 4887],
        borderColor: '#faa93e',
        backgroundColor: '#faa93e',
      },
    ],
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      width: 12,
        height: 12,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
        color: 'black',
        fontWeight: 700,
        padding: 5
      },
      grid: {
        display: false,
      }
    },
    y: {
      title: {
        display: true,
        text: 'Up Time  2023',
        color: 'black',
        fontWeight: 700,
        padding: 5
      },
      grid: {
        display: false
      }
    }
  }
};

export var dounut1 = {
  series: [20, 30, 40, 10],
  labels: ["Tooling Error", "Physical Damage", "Opener Damage", "Other Causes"],
  colors: ["#1b3c7a", "#427ae3", "#3dc7d1", "#39c734"],
  fill: {
    colors: ["#1b3c7a", "#427ae3", "#3dc7d1", "#39c734"]
  },
  chart: {
    width: 380,
    type: 'donut',
  },
  plotOptions: {
    pie: {
      startAngle: -100,
      endAngle: 270,
    }
  },
  // responsive:true,
  // dataLabels: {
  //   enabled: false
  // },
  // fill: {
  //   type: 'gradient',
  // },
  legend: {
    show: false,
    position: 'bottom',
     width:250,
    //  horizontalAlign:'center' 
     },
  // title: {
  //   display:false,
  //   text: 'Gradient Donut with custom Start-angle'
  // },
};