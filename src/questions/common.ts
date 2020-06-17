import inquirer = require('inquirer');
import chalk from 'chalk'
import { IQuestion, QuestionName } from '../types'
import { welcome } from "../templates";

export class OpeningQuestion implements IQuestion {
    public name: QuestionName;

    constructor() {
        this.name = QuestionName.Opening
    }
    async question() {
        console.log(chalk.blue(welcome));

        const ans = await inquirer
            .prompt([
                {
                    type: "confirm",
                    name: "Start",
                    message: "Start your japanese journey",
                },
            ]);
        return ans.Start as QuestionName
    }
}
