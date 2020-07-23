import { IQuestion, QuestionName, JlptLevel, Questions } from '../../types';

import { jpltApi } from '../../services/api';
import { list, input } from '../../utils';
import { QuestionHistory, questionList } from '../models';

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
    public page = 1;
    question: Questions;

    constructor(name: QuestionName) {
        this.name = name;
        this.question = list(this.name, 'Choose your step', [
            {
                name: 'Next Page',
                value: this.name
            },
            { name: 'Enter Page Number', value: QuestionName.Opening }
            // { name: 'Return', value: QuestionName.Return }
        ]);
    }
    run(answer: QuestionName) {
        showWords(answer, this.page);
        this.page++;
        QuestionHistory.next(questionList[answer].question);
    }
}

// export class EnterPage implements IQuestion {
//     public name: QuestionName;
//     question = input(this.name, 'Page Number');

//     constructor() {
//         this.name = QuestionName.ENTER_PAGE;
//     }
//     run(answer: string) {
//         QuestionHistory.next(questionList[answer].question);
//     }
// }
