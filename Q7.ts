// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
function divisibleCheck(input: number) {
  if (input % 3 == 0 && input % 5 == 0) {
    console.log("It is divisible by Both");
  } else if (input % 3 == 0 || input % 5 == 0) {
    if (input % 3 == 0) {
      console.log("It is Divisible by 3");
    } else {
      console.log("It is Divisible by 5");
    }
  } else {
    console.log("It is not Disible by 3 and 5");
  }
}

divisibleCheck(22);
divisibleCheck(77);
divisibleCheck(999);
