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
//chart
   new Chart(document.getElementById("graph-canvas"), {
    type: 'bar',
    data: {
            labels :["1","2","3","4","5"],
            datasets:[
            {
                  label : "Fuel consumed",
                  data : [40,50,60,20,50],
                  backgroundColor: "rgb(204,0,102,0.5)"
                ,
                borderColor : 
                "rgb(204,0,102,1)",
                  borderWidth : 1
            }
            ]
          },
          options :{
                      scales: {
                            xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Object"
          }
        }],
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Fuel Consumed"
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