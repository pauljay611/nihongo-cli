export interface IQuestion {
    name: QuestionName;
    question(): QuestionName;
}

export enum QuestionName {
    Opening = 'Opening',
    MainMenu = 'MainMenu',
    Excercise = 'Excercise',
    Testing = 'Testing',
    Record = 'Record',
    CharactersTable = 'CharactersTable',
    Words = 'Words',
    Hiragana = 'Hiragana',
    Katakana = 'Katakana',
    N5 = 'N5',
    N4 = 'N4',
    N3 = 'N3',
    N2 = 'N2',
    N1 = 'N1',
    Return = 'return'
}

export type Prompt = {
    [name in QuestionName]: QuestionName
}