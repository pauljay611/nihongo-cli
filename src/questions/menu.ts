import { prompt, list } from '../utils'
import { IQuestion, QuestionName, Prompt } from '../types'
import { reset, exit } from "../utils";
import { QuestionHandler } from '../lib/questionHandler';
import { welcome } from "../templates";

export class MenuQuestion implements IQuestion {
	public name: QuestionName;

	constructor() {
		this.name = QuestionName.MainMenu
	}
	async question() {
		const menuAns = await prompt([
			list(this.name, 'Choose your lesson', [
				// {
				// 	name: 'Start your exercise',
				// 	value: QuestionName.Excercise
				// },
				// { name: 'Testing', value: QuestionName.Testing },
				// { name: 'Record', value: QuestionName.Record }
			])
		])
		return menuAns[this.name] as QuestionName
	}
}
