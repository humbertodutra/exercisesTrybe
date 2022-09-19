"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_class_1 = __importDefault(require("./Person.class"));
const Student_class_1 = __importDefault(require("./Student.class"));
const Subject_class_1 = __importDefault(require("./Subject.class"));
const Teacher_class_1 = __importDefault(require("./Teacher.class"));
///exer 1
const diegoTardelli = new Person_class_1.default('Diego Tardelli', new Date('1980/01/01'));
const hulk = new Person_class_1.default('Givanildo', new Date('1990/12/31'));
const invalidPersonAge = new Person_class_1.default('Ana Vitória', new Date('1900/06/07'));
/// exer2
const humberto = new Student_class_1.default('Diego Tardelli', new Date('1980/01/01'));
humberto.generateEnrollment;
humberto.examsGrades = [7, 9, 10, 4];
humberto.worksGrades = [6, 7];
/// exer3
const testInterfaceEmployee = {
    registration: 'opa26828554213828213',
    salary: 1200,
    admissionDate: new Date(),
    generateRegistration() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `opa${randomStr}`;
    },
};
function generateRegistrationn() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `opa${randomStr}`;
}
console.log(generateRegistrationn());
console.log(testInterfaceEmployee);
/// exer4
const history = new Subject_class_1.default('History');
const science = new Subject_class_1.default('Science');
const math = new Subject_class_1.default('Math');
console.log(history.name);
console.log(science);
/// exer5
const Neymar = new Teacher_class_1.default('Neymar Junior', new Date('1980/03/30'), 200000000, math);
const Messi = new Teacher_class_1.default('Lionel Messi', new Date('1980/04/05'), 81239821938, history);
console.log(Neymar);
