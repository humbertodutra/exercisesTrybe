import readline from "readline-sync"
const unit = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml']

function convertCapacity(value: number, fromUnit: string, toUnit: string): any {
    const fromIndex = unit.indexOf(fromUnit);
    const toIndex = unit.indexOf(toUnit)
    const expoent = (toIndex - fromIndex)
    const result =  value * Math.pow(10, expoent);
    return result
};

function execCapacity() {

    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
    
    const fromUnitChoiceIndex = readline.keyInSelect(unit, "Escolha um número para a unidade base:");
   
    const toUnitChoiceIndex = readline.keyInSelect(unit, "Escolha um número para a conversão:");
  
    const fromUnitChoice = unit[fromUnitChoiceIndex];
  
    const toUnitChoice = unit[toUnitChoiceIndex];
  
    const result = convertCapacity(value, fromUnitChoice, toUnitChoice)
  
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
    
    console.log(message);
  
  }
  
  execCapacity()