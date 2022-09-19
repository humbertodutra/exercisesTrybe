import Person from "./Person.class";

const diegoTardelli = new Person('Diego Tardelli', new Date('1980/01/01'))
const hulk = new Person('Givanildo', new Date('1990/12/31'))
const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));

console.log(diegoTardelli);
console.log(hulk);

// const invalidPersonName = new Person('An', new Date('2000/06/07'));
/// returns a error

// console.log(invalidPersonName)


console.log(invalidPersonAge)