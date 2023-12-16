// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
function dayChecker(day: number) {
  if (day == 1) {
    console.log("Its Monday");
  }
  if (day == 2) {
    console.log("Its Tuesday");
  }
  if (day == 3) {
    console.log("Its Wednesday");
  }
  if (day == 4) {
    console.log("Its Thursday");
  }
  if (day == 5) {
    console.log("Its Friday");
  }
  if (day == 6) {
    console.log("Its Saturday");
  }
  if (day == 7) {
    console.log("Its Sunday");
  }
}

dayChecker(1);
dayChecker(4);
dayChecker(7);
dayChecker(5);
