import { QuestionName, IQuestion } from '../types'
import { OpeningQuestion } from '../questions/common'
import { MenuQuestion } from '../questions/menu'
import { Subject } from 'rxjs'
import inquirer = require('inquirer')

type QuestionList = {
    [name in QuestionName]: IQuestion
}

export const questionList: QuestionList = {
    [QuestionName.Opening]: new OpeningQuestion(),
    [QuestionName.MainMenu]: new MenuQuestion()
}

export class QuestionHandler {
    public queue: IQuestion[] = []
    public currentQuestion: IQuestion = questionList.Opening
    public nextQuestion: QuestionName = questionList.Opening.name

    constructor() {
        this.init()
    }
    back() {
        return this.queue.pop()
    }
    init() {
        const prompts = new Subject()
        inquirer.prompt(prompts as inquirer.QuestionCollection).ui.process.subscribe(
            async ans => {
                let answer = ans[this.currentQuestion.name]
                if (ans[this.currentQuestion.name] === true) answer = QuestionName.MainMenu
                this.nextQuestion = answer
                this.currentQuestion = questionList[this.nextQuestion]
                this.queue.push(this.currentQuestion)
                this.nextQuestion = await this.currentQuestion.question()
            },
            err => {
                console.log(err)
            }
        )
        prompts.next(this.currentQuestion.question())
        return this
    }
}