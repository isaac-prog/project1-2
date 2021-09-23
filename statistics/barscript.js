const barChartOptions = {
    'chart': {
        'type':'bar',
        'height':'100%'
    },
    'dataLabels': {
        'enabled': false,
      },
    'series':[],
    'noData':{
        'text':"Please wait, loading data"
    }
}

const barChart = new ApexCharts(document.querySelector('#barchart'), barChartOptions);
barChart.render();

let barPedestriansData;
let barPMDData;
let barCyclistData;
let barMotorCyclistData;
let barMotorVehicles;
let barGoodsVehicles;
let barLorryVehicles;
let barBuses;
let barOthers;

// event handlers
document.querySelector("#filter-btn2").addEventListener('click', function(){
  //updateTable("cTest.json");

    let startYearBar = parseInt(document.querySelector('#start-year-bar').value);
    let endYearBar = parseInt(document.querySelector('#end-year-bar').value);
    //let inputSex = parse(document.querySelector('#sex').value);

    let barFiltered1 = barPedestriansData.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })

    let barFiltered2 = barPMDData.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })

    let barFiltered3 = barCyclistData.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })

    let barFiltered4 = barMotorCyclistData.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })

    let barFiltered5 = barMotorVehiclesData.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })

    let barFiltered6 = barGoodsVehiclesData.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })

    let barFiltered7 = barLorryVehicles.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })

    let barFiltered8 = barBuses.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })

    let barFiltered9 = barOthers.filter(function(d){
        return d.x >= startYearBar && d.x <= endYearBar
    })
    barChart.updateSeries([
        {
            'name': 'Pedestrians injury cases',
            'data': barFiltered1
        },
        {
            'name': 'PMD injury cases',
            'data': barFiltered2
        },
        {
            'name': 'Cyclist injury cases',
            'data': barFiltered3
        },
        {
            'name': 'Motorcyclist injury cases',
            'data': barFiltered4
        },
        {
            'name': 'Motor Vehciles injury cases',
            'data': barFiltered5
        },
        {
            'name': 'Vans & Pick-ups injury cases',
            'data': barFiltered6
        },
        {
            'name': 'Lorry & Tippers injury cases',
            'data': barFiltered7
        },
        {
        'name': 'Bus injury cases',
        'data': barFiltered8
         },
         {
            'name': 'Other injury cases',
            'data': barFiltered9
        }

    ])
})

window.addEventListener('DOMContentLoaded',async function(){
barPedestriansData = await loadBarPedestriansData("cTest.json");
barPedestriansData = transformBarPedestriansData(barPedestriansData);
barPMDData = await loadBarPMDData("cTest.json");
barPMDData = transformBarPMDData(barPMDData);
barCyclistData = await loadBarCyclistData("cTest.json");
barCyclistData = transformBarCyclistData(barCyclistData);
barMotorCyclistData = await loadBarMotorCyclistData("cTest.json");
barMotorCyclistData = transformBarMotorCyclistData(barMotorCyclistData);
barMotorVehiclesData = await loadBarMotorVehiclesData("cTest.json");
barMotorVehiclesData = transformBarMotorVehiclesData(barMotorVehiclesData);
barGoodsVehiclesData = await loadBarGoodsVehiclesData("cTest.json");
barGoodsVehiclesData = transformBarGoodsVehiclesData(barGoodsVehiclesData);
barLorryVehicles = await loadBarLorryData("cTest.json");
barLorryVehicles = transformBarLorryData(barLorryVehicles);
barBuses= await loadBarBusesData("cTest.json");
barBuses = transformBarBusesData(barBuses);
barOthers= await loadBarOthersData("cTest.json");
barOthers = transformBarOthersData(barOthers);
barChart.updateSeries([
{
  'name': 'Pedestrians injury',
  'data': barPedestriansData
},
{
    'name': 'PMD injury',
    'data': barPMDData
},
{
    'name': 'Cyclist injury',
    'data': barCyclistData
},
{
    'name': 'Motorcyclist injury',
    'data': barMotorCyclistData
},
{
    'name': 'MotorVehciles injury',
    'data': barMotorVehiclesData
},
{
    'name': 'Vans & Pick-ups injury',
    'data': barGoodsVehiclesData
},
{
    'name': 'Lorry injury',
    'data': barLorryVehicles
},
{
    'name': 'Others injury',
    'data': barOthers
},

])
})
