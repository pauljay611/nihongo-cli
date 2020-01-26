import { prompt, list } from './util'
import { options } from './options'

export const menu = {
	async menu() {
		const menuAns = await prompt([
			list('Menu', 'Choose your lesson', [
				{
					name: 'Start your exercise',
					value: 'exercise'
				},
				{ name: 'Testing', value: 'test' },
				{ name: 'Record', value: 'record' }
			])
		])
		options[menuAns.Menu]()
	}
}
