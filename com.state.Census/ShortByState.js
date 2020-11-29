const csvToJsonConverter = require('./CsvToJsonHelper')

function shortByState(fileLocation){
    return new Promise((resolve, rejects) => {
        csvToJsonConverter(fileLocation)
        .then(data => {
            data.sort((obj1, obj2) => {
                obj2.State.localeCompare(obj1.State);
                resolve(data)
        });
    });
})
}

module.exports = shortByState;