import Separator = require('inquirer/lib/objects/separator');

export interface Choices {
    name: string
    value: QuestionName | HistoryName
}

export interface Answer {
    type: string;
    name: string;
    message: string;
    choices?: (Choices | Separator)[]
}

export interface IQuestion {
    name: QuestionName | HistoryName;
    question(): Answer;
}

export enum QuestionName {
    Opening = 'Opening',
    MainMenu = "MainMenu",
    // Katakana = 'Katakana',
    // N5 = 'N5',
    // N4 = 'N4',
    // N3 = 'N3',
    // N2 = 'N2',
    // N1 = 'N1',
}

export enum HistoryName {
    Return = 'Return',
    Exit = 'Exit'
}

export type QuestionList = {
    [name in QuestionName]: IQuestion;
}