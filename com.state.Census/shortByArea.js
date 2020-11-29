
const csvToJsonConverter = require('./CsvToJsonHelper')
const fs = require('fs')

function shortByArea(fileLocation){
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

module.exports = shortByArea;
