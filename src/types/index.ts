import inquirer = require('inquirer');

export interface IQuestion {
    name: QuestionName;
    question(): any;
}

export enum QuestionName {
    Opening = 'Opening',
    MainMenu = "MainMenu"
    // Katakana = 'Katakana',
    // N5 = 'N5',
    // N4 = 'N4',
    // N3 = 'N3',
    // N2 = 'N2',
    // N1 = 'N1',
    // Return = 'Return',
    // Exit = 'Exit'
}

export type Prompt = {
    [name in QuestionName]: QuestionName
}