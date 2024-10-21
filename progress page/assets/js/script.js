// Toggle popup
const buttonTogglePopup = document.querySelector("[button-toggle-popup]");
const popupCreateFolders = document.querySelector("[popup-create-folders]");
if(buttonTogglePopup){
  buttonTogglePopup.addEventListener("click", () => {
    popupCreateFolders.classList.toggle("hidden")
    setTimeout(() => {
      popupCreateFolders.classList.toggle("opacity")
    }, 100)
  })
}

const popupLayer = document.querySelector("[popup-layer]");
if(popupLayer){
  popupLayer.addEventListener("click", () => {
    popupCreateFolders.classList.toggle("hidden")
    popupCreateFolders.classList.toggle("opacity")
  })
}

// ChartJS
// Line chart
const myChart = new Chart(document.getElementById("bar-chart"), {
  type: 'line',
  data: {
    labels: ['День 1', 'День 2', 'День 3', 'День 4', 'День 5', 'День 6', 'День 7'],
    datasets: [
      { 
        data: [0,25,15,55,75,35, 50],
        label: "Процент усваемости",
        borderColor: "#C2C5BE",
        fill: false,
        pointStyle: 'circle',
        pointRadius: 8,
        pointHoverRadius: 10,
        pointBorderColor: ['rgb(0, 0, 0)', 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 'rgb(0, 0, 0)'],
        pointBorderWidth: 3,
        pointBackgroundColor: ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Процент усваемости'
    }
  }
});

let count = 0;
setInterval(() => {
  if(count % 2 === 0){
    // myChart.data.datasets[0].pointBorderColor[6] = "rgb(0, 0, 0)";
    myChart.data.datasets[0].pointBackgroundColor[6] = "rgb(255, 255, 255)";
    myChart.update()
  }
  else{
    // myChart.data.datasets[0].pointBorderColor[6] = "#B6DE71";
    myChart.data.datasets[0].pointBackgroundColor[6] = "#B6DE71";
    myChart.update()
  }
  count++;
}, 1000)