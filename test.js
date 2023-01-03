
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


// step 
//   1. set up return alphabet fn for each 
// 2. return number. 
// 3.retunr number . 
// 4. add .


// return and add number 
// regex 
const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
const generateNumber = (letter) => {
    let number
    for (let i = 0; i < alphabet.length ; i++) {
        if (letter.toLowerCase() === alphabet[i].toLowerCase()) {
            number = i + 1
        }
    }

    return number

}




function alphabetPosition(text) {
    let texts = []
    let regex = /^[A-Za-z]+$/
    let value = ''
    for (let i = 0; i < text.length; i++) {
        if (regex.test(text[i])) {
            texts.push(generateNumber(text[i]))
        }
    }
    for ( let i = 0 ; i <texts.length ; i ++)  { 
        value += `${texts[i]}${i=== texts.length -1?'':' '}`
    }
    console.log(value)
    return value
}
alphabetPosition("The sunset sets at twelve o' clock.")
alphabetPosition('>2o.zhw$')
