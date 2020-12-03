import { mapArray, testMapArray } from "./day3-toboggan.input";

const map = mapArray;

interface Coordinate {
  row: number
  column: number
};

const moveToNextPosition = (currentCoordinate: Coordinate, rowMovement: number, columnMovement: number) => {
  currentCoordinate.row += rowMovement;
  currentCoordinate.column += columnMovement;
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

const getTreeCountForSlope = (rowMovement: number, columnMovement: number): number => {
  let treeCount = 0;
  let currentCoordinate: Coordinate = {
    row: 0,
    column: 0
  }

  while (currentCoordinate.row <= map.length) {
    moveToNextPosition(currentCoordinate, rowMovement, columnMovement);
    const hasTree = isTreeAtPosition(currentCoordinate.row, currentCoordinate.column);
    treeCount = hasTree ? treeCount + 1 : treeCount;
  }
  return treeCount;
}

const test1 = getTreeCountForSlope(1, 1);
const test2 = getTreeCountForSlope(1, 3);
const test3 = getTreeCountForSlope(1, 5);
const test4 = getTreeCountForSlope(1, 7);
const test5 = getTreeCountForSlope(2, 1);

console.log(test1 * test2 * test3 * test4 * test5);

