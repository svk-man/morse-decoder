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
  let result = '';
  let chunks = expr.match(/.{1,10}/g);
  for (let chunk of chunks) {
    if (chunk == '**********') {
      result += ' ';
    } else {
      let pairs = chunk.match(/.{1,2}/g);
      let morse = '';
      for (let pair of pairs) {
        switch(pair) {
          case '10':
            morse += '.';
            break;
          case '11':
            morse += '-';
            break;
        }
      }

      result += MORSE_TABLE[morse];
    }
  }

  return result;
}

module.exports = {
    decode
}