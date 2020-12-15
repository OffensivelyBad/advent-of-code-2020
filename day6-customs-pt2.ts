import { yesAnswers, testYesAnswers } from "./day6-customs.input";
import { intersection } from "lodash";

const yesAnswerString = yesAnswers;

const getGroupAnswers = (answerString: string): number => {
  const groupAnswers = answerString.split("\n\n");

  const groups = groupAnswers.map(answer => {
    const lineSplit = answer.split("\n");
    return lineSplit;
  });

  let count = 0;

  console.log(groups);

  groups.forEach(group => {
    let commonAnswers: string[];
    group.forEach(person => {
      const answers = person.split("");
      if (commonAnswers) {
        commonAnswers = intersection(commonAnswers, answers);
      } else {
        commonAnswers = answers;
      }
    });

    console.log(commonAnswers);
    count += commonAnswers.length;
  });

  return count;
};

const getCountForGroups = (groups: string[][]): number => {
  const total = groups.reduce((previous: number, current: string[]) => {
    return previous + current.length;
  }, 0);

  return total;
};

const groupAnswerArray = getGroupAnswers(yesAnswerString);

console.log(groupAnswerArray);
