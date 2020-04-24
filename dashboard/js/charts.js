
//Chart.defaults.global.defaultFontStyle = 'Bold'
  //get canvas
       var ctx = $("#travel-distance-chartcanvas");
       var data={
            labels :["Car1","Car2","Car3","Car4","Car5"],
            datasets:[
     
                        {
                  label : "car 2",
                  data : [75,50,30,45,83],
           backgroundColor: [
                    "rgba(50,150,150,0.3)",
                    "rgba(50,150,150,0.3)",
                    "rgba(50,150,150,0.3)",
                    "rgba(50,150,150,0.3)",
                    "rgba(50,150,150,0.3)",
           
                  ],
                  borderColor :[
                  "rgba(50,150,150,1)",
                  "rgba(50,150,150,1)",
                  "rgba(50,150,150,1)",
                  "rgba(50,150,150,1)",
                  "rgba(50,150,150,1)",
                  ],
                  borderWidth : 1
            }
            ]
       };

     var options = {
          scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
                  title : {
                        display : true,
                        position : "top",
                        text : "Kilometers Traveled"
                  },
                  legend :{
                        display: false,
                        position:"bottom"
                  }
       };
  
       var chart = new Chart(ctx,{
        type : "bar",
        data : data,
        options :options
       });

var ctx1 = $("#drive-chartcanvas");
var data1={
            labels :["Maruti","nano"],
            datasets:[
     
                        {
                  label : "Driving Duration",
                  data : [75,50],
           backgroundColor: [
                    "rgba(102,255,102,0.3)",
                    "rgba(102,255,102,0.3)",
                   
                  ],
                  borderColor :[
                  "rgba(102,255,102,1)",
                  "rgba(102,255,102,1)",
    
                  ],
                  borderWidth : 1
            },
                 {
                  label : "Idle Duration",
                  data : [15,20],
           backgroundColor: [
                    "rgba(50,150,150,0.3)",
                    "rgba(50,150,150,0.3)",
        
           
                  ],
                  borderColor :[
                  "rgba(50,150,150,1)",
                  "rgba(50,150,150,1)",
                  ],
                  borderWidth : 1
            },
                 {
                  label : "Stop Duration",
                  data : [20,10],
           backgroundColor: [
                    "rgba(255,50,50,0.3)",
                    "rgba(255,50,50,0.3)",
                         
                  ],
                  borderColor :[
                  "rgba(255,50,50,1)",
                  "rgba(255,50,50,1)",
              
                  ],
                  borderWidth : 1
            },
                 {
                  label : "Inactive Duration",
                  data : [5,20],
           backgroundColor: [
                    "rgba(192,192,192,0.3)",
                    "rgba(192,192,192,0.3)",
                
                    
           
                  ],
                  borderColor :[
                  "rgba(192,192,192,1)",
                  "rgba(192,192,192,1)",
                 
                  ],
                  borderWidth : 1
            }
            ]
       };

     var options1 = {
          scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
                  title : {
                        display : true,
                        position : "top",
                        text : "Journey Metrics"
                  },
                  legend :{
                        display: true,
                        position:"bottom"
                  }
       };

              var chart1 = new Chart(ctx1,{
        type : "bar",
        data : data1,
        options :options1
       });
//chart idle duration
var ctx2 = $("#idle-chartcanvas");

              var chart2 = new Chart(ctx2,{
        type : "bar",
        data : data1,
        options :options1
       });

      //chart-stop duration
      var ctx3 = $("#stop-chartcanvas");


              var chart3 = new Chart(ctx3,{
        type : "bar",
        data : data1,
        options :options1
       });

      //chart- Inactive
      var ctx4 = $("#inactive-chartcanvas");

              var chart4 = new Chart(ctx4,{
        type : "bar",
        data : data1,
        options :options1
       });


      //Average speed
            var ctx5 = $("#avg-speed-chartcanvas");
