# PersCal - Persian-Gregorian Date Converter for CLI

This is a command-line interface (CLI) tool for converting between Gregorian and Persian calendars. The tool is built with Node.js and utilizes the `jalaali-js` package for the calendar conversion.

## Installation

To install the tool, first, you need to have Node.js installed on your machine. Then you can install the package via npm:

`npm install -g perscal`

## Usage

The tool provides several options for converting between the calendars. You can use the `--help` option to see the available options:

`perscal --help`

### Converting Gregorian to Persian

You can convert a Gregorian date to Persian using one of the following options:

- `-t, --timestamp <seconds>`: Unix timestamp (seconds since 1970-01-01 00:00:00 UTC)
- `-dt, --datetime <datetime>`: Gregorian datetime (YYYY-MM-DD HH:mm) or other standard formats like ISO 8601
- `-y, --year <year>`: Gregorian year
- `-m, --month <month>`: Gregorian month
- `-d, --day <day>`: Gregorian day

Example usage:

`perscal --year 2022 --month 3 --day 18 perscal --datetime "2022-03-18 09:30"`

### Converting Persian to Gregorian

You can convert a Persian date to Gregorian using one of the following options:

- `-pd, --persian-date <persian-date>`: Persian date (YYYY-MM-DD)
- `-py, --persian-year <persian-year>`: Persian year
- `-pm, --persian-month <persian-month>`: Persian month
- `-pdy, --persian-day <persian-day>`: Persian day

Example usage:

`perscal --persian-date "1401-12-28" perscal --persian-year 1401 --persian-month 12 --persian-day 28`

### Output Separator for Persian Date

You can use the `-s, --separator <char>` option to specify the separator character for the output Persian date. The default separator is `-`.

Example usage:

`perscal --year 2022 --month 3 --day 18 --separator /`

## License

This tool is licensed under the MIT license. See the [LICENSE](LICENSE) file for details.
