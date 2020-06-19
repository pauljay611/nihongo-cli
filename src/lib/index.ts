import { QuestionName, HistoryName, QuestionList } from '../types'
import { OpeningQuestion } from './openning'
import { MenuQuestion } from './menu'
import { Subject } from 'rxjs'
import inquirer = require('inquirer')
import { exit } from '../utils'

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
      async ({ answer, name }) => {
        if (answer === true) answer = QuestionName.MainMenu
        if (answer === HistoryName.Exit) {
          exit()
          return
        }
        if (answer === HistoryName.Return) {
          answer = this.history.pop()
        }
        console.log(answer, this.currentQuestion, this.history)
        this.history.push(this.currentQuestion)
        this.currentQuestion = answer
        prompts.next(this.questionList[this.currentQuestion].question())
      },
      err => {
        console.log(err)
      }
    )
    prompts.next(this.questionList[this.currentQuestion].question())
  }
}