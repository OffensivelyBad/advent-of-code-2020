import { boardingPassArray, testBoardingPassArray } from "./day5-boarding.input";

const boardingArray = boardingPassArray;

const rowIndexStart = 0;
const rowIndexLength = 7;

const seatIndexStart = 7;
const seatIndexLength = 3;

const minRowNumber = 0;
const maxRowNumber = 127;

const minSeatNumber = 0;
const maxSeatNumber = 7;

const getMiddleNumber = (lowEnd: number, highEnd: number): number => {
  const middle = (lowEnd + highEnd) / 2;
  return middle;
};

const getRowFromInstruction = (rowInstruction: string, minRow: number, maxRow: number): number => {
  const instructionArray = rowInstruction.split("");
  let firstRow = minRow;
  let lastRow = maxRow;

  instructionArray.forEach(instruction => {
    const middleNumber = getMiddleNumber(firstRow, lastRow);
    console.log(middleNumber);
    firstRow = instruction === "B" ? Math.ceil(middleNumber) : firstRow;
    lastRow = instruction === "F" ? Math.floor(middleNumber) : lastRow;
    console.log(`firstRow: ${firstRow}, lastRow: ${lastRow}`);
  });

  return firstRow;
};

const getSeatFromInstruction = (seatInstruction: string, minSeat: number, maxSeat: number): number => {
  const instructionArray = seatInstruction.split("");
  let firstSeat = minSeat;
  let lastSeat = maxSeat;

  instructionArray.forEach(instruction => {
    const middleNumber = getMiddleNumber(firstSeat, lastSeat);
    console.log(middleNumber);
    firstSeat = instruction === "R" ? Math.ceil(middleNumber) : firstSeat;
    lastSeat = instruction === "L" ? Math.floor(middleNumber) : lastSeat;
    console.log(`firstSeat: ${firstSeat}, lastSeat: ${lastSeat}`);
  });

  return firstSeat;
};

const getSeatIDForInstruction = (instruction: string, minRow: number, maxRow: number, minSeat: number, maxSeat: number): number => {
  const rowInstruction = instruction.substring(rowIndexStart, rowIndexStart + rowIndexLength);
  const seatInstruction = instruction.substring(seatIndexStart, seatIndexStart + seatIndexLength);

  const row = getRowFromInstruction(rowInstruction, minRow, maxRow);
  const seat = getSeatFromInstruction(seatInstruction, minSeat, maxSeat);

  console.log(`row: ${row}, seat: ${seat}`);

  const seatID = row * 8 + seat;
  return seatID;
};

const getMaxSeatID = (): number => {
  let maxID = -1;

  boardingArray.forEach(instruction => {
    const seatID = getSeatIDForInstruction(instruction, minRowNumber, maxRowNumber, minSeatNumber, maxSeatNumber);
    maxID = Math.max(maxID, seatID);
  });

  return maxID;
};

console.log(getMaxSeatID());
