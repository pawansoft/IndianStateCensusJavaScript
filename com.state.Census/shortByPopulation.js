const csvToJsonConverter = require('./CsvToJsonHelper')

function shortByPopulation(fileLocation){
    return new Promise((resolve, rejects) => {
        csvToJsonConverter(fileLocation)
        .then(data => {
            data.sort((obj1, obj2) => {
                obj1.Population - obj2.Population;
                resolve(data)
        });
    });
})
}

module.exports = shortByPopulation;