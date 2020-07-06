import chalk from 'chalk';
import { IQuestion, QuestionName } from '../../types';
import { welcome } from '../../templates';
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
        console.log(chalk.blue(welcome));
        if (!answer) {
            QuestionHistory.next(questionList.Opening.question);
            return;
        }
        QuestionHistory.next(questionList.MainMenu.question);
    }
}
