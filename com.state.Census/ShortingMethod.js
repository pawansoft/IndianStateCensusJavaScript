const csvToJsonConverter = require('../com.state.Census/CsvToJsonHelper')

function shortByState(fileLocation){
    return new Promise((resolve, rejects) => {
        csvToJsonConverter(fileLocation)
        .then(data => {
            data.sort((obj1, obj2) => {
                obj1.State.localeCompare(obj2.State)
                resolve(data)
        });
    });
})
}

module.exports = shortByState;