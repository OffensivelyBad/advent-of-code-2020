import { passwordList } from "./day2-password.input";

let validPasswordCount = 0;

const isValidPassword = (password: string, letterRule: string, lowerBound: number, upperBound: number): boolean => {
  let positionCount = 0;

  [lowerBound, upperBound].forEach(position => {
    const hasMatch = password[position - 1] === letterRule;
    positionCount = hasMatch ? positionCount + 1 : positionCount;
  });

  return positionCount === 1;
};

passwordList.forEach(item => {
  const components = item.split(" ");
  if (components.length !== 3) {
    return;
  }
  const password = components[2];

  // Parse out the rules
  const letterRule = components[1].split(":")[0];
  const ruleComponents = components[0].split("-");
  const lowerBound = Number(ruleComponents[0]);
  const upperBound = Number(ruleComponents[1]);

  // console.log(`password: ${password}, letterRule: ${letterRule}, lowerBound: ${lowerBound}, upperBound: ${upperBound}`);

  const isValid = isValidPassword(password, letterRule, lowerBound, upperBound);
  validPasswordCount = isValid ? validPasswordCount + 1 : validPasswordCount;
});

console.log(validPasswordCount);
