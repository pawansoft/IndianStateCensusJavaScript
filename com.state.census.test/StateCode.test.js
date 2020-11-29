const { test, expect } = require("@jest/globals")
const { describe } = require("yargs")
const loadStateCodeData = require('../com.state.Census/LoadStateCode')

const indianStateCensus = '/home/pawan/Documents/javaScript/StateCensusAnalyser/Resource/IndiaStateCensusData .csv'
const indeanStateCode1 = '/home/pawan/Documents/javaScript/StateCensusAnalyser/Resource/IndiaStateCensusData1 .csv'
const indeanStateCode = '/home/pawan/Documents/javaScript/StateCensusAnalyser/Resource/IndiaStateCode .csv'
const indianStateCensusText = '/home/pawan/Documents/javaScript/StateCensusAnalyser/Resource/IndiaStateCensusData.txt'
const wrongDelimeter = '/home/pawan/Documents/javaScript/StateCensusAnalyser/Resource/stateCensus.csv'

    test('providefilelocation_whenNumberOfRecodeMatch_TestShouldPass', () =>{
        const numberOfRecord = loadStateCodeData(indeanStateCode);
        return expect(numberOfRecord).resolves.toBe(37); 
    });
    test('ProvideFileLocation_WhenFileNotFound_ShouldThrowNoSuchFileException', () => {
        const exception = loadStateCodeData(indeanStateCode1);
        return expect(exception).rejects.toThrow('No Such file exist Exception')
    })
    test('ProvideFileLocation_WhenFileExtensionNotCSV_ShouldThrowInvalidFileTypeException', () => {
        const exception = loadStateCodeData(indianStateCensusText);
        return expect(exception).rejects.toThrow('Invalid File type Exception')
    })
    test('ProvideFileLocation_WhenHeaderMisMatched_shouldThrowInvalidHeaderException', () =>{
        const exception = loadStateCodeData(indianStateCensus);
        return expect(exception).rejects.toThrow('Invalid Header Exception')
    })


