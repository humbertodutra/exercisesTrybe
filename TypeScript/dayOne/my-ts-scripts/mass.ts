import readline from "readline-sync"
const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'cg', 'mg']

function convertMass(value: number, fromUnit: string, toUnit: string): any {
    const fromIndex = massUnits.indexOf(fromUnit);
    const toIndex = massUnits.indexOf(toUnit)
    const expoent = (toIndex - fromIndex)
    const result =  value * Math.pow(10, expoent);
    return result
};



function execMass() {

    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
    
    const fromUnitChoiceIndex = readline.keyInSelect(massUnits, "Escolha um número para a unidade base:");
   
    const toUnitChoiceIndex = readline.keyInSelect(massUnits, "Escolha um número para a conversão:");
  
    const fromUnitChoice = massUnits[fromUnitChoiceIndex];
  
    const toUnitChoice = massUnits[toUnitChoiceIndex];
  
    const result = convertMass(value, fromUnitChoice, toUnitChoice)
  
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
    
    console.log(message);
  
  }
  
  execMass()