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
    page?: number;
    name: QuestionName | HistoryName;
    question(): Answer;
}

export enum QuestionName {
    Opening = 'Opening',
    MainMenu = "MainMenu",
    ExcerciseOptions = "ExcerciseOptions",
    CharactersTable = "CharactersTable",
    Hiragana = 'Hiragana',
    Katakana = 'Katakana',
    Words = "Words",
    N5 = "N5",
    N4 = "N4",
    N3 = "N3",
    N2 = "N2",
    N1 = "N1",
    ENTER_PAGE = 'ENTER_PAGE'
}

export enum HistoryName {
    Return = 'Return',
    Exit = 'Exit',
    NEXT = 'NEXT',
}


export type QuestionList = {
    [name in QuestionName]: IQuestion;
}

export enum JlptLevel {
    N1 = 'n1',
    N2 = 'n2',
    N3 = 'n3',
    N4 = 'n4',
    N5 = 'n5',
}

export interface JlptResponse {
    meta: {
        status: number
    },
    data: {
        slug: string, is_common: boolean, tags: string[], jlpt: string[
        ],
        japanese: { word: string, reading: string }[
        ],
        senses: [
            {
                english_definitions: string[

                ],
            }
        ]
    }[]
}