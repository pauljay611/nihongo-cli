import { QuestionName, IQuestion } from '../types'
import { OpeningQuestion } from '../questions/common'
import { Subject } from 'rxjs'
import inquirer = require('inquirer')

type QuestionList = {
    [name in QuestionName]: IQuestion
}

export const questionList: QuestionList = {
    [QuestionName.Opening]: new OpeningQuestion()
}

export class QuestionHandler {
    public queue: IQuestion[] = []
    public currentQuestion: IQuestion
    public nextQuestion: QuestionName = this.currentQuestion.name

    constructor(currentQuestion: IQuestion) {
        this.currentQuestion = currentQuestion
        this.init()
    }
    back() {
        return this.queue.pop()
    }
    init() {
        const prompts = new Subject()
        inquirer.prompt(prompts as inquirer.QuestionCollection).ui.process.subscribe(
            async ans => {
                this.nextQuestion = ans[this.currentQuestion.name]
                this.currentQuestion = questionList[this.nextQuestion]
                this.queue.push(this.currentQuestion)
                this.nextQuestion = await this.currentQuestion.question()
            },
            err => {
                console.log(err)
            }
        )
        return this
    }
}