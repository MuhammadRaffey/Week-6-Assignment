"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function celcToFaren(temp) {
    let faren = temp * (9 / 5) + 32;
    return faren;
}
function farenToCelc(temp) {
    let celc = ((temp - 32) * 5) / 9;
    return celc;
}
console.log(celcToFaren(33));
console.log(farenToCelc(98.6));
