import inquirer from 'inquirer'

export const reset = () => {
	process.stdout.write('\x1bc')
}

export const prompt = message => {
	reset()
	return inquirer.prompt(message)
}

export const list = (name, message, choices) => {
	return {
		type: 'list',
		name,
		message,
		choices: [
			new inquirer.Separator(),
			...choices,
			new inquirer.Separator(),
			{ name: 'Exit', value: 'exit' }
		]
	}
}

export const input = (name, message) => {
	return {
		type: 'input',
		name,
		message
	}
}
