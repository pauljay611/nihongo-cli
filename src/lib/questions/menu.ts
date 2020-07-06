import { list } from '../../utils';
import { IQuestion, QuestionName } from '../../types';
import { questionList, QuestionHistory } from '../models';

export class MenuQuestion implements IQuestion {
    public name = QuestionName.MainMenu;
    question = list(this.name, 'Choose your lesson', [
        {
            name: QuestionName.Opening,
            value: QuestionName.Opening
        },
        // { name: 'Testing', value: QuestionName.Testing },
        // { name: 'Record', value: QuestionName.Record },
        { name: QuestionName.Opening, value: QuestionName.Opening }
    ]);

    run(answer: QuestionName) {
        QuestionHistory.next(questionList[answer].question);
    }
}
