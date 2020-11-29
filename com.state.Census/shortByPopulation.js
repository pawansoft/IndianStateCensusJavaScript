const csvToJsonConverter = require('./CsvToJsonHelper')

function shortByPopulation(fileLocation){
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

module.exports = shortByPopulation;