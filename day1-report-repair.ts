import { expenseReport } from "./day1-report-repair.input";

let total: number;
let firstValue: number;
let secondValue: number;

expenseReport.forEach((valueOne, ix) => {
  expenseReport.forEach((valueTwo, ix2) => {
    if (ix !== ix2) {
      if (valueOne + valueTwo === 2020) {
        total = valueOne + valueTwo;
        firstValue = valueOne;
        secondValue = valueTwo;
      }
    }
  });
});

console.log(firstValue);
console.log(secondValue);
console.log(total);
console.log(firstValue * secondValue);