var data2={
            labels :["Maruti","nano"],
            datasets:[
     
                        {
                  label : "Average Speed",
                  data : [75,50],
           backgroundColor: [
                    "rgba(96,96,96,0.3)",
                    "rgba(96,96,96,0.3)",
                   
                  ],
                  borderColor :[
                  "rgba(96,96,96,1)",
                  "rgba(96,96,96,1)",
    
                  ],
                  borderWidth : 1
            },
                 {
                  label : "Maximum Speed",
                  data : [120,100],
           backgroundColor: [
                    "rgba(0,0,255,0.3)",
                    "rgba(0,0,255,0.3)",
        
           
                  ],
                  borderColor :[
                  "rgba(0,0,255,1)",
                  "rgba(0,0,255,1)",
                  ],
                  borderWidth : 1
            }
            ]
       };

     var options2 = {
          scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
                  title : {
                        display : true,
                        position : "top",
                        text : "Speed Metrics"
                  },
                  legend :{
                        display: true,
                        position:"bottom"
                  }
       };

              var chart5 = new Chart(ctx5,{
        type : "bar",
        data : data2,
        options :options2
       });
//max speed
var ctx6 = $("#max-speed-chartcanvas");
              var chart6 = new Chart(ctx6,{
        type : "bar",
        data : data2,
        options :options2
       });

              //fleet utlization
              new Chart(document.getElementById("fleet-utilisation-chartcanvas"), {
    type: 'bubble',
    data: {
      labels: "Fleet",
      datasets: [
        {
          label: ["Car"],
          backgroundColor: "rgba(0,221,0,0.2)",
          borderColor: "rgba(0,221,0,1)",
          data: [{
            x: 5,
            y: 2,
            r: 15
          }]
        }
        
      ]
    },
    options: {
      title: {
        display: false
      },legend :{
                        display: true,
                        position:"bottom"
                  }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Duration",
            
          },
          ticks: {
            display:false,
                beginAtZero: false
            }
        }],

        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Hours"
          }
        }]
      }
    }
});

//bad driver
         new Chart(document.getElementById("bad-driver-chartcanvas"), {
    type: 'bar',
    data: {
      labels: "",
      datasets: [
        {
          label: ["Driver 1"],
          backgroundColor: "rgba(255,0,0,0.2)",
          borderColor: "rgba(255,0,0,1)",
          data: [10]
        }
        
      ]
    },
    options: {
      title: {
        display: false
      },legend :{
                        display: true,
                        position:"bottom"
                  }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Safety Score",
            
          },
          ticks: {
                beginAtZero: true
            }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Driver"
          }
        }]
      }
    }
});

//fleet violation
         new Chart(document.getElementById("fleet-violation-chartcanvas"), {
    type: 'bar',
    data: {
      labels: "Count",
      datasets: [
        {
          label: ["Car 1"],
          backgroundColor: "rgba(0,0,255,0.2)",
          borderColor: "rgba(0,0,255,1)",
          data: [10]
        }
        
      ]
    },
    options: {
      title: {
        display: false
      },legend :{
                        display: true,
                        position:"bottom"
                  }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Count of Violations",
            
          },
          ticks: {
                beginAtZero: true
            }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: false,
            labelString: "Driver"
          }
        }]
      }
    }
});
// model summary
         new Chart(document.getElementById("model-summary-chartcanvas"), {
    type: 'bar',
    data: {
            labels :["1","2"],
            datasets:[
            {
                  label : "Company",
                  data : [60,40],
                  backgroundColor: 

"rgb(0,0,255,0.3)"
                ,
                borderColor : 
                "rgb(0,0,255,1)",
                  borderWidth : 1
            }
            ]
          },
          options :{
                      scales: {
        yAxes: [{
           scaleLabel: {
            display: true,
            labelString: "Count"
          },
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend :{
                        display: false,
                        position:"bottom"
                  },
    title : {
      display : false,
      position : "top",
      align : "center",
      text : "",
      fontSize : 16,
      fontColor : "#ff5887"
    }
  }
     
});

//safety score
         new Chart(document.getElementById("safety-score-chartcanvas"), {
    type: 'bar',
    data: {
            labels :["1","2"],
            datasets:[
            {
                  label : "Company",
                  data : [60,40],
                  backgroundColor: "rgb(125,0,0,0.3)"
                ,
                borderColor : 
                "rgb(125,0,0,1)",
                  borderWidth : 1
            }
            ]
          },
          options :{
                      scales: {
                            xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: ""
          }
        }],
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Safety Score"
          },
            ticks: {
                beginAtZero: true
            }
        }],
        
          
      
    },
    legend :{
                        display: false,
                        position:"bottom"
                  },
    title : {
      display : false,
      position : "top",
      align : "center",
      text : "",
      fontSize : 16,
      fontColor : "#ff5887"
    },

  }
     
});

