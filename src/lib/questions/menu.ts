import { list } from '../../utils'
import { IQuestion, QuestionName, HistoryName } from '../../types'

export class MenuQuestion implements IQuestion {
	public name: QuestionName;

	constructor() {
		this.name = QuestionName.MainMenu
	}
	question() {
		return list(this.name, 'Choose your lesson', [
			{
				name: QuestionName.ExcerciseOptions,
				value: QuestionName.ExcerciseOptions
			},
			// { name: 'Testing', value: QuestionName.Testing },
			// { name: 'Record', value: QuestionName.Record },
			{ name: HistoryName.Return, value: HistoryName.Return }
		])
	}
}
