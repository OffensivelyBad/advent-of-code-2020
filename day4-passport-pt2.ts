import { testPassportString, passportString, testInvalidPassportString, testValidPassportString } from "./day4-passport.input";

const passportData = passportString;

export interface Passport {
  ecl: string;
  pid: string;
  eyr: string;
  hcl: string;
  byr: string;
  iyr: string;
  cid?: string;
  hgt: string;
};

const getPassportFromFields = (
  ecl?: string,
  pid?: string,
  eyr?: string,
  hcl?: string,
  byr?: string,
  iyr?: string,
  cid?: string,
  hgt?: string
): Passport | null => {
  let passport: Passport;

  if (ecl && pid && eyr && hcl && byr && iyr && hgt) {
    passport = {
      ecl,
      pid,
      eyr,
      hcl, 
      byr,
      iyr,
      cid,
      hgt
    };
  }

  return passport;
};

const isValidHeight = (heightString: string): boolean => {
  let isValid = false;
  if (heightString.includes("cm") && heightString.length === 5) {
    const heightNumber = Number(heightString.substring(0, 3));
    if (heightNumber >= 150 && heightNumber <= 193) {
      isValid = true;
    }
  }
  else if (heightString.includes("in") && heightString.length === 4) {
    const heightNumber = Number(heightString.substring(0, 2));
    if (heightNumber >= 59 && heightNumber <= 76) {
      isValid = true;
    }
  }
  return isValid;
};

const isValidHairColor = (hairColorString: string): boolean => {
  const matches = hairColorString.match(/^(#[0-9A-Fa-f]{6})$/);
  return matches && matches.length > 0;
};

const getNormalizedPassport = (passportString: string): Passport => {
  let passportFields = passportString.split(" ");
  passportFields = passportFields.flatMap(pp => pp.split("\n"));
  let ecl: string;
  let pid: string;
  let eyr: string;
  let hcl: string;
  let byr: string;
  let iyr: string;
  let cid: string;
  let hgt: string;

  passportFields.forEach(field => {
    const kvpArray = field.split(":");
    if (kvpArray.length === 2) {
      const key = kvpArray[0];
      const value = kvpArray[1];
      const numberValue = Number(value);

      switch (key) {
        case "ecl":
          if (["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value)) {
            ecl = value;
          }
          break;
        case "pid":
          if (value.length === 9) {
            pid = value;
          }
          break;
        case "eyr":
          if (numberValue >= 2020 && numberValue <= 2030) {
            eyr = value;
          }
          break;
        case "hcl":
          if (isValidHairColor(value)) {
            hcl = value;
          }
          break;
        case "byr":
          if (numberValue >= 1920 && numberValue <= 2002) {
            byr = value;
          }
          break;
        case "iyr":
          if (numberValue >= 2010 && numberValue <= 2020) {
            iyr = value;
          }
          break;
        case "cid":
          cid = value;
          break;
        case "hgt":
          if (isValidHeight(value)) {
            hgt = value;
          }
          break;
        default: 
          break;
      }
    }
  });

  const passport = getPassportFromFields(ecl, pid, eyr, hcl, byr, iyr, cid, hgt);

  return passport;
};

const getPassportData = (passportString: string): Passport[] => {
  // separate into multiple passports
  const passportArray = passportString.split("\n\n");
  
  // split the passports
  const normalizedPassports = passportArray.map(pp => {
    return getNormalizedPassport(pp);
  });
  return normalizedPassports.filter(passport => passport !== undefined);
};

const passports = getPassportData(passportData);

console.log(passports.length);

