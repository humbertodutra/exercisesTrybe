"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.name = _name;
        this._birthDate = _birthDate;
    }
    get name() {
        return this.name;
    }
    ;
    set name(value) {
        this.validateName(value);
        this._name = value;
    }
    ;
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        this.validateBirthDate(value);
        this._birthDate = value;
    }
    static getAge(value) {
        const diff = Math.abs(new Date().getTime() - value.getTime());
        const yearMs = 31536000000;
        return Math.floor(diff / yearMs);
    }
    validateBirthDate(value) {
        if (value.getTime() > new Date().getTime())
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
        if (Person.getAge(value) > 120)
            throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
    validateName(value) {
        if (value.length < 3)
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
}
exports.default = Person;
