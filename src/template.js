export const welcome = `
======================================================================================================================
     __+      ___     _______      ____    ___     __________     ___      ___       _______       __________      ______
    |   \\    |  |    |_     _|     |  |   |  |    |  _____  |    |   \\    |  |      /   ____|      |  _____  |     |    |
    |    \\_  |  |      |   |       |  |___|  |    | |     | |    |    \\_  |  |     /   /  _____    | |     | |     |    | 
    |   _  \\ |  |      |   |       |   ___   |    | |     | |    |  |\\  \\ |  |    /   /  |___  \\   | |     | |     |____|  
    |  | \\  \\|  |     _|   |_      |  |   |  |    | |_____| |    |  | \\  \\|  |    \\  /______/  /   | |_____| |      ____
    |__|  \\_____|    |_______|     |__|   |__|    |_________|    |__|  \\_____|     \\_________/     |_________|     |____|

`
export const rows = '  |  a  |  e |  i |  o | u  |'
const column = 'AKSTNHMYRWN'
export const hiraganaLetters = `あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもや－ゆ－よらりるれろわ－－－をん`
export const katakanaLetters = `アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤ－ユ－ヨラリルレロワ－－－ヲン`

function lettersTemplate(table) {
	return table
		.split('')
		.map(letter => {
			return ` ${letter} |`
		})
		.map((letter, index) => {
			if (index % 5 === 4) return `${letter}\n`
			if (index % 5 === 0)
				return `${column[Math.floor(index / 5)]} | ${letter}`
			return letter
		})
		.join('')
}

export const hiraganaTemplate = lettersTemplate(hiraganaLetters)

export const katakanaTemplate = lettersTemplate(katakanaLetters)

export const hiraganaLettersTable = `あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん`
export const katakanaLettersTable = `アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン`
export const engLetters = [
	'a',
	'i',
	'u',
	'e',
	'o',
	'sa',
	'si',
	'su',
	'se',
	'so',
	'ka',
	'ki',
	'ku',
	'ke',
	'ko',
	'ta',
	'ti',
	'tu',
	'te',
	'to',
	'na',
	'ni',
	'nu',
	'ne',
	'no',
	'ha',
	'hi',
	'hu',
	'he',
	'ho',
	'ma',
	'mi',
	'mu',
	'me',
	'mo',
	'ya',
	'yu',
	'yo',
	'ra',
	'ri',
	'ru',
	're',
	'ro',
	'wa',
	'wo',
	'n'
]