//expense history

new Chart(document.getElementById("expense-history-chartcanvas"), {
    type: 'bar',
    data:
         {
            labels :["Company1","Company2"],
            datasets:[
     
                        {
                  label : "Fuel Expense",
                  data : [75,50],
           backgroundColor: [
                    "rgba(96,96,96,0.3)",
                    "rgba(96,96,96,0.3)",
                   
                  ],
                  borderColor :[
                  "rgba(96,96,96,1)",
                  "rgba(96,96,96,1)",
    
                  ],
                  borderWidth : 1
            },
                 {
                  label : "Maintainance Expense",
                  data : [120,100],
           backgroundColor: [
                    "rgba(0,0,255,0.3)",
                    "rgba(0,0,255,0.3)",
        
           
                  ],
                  borderColor :[
                  "rgba(0,0,255,1)",
                  "rgba(0,0,255,1)",
                  ],
                  borderWidth : 1
            }
            ]
       },
          options :{
                      scales: {
                            xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Company"
          }
        }],
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Safety Score"
          },
            ticks: {
                beginAtZero: true
            }
        }],
        
          
      
    },
    legend :{
                        display: true,
                        position:"bottom"
                  },

  }
     
});

//project object score
   new Chart(document.getElementById("project-object-chartcanvas"), {
    type: 'bar',
    data: {
            labels :["Company 1"],
            datasets:[
            {
                  label : "Company",
                  data : [40],
                  backgroundColor: "rgb(0,255,102,0.3)"
                ,
                borderColor : 
                "rgb(0,255,102,1)",
                  borderWidth : 1
            }
            ]
          },
          options :{
                      scales: {
                            xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "project"
          }
        }],
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Object Score"
          },
            ticks: {
                beginAtZero: true
            }
        }],
        
          
      
    },
    legend :{
                        display: false,
                        position:"bottom"
                  },


  }
     
});

   //postpaid
   new Chart(document.getElementById("postpaid-chartcanvas"), {
    type: 'bar',
    data:
         {
            labels :["1","2","3"],
            datasets:[
     
                        {
                  label : "User Count",
                  data : [1,2,1],
           backgroundColor: [
                    "rgba(102,0,102,0.3)",
                    "rgba(96,96,96,0.3)",
                    "rgba(255,51,153,0.3)",
                   
                  ],
                  borderColor :[
                  "rgba(102,0,102,1)",
                    "rgba(96,96,96,1)",
                    "rgba(255,51,153,1)",
                  
    
                  ],
                  borderWidth : 1
            },
                 {
                  label : "Due amount",
                  data : [3,2,0],
           backgroundColor: [
                    "rgba(153,0,153,0.3)",
                    "rgba(128,128,128,0.3)",
                    "rgba(255,153,204,0.3)"
        
           
                  ],
                  borderColor :[
                  "rgba(153,0,153,1)",
                    "rgba(128,128,128,1)",
                    "rgba(255,153,204,1)"
                  ],
                  borderWidth : 1
            }
            ]
       },
          options :{
                      scales: {
                            xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Delay Duration (Months)"
          }
        }],
        yAxes: [{ 
          display : true,
          
            position: 'left',
          scaleLabel: {
            display: true,
            labelString: "User Count"
            
          },
            ticks: {
                beginAtZero: true,
                max: 10,
                min: 0,
                stepSize: 5
            }
          } , { display: true,
            //labelString: "Due amount",
            position: 'right',
                 scaleLabel: {
            display: true,
            labelString: "Due Amount"
            
          },
             ticks: {
                beginAtZero: true,
                max: 10,
                min: 0,
                stepSize: 5
            }
          }]

            },
    legend :{
                        display: false,
                        position:"bottom"
                  },

  }
     
});



