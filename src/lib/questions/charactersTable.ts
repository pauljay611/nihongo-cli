import { IQuestion, QuestionName } from '../../types';
import { list } from '../../utils';
import { QuestionHistory, questionList } from '../models';

export class HiraganaQuestion implements IQuestion {
    public name = QuestionName.Hiragana;
    question = list(this.name, 'Hiragana Excercise', [
        { name: QuestionName.MainMenu, value: QuestionName.MainMenu }
    ]);

    run(answer: QuestionName) {
        QuestionHistory.next(questionList[answer].question);
    }
}

export class KatakanaQuestion implements IQuestion {
    public name = QuestionName.Katakana;
    question = list(this.name, 'Katakana Excercise', [
        { name: QuestionName.MainMenu, value: QuestionName.MainMenu }
    ]);

    run(answer: QuestionName) {
        QuestionHistory.next(questionList[answer].question);
    }
}
