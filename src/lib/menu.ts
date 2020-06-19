import { prompt, list } from '../utils'
import { IQuestion, QuestionName, HistoryName } from '../types'
import { reset, exit } from "../utils";
import { QuestionHandler } from '.';
import { welcome } from "../templates";

export class MenuQuestion implements IQuestion {
	public name: QuestionName;

	constructor() {
		this.name = QuestionName.MainMenu
	}
	question() {
		return list(this.name, 'Choose your lesson', [
			// {
			// 	name: 'Start your exercise',
			// 	value: QuestionName.Excercise
			// },
			// { name: 'Testing', value: QuestionName.Testing },
			// { name: 'Record', value: QuestionName.Record },
			{ name: HistoryName.Return, value: HistoryName.Return }
		])
	}
}
