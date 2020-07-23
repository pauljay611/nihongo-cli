import { IQuestion, QuestionName, Questions } from '../../types';

import { jpltApi } from '../../services/api';
import { list, input } from '../../utils';
import { QuestionHistory, questionList } from '../models';

let curJLPT: QuestionName = QuestionName.N1;
let curPage = 2;

export const showWords = async (level: QuestionName, page: number) => {
    const words = await jpltApi(level, page);
    words.data.forEach((word) => {
        console.log(
            `Word: ${word.slug} (${word.japanese[0].reading}) Definition: ${word.senses[0].english_definitions}`
        );
    });
};

export class JLPTWordsQuestion implements IQuestion {
    public name: QuestionName;
    question: Questions;

    constructor(name: QuestionName) {
        this.name = name;
        this.question = list(this.name, 'Choose your step', [
            {
                name: 'Next Page',
                value: this.name
            },
            { name: 'Enter Page Number', value: QuestionName.ENTER_PAGE }
            // { name: 'Return', value: QuestionName.Return }
        ]);
    }
    run(answer: QuestionName) {
        showWords(answer, curPage);
        curJLPT = this.name;
        curPage++;
        QuestionHistory.next(questionList[answer].question);
    }
}

export class EnterPage implements IQuestion {
    public name = QuestionName.ENTER_PAGE;
    question = input(this.name, 'Page Number');

    constructor() {
        this.name = QuestionName.ENTER_PAGE;
    }
    run(answer: number) {
        curPage = answer;
        showWords(curJLPT, answer);
        QuestionHistory.next(questionList[curJLPT].question);
    }
}
