import { hiraganaTemplate, katakanaTemplate, rows } from './template'
import { prompt, list } from './util'
import { testing } from './testing'

export const options = {
	menu() {
		prompt([
			list('Menu', 'Choose your lesson', [
				{
					name: 'Start your exercise',
					value: 'exercise'
				},
				{ name: 'Testing', value: 'test' },
				{ name: 'Record', value: 'record' }
			])
		])
			.then(async function(answer) {
				console.log(options[answer.Menu])
				options[answer.Menu]()
			})
			.catch(error => console.log(error))
	},
	exercise() {
		prompt([
			list('Exercise', 'Exercise', [
				{
					name: '50 Characters Table',
					value: 'charactersTable'
				},
				{ name: 'Words', value: 'words' },
				{ name: 'Return', value: 'return' }
			])
		])
			.then(async function(answer) {
				options[answer.Exercise]('menu')
			})
			.catch(error => console.log(error))
	},
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
					options[answer.CharactersTable]('exercise')
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
			.then(async function(answer) {})
			.catch(error => console.log(error))
	},
	test() {
		prompt([
			list('Testing', 'Testing', [
				{ name: 'Hiragana', value: 'hiragana' },
				{ name: 'Katakana', value: 'katakana' },
				{ name: 'N5', value: 'n5' },
				{ name: 'N4', value: 'n4' },
				{ name: 'N3', value: 'n3' },
				{ name: 'N2', value: 'n2' },
				{ name: 'N1', value: 'n1' },
				{ name: 'Return', value: 'return' }
			])
		])
			.then(async function(answer) {
				console.log(answer)
				testing[answer.Testing](10)
			})
			.catch(error => console.log(error))
	},
	record() {},
	return(option) {
		options[option]()
	},
	exit() {
		console.log('Good bye~')
		process.stdin.pause()
	}
}
