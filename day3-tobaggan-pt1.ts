import { mapArray, testMapArray } from "./day3-toboggan.input";

const map = mapArray;

let treeCount = 0;
let currentRowPosition = 0;
let currentColumnPosition = 0;
const rowMovement = 1;
const columnMovement = 3;

const moveToNextPosition = (rowMovement: number, columnMovement: number) => {
  currentRowPosition += rowMovement;
  currentColumnPosition += columnMovement;
};

const isTreeAtPosition = (row: number, column: number): boolean => {
  if (row >= map.length) {
    return false
  }

  const rowArray = map[row];
  const normalizedColumnPosition = column % (rowArray.length);
  const characterAtPosition = rowArray[normalizedColumnPosition];

  console.log(`current row: ${row}, current column: ${column}, character: ${characterAtPosition}, normalizedPosition: ${normalizedColumnPosition}, rowArray ${rowArray}`);

  return characterAtPosition === "#";
};

while (currentRowPosition <= map.length) {
  moveToNextPosition(rowMovement, columnMovement);
  const hasTree = isTreeAtPosition(currentRowPosition, currentColumnPosition);
  treeCount = hasTree ? treeCount + 1 : treeCount;
}

console.log(treeCount);

