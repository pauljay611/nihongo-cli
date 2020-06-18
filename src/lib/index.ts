import { QuestionName, IQuestion, HistoryName } from '../types'
import { OpeningQuestion } from '../questions/common'
import { MenuQuestion } from '../questions/menu'
import { Subject } from 'rxjs'
import inquirer = require('inquirer')
import { exit } from '../utils'

type QuestionList = {
    [name in QuestionName]: IQuestion;
}


export class QuestionHandler {
    public history: QuestionName[] = []
    public currentQuestion: QuestionName
    public questionList: QuestionList = {
        [QuestionName.Opening]: new OpeningQuestion(),
        [QuestionName.MainMenu]: new MenuQuestion(),
    }

    constructor() {
        this.currentQuestion = QuestionName.Opening
        this.init()
    }
    init() {
        const prompts = new Subject()
        inquirer.prompt(prompts as inquirer.QuestionCollection).ui.process.subscribe(
            async ans => {
                let answer = ans[this.currentQuestion]
                if (ans[this.currentQuestion] === true) answer = QuestionName.MainMenu
                if (ans[this.currentQuestion] === HistoryName.Exit) {
                    exit()
                    return
                }
                if (ans[this.currentQuestion] === HistoryName.Return) {
                    answer = this.history.pop()
                }
                this.currentQuestion = answer
                this.history.push(this.currentQuestion)
                prompts.next(this.questionList[this.currentQuestion].question())
            },
            err => {
                console.log(err)
            }
        )
        prompts.next(this.questionList[this.currentQuestion].question())
    }
}