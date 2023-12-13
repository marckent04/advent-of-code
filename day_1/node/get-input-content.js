import fs from "fs";

/**
 *
 * @param {String} inputPath
 * @returns {String[]}
 */
export function getInputContent(inputPath) {
  const calibrationsFileContent = fs.readFileSync(inputPath, {
    encoding: "utf-8",
  });
  return calibrationsFileContent.split("\n").map((c) => c.trim());
}
