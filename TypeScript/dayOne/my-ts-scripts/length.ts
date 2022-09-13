const unitsDistance = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convertDistance(value: number, fromUnit: string, toUnit: string): any {
    const fromIndex = unitsDistance.indexOf(fromUnit);
    const toIndex = unitsDistance.indexOf(toUnit)
    const expoent = (toIndex - fromIndex)
    const result =  value * Math.pow(10, expoent);
    return result
}





function execLength() {

    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
    
    const fromUnitChoiceIndex = readline.keyInSelect(unitsDistance, "Escolha um número para a unidade base:");
   
    const toUnitChoiceIndex = readline.keyInSelect(unitsDistance, "Escolha um número para a conversão:");
  
    const fromUnitChoice = unitsDistance[fromUnitChoiceIndex];
  
    const toUnitChoice = unitsDistance[toUnitChoiceIndex];
  
    const result = convertDistance(value, fromUnitChoice, toUnitChoice)
  
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
    
    console.log(message);
  
  }
  
  execLength()
