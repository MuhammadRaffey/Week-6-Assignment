"use strict";
// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
function tempCheck(temperature) {
    if (temperature <= 10) {
        console.log("The Temprature is Kind of Cold, Don't forget to cover Yourself.");
    }
    else if (temperature >= 25) {
        console.log("High Temperatures ahead! Stay hydrated, seek shade, wear light clothes, use sunscreen, and avoid peak sun hours (10 AM to 4 PM).");
    }
    else {
        console.log("Temprature is Normal Enjoy The weather.");
    }
}
tempCheck(10);
tempCheck(20);
tempCheck(30);
