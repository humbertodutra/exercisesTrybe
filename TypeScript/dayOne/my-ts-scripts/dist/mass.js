"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'cg', 'mg'];
function convertMass(value, fromUnit, toUnit) {
    const fromIndex = massUnits.indexOf(fromUnit);
    const toIndex = massUnits.indexOf(toUnit);
    const expoent = (toIndex - fromIndex);
    const result = value * Math.pow(10, expoent);
    return result;
}
;
function execMass() {
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(massUnits, "Escolha um número para a unidade base:");
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(massUnits, "Escolha um número para a conversão:");
    const fromUnitChoice = massUnits[fromUnitChoiceIndex];
    const toUnitChoice = massUnits[toUnitChoiceIndex];
    const result = convertMass(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
execMass();
