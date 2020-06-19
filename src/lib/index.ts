import { QuestionName, HistoryName, QuestionList } from '../types'
import { OpeningQuestion } from './openning'
import { MenuQuestion } from './menu'
import { ExcerciseOptionsQuestion } from './excerciseOptions'
import { Subject } from 'rxjs'
import inquirer = require('inquirer')
import { exit } from '../utils'
import { CharactersTableQuestion, HiraganaQuestion, KatakanaQuestion } from './exercise'

export class QuestionHandler {

  public history: QuestionName[] = []
  public currentQuestion: QuestionName
  public questionList: QuestionList = {
    [QuestionName.Opening]: new OpeningQuestion(),
    [QuestionName.MainMenu]: new MenuQuestion(),
    [QuestionName.ExcerciseOptions]: new ExcerciseOptionsQuestion(),
    [QuestionName.CharactersTable]: new CharactersTableQuestion(),
    [QuestionName.Hiragana]: new HiraganaQuestion(),
    [QuestionName.Katakana]: new KatakanaQuestion(),
  }

  constructor() {
    this.currentQuestion = QuestionName.Opening
    this.init()
  }

  init() {
    const prompts = new Subject()
    inquirer.prompt(prompts as inquirer.QuestionCollection).ui.process.subscribe(
      async ({ answer, name }) => {
        if (answer === HistoryName.Exit) {
          exit()
          return
        }
        if (answer === true && name === QuestionName.Opening) answer = QuestionName.MainMenu
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