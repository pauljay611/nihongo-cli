/** 取得 random 題目
 *  輸入題數與時間
 *  輸入答案
 *  顯示 correct or wrong
 *  記錄到 record database
 *  離開
 */

/** 50音考法
 *  字母: 平假片假
 *  輸入: 英文
 */

/** jlpt 考法
 *  單字: 英文
 *  輸入: 平假名
 */
import inquirer from 'inquirer'
import { Subject } from 'rxjs'
import { input } from './util'
import {
	hiraganaLettersTable,
	katakanaLettersTable,
	engLetters
} from './template'
import { options } from './options'
import { jpltApi } from './api'

export const testing = {
	hiragana() {
		characters50Test('hiragana', hiraganaLettersTable)
	},
	katakana() {
		characters50Test('katakana', katakanaLettersTable)
	},
	n5() {
		jlptTest('n5')
	},
	n4() {
		jlptTest('n4')
	},
	n3() {
		jlptTest('n3')
	},
	n2() {
		jlptTest('n2')
	},
	n1() {
		jlptTest('n1')
	}
}
const testType = {
	characters(table) {
		const number = Math.floor(Math.random() * 45)
		if (table === 'hiragana') return hiraganaLettersTable[number]
		if (table === 'katakana') return katakanaLettersTable[number]
	},
	async jlpt(level) {
		const number = Math.floor(Math.random() * 19)
		const page = Math.floor(Math.random() * 33 + 1)
		const words = await jpltApi(level, page)
		if (words === undefined || words.data.length === 0) {
			await testType.jlpt(level)
		} else {
			return {
				question: words.data[number].senses[0].english_definitions,
				answer: words.data[number].japanese
			}
		}
	}
}

const characters50Test = (type, table) => {
	let prompts = new Subject()
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

const jlptTest = async level => {
	const prompts = new Subject()
	let wrong = 0
	let right = 0
	let index = 0
	let question = await testType.jlpt(level)
	inquirer.prompt(prompts).ui.process.subscribe(
		async ans => {
			let result = ''
			if (ans.answer === question.answer[0].reading) {
				result = 'right'
				right++
			} else {
				wrong++
			}
			console.log(
				`Your Answer: ${ans.answer} Answer is: ${question.answer[0].reading} ${result} Wrong: ${wrong} / 3 Right: ${right}`
			)
			if (wrong === 3) {
				console.log(
					`Total: ${right} / ${index + 1} Your score ${right * 100}`
				)
				continueTesting()
			} else {
				index++
				question = await testType.jlpt(level)
				prompts.next(input(`Test${index + 1}`, question.question))
			}
		},
		err => {
			console.log(err)
		}
	)
	prompts.next(input(`Test${index + 1}`, question.question))
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
