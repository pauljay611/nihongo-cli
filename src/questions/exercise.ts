import { hiraganaTemplate, katakanaTemplate, rows } from '../templates'
import { prompt, list } from '../utils'
import { options } from './options'
import { words } from './words'

export const exercise = {
	async charactersTable() {
		const charactersTableAns = await prompt([
			list('CharactersTable', 'CharactersTable', [
				{ name: 'Hiragana', value: 'hiragana' },
				{ name: 'Katakana', value: 'katakana' },
				{ name: 'Return', value: 'return' }
			])
		])
		if (charactersTableAns.CharactersTable === 'hiragana') {
			console.log('-----------------------------')
			console.log(rows)
			console.log(hiraganaTemplate)
			console.log('-----------------------------')
		}
		if (charactersTableAns.CharactersTable === 'katakana') {
			console.log('-----------------------------')
			console.log(rows)
			console.log(katakanaTemplate)
			console.log('-----------------------------')
		}
		if (charactersTableAns.CharactersTable === 'return') {
			options.exercise()
		}
		return
	},
	async words() {
		const wordsAns = await prompt([
			list('Words', 'Words', [
				{ name: 'N5', value: 'n5' },
				{ name: 'N4', value: 'n4' },
				{ name: 'N3', value: 'n3' },
				{ name: 'N2', value: 'n2' },
				{ name: 'N1', value: 'n1' },
				{ name: 'Return', value: 'return' }
			])
		])
		if (wordsAns.Words === 'return') {
			options.exercise()
			return
		}
		words(wordsAns.Words)
	}
}
