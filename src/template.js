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
const hiraganaLetters = `あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもや－ゆ－よらりるれろわ－－－をん`
const katakanaLetters = `アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤ－ユ－ヨラリルレロワ－－－－ン`

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
