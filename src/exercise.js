import { hiraganaTemplate, katakanaTemplate, rows } from './template'
import { prompt, list } from './util'
import { options } from './options'

export const exercise = {
	charactersTable() {
		prompt([
			list('CharactersTable', 'CharactersTable', [
				{ name: 'Hiragana', value: 'hiragana' },
				{ name: 'Katakana', value: 'katakana' },
				{ name: 'Return', value: 'return' }
			])
		])
			.then(async function(answer) {
				if (answer.CharactersTable === 'hiragana') {
					console.log('-----------------------------')
					console.log(rows)
					console.log(hiraganaTemplate)
					console.log('-----------------------------')
				}
				if (answer.CharactersTable === 'katakana') {
					console.log('-----------------------------')
					console.log(rows)
					console.log(katakanaTemplate)
					console.log('-----------------------------')
				}
				if (answer.CharactersTable === 'return') {
					options.exercise()
				}
			})
			.catch(error => console.log(error))
	},
	words() {
		prompt([
			list('Words', 'Words', [
				{ name: 'N5', value: 'n5' },
				{ name: 'N4', value: 'n4' },
				{ name: 'N3', value: 'n3' },
				{ name: 'N2', value: 'n2' },
				{ name: 'N1', value: 'n1' },
				{ name: 'Return', value: 'return' }
			])
		])
			.then(async function() {})
			.catch(error => console.log(error))
	}
}
