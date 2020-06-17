import { questionList, QuestionHandler } from '../lib/questionHandler'


export class Main {
  static init() {
    new QuestionHandler(questionList.Opening)
  }
}
