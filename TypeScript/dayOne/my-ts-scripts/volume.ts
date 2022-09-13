import readline from "readline-sync"
const unitsVolume = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convertVolume(value: number, fromUnit: string, toUnit: string): number {

    const fromIndex = unitsVolume.indexOf(fromUnit);

    const toIndex = unitsVolume.indexOf(toUnit);

    const exponent = (toIndex - fromIndex);


    return value * Math.pow(1000, exponent);

}



function execVolume() {

    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
    
    const fromUnitChoiceIndex = readline.keyInSelect(unitsVolume, "Escolha um número para a unidade base:");
   
    const toUnitChoiceIndex = readline.keyInSelect(unitsVolume, "Escolha um número para a conversão:");
  
    const fromUnitChoice = unitsVolume[fromUnitChoiceIndex];
  
    const toUnitChoice = unitsVolume[toUnitChoiceIndex];
  
    const result = convertVolume(value, fromUnitChoice, toUnitChoice)
  
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
    
    console.log(message);
  
  }
  
  execVolume()