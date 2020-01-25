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
import { input } from './util'
import {
	hiraganaLettersTable,
	katakanaLettersTable,
	engLetters
} from './template'
import { options } from './options'
import { Subject } from 'rxjs'

export const testing = {
	hiragana() {
		characters50Test('hiragana', hiraganaLettersTable)
	},
	katakana() {
		characters50Test('katakana', katakanaLettersTable)
	},
	n5() {},
	n4() {},
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

const characters50Test = (type, table) => {
	var prompts = new Subject()
	let index = 0
	let wrong = 0
	let right = 0
	let question = testType.characters(type)
	inquirer.prompt(prompts).ui.process.subscribe(
		ans => {
			const letterIndex = table.indexOf(question)
			let result = ''
			if (ans.answer !== engLetters[letterIndex]) {
				result = 'wrong'
				wrong++
			} else {
				right++
			}
			console.log(
				`Your Answer: ${ans.answer} Answer is: ${engLetters[letterIndex]} ${result} Wrong: ${wrong} / 3 Right: ${right}`
			)
			if (wrong === 3) {
				console.log(
					`Total: ${right} / ${index + 1} Your score ${right * 100}`
				)
				continueTesting()
			} else {
				index++
				question = testType.characters(type)
				prompts.next(input(`Test${index + 1}`, question))
			}
		},
		err => {
			console.log(err)
		}
	)
	prompts.next(input(`Test${index + 1}`, question))
}

const continueTesting = () => {
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
}
