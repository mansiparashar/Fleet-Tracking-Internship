document.querySelector('.filter').addEventListener('click', () => {
    document.querySelector('.modal').style.display = "block";
});

document.querySelector('.filter-cross').addEventListener('click', () => {
    document.querySelector('.modal').style.display = "none";
});

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modal').style.display = "none";
});

var checkboxes = document.querySelectorAll('input.subOption'),
    checkall = document.getElementById('your-company');

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = function() {
        var checkedCount = document.querySelectorAll('input.subOption:checked').length;

        checkall.checked = checkedCount > 0;
        checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
    }
}

checkall.onclick = function() {
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
    }
}



//charts
var chart = new Chart(document.getElementById("graph-canvas"),{
        type : "line",
        data : 
        {labels :["1","2","3","4","5"],
        datasets:[
        {
          label : "car 1",
          data : [10,20,30,40,50],
          backgroundColor: "rgba(144,202,249,0.3)",
          borderColor : "lightblue",
          //fill the area under the line
          fill : false,
          lineTension:0,
          pointRadius : 5
          //points on the graph
        },
                {
          label : "Car 2",
          data : [20,50,60,80,89],
          backgroundColor: "rgba(245,195,194,0.3)",
          borderColor : "pink",
          //fill the area under the line
          fill : false ,
          lineTension:0,
          pointRadius : 5
          //points on the graph
        }
        ]
       },
        options : {
        	legend :{
                        display: true,
                        position:"bottom"
                  },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Distance Travelled'
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