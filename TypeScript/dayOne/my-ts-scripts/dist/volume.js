"use strict";
const unitsVolume = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function convertVolume(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(1000, exponent);
}
