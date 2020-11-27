const { test, expect } = require("@jest/globals")
const { describe } = require("yargs")
const loadStateCensusData = require('../com.state.Census/LoadStateCensusDetail')

const indianStateCensus = '/home/pawan/Desktop/PlayGround/IndiaStateCensusData .csv'
const indeanStateCode1 = '/home/pawan/Desktop/PlayGround/IndiaStateCensusData1 .csv'
const indeanStateCode = '/home/pawan/Desktop/PlayGround/IndiaStateCode .csv'
const indianStateCensusText = '/home/pawan/Desktop/PlayGround/IndiaStateCensusData.txt'
const wrongDelimeter = '/home/pawan/Desktop/PlayGround/stateCensus.csv'

    test('providefilelocation_whenNumberOfRecodeMatch_TestShouldPass', () =>{
        const numberOfRecord = loadStateCensusData(indianStateCensus);
        return expect(numberOfRecord).resolves.toBe(29); 
    });
    test('ProvideFileLocation_WhenFileNotFound_ShouldThrowNoSuchFileException', () => {
        const exception = loadStateCensusData(indeanStateCode1);
        return expect(exception).rejects.toThrow('No Such file exist Exception')
    })
    test('ProvideFileLocation_WhenFileExtensionNotCSV_ShouldThrowInvalidFileTypeException', () => {
        const exception = loadStateCensusData(indianStateCensusText);
        return expect(exception).rejects.toThrow('Invalid File type Exception')
    })
    test('ProvideFileLocation_WhenHeaderMisMatched_shouldThrowInvalidHeaderException', () =>{
        const exception = loadStateCensusData(indeanStateCode);
        return expect(exception).rejects.toThrow('Invalid Header Exception')
    })


