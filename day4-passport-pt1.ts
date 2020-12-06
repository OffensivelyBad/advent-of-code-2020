import { testPassportString, passportString } from "./day4-passport.input";

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

const getPassportData = (passportString: string): Passport[] => {
  // separate into multiple passports
  const passportArray = passportString.split("\n\n");
  
  // split the passports
  const normalizedPassports = passportArray.map(pp => {
    let passportFields = pp.split(" ");
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

        switch (key) {
          case "ecl":
            ecl = value;
            break;
          case "pid":
            pid = value;
            break;
          case "eyr":
            eyr = value;
            break;
          case "hcl":
            hcl = value;
            break;
          case "byr":
            byr = value;
            break;
          case "iyr":
            iyr = value;
            break;
          case "cid":
            cid = value;
            break;
          case "hgt":
            hgt = value;
            break;
          default: 
            break;
        }
      }
    });
    const passport = getPassportFromFields(ecl, pid, eyr, hcl, byr, iyr, cid, hgt);
    return passport;
  });
  return normalizedPassports.filter(passport => passport !== undefined);
};

const passports = getPassportData(passportData);

console.log(passports.length);

