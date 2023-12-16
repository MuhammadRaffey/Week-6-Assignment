"use strict";
// 10- Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
function calculateBill(units) {
    let totalBill = 0;
    if (units > 500) {
        totalBill = units + units * 0.25;
    }
    else if (units > 200) {
        totalBill = units + units * 0.15;
    }
    else if (units > 100) {
        totalBill = units + units * 0.1;
    }
    else {
        totalBill = units;
    }
    return totalBill.toFixed(2);
}
let units = 550;
let billAmount = calculateBill(units);
console.log(`Total bill amount for ${units} units: ${billAmount} Rs/-`);
