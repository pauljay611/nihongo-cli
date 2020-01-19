/** 取得 random 題目
 *  輸入題數與時間
 *  輸入答案
 *  顯示 correct or wrong
 *  記錄到 record database
 *  離開
 */

/** 50音考法
 *  字母: 英文
 *  英文: 字母選擇
 */
import { hiraganaLetters, katakanaLetters } from './template'
import { prompt, input } from './util'

export const testing = {
	hiragana(number) {
		const questionsList = questions(number, 'hiragana', 'characters').map(
			question => {
				return input('Test', question)
			}
		)
		console.log(questionsList)
		prompt(questionsList)
			.then(async function(answer) {
				console.log(answer)
			})
			.catch(error => console.log(error))
	},
	katakana() {},
	n5() {},
	n5() {},
	n3() {},
	n2() {},
	n1() {}
}
const testType = {
	characters(table) {
		const number = Math.floor(Math.random() * 50)
		if (table === 'hiragana') return hiraganaLetters[number]
		if (table === 'katakana') return katakanaLetters[number]
	}
}

const questions = (number, table, type) => {
	const questions = []
	console.log(type)
	for (let item = 0; item < number; item++) {
		questions.push(testType[type](table))
	}
	return questions
}
