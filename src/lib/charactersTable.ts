import { rows, hiraganaTemplate, katakanaTemplate } from '../templates';
import { IQuestion, QuestionName, HistoryName } from '../types'
import { list } from '../utils';

export class HiraganaQuestion implements IQuestion {
    public name: QuestionName;

    constructor() {
        this.name = QuestionName.Hiragana
    }
    question() {
        console.log('-----------------------------')
        console.log(rows)
        console.log(hiraganaTemplate)
        console.log('-----------------------------')
        return list(this.name, 'Characters Excercise', [
            { name: HistoryName.Return, value: HistoryName.Return }
        ])
    }
}

export class KatakanaQuestion implements IQuestion {
    public name: QuestionName;

    constructor() {
        this.name = QuestionName.Katakana
    }
    question() {
        console.log('-----------------------------')
        console.log(rows)
        console.log(katakanaTemplate)
        console.log('-----------------------------')
        return list(this.name, 'Characters Excercise', [
            { name: HistoryName.Return, value: HistoryName.Return }
        ])
    }
}