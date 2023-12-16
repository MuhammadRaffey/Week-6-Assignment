"use strict";
// Write a program that checks if the given year is leap year or not.
function leapYearCheck(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("It is a Leap Year");
    }
    else {
        console.log("It is not a Leap Year");
    }
}
leapYearCheck(2002);
leapYearCheck(2012);
