 const { rejects } = require('assert');
const csv  = require('csvtojson');
var fs = require('fs');
const { resolve } = require('path');

function csvToJsonConverter(fileLocation){
    return new Promise((resolve, rejects) =>{
        jsonObj = csv().fromFile(fileLocation);
        resolve(jsonObj)
    })

}

module.exports = csvToJsonConverter;
// // readFromJson("/home/pawan/Documents/javaScript/StateCensusAnalyser/Resource/ShortedData.json")
// console.log(shortByState('/home/pawan/Desktop/PlayGround/IndiaStateCensusData .csv'));  

