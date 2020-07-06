// import { IQuestion, QuestionName, JlptLevel } from '../../types';

// import { jpltApi } from '../../services/api';
// import { list, input } from '../../utils';
// import { QuestionHistory, questionList } from '../models';

// const showWords = async (level: JlptLevel, page: number) => {
//     const words = await jpltApi(level, page);
//     words.data.forEach((word) => {
//         console.log(
//             `Word: ${word.slug} (${word.japanese[0].reading}) Definition: ${word.senses[0].english_definitions}`
//         );
//     });
//     // const prompts = new Subject()
//     // inquirer.prompt(prompts).ui.process.subscribe(
//     //     async ans => {
//     //         if (ans.answer === 'return') {
//     //             exercise.words()
//     //             return
//     //         }
//     //         if (ans.answer === 'next') {
//     //             page++
//     //             showWords(level, page)
//     //         }
//     //         if (ans.answer === 'enter') {
//     //             const pageNumber = await prompt([input('Page', 'Page Number')])
//     //             showWords(level, pageNumber.Page)
//     //         }
//     //     },
//     //     err => {
//     //         console.log(err)
//     //     }
//     // )
//     // prompts.next(
//     //     list('Level', 'Level', [
//     //         {
//     //             name: 'Next Page',
//     //             value: 'next'
//     //         },
//     //         { name: 'Enter Page Number', value: 'enter' },
//     //         { name: 'Return', value: 'return' }
//     //     ])
//     // )
// };

// export class JlptWordsQuestion implements IQuestion {
//     name: QuestionName;
//     level: JlptLevel;
//     public page = 1;
//     question = list(this.name, 'Choose your step', [
//         {
//             name: 'Next Page',
//             value: QuestionName.Return
//         },
//         { name: 'Enter Page Number', value: QuestionName.Return },
//         { name: 'Return', value: QuestionName.Return }
//     ]);
//     constructor(name: QuestionName, level: JlptLevel) {
//         this.name = name;
//         this.level = level;
//     }
//     run() {
//         showWords(this.level, this.page);
//     }
// }

// // export class EnterPage implements IQuestion {
// //     public name: QuestionName;
// //     question = input(this.name, 'Page Number');

// //     constructor() {
// //         this.name = QuestionName.ENTER_PAGE;
// //     }
// //     run(answer: string) {
// //         QuestionHistory.next(questionList[answer].question);
// //     }
// // }
