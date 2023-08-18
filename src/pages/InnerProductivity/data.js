export var options = {
  series1: [{
    name: 'Machine-A',
    data: [44, 30, 22, 25, 40, 46]
  }, {
    name: 'Machine-B',
    data: [34, 42, 12, 33, 41, 29]
  }, {
    name: 'Machine-C',
    data: [35, 41, 36, 26, 45, 39]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  colors: ["#1b3c7a","#427ae3","#3dc7d1"],
  fill: {
      colors: ["#1b3c7a","#427ae3","#3dc7d1"]
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
      text: 'Machine'
    },
    min: 0,
    max: 50,
    tickAmount: 2
  },
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
export var options2 = {
  series1: [{
    name: 'Machine-A',
    data: [57, 61, 58, 63, 60, 66]
  }, {
    name: 'Machine-B',
    data: [76, 85, 101, 98, 87, 99]
  }, {
    name: 'Machine-C',
    data: [66, 89, 79, 80, 99, 92]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  colors: ["#1b3c7a","#427ae3","#3dc7d1"],
  fill: {
      colors: ["#1b3c7a","#427ae3","#3dc7d1"]
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
  },
  yaxis: {
    title: {
      text: 'Machine'
    },
    min: 0,
    max: 100,
    tickAmount: 2
  },
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


export var options3 = {
  series1: [{
    name: 'Machine-A',
    data: [20000]
  }, {
    name: 'Machine-B',
    data: [50000]
  }, {
    name: 'Machine-C',
    data: [80000]
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
    categories: ['2021'],
    labels: {
      show: true,
    }
  },
  colors: ["#1b3c7a","#427ae3","#3dc7d1"],
  fill: {
      colors: ["#1b3c7a","#427ae3","#3dc7d1"]
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
        return "$ " + val + " thousands"
      }
    }
  }
};

export var options4 = {
  series1: [{
    name: 'Machine-A',
    data: [44]
  }, {
    name: 'Machine-B',
    data: [34]
  }, {
    name: 'Machine-C',
    data: [35]
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
    categories: ['2021'],
    labels: {
      show: true,
    }
  },
  yaxis: {
    // title: {
    //   text: 'Machine'
    // },
    min: 0,
    max: 50,
    tickAmount: 2
  },
  colors: ["#1b3c7a","#427ae3","#3dc7d1"],
  fill: {
      colors: ["#1b3c7a","#427ae3","#3dc7d1"]
  },
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

export var dounut1 = {
    series: [20, 30,40,10],
    labels: ["Tooling Error","Physical Damage","Opener Damage","Other Causes"],
    colors: ["#1b3c7a","#427ae3","#3dc7d1","#39c734"],
    fill: {
        colors: ["#1b3c7a","#427ae3","#3dc7d1","#39c734"]
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
    // dataLabels: {
    //   enabled: false
    // },
    // fill: {
    //   type: 'gradient',
    // },
    legend: {
        show:true,
          position: 'right',
        //  bottom:0
        //   align:'center'
    },
    // title: {
    //   display:false,
    //   text: 'Gradient Donut with custom Start-angle'
    // },
};