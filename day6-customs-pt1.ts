import { yesAnswers, testYesAnswers } from "./day6-customs.input";

const yesAnswerString = yesAnswers;

const getGroupAnswers = (answerString: string): string[][] => {
  const groupAnswers = answerString.split("\n\n");

  const answers = groupAnswers.map(answer => {
    const lineSplit = answer.split("\n");
    const charSplit = lineSplit.flatMap(line => {
      return line.split("");
    });
    const answerSet = new Set(charSplit);
    return Array.from(answerSet);
  });

  return answers;
};

const getCountForGroups = (groups: string[][]): number => {
  const total = groups.reduce((previous: number, current: string[]) => {
    return previous + current.length;
  }, 0);

  return total;
};

const groupAnswerArray = getGroupAnswers(yesAnswerString);
const count = getCountForGroups(groupAnswerArray);

console.log(count);
