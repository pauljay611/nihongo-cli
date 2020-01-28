import inquirer from 'inquirer'
import { Subject } from 'rxjs'
import { jpltApi } from './api'
import { prompt, list, input } from './util'
import { exercise } from './exercise'

export const words = async level => {
	showWords(level, 1)
}

const showWords = async (level, page) => {
	const words = await jpltApi(level, page)
	words.data.forEach(word => {
		console.log(
			`Word: ${word.slug} (${word.japanese[0].reading}) Definition: ${word.senses[0].english_definitions}`
		)
	})
	let prompts = new Subject()
	inquirer.prompt(prompts).ui.process.subscribe(
		async ans => {
			if (ans.answer === 'return') {
				exercise.words()
				return
			}
			if (ans.answer === 'next') {
				page++
				showWords(level, page)
			}
			if (ans.answer === 'enter') {
				const pageNumber = await prompt([input('Page', 'Page Number')])
				showWords(level, pageNumber.Page)
			}
		},
		err => {
			console.log(err)
		}
	)
	prompts.next(
		list('Level', 'Level', [
			{
				name: 'Next Page',
				value: 'next'
			},
			{ name: 'Enter Page Number', value: 'enter' },
			{ name: 'Return', value: 'return' }
		])
	)
}
