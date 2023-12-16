// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
function dayConverter(days: number) {
  if (days % 7 !== 0) {
    let weeks: number = days / 7;
    weeks = Math.round(weeks);
    let rDays = days % 7;
    return `${days} days = ${weeks} weeks and ${rDays} days`;
  } else {
    let weeks = days / 7;
    return `${days} days = ${weeks} weeks`;
  }
}
console.log(dayConverter(17));
console.log(dayConverter(14));
