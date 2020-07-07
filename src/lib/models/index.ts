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

// Models
export const questionList = {
    [QuestionName.Opening]: new questions.OpeningQuestion(),
    [QuestionName.MainMenu]: new questions.MenuQuestion(),
    [QuestionName.ExcerciseOptions]: new questions.ExcerciseOptionsQuestion(),
    [QuestionName.CharactersTable]: new questions.CharactersTableQuestion(),
    [QuestionName.Hiragana]: new questions.HiraganaQuestion(),
    [QuestionName.Katakana]: new questions.KatakanaQuestion(),
    // [QuestionName.Words]: new questions.WordsQuestion(),
    // [QuestionName.N1]: new questions.JlptWordsQuestion(
    //     QuestionName.N1,
    //     JlptLevel.N1
    // ),
    // [QuestionName.N2]: new questions.JlptWordsQuestion(
    //     QuestionName.N2,
    //     JlptLevel.N2
    // ),
    // [QuestionName.N3]: new questions.JlptWordsQuestion(
    //     QuestionName.N3,
    //     JlptLevel.N3
    // ),
    // [QuestionName.N4]: new questions.JlptWordsQuestion(
    //     QuestionName.N4,
    //     JlptLevel.N4
    // ),
    // [QuestionName.N5]: new questions.JlptWordsQuestion(
    //     QuestionName.N5,
    //     JlptLevel.N5
    // ),
    // [QuestionName.ENTER_PAGE]: new questions.EnterPage(),
    // [QuestionName.NEXT]: new questions.Next(),
    // [QuestionName.Return]: new questions.Return(),
    [QuestionName.Exit]: new questions.Exit()
};
