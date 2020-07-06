// import { IQuestion, QuestionName } from '../../types';
// import { list, exit } from '../../utils';
// import { QuestionHistory, questionList } from '../models';

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

// export class Exit implements IQuestion {
//     public name: QuestionName;
//     question = {
//         type: 'confirm',
//         name: QuestionName.Exit,
//         message: 'Exit?'
//     };
//     constructor() {
//         this.name = QuestionName.Exit;
//     }
//     run() {
//         exit();
//     }
// }

// export class Next implements IQuestion {
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
