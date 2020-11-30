const csvToJsonConverter = require('./CsvToJsonHelper')
const fs = require('fs')

class Sort{

 byArea(fileLocation){
    return new Promise((resolve, rejects) => {
        csvToJsonConverter(fileLocation)
        .then(data => {
            data.sort((obj1, obj2) => {
                data.sort((data1, data2) => (parseInt(data1.AreaInSqKm) > parseInt(data2.AreaInSqKm)) ? -1 : 1)
                fs.writeFileSync('/home/pawan/Documents/javaScript/StateCensusAnalyser/Resource/ShortedData.json',JSON.stringify(data) )
                resolve(data)
        });
    });
})
}

byState(fileLocation){
    return new Promise((resolve) => {
        csvToJsonConverter(fileLocation)
        .then(data => {
            data.sort((obj1, obj2) => {
                obj2.State.localeCompare(obj1.State);
                resolve(data)
        });
    });
});
}

byPopulationDensity(fileLocation){
    return new Promise((resolve, rejects) => {
        csvToJsonConverter(fileLocation)
        .then(data => {
                data.sort((data1, data2) => (parseInt(data1.DensityPerSqKm) > parseInt(data2.DensityPerSqKm)) ? -1 : 1)
                resolve(data)
        });
    });
}

byPopulation(fileLocation){
    return new Promise((resolve, rejects) => {
        csvToJsonConverter(fileLocation)
        .then(data => {
            data.sort((obj1, obj2) => {
                data.sort((data1, data2) => (parseInt(data1.DensityPerSqKm) > parseInt(data2.DensityPerSqKm)) ? -1 : 1)
                resolve(data)
        });
    });
})
}

byStateCode(fileLocation){
    return new Promise((resolve, rejects) => {
        csvToJsonConverter(fileLocation)
        .then(data => {
            data.sort((obj1, obj2) => {
                obj1.StateCode.localeCompare(obj2.StateCode);
                resolve(data)
        });
    });
})
}

}

module.exports = Sort;