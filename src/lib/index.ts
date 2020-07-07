import inquirer = require('inquirer');
import chalk from 'chalk';

import { welcome } from '../templates';
import { QuestionName } from '../types';
import { questionList, QuestionHistory } from './models';

export class QuestionHandler {
    constructor() {
        this.init();
    }

    init() {
        console.log(chalk.blue(welcome));
        inquirer
            .prompt(QuestionHistory.prompts as inquirer.QuestionCollection)
            .ui.process.subscribe(
                async ({ answer, name }) => {
                    console.log(answer, name);
                    questionList[name as QuestionName].run(answer as never);
                },
                (err) => {
                    console.log(err);
                }
            );
        QuestionHistory.next(questionList.Opening.question);
    }
}
