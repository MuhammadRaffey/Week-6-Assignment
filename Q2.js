"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Write a program that calculates the percentage.
function percentageCalc(obtained, total) {
    const percentage = (obtained / total) * 100;
    return percentage.toFixed(2);
}
console.log(`${percentageCalc(986, 1100)}%`);
