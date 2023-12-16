"use strict";
// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
function discount(price) {
    if (price >= 100) {
        let calc = price - price * 0.1;
        return `The Price after 10% Discount will be ${calc}`;
    }
    else {
        let calc = price - price * 0.05;
        return `The Price after 5% Discount will be ${calc}`;
    }
}
console.log(discount(105));
console.log(discount(26));
