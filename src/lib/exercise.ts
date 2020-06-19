import { IQuestion, QuestionName, HistoryName } from '../types'
import { list } from '../utils';

export class CharactersTableQuestion implements IQuestion {
    public name: QuestionName;

    constructor() {
        this.name = QuestionName.CharactersTable
    }
    question() {
        return list(this.name, 'Characters Excercise', [
            { name: QuestionName.Hiragana, value: QuestionName.Hiragana },
            { name: QuestionName.Katakana, value: QuestionName.Katakana },
            { name: HistoryName.Return, value: QuestionName.MainMenu }
        ])
    }
}

export class WordsQuestion implements IQuestion {
    public name: QuestionName;

    constructor() {
        this.name = QuestionName.Words
    }
    question() {
        return list(this.name, 'Words excercise', [
            { name: QuestionName.N5, value: QuestionName.N5 },
            { name: QuestionName.N4, value: QuestionName.N4 },
            { name: QuestionName.N3, value: QuestionName.N3 },
            { name: QuestionName.N2, value: QuestionName.N2 },
            { name: QuestionName.N1, value: QuestionName.N1 },
            { name: HistoryName.Return, value: QuestionName.MainMenu }
        ])
    }
}
