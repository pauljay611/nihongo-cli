import chalk from 'chalk'
import { IQuestion, QuestionName } from '../types'
import { welcome } from "../templates";
export class OpeningQuestion implements IQuestion {
    public name: QuestionName;

    constructor() {
        this.name = QuestionName.Opening
    }
    question() {
        console.log(chalk.blue(welcome));

        return {
            type: "confirm",
            name: "Start",
            message: "Start your japanese journey",
        }
    }
}