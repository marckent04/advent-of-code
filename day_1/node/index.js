import { calculateCalibrationSum } from "./calibrations-sum.js";
import { getInputContent } from "./get-input-content.js";

function main() {
  const calibrations = getInputContent("../input.txt");
  console.log(calculateCalibrationSum(calibrations));
}

main();
