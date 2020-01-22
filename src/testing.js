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
import inquirer from 'inquirer'
import { prompt, input } from './util'
import {
	hiraganaLettersTable,
	katakanaLettersTable,
	engLetters
} from './template'
import { options } from './options'
export const testing = {
	hiragana(number) {
		const questionsList = questions(number, 'hiragana1', 'characters').map(
			(question, index) => {
				return input(`Test${index + 1}`, question)
			}
		)
		prompt(questionsList)
			.then(async function(answers) {
				const yourAnswers = Object.values(answers)
				const answerList = questionsList.map((question, index) => {
					const letterIndex = hiraganaLettersTable.indexOf(
						question.message
					)

					return {
						yourAnswer: yourAnswers[index],
						answer: engLetters[letterIndex],
						result:
							yourAnswers[index] === engLetters[letterIndex]
								? 'right'
								: 'wrong'
					}
				})
				let correct = 0
				answerList.forEach(answer => {
					console.log(
						`Your Answer: ${answer.yourAnswer}\n Answer is: ${answer.answer}\n ${answer.result}`
					)
					if (answer.result === 'right') correct++
				})
				console.log(`Total: ${correct} / ${answerList.length}`)
			})
			.then(() => {
				inquirer
					.prompt([
						{
							type: 'confirm',
							name: 'Continue',
							message: 'Continue testing?'
						}
					])
					.then(answer => {
						if (answer.Continue) {
							options.test()
						} else {
							options.exit()
						}
					})
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
		const number = Math.floor(Math.random() * 45)
		if (table === 'hiragana') return hiraganaLettersTable[number]
		if (table === 'katakana') return katakanaLettersTable[number]
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
