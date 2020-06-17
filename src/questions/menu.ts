import { prompt, list } from '../utils'
import { options } from './options'
import { IQuestion, QuestionName, Prompt } from '../types'
import { reset, exit } from "../utils";
import { QuestionHandler } from '../lib/questionHandler';
import { welcome } from "../templates";

// export const menu = {
// 	async menu() {
// 		const menuAns = await prompt([
// 			list('Menu', 'Choose your lesson', [
// 				{
// 					name: 'Start your exercise',
// 					value: 'exercise'
// 				},
// 				{ name: 'Testing', value: 'test' },
// 				{ name: 'Record', value: 'record' }
// 			])
// 		])
// 		options[menuAns.Menu]()
// 	}
// }


export class MenuQuestion extends QuestionHandler implements IQuestion {
	public name: QuestionName;

	constructor() {
		super()
		this.name = QuestionName.MainMenu
	}
	async question() {
		const menuAns = await prompt([
			list(this.name, 'Choose your lesson', [
				{
					name: 'Start your exercise',
					value: QuestionName.Excercise
				},
				{ name: 'Testing', value: QuestionName.Testing },
				{ name: 'Record', value: QuestionName.Record }
			])
		]) as Prompt
		return menuAns
	}
}
