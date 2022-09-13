"use strict";
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const expoent = (toIndex - fromIndex);
    const result = value * Math.pow(10, expoent);
    console.log(result);
    return result;
}
convert(1, 'km', 'm');
