import { QuestionName, HistoryName, QuestionList, JlptLevel } from '../types'
import { Subject } from 'rxjs'
import inquirer = require('inquirer')
import { exit, input } from '../utils'
import { CharactersTableQuestion, HiraganaQuestion, KatakanaQuestion, ExcerciseOptionsQuestion, MenuQuestion, OpeningQuestion, JlptWordsQuestion, WordsQuestion, EnterPage } from './questions'

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
    [QuestionName.Words]: new WordsQuestion(),
    [QuestionName.N1]: new JlptWordsQuestion(QuestionName.N1, JlptLevel.N1),
    [QuestionName.N2]: new JlptWordsQuestion(QuestionName.N2, JlptLevel.N2),
    [QuestionName.N3]: new JlptWordsQuestion(QuestionName.N3, JlptLevel.N3),
    [QuestionName.N4]: new JlptWordsQuestion(QuestionName.N4, JlptLevel.N4),
    [QuestionName.N5]: new JlptWordsQuestion(QuestionName.N5, JlptLevel.N5),
    [QuestionName.ENTER_PAGE]: new EnterPage(),
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

        // JLPT test operation
        if (answer === HistoryName.NEXT) {
          this.questionList[this.currentQuestion].page = (this.questionList[this.currentQuestion].page ?? 0) + 1
          prompts.next(this.questionList[this.currentQuestion].question())
          return
        }
        // TODO: fix bug 
        if (!isNaN(+answer)) {
          this.questionList[this.currentQuestion].page = +answer
          prompts.next(this.questionList[this.history.pop() ?? QuestionName.MainMenu].question())
          return
        }

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