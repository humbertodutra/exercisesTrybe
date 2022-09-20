// ./index.ts

import Person from "./Person.class";
import Teacher from './Teacher.class'
import Student from './Student.class'
import Subject from "./Subject.class";

// tentar fazer isso agora deve gerar um erro
// já que nossa classe se tornou abstrata e não podemos criar instânicas de classes abstratas
const pessoa = new Person('Carolina da Silva', new Date('2005/03/17'));

// isso não deve gerar nenhum erro
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
console.log(carolina);

const math = new Subject('Matemática');
// isso também não deve gerar nenhum erro
const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
console.log(marta);