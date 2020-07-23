import { IQuestion, QuestionName, JlptLevel, Questions } from '../../types';
import * as questions from '../questions';
import { Subject } from 'rxjs';

export class QuestionHistory {
    static history: IQuestion[] = [];
    static prompts = new Subject();

    static get() {
        return this.history.pop() ?? questionList[QuestionName.Opening];
    }
    static set(history: IQuestion) {
        this.history.push(history);
    }
    static next(question: Questions) {
        this.prompts.next(question);
    }
}
const Opening = new questions.OpeningQuestion();
const Menu = new questions.MenuQuestion();
const ExcerciseOptions = new questions.ExcerciseOptionsQuestion();
const CharactersTable = new questions.CharactersTableQuestion();
const Hiragana = new questions.HiraganaQuestion();
const Katakana = new questions.KatakanaQuestion();
const Words = new questions.WordsQuestion();
const N1 = new questions.JLPTWordsQuestion(QuestionName.N1);
const N2 = new questions.JLPTWordsQuestion(QuestionName.N2);
const N3 = new questions.JLPTWordsQuestion(QuestionName.N3);
const N4 = new questions.JLPTWordsQuestion(QuestionName.N4);
const N5 = new questions.JLPTWordsQuestion(QuestionName.N5);
const Exit = new questions.Exit();
// Models
export const questionList = {
    [QuestionName.Opening]: Opening,
    [QuestionName.MainMenu]: Menu,
    [QuestionName.ExcerciseOptions]: ExcerciseOptions,
    [QuestionName.CharactersTable]: CharactersTable,
    [QuestionName.Hiragana]: Hiragana,
    [QuestionName.Katakana]: Katakana,
    [QuestionName.Words]: Words,
    [QuestionName.N1]: N1,
    [QuestionName.N2]: N2,
    [QuestionName.N3]: N3,
    [QuestionName.N4]: N4,
    [QuestionName.N5]: N5,
    // [QuestionName.ENTER_PAGE]: new questions.EnterPage(),
    // [QuestionName.NEXT]: new questions.Next(),
    // [QuestionName.Return]: new questions.Return(),
    [QuestionName.Exit]: Exit
};
