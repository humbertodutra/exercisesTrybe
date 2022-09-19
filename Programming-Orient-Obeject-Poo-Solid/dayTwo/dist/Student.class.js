"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_class_1 = __importDefault(require("./Person.class"));
class Student extends Person_class_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = String();
        this._examsGrades = [];
        this._worksGrades = [];
        this.enrollment = this.generateEnrollment();
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        if (value.length < 16)
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
        this._enrollment = value;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(value) {
        if (value.length > 4)
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        this._examsGrades = value;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    set worksGrades(value) {
        if (value.length > 2)
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
        this._worksGrades = value;
    }
    generateEnrollment() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`;
    }
}
exports.default = Student;
