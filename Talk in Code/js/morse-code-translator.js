'use strict';

function MorseCodeTranslator() {

    /*
     This dictionary was forked from https://gist.github.com/mohayonao/094c71af14fe4791c5dd, then I added the (" ": "/") value.

     Thanks, mohayonao!
     */
    MorseCodeTranslator.prototype.dictionary = {
        '0': '-----',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..',
        '.': '.-.-.-',
        ',': '--..--',
        '?': '..--..',
        '!': '-.-.--',
        '-': '-....-',
        '/': '-..-.',
        '@': '.--.-.',
        '(': '-.--.',
        ')': '-.--.-',
        ' ': '/'
    };

    MorseCodeTranslator.prototype.toMorseCode = function (text) {

        var morseCode = '';

        for (var i = 0; i < text.length; i++) {

            var textChar = text[i].toLowerCase(),

                thisCharIsSpace = (textChar === ' '),
                thisCharIsFinal = (i === text.length - 1),
                nextCharIsSpace = !thisCharIsFinal && (text[i + 1] === ' '),

                shouldAppendSpace = !thisCharIsSpace && !thisCharIsFinal && !nextCharIsSpace;

            morseCode += this.dictionary[textChar];

            if (shouldAppendSpace) {
                morseCode += ' ';
            }

        }

        return morseCode;

    };

}