import { expenseReport } from "./day1-report-repair.input";

let total: number;
let firstValue: number;
let secondValue: number;
let thirdValue: number;

expenseReport.forEach((valueOne, ix) => {
  expenseReport.forEach((valueTwo, ix2) => {
    expenseReport.forEach((valueThree, ix3) => {
      if (ix !== ix2 && ix !== ix3 && ix2 !== ix3) {
        if (valueOne + valueTwo + valueThree === 2020) {
          total = valueOne + valueTwo + valueThree;
          firstValue = valueOne;
          secondValue = valueTwo;
          thirdValue = valueThree;
        }
      }
    });
  });
});

console.log(firstValue);
console.log(secondValue);
console.log(thirdValue);
console.log(total);
console.log(firstValue * secondValue * thirdValue);
