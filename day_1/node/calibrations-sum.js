export function calculateCalibrationSum(calibrations) {
    return calibrations.reduce((finalCalibration, calibration) => finalCalibration + improveCalibration(calibration), 0)
}

export function improveCalibration(calibration) {
   const numbers = getNumbers(calibration)
   if (!numbers.length) return 0

   const lastDigit = [...numbers].reverse()[0]
   return Number.parseInt(`${numbers[0]}${lastDigit}`)
}

export function getNumbers(word) {
    return word.split("").filter(c => {
        return Number.isInteger(Number.parseInt(c))
    })
}


export function convertLettersToNumbers(word) {
    let finalWord = word
   const dictionnary = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
   }

   while (whichConvert(finalWord)) {
    const key = whichConvert(finalWord)
    finalWord = finalWord.replace(key, dictionnary[key])
   }

   return finalWord
}

export function whichConvert(word) { 
    const numbersInLetters = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ]

    const letterPositionsInTheWord = numbersInLetters.map(letter => ({
        letter,
        position: word.indexOf(letter)
    }))


    const lettersWhichExistsInTheWord = letterPositionsInTheWord.filter(({position}) => position != -1)

    if (lettersWhichExistsInTheWord.length) {
        return lettersWhichExistsInTheWord
    .sort((a,b) => a.position - b.position)[0].letter
    }

    return null

   
 }