"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsDistance = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convertDistance(value, fromUnit, toUnit) {
    const fromIndex = unitsDistance.indexOf(fromUnit);
    const toIndex = unitsDistance.indexOf(toUnit);
    const expoent = (toIndex - fromIndex);
    const result = value * Math.pow(10, expoent);
    return result;
}
function execLength() {
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsDistance, "Escolha um número para a unidade base:");
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsDistance, "Escolha um número para a conversão:");
    const fromUnitChoice = unitsDistance[fromUnitChoiceIndex];
    const toUnitChoice = unitsDistance[toUnitChoiceIndex];
    const result = convertDistance(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
execLength();
