const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'cg', 'mg']

function convertMass(value: number, fromUnit: string, toUnit: string): any {
    const fromIndex = massUnits.indexOf(fromUnit);
    const toIndex = massUnits.indexOf(toUnit)
    const expoent = (toIndex - fromIndex)
    const result =  value * Math.pow(10, expoent);
    return result
};
