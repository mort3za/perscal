#! /usr/bin/env node

const { program } = require("commander");
const jalaali = require("jalaali-js");

program
  .option("-t, --timestamp <seconds>", "Unix timestamp (seconds since 1970-01-01 00:00:00 UTC)")
  .option("-dt, --date <date-string>", "Gregorian date (YYYY-MM-DD) or other standard formats e.g. ISO 8601")
  .option("-y, --year <year>", "Gregorian year")
  .option("-m, --month <month>", "Gregorian month")
  .option("-d, --day <day>", "Gregorian day")
  .option("-pd, --persian-date <persian-date>", "Persian date (YYYY-MM-DD)")
  .option("-py, --persian-year <persian-year>", "Persian year")
  .option("-pm, --persian-month <persian-month>", "Persian month")
  .option("-pdy, --persian-day <persian-day>", "Persian day")
  .option("-s, --separator <char>", "Output separator for Persian date", "-")
  .option("-h, --help", "Show help")
  .name("perscal")
  .description("CLI tool for converting between Gregorian and Persian calendars")
  .version("1.0.3");

program.parse();
const options = program.opts();

function exit(message, code = 0) {
  console.log(message);
  process.exit(code);
}

function toPersian({ timestamp, date, year, month = "01", day = "01" }) {
  if (timestamp) {
    return jalaali.toJalaali(new Date(timestamp * 1000));
  }
  if (date) {
    return jalaali.toJalaali(new Date(date));
  }
  if (year) {
    const yyyy = year.padStart(4, "0");
    const mm = month.padStart(2, "0");
    const dd = day.padStart(2, "0");
    const dateString = `${yyyy}-${mm}-${dd}`;
    return jalaali.toJalaali(new Date(dateString));
  }

  exit("No input date provided");
}
function toGreg({ persianDate, persianYear, persianMonth = 1, persianDay = 0 }) {
  if (persianDate) {
    const pd = persianDate.split("-").map((i) => parseInt(i));
    return jalaali.toGregorian(pd[0], pd[1], pd[2]);
  }
  return jalaali.toGregorian(parseInt(persianYear), parseInt(persianMonth), parseInt(persianDay));
}

const PERSIAN_PARAMS = ["persianDate", "persianYear", "persianMonth", "persianDay"];
const GREG_PARAMS = ["timestamp", "date", "year", "month", "day"];

const isInputDatePersian = PERSIAN_PARAMS.some((param) => options[param]);
const isInputDateGregorian = GREG_PARAMS.some((param) => options[param]);

function printPersianDate(jdObject) {
  pdString = `${jdObject.jy}${options.separator}${jdObject.jm}${options.separator}${jdObject.jd}`;
  console.log(pdString);
}

function printGregorianDate(dObject) {
  const gdString = `${dObject.gy}${options.separator}${dObject.gm}${options.separator}${dObject.gd}`;
  console.log(gdString);
}

function main() {
  if (isInputDatePersian) {
    const converted = toGreg({
      persianDate: options["persianDate"],
      persianYear: options["persianYear"],
      persianMonth: options["persianMonth"],
      persianDay: options["persianDay"],
    });
    printGregorianDate(converted);
  } else if (isInputDateGregorian) {
    const converted = toPersian({
      timestamp: options.timestamp,
      date: options.date,
      year: options.year,
      month: options.month,
      day: options.day,
    });
    printPersianDate(converted);
  } else if (options.help) {
    program.help();
  } else {
    const jdObject = toPersian({ timestamp: Date.now() / 1000 });
    printPersianDate(jdObject);
  }
}

try {
  main();
} catch (error) {
  exit("Invalid options provided, use --help for more information.");
}