//fuel-refill-drain
   new Chart(document.getElementById("drain-chartcanvas"), {
    type: 'bar',
    data:
         {
            labels :["23-4-2000"],
            datasets:[
     
                        {
                  label : "Refill",
                  data : [5],
           backgroundColor: [
                    "rgba(102,0,102,0.3)",
                   
                  ],
                  borderColor :[
                  "rgba(102,0,102,1)",
                  
                  
    
                  ],
                  borderWidth : 1
            },
                 {
                  label : "Drain",
                  data : [2],
           backgroundColor: [
                    "rgba(153,0,153,0.3)",
        
           
                  ],
                  borderColor :[
                  "rgba(153,0,153,1)",
                    
                  ],
                  borderWidth : 1
            }
            ]
       },
          options :{
                      scales: {
                            xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Day"
          }
        }],
        yAxes: [{ 
          display : true,
          
            position: 'left',
          scaleLabel: {
            display: true,
            labelString: "Refill (Litres)"
            
          },
            ticks: {
                beginAtZero: true,
                max: 10,
                min: 0,
                stepSize: 5
            }
          } , { display: true,
            //labelString: "Due amount",
            position: 'right',
                 scaleLabel: {
            display: true,
            labelString: "Drain (Litres)"
            
          },
             ticks: {
                beginAtZero: true,
                max: 10,
                min: 0,
                stepSize: 5
            }
          }]

            },
    legend :{
                        display: false,
                        position:"bottom"
                  },

  }
     
});


//Fuel vs Distance
new Chart(document.getElementById("fuel-distance-chartcanvas"), {
    type: 'bar',
    data: {
      labels: ["24-04-20", "25-04-20", "26-04-20", "27-04-20"],
      datasets: [{
          label: "distance covered",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408,547,675,734],
          fill: false
        }, {
          label: "Fuel Consumption",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408,547,675,734],
        }, 
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Fuel vs Distance'
      },
      legend: { display: false }
    }
});
// fleet idling


//Object Status

new Chart(document.getElementById("object-chartcanvas"), {
    type: 'doughnut',
    data:{
            labels :["Running","Idle","Stopped","Inactive","noData"],
            datasets:[
            {
                  label : "Objects",
                  data : [20,50,30,45,23],
                  backgroundColor: [
                     "#a56de2",
"#f159bd",
"#ff5887",
"#ff7a4d",
"#ffa600"],
             }]},

    options:{
      title : {
      display : false,
      position : "top",
      text : "Overview",
      fontSize : 18,
      fontColor : "#ff5887"
    },
    legend : {
      display : true,
      position : "right"
    },
    plugins: {
     labels: {
    //render: 'value',
    //fontColor: '#000'
  }}
 
  }
});

   var ctx = $("#total-trip-chartcanvas");
       var data={
        labels :["Jan","Feb","March","April","May"],
        datasets:[
        {
          label : "Maruti",
          data : [10,50,70,45,23],
          backgroundColor: "rgba(144,202,249,0.3)",
          borderColor : "lightblue",
          //fill the area under the line
          fill : true,
          lineTension:0,
          pointRadius : 5
          //points on the graph
        },
                {
          label : "Nano",
          data : [75,50,30,45,83],
          backgroundColor: "rgba(245,195,194,0.3)",
          borderColor : "pink",
          //fill the area under the line
          fill : true ,
          lineTension:0,
          pointRadius : 5
          //points on the graph
        }
        ]
       };

     var options = {
          title : {
            display : true,
            position : "top",
            text : "Trips per Month"
            
          
          },
          legend :{
            display: true,
            position:"bottom"
          }
       };
  
       var chart = new Chart(ctx,{
        type : "line",
        data : data,
        options :options
       });


      
//fleet parking
var ctx2=$("#fleet-parking-chartcanvas");
var chart = new Chart(ctx2,{
        type : "line",
        data : {},
        options : {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Idle Duration'
          }
        }],
         xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Hours'
          }
        }]

      }
    }
       });

//fleet inactive

var chart = new Chart(document.getElementById("fleet-inactive-chartcanvas"),{
        type : "line",
        data : {},
        options : {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Inactive Duration'
          }
        }],
         xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Hours'
          }
        }]

      }
    }
       });


//fleet idling

 new Chart(document.getElementById("fleet-idling-chartcanvas"), {
    type: 'bubble',
    data: {
      labels: "Fleet",
      datasets: [
        {
          label: ["Car"],
          backgroundColor: "rgba(0,0,255,0.2)",
          borderColor: "rgba(0,0,255,1)",
          data: [{
            x: 5,
            y: 2,
            r: 15
          }]
        }
        
      ]
    },
    options: {
      title: {
        display: false
      },legend :{
                        display: false,
                        position:"bottom"
                  }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Duration",
            
          },
          ticks: {
            display:false,
                beginAtZero: false
            }
        }],

        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Hours"
          }
        }]
      }
    }
});