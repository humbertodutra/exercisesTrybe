import Person from "./Person.class";
import Student from "./Student.class";

const diegoTardelli = new Person('Diego Tardelli', new Date('1980/01/01'))
const hulk = new Person('Givanildo', new Date('1990/12/31'))
const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));

// console.log(diegoTardelli);
// console.log(hulk);
// console.log(invalidPersonAge)

const humberto = new Student('Diego Tardelli', new Date('1980/01/01'))




humberto.generateEnrollment
humberto.examsGrades = [7, 9, 10, 4]
humberto.worksGrades = [6, 7]

console.log(humberto)