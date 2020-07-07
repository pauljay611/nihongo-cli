import { IQuestion, QuestionName } from '../../types';
import { QuestionHistory, questionList } from '../models';
export class OpeningQuestion implements IQuestion {
    public name: QuestionName;
    question = {
        type: 'confirm',
        name: QuestionName.Opening,
        message: 'Start your japanese journey'
    };
    constructor() {
        this.name = QuestionName.Opening;
    }
    run(answer: boolean) {
        if (!answer) {
            QuestionHistory.next(questionList.Opening.question);
            return;
        }
        QuestionHistory.next(questionList.MainMenu.question);
    }
}
