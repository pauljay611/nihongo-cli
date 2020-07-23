import { IQuestion, QuestionName } from '../../types';
import { list, exit } from '../../utils';
import { QuestionHistory, questionList } from '../models';

// export class Return implements IQuestion {
//     public name: QuestionName;

//     question = QuestionHistory.get().question;

//     constructor() {
//         this.name = QuestionName.Return;
//     }
//     run(answer: QuestionName) {
//         QuestionHistory.next(questionList[answer].question);
//     }
// }

export class Exit implements IQuestion {
    public name = QuestionName.Exit;
    question = {
        type: 'confirm',
        name: QuestionName.Exit,
        message: 'Exit?'
    };
    constructor() {
        this.name = QuestionName.Exit;
    }
    run() {
        exit();
    }
}
