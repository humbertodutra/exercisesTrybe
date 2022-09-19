import Person from "./Person.class";
import Student from "./Student.class";
import Employee from "./Employee.interface";
import Subject from "./Subject.class";

///exer 1
const diegoTardelli = new Person('Diego Tardelli', new Date('1980/01/01'))
const hulk = new Person('Givanildo', new Date('1990/12/31'))
const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));


/// exer2
const humberto = new Student('Diego Tardelli', new Date('1980/01/01'))
humberto.generateEnrollment
humberto.examsGrades = [7, 9, 10, 4]
humberto.worksGrades = [6, 7]

/// exer3

const testInterfaceEmployee: Employee = {
    registration: 'opa26828554213828213',
    salary:1200,
    admissionDate: new Date(),

    generateRegistration(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `opa${randomStr}`;
    },
}

function generateRegistrationn(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `opa${randomStr}`;
}

console.log(generateRegistrationn())



console.log(testInterfaceEmployee);


/// exer4

const history = new Subject('History')
const science = new Subject('Science')
console.log(history.name)
console.log(science)



