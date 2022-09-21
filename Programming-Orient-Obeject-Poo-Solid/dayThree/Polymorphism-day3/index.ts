// ./index.ts

import Person from "./Person.class";
import Teacher from './Teacher.class'
import Student from './Student.class'
import Subject from "./Subject.class";
import Exam from "./Exam.class"
import Work from "./Work.class";
import EvaluationResult from "./EvaluationResult.class";

// ./index.ts

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const humberto = new Student('Humberto Dutra', new Date('1995/07/01') )


const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);



const examMath = new Exam(marta, 25);
const workMath = new Work(marta, 50);
const examHistory = new Exam(joao, 25);
const workHistory = new Work(joao, 50);


humberto.addEvaluationResult(new EvaluationResult(examMath, 25, 'exam'));
humberto.addEvaluationResult(new EvaluationResult(workMath, 49, 'exam'));
humberto.addEvaluationResult(new EvaluationResult(examHistory, 20, 'exam'));
humberto.addEvaluationResult(new EvaluationResult(workHistory, 50, 'exam'));

console.log('Exams evaluations ', humberto.evaluationsResults)
