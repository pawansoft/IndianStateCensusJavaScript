const { rejects } = require('assert');
const { resolve } = require('path');
const fs = require('fs');
const path = require ('path');
const csv = require('csv-parser')

let censusData = [];
function loadStateCensusData(fileLocation){
    return new Promise((resolve, rejects) => {

        if(!fs.existsSync(fileLocation)){
            rejects(new Error('No Such file exist Exception')) 
        }
        else{
            var extension = path.extname(fileLocation)
            if(extension != '.csv'){
                rejects(new Error('Invalid File type Exception'))
            }
            fs.createReadStream(fileLocation)
            .pipe(csv())
            .on('headers', (header) =>{
                if(header[0] != 'State' || header[1] != 'Population' || header[2] != 'AreaInSqKm' || header[3] != 'DensityPerSqKm'){
                    rejects(new Error('Invalid Header Exception'))
                }
            }).on('data', (data) =>{
                if(data.State == '' || data.Population == '' || data.AreaInSqKm == '' || data.DensityPerSqKm == ''){
                    rejects(new Error('Invalid Delimeter Exception'));
                }
                else{
                    censusData.push(data);
                }
            })
            .on('end', () => {
                resolve(censusData.length)
            })
        }
    })
}

module.exports = loadStateCensusData;
