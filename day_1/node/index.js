import fs from 'fs';
import {calculateCalibrationSum} from './calibrations-sum.js';
const calibrationsFileContent = fs.readFileSync("../input.txt", {encoding: "utf-8"})

const calibrations = calibrationsFileContent.split("\r\n")


console.log(calculateCalibrationSum(calibrations));

