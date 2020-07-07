import { IQuestion, QuestionName } from '../../types';
import { list } from '../../utils';
import { QuestionHistory, questionList } from '../models';
import { rows, hiraganaTemplate, katakanaTemplate } from '../../templates';

export class CharactersTableQuestion implements IQuestion {
    public name = QuestionName.CharactersTable;
    question = list(this.name, 'Characters Excercise', [
        { name: QuestionName.Hiragana, value: QuestionName.Hiragana },
        { name: QuestionName.Katakana, value: QuestionName.Katakana },
        { name: QuestionName.Opening, value: QuestionName.MainMenu }
    ]);

    run(answer: QuestionName) {
        switch (answer) {
            case QuestionName.Hiragana:
                console.log('-----------------------------');
                console.log(rows);
                console.log(hiraganaTemplate);
                console.log('-----------------------------');
                break;
            case QuestionName.Katakana:
                console.log('-----------------------------');
                console.log(rows);
                console.log(katakanaTemplate);
                console.log('-----------------------------');
                break;
        }
        QuestionHistory.next(questionList[answer].question);
    }
}

// export class WordsQuestion implements IQuestion {
//     public name: QuestionName;
//     question = list(this.name, 'Words excercise', [
//         { name: QuestionName.N5, value: QuestionName.N5 },
//         { name: QuestionName.N4, value: QuestionName.N4 },
//         { name: QuestionName.N3, value: QuestionName.N3 },
//         { name: QuestionName.N2, value: QuestionName.N2 },
//         { name: QuestionName.N1, value: QuestionName.N1 },
//         { name: QuestionName.Return, value: QuestionName.MainMenu }
//     ]);

//     constructor() {
//         this.name = QuestionName.Words;
//     }
//     run(answer: QuestionName) {
//         QuestionHistory.next(questionList[answer].question);
//     }
// }
