import Separator = require('inquirer/lib/objects/separator');

export interface Choices {
    name: string;
    value: QuestionName;
}

export interface Questions {
    type: string;
    name: string;
    message: string;
    choices?: (Choices | Separator)[];
}

export interface IQuestion {
    name: QuestionName;
    question: Questions;
    run: (answer: any) => void;
}

export enum QuestionName {
    Opening = 'Opening',
    MainMenu = 'MainMenu',
    ExcerciseOptions = 'ExcerciseOptions',
    CharactersTable = 'CharactersTable',
    Hiragana = 'Hiragana',
    Katakana = 'Katakana',
    Words = 'Words',
    N5 = 'n5',
    N4 = 'n4',
    N3 = 'n3',
    N2 = 'n2',
    N1 = 'n1',
    ENTER_PAGE = 'ENTER_PAGE',
    // Return = 'Return',
    Exit = 'Exit'
}

export type QuestionList = {
    [name in QuestionName]: IQuestion;
};

export interface JlptResponse {
    meta: {
        status: number;
    };
    data: {
        slug: string;
        is_common: boolean;
        tags: string[];
        jlpt: string[];
        japanese: { word: string; reading: string }[];
        senses: [
            {
                english_definitions: string[];
            }
        ];
    }[];
}
