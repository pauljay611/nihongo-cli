import { welcome } from './template'
import inquirer from 'inquirer'
import { reset, options } from './utils'

export function main() {
	const chalk = require('chalk')
	console.log(chalk.blue(welcome))

	inquirer
		.prompt([
			{
				type: 'confirm',
				name: 'Start',
				message: 'Start your japanese journey'
			}
		])
		.then(ans => {
			if (!ans.Start) {
				reset()
				options.exit()
				return
			}
			options.menu()
		})
}
