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
  new Chart(document.getElementById("graph-canvas"), {
    type: 'bar',
    data: {
      labels: ["Vehicle 15","Vehicle 15","Vehicle 15"],
      datasets: [
        {
          label: ["Vehicle 15"],
          backgroundColor: "rgba(85,60,213,0.5)",
          borderColor: "rgba(85,60,213,1)",
          data: [10,15,20]
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
            labelString: "Number of Alerts",
            
          },
          ticks: {
                beginAtZero: true
            }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Object"
          }
        }]
      }
    }
});
