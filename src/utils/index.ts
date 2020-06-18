import inquirer from 'inquirer'
import { QuestionName } from '../types'

export const reset = () => {
	process.stdout.write('\x1bc')
}

export const exit = () => {
	console.log('Good bye~')
	process.stdin.pause()
}

export const prompt = (message: inquirer.QuestionCollection) => {
	reset()
	return inquirer.prompt(message)
}

export const list = (name: string, message: string, choices: { name: string, value: QuestionName }[]) => {
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

export const input = (name: string, message: string) => {
	return {
		type: 'input',
		name,
		message
	}
}