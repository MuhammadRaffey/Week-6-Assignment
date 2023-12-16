// Write a program that calculates the percentage.
function percentageCalc(obtained: number, total: number) {
  const percentage = (obtained / total) * 100;
  return percentage.toFixed(2);
}

console.log(`${percentageCalc(986, 1100)}%`);

export {};
