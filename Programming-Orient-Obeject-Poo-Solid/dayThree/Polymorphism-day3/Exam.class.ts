// Exam.ts

import Teacher from './Teacher.class';
import Evaluation from './Evaluation.class';

export default class Exam extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(teacher, score);
  }
  set score(value: number){
    if (value > 25){
        throw new Error('A pontuação deve ser menor que 25 pontos')
    }
    super.score = value;
  }
}