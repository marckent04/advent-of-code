import {describe, it } from 'node:test';
import assert from 'node:assert';

import { getNumbers, improveCalibration, calculateCalibrationSum, convertLettersToNumbers, whichConvert } from './calibrations-sum.js';

it("Should get all numbers in the word", () => {
    const word = "12av3"
    assert.deepEqual(getNumbers(word), ["1","2","3"])
})



describe("Should create number with the first and last digit in a word", () => {
    it('which contains only one number', () => {
        assert.strictEqual(improveCalibration("e2r"), 22)
        assert.strictEqual(improveCalibration("treb7uchet"), 77)
    });

    it('which contains no number', () => {
        assert.strictEqual(improveCalibration("aaa"), 0)
    });

    it("Which contains many numbers", () => { 
        assert.strictEqual(improveCalibration("1abc2"), 12)
        assert.strictEqual(improveCalibration("pqr3stu8vwx"), 38)
        assert.strictEqual(improveCalibration("a1b2c3d4e5f"), 15)
        assert.strictEqual(improveCalibration("treb7uchet"), 77)
    })
})


it('should convert number letter to digit', () => {
    assert.strictEqual(convertLettersToNumbers("nine"), "9")
    assert.strictEqual(convertLettersToNumbers("nineone"), "91")
    assert.strictEqual(convertLettersToNumbers("ninee"), "9e")
    assert.strictEqual(convertLettersToNumbers("9nine9"), "999")
    assert.strictEqual(convertLettersToNumbers("eightwothree"), "8wo3")
    assert.strictEqual(convertLettersToNumbers("4nineeightseven2"), "49872")
});

it('should define which convert', () => {
    assert.strictEqual(whichConvert("eightwothree"), "eight")
    assert.strictEqual(whichConvert("wothree"), "three")
});

it('should return null because nothing to convert', () => {
    assert.strictEqual(whichConvert("a"), null)
});


it('should calculate the calibrations sum', () => {
    const tests = [
        {
            values:  [
                "dskdskds7dd7",
                "hehe110",
                "dkdk15"
            ],
            result: 102
        },
        {
            values:  [
                "1abc2",
                "pqr3stu8vwx",
                "a1b2c3d4e5f",
                "treb7uchet"
            ],
            result: 142
        }
    ]

    for (const calibrationTest of tests) {
        assert.strictEqual(calculateCalibrationSum(calibrationTest.values), calibrationTest.result)
    }
});

