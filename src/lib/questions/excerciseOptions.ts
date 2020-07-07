// import { prompt, list } from '../utils'
// import { testing } from './testing'
// import { exercise } from './exercise'
// import { menu } from './menu'

// export const options = {
// 	async exercise() {
// 		const exerciseAns = await prompt([
// 			list('Exercise', 'Exercise', [
// 				{
// 					name: '50 Characters Table',
// 					value: 'charactersTable'
// 				},
// 				{ name: 'Words', value: 'words' },
// 				{ name: 'Return', value: 'return' }
// 			])
// 		])
// 		if (exerciseAns.Exercise === 'return') {
// 			menu.menu()
// 			return
// 		}
// 		exercise[exerciseAns.Exercise]()
// 	},
// 	async test() {
// 		const testingAns = await prompt([
// 			list('Testing', 'Testing', [
// 				{ name: 'Hiragana', value: 'hiragana' },
// 				{ name: 'Katakana', value: 'katakana' },
// 				{ name: 'N5', value: 'n5' },
// 				{ name: 'N4', value: 'n4' },
// 				{ name: 'N3', value: 'n3' },
// 				{ name: 'N2', value: 'n2' },
// 				{ name: 'N1', value: 'n1' },
// 				{ name: 'Return', value: 'return' }
// 			])
// 		])
// 		if (testingAns.Testing === 'return') {
// 			menu.menu()
// 			return
// 		}
// 		testing[testingAns.Testing]()
// 	},
// 	record() { },
// }

import { IQuestion, QuestionName } from '../../types';
import { list } from '../../utils';
import { QuestionHistory, questionList } from '../models';
export class ExcerciseOptionsQuestion implements IQuestion {
    public name = QuestionName.ExcerciseOptions;
    question = list(this.name, 'Choose your exercise', [
        {
            name: QuestionName.CharactersTable,
            value: QuestionName.CharactersTable
        },
        // {
        //     name: QuestionName.Words,
        //     value: QuestionName.Words
        // },
        {
            name: QuestionName.Opening,
            value: QuestionName.Opening
        }
    ]);

    run(answer: QuestionName) {
        QuestionHistory.next(questionList[answer].question);
    }
}
