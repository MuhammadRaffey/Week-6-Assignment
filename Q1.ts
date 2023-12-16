// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function celcToFaren(temp: number) {
  let faren: number = temp * (9 / 5) + 32;
  return faren;
}
function farenToCelc(temp: number) {
  let celc: number = ((temp - 32) * 5) / 9;
  return celc;
}
console.log(celcToFaren(33));
console.log(farenToCelc(98.6));

export {};
