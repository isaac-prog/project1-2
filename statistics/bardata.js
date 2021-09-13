async function loadBarPedestriansData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

function transformBarPedestriansData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_2 == "Pedestrians"){
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}

async function loadBarPMDData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

function transformBarPMDData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_2 == "Personal Mobility Device Users"){
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}

async function loadBarCyclistData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

function transformBarCyclistData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_2 == "Cyclists & Pillions"){
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}

async function loadBarMotorCyclistData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

function transformBarMotorCyclistData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_2 == "Motor Cyclists & Pillion Riders"){
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}

async function loadBarMotorVehiclesData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

function transformBarMotorVehiclesData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_2 == "Motor Vehicle Drivers & Passengers Cars & Station Wagons"){
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}

async function loadBarGoodsVehiclesData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

function transformBarGoodsVehiclesData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_2 == "Goods Vans & Pick-ups"){
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}

async function loadBarLorryData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

function transformBarLorryData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_2 == "\"Lorries, Tipper Trucks & Trailers\""){
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}

async function loadBarBusesData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

function transformBarBusesData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_2 == "Buses"){
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}

async function loadBarOthersData(url) {
    const response = await axios.get(url);
    return response.data.Level2;
}

function transformBarOthersData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_2 == "Others"){
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}
