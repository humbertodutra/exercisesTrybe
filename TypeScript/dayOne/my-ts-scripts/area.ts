import readline from "readline-sync"
const unitsArea = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convertArea(value: number, fromUnit: string, toUnit: string): number {

    const fromIndex = unitsArea.indexOf(fromUnit);

    const toIndex = unitsArea.indexOf(toUnit);

    const exponent = (toIndex - fromIndex);


    return value * Math.pow(100, exponent);

}

function execArea() {

    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
    
    const fromUnitChoiceIndex = readline.keyInSelect(unitsArea, "Escolha um número para a unidade base:");
   
    const toUnitChoiceIndex = readline.keyInSelect(unitsArea, "Escolha um número para a conversão:");
  
    const fromUnitChoice = unitsArea[fromUnitChoiceIndex];
  
    const toUnitChoice = unitsArea[toUnitChoiceIndex];
  
    const result = convertArea(value, fromUnitChoice, toUnitChoice)
  
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
    
    console.log(message);
  
  }
  
  execArea()