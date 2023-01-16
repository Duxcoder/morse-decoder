const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode (expr) {
    return expr.split('**********')
    .map(encodeWord => divider(encodeWord, 10)
        .map(encodeLetter => divider(encodeLetter.slice(encodeLetter.indexOf('1')), 2) // remove padding zero
            .map(number => decoderToMorse(number)).join(''))
                .map(morse => decoderToChar(morse)).join('')).join(' ')
}

const divider = (numberStr, amount) => {
    const arr = [];
    const slicer = [];
    for (let i = 0; i < (numberStr.length / amount); i++) {
        if (i === 0) {
            arr[i] = numberStr.substr(0, amount)
            slicer[i] = numberStr.slice(amount)
        } else {
            arr[i] = slicer[i-1].substr(0, amount)
            slicer[i] = slicer[i-1].slice(amount)
        }
    }
    return arr
}

const decoderToMorse = (numbers) => {
    if (numbers === '10') return '.'
    if (numbers === '11') return '-'
}

const decoderToChar = (morse) => {
    console.log(morse)
    for (let key in MORSE_TABLE) {
        if (morse === key) return MORSE_TABLE[key]
    }
}

// It's my mistake, i create encoder...
// const replaceMorse = (letter) => {
//     for (let key in MORSE_TABLE) {
//         if (letter === MORSE_TABLE[key]) return key
//     }
// }
// const createMorseStr = (expr) => {
//     return expr.split(' ').map(word => word.split('').map(letter => replaceMorse(letter)));
// }

// const addingZero = (encodedStr) => {
//     while (encodedStr.length < 10){
//         encodedStr = '0' + encodedStr
//     }
//     return encodedStr
// }
// function encode(expr) {
//     return createMorseStr(expr).map(word => {
//         return word.map(letter => letter.split('').map(char => {
//             if (char === '-') return '11'
//             if (char === '.') return '10'
//             return char
//         }).join('')).join('')
//     }).map(word => {
//         return addingZero(word)
//     }).join('**********')
// }

module.exports = {
    decode
}