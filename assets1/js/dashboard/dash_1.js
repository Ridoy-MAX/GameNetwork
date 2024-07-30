try {
  /*
    ==============================
    |    @Options Charts Script   |
    ==============================
*/

  /*
    =============================
        Daily Sales | Options
    =============================
*/

  /*
    =============================
        Total Orders | Options
    =============================
*/
  var d_2options2 = {
    chart: {
      id: "sparkline1",
      group: "sparklines",
      type: "area",
      height: 280,
      // background: '#27272F',
      // borderColor: '#27272F',
      sparkline: {
        enabled: true,
      },
    },

    colors: ["#FA890A", "#66DA26"],

    stroke: {
      borderColor: ["#936738"],
      curve: "smooth",
      width: 4,
    },
    fill: {
      opacity: 1,
    },
    series: [
      {
        name: "Likes",
        data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40, 20, 30],
      },
    ],
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    yaxis: {
      min: 0,
    },
    grid: {
      row: {
        colors: ["#F44336", "#E91E63", "#9C27B0"],
      },
      column: {
        colors: ["#F44336"],
      },
      show: false,

      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      row: {
        colors: undefined,
        opacity: 0,
      },
      column: {
        colors: undefined,
        opacity: 0,
      },
      padding: {
        top: 100,
        right: 0,
        bottom: 36,
        left: 0,
      },
    },
    fill: {
      //   type:"gradient",
      colors: ["#F47119"],
    },
    tooltip: {
      x: {
        // show: false,
      },
    },
  };

  var d_2C_2 = new ApexCharts(
    document.querySelector("#total-orders"),
    d_2options2
  );
  d_2C_2.render();

  var options = {
    series: [
      {
        name: "Desktops",
        data: [
          1000, 4000, 2000, 3000, 1000, 5000, 2000, 4000, 3000, 1000, 2000,
          4000, 3000, 5000, 1000, 2000, 4000, 1000, 5000, 4000, 2000,
        ],
      },
    ],
    chart: {
      id: "sparkline1",
      group: "sparklines",
      type: "line",
      height: 280,
      // background: '#27272F',
      // borderColor: '#27272F',
      // sparkline: {
      //   enabled: true
      // },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FA890A", "#66DA26"],
    stroke: {
      borderColor: ["#936738"],

      width: 2,
    },
    title: {
      text: "",
      align: "left",
    },
    fill: {
      colors: ["#fff"],
    },
    grid: {
      row: {
        //   colors: ['#F44336', '#E91E63', '#9C27B0']
      },
      column: {
        colors: ["#525259"],
      },
      show: true,

      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
          opacity: 0.3,
        },
      },
      row: {
        colors: ["#525259"],
        opacity: 0,
      },
      column: {
        colors: ["#525259"],
        opacity: 0,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },

    xaxis: {
      categories: [
        "0.1",
        "0.2",
        "0.3",
        "0.5",
        "0.6",
        "0.7",
        "0.8",
        "0.9",
        "1.0",
        "1.2",
        "1.3",
        "1.5",
        "1.6",
        "1.7",
        "1.8",
        "1.9",
        "2",
        "2.2",
        "2.3",
        "2.5",
        "2.6",
        "2.7",
        "2.8",
        "2.9",
      ],
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();











































  var chart1 = {
    chart: {
   
      type: "area",
      height: 280,
      // background: '#27272F',
      // borderColor: '#27272F',
      sparkline: {
        enabled: true,
      },
    },

    colors: ["#FA890A", "#66DA26"],

    stroke: {
      borderColor: ["#936738"],
      curve: 'straight',
      width: 2,
    },
    fill: {
      opacity: 1,
    },
    series: [
      {
        name: "Likes",
        data: [28, 20, 36, 42, 38, 40, 34, 38, 43, 40, 48, 38,40,40,43,50,43,45,40,70],
      },
    ],
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    yaxis: {
      min: 0,
    },
    grid: {
      row: {
        colors: ["#F44336", "#E91E63", "#9C27B0"],
      },
      column: {
        colors: ["#F44336"],
      },
      show: false,

      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
          opacity: 0.4
        },
      },
      row: {
        colors: undefined,
        opacity: 0,
      },
      column: {
        colors: undefined,
        opacity: 0,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 36,
        left: 0,
      },
    },
    fill: {
        type:"gradient",
      colors: ["#F47119"],
      opacity: 0.3
    },
    tooltip: {
      x: {
        // show: false,
      },
    },
  };

  var chart1 = new ApexCharts(document.querySelector("#chart1"), chart1);
  chart1.render();
} catch (e) {
  console.log(e);
}
