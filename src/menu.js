import { prompt, list } from './util'
import { options } from './options'

export const menu = {
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
				options[answer.Menu]()
			})
			.catch(error => console.log(error))
	}
}
