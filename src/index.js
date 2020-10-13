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

function decode(expr) {
    let lex
    let result = ''
    let phrase = expr.split('**********')
    for (let i = 0; i < phrase.length; i++) {
        let word = []
        for (let j = 0, m = 0; j < phrase[i].length; j += 10, m++) {
            word.push(phrase[i].slice(j, j + 10))
            str1 = word[m].replace(/[^1]+/, '').replace(/11/g, '-').replace(/10/g, '.')
            str2 = word[m].replace(/11/g, '-').replace(/10/g, '.')
            MORSE_TABLE.hasOwnProperty(str1) ? word[m] = MORSE_TABLE[str1] : word[m] = MORSE_TABLE[str2]            
        }
        result += ' ' + word.join('')
    }
    return result.trim()
}

module.exports = {
    decode
}