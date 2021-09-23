const chartOptions = {
    'chart': {
        'type':'line',
        'height':'100%'
    },
    'series':[],
    'noData':{
        'text':"Please wait, loading data"
    }
}

const chart = new ApexCharts(document.querySelector('#chart'), chartOptions);
chart.render();

// global variable
let deadData;
let injuredData;

// event handlers
document.querySelector("#filter-btn").addEventListener('click', function(){
  //updateTable("cTest.json");

    let startYear = parseInt(document.querySelector('#start-year').value);
    let endYear = parseInt(document.querySelector('#end-year').value);

    let filtered2 = deadData.filter(function(d){
        return d.x >= startYear && d.x <= endYear
    })
    let filtered3 = injuredData.filter(function(d){
        return d.x >= startYear && d.x <= endYear
    })
    chart.updateSeries([
        {
            'name': 'Fatalities',
            'data': filtered2
        },
        {
            'name': 'injured casualties',
            'data': filtered3
        },
    ])
})

window.addEventListener('DOMContentLoaded',async function(){
deadData = await loadDeadData("cTest.json");
deadData = transformDeadData(deadData);
injuredData = await loadInjuredData('cTest.json');
injuredData = transformInjuredData(injuredData);

chart.updateSeries([
{
  'name': 'dead victims',
  'data': deadData
},
{
  'name': 'injured victims',
  'data': injuredData
}
])
})
