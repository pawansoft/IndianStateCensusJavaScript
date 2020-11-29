const csvToJsonConverter = require('./CsvToJsonHelper')

function shortByStateCode(fileLocation){
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

module.exports = shortByStateCode;