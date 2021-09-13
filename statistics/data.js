//dead

async function loadDeadData(url) {
    const response = await axios.get(url);
    return response.data.Level1;
}

function transformDeadData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_1 == "Total Casualties Fatalities"){
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
        }
    }
    return series;
}

//injured

async function loadInjuredData(url) {
    const response = await axios.get(url);
    return response.data.Level1;
}

function transformInjuredData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];

    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        if(datnum.level_1 == "Total Casualties Injured"){
            if(datnum.value=="na"){
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(0)
        })
    }
        else{
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
    }
        }
    }
    return series;
}