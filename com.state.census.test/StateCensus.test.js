const { test, expect, describe } = require("@jest/globals")
const loadStateCensusData = require('../com.state.Census/LoadStateCensusDetail')
const shrotByState = require('../com.state.Census/ShortByState')
const shortByStateCode = require ('../com.state.Census/SortByStateCode')

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

    describe('TestingShortedData', () => {
        test('ProvideCSVFileLocation_WhenDataStoredInSorted_TestShouldPass', () =>{
            return shrotByState(indianStateCensus).then(data => {
                expect(data[0].State).toBe('Uttar Pradesh');
                expect(data[28].State).toBe('Assam');
            })
        })
        test('ProvideCSVFileLocation_WhenDataIsShorted_TestShouldPass ', () =>{
            return shortByStateCode(indeanStateCode).then(data =>{
                expect(data[0].StateCode).toBe('AN')
                expect(data[36].StateCode).toBe('KL')
            })
        })
    })




