"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_class_1 = __importDefault(require("./Person.class"));
const Student_class_1 = __importDefault(require("./Student.class"));
const diegoTardelli = new Person_class_1.default('Diego Tardelli', new Date('1980/01/01'));
const hulk = new Person_class_1.default('Givanildo', new Date('1990/12/31'));
const invalidPersonAge = new Person_class_1.default('Ana Vitória', new Date('1900/06/07'));
// console.log(diegoTardelli);
// console.log(hulk);
// console.log(invalidPersonAge)
const humberto = new Student_class_1.default('Diego Tardelli', new Date('1980/01/01'));
humberto.generateEnrollment;
humberto.examsGrades = [7, 9, 10, 4];
humberto.worksGrades = [6, 7];
console.log(humberto);
