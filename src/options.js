import { prompt, list } from './util'
import { testing } from './testing'
import { exercise } from './exercise'
import { menu } from './menu'

export const options = {
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
				if (answer.Exercise === 'return') {
					menu.menu()
					return
				}
				exercise[answer.Exercise]()
			})
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
				if (answer.Testing === 'return') {
					menu.menu()
					return
				}
				testing[answer.Testing]()
			})
			.catch(error => console.log(error))
	},
	record() {},
	exit() {
		console.log('Good bye~')
		process.stdin.pause()
	}
}
