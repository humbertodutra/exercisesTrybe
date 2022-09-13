
const unit = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml']

function convertCapacity(value: number, fromUnit: string, toUnit: string): any {
    const fromIndex = unit.indexOf(fromUnit);
    const toIndex = unit.indexOf(toUnit)
    const expoent = (toIndex - fromIndex)
    const result =  value * Math.pow(10, expoent);
    return result
};
