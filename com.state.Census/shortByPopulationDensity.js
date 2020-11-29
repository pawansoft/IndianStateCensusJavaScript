const csvToJsonConverter = require('./CsvToJsonHelper')

function shortByPopulationDensity(fileLocation){
    return new Promise((resolve, rejects) => {
        csvToJsonConverter(fileLocation)
        .then(data => {
                data.sort((data1, data2) => (parseInt(data1.DensityPerSqKm) > parseInt(data2.DensityPerSqKm)) ? -1 : 1)
                resolve(data)
        });
    });
}

module.exports = shortByPopulationDensity;