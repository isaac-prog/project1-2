async function loadDonutPedestriansData(url) {
  const response = await axios.get(url);
  return response.data.Level2;
}

let PedestrianSum = 0;

function transformDonutPedestriansData(rawData){
  // accumulator array that will store the final
  // results
  let series = [];

  for (let datnum of rawData) {
      // recreate the data point in the format
      // that apex chart expects

      if(datnum.level_1 == "Total Casualties Fatalities" && datnum.level_2 == "Pedestrians"){
      series.push({
          'x': parseInt(datnum.year),
          'y': PedestrianSum += parseFloat(datnum.value)
      })
      }
  }

  const lastItem = series[series.length - 1];
  series = [];
  series.push(lastItem.y);
  return series;
}

async function loadDonutPMDData(url) {
  const response = await axios.get(url);
  return response.data.Level2;
}

let PMDSum = 0;

function transformDonutPMDData(rawData){
  // accumulator array that will store the final
  // results
  let series = [];

  for (let datnum of rawData) {
      // recreate the data point in the format
      // that apex chart expects

      if(datnum.level_1 == "Total Casualties Fatalities" && datnum.level_2 == "Personal Mobility Device Users"){
      
      if(datnum.value == "na"){
        series.push({
          'x': parseInt(datnum.year),
          'y': PMDSum += parseFloat(0)
      })
      }
      else{
      series.push({
          'x': parseInt(datnum.year),
          'y': PMDSum += parseFloat(datnum.value)
      })
    }
      }
  }

  const lastItem = series[series.length - 1];
  series = [];
  series.push(lastItem.y);
  return series;
}

async function loadDonutCyclistData(url) {
  const response = await axios.get(url);
  return response.data.Level2;
}

let CyclistSum = 0;

function transformDonutCyclistData(rawData){
  // accumulator array that will store the final
  // results
  let series = [];

  for (let datnum of rawData) {
      // recreate the data point in the format
      // that apex chart expects

      if(datnum.level_1 == "Total Casualties Fatalities" && datnum.level_2 == "Cyclists & Pillions"){
      series.push({
          'x': parseInt(datnum.year),
          'y': CyclistSum += parseFloat(datnum.value)
      })
      }
  }

  const lastItem = series[series.length - 1];
  series = [];
  series.push(lastItem.y);
  return series;
}

async function loadDonutMotorcyclistData(url) {
  const response = await axios.get(url);
  return response.data.Level2;
}

let MotorcyclistSum = 0;

function transformDonutMotorcyclistData(rawData){
  // accumulator array that will store the final
  // results
  let series = [];

  for (let datnum of rawData) {
      // recreate the data point in the format
      // that apex chart expects

      if(datnum.level_1 == "Total Casualties Fatalities" && datnum.level_2 == "Motor Cyclists & Pillion Riders"){
      series.push({
          'x': parseInt(datnum.year),
          'y': MotorcyclistSum += parseFloat(datnum.value)
      })
      }
  }

  const lastItem = series[series.length - 1];
  series = [];
  series.push(lastItem.y);
  return series;
}

async function loadDonutMotorvehiclesData(url) {
  const response = await axios.get(url);
  return response.data.Level2;
}

let MotorvehiclesSum = 0;

function transformDonutMotorvehiclesData(rawData){
  // accumulator array that will store the final
  // results
  let series = [];

  for (let datnum of rawData) {
      // recreate the data point in the format
      // that apex chart expects

      if(datnum.level_1 == "Total Casualties Fatalities" && datnum.level_2 == "Motor Vehicle Drivers & Passengers Cars & Station Wagons"){
      series.push({
          'x': parseInt(datnum.year),
          'y': MotorvehiclesSum += parseFloat(datnum.value)
      })
      }
  }

  const lastItem = series[series.length - 1];
  series = [];
  series.push(lastItem.y);
  return series;
}

async function loadDonutGoodsData(url) {
  const response = await axios.get(url);
  return response.data.Level2;
}

let GoodsSum = 0;

function transformDonutGoodsData(rawData){
  // accumulator array that will store the final
  // results
  let series = [];

  for (let datnum of rawData) {
      // recreate the data point in the format
      // that apex chart expects

      if(datnum.level_1 == "Total Casualties Fatalities" && datnum.level_2 == "Goods Vans & Pick-ups"){
      series.push({
          'x': parseInt(datnum.year),
          'y': GoodsSum += parseFloat(datnum.value)
      })
      }
  }

  const lastItem = series[series.length - 1];
  series = [];
  series.push(lastItem.y);
  return series;
}

async function loadDonutLorryData(url) {
  const response = await axios.get(url);
  return response.data.Level2;
}

let LorrySum = 0;

function transformDonutLorryData(rawData){
  // accumulator array that will store the final
  // results
  let series = [];

  for (let datnum of rawData) {
      // recreate the data point in the format
      // that apex chart expects

      if(datnum.level_1 == "Total Casualties Fatalities" && datnum.level_2 == "\"Lorries, Tipper Trucks & Trailers\""){
      series.push({
          'x': parseInt(datnum.year),
          'y': LorrySum += parseFloat(datnum.value)
      })
      }
  }

  const lastItem = series[series.length - 1];
  series = [];
  series.push(lastItem.y);
  return series;
}

async function loadDonutBusesData(url) {
  const response = await axios.get(url);
  return response.data.Level2;
}

let BusesSum = 0;

function transformDonutBusesData(rawData){
  // accumulator array that will store the final
  // results
  let series = [];

  for (let datnum of rawData) {
      // recreate the data point in the format
      // that apex chart expects

      if(datnum.level_1 == "Total Casualties Fatalities" && datnum.level_2 == "Buses"){
      series.push({
          'x': parseInt(datnum.year),
          'y': BusesSum += parseFloat(datnum.value)
      })
      }
  }

  const lastItem = series[series.length - 1];
  series = [];
  series.push(lastItem.y);
  return series;
}

async function loadDonutOthersData(url) {
  const response = await axios.get(url);
  return response.data.Level2;
}

let OthersSum = 0;

function transformDonutOthersData(rawData){
  // accumulator array that will store the final
  // results
  let series = [];

  for (let datnum of rawData) {
      // recreate the data point in the format
      // that apex chart expects

      if(datnum.level_1 == "Total Casualties Fatalities" && datnum.level_2 == "Others"){
      series.push({
          'x': parseInt(datnum.year),
          'y': OthersSum += parseFloat(datnum.value)
      })
      }
  }

  const lastItem = series[series.length - 1];
  series = [];
  series.push(lastItem.y);
  return series;
}