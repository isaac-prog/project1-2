let donutChartOptions = {
    'chart': {
      'type': 'donut',
      'height': '100%'
    },
    'fill': {
      'type': 'gradient',
    },
    'colors': ['#FFD700', '#E91E63', '#808080', '#0000FF', '#00FF00', '#964B00', '#800080', '#FFA500','#000000'],
      'series': [],
      'labels': ['Pedestrians', 'PMDs','cyclist','motorcyclist','motor vehicles','goods & vans','lorry & tippers','buses','others'],
      'noData': {
        'text': "Please wait, loading data"
      }
    }
  
  var donutChart = new ApexCharts(document.querySelector("#donutchart"), donutChartOptions);
    donutChart.render();
  
    let donutPedestriansData;
    let donutPMDData;
    let donutCyclistData;
    let donutMotorcyclistData;
    let donutMotorVehiclesData;
    let donutGoodsData;
    let donutLorryData;
    let donutBusesData;
    let donutOthersData;
  
    window.addEventListener('DOMContentLoaded', async function () {
        donutPedestriansData = await loadDonutPedestriansData('../cTest.json');
        donutPedestriansData = transformDonutPedestriansData(donutPedestriansData);
        donutPMDData = await loadDonutPMDData('../cTest.json');
        donutPMDData = transformDonutPMDData(donutPMDData);
        donutCyclistData = await loadDonutCyclistData('../cTest.json');
        donutCyclistData = transformDonutCyclistData(donutCyclistData);
        donutMotorcyclistData = await loadDonutMotorcyclistData('../cTest.json');
        donutMotorcyclistData = transformDonutMotorcyclistData(donutMotorcyclistData);
        donutMotorvehiclesData = await loadDonutMotorvehiclesData('../cTest.json');
        donutMotorvehiclesData = transformDonutMotorvehiclesData(donutMotorvehiclesData);
        donutGoodsData = await loadDonutGoodsData('../cTest.json');
        donutGoodsData = transformDonutGoodsData(donutGoodsData);
        donutLorryData = await loadDonutLorryData('../cTest.json');
        donutLorryData = transformDonutLorryData(donutLorryData);
        donutBusesData = await loadDonutBusesData('../cTest.json');
        donutBusesData = transformDonutBusesData(donutBusesData);
        donutOthersData = await loadDonutOthersData('../cTest.json');
        donutOthersData = transformDonutOthersData(donutOthersData);
      
      let donut = donutPedestriansData.concat(donutPMDData,donutCyclistData, donutMotorcyclistData, donutMotorvehiclesData, donutGoodsData, donutLorryData, donutBusesData, donutOthersData)
      console.log(donut)
      donutChart.updateSeries(donut)
    })
  