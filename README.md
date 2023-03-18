# PersCal - Persian-Gregorian Calendar Converter

This is a command-line interface (CLI) tool for converting between Gregorian and Persian calendars. The tool is built with Node.js and utilizes the `jalaali-js` package for the calendar conversion.

## Installation

To install the tool, first, you need to have Node.js installed on your machine. Then you can install the package via npm:

`npm install -g perscal`

Or without installation:  
`npx perscal <options>`

## Usage

The tool provides several options for converting between the calendars. You can use the `--help` option to see the available options:

`perscal --help`

### Converting Gregorian to Persian

You can convert a Gregorian date to Persian using the following options:

- `-t, --timestamp <seconds>`: Unix timestamp (seconds since 1970-01-01 00:00:00 UTC)
- `-dt, --date <date-string>`: "Gregorian date (YYYY-MM-DD) or other standard formats e.g. ISO 8601")
- `-y, --year <year>`: Gregorian year
- `-m, --month <month>`: Gregorian month
- `-d, --day <day>`: Gregorian day

Example usage:

`perscal` // output: 1401-12-27  
`perscal --date 2023-03-18` // 1401-12-27  
`perscal --year 2023 --month 3 --day 18` // output: 1401-12-27  

### Converting Persian to Gregorian

You can convert a Persian date to Gregorian using the following options:

- `-pd, --persian-date <persian-date>`: Persian date (YYYY-MM-DD)
- `-py, --persian-year <persian-year>`: Persian year
- `-pm, --persian-month <persian-month>`: Persian month
- `-pdy, --persian-day <persian-day>`: Persian day

Example usage:

`perscal --persian-date 1401-12-27` // output: 2023-3-18  
`perscal --persian-year 1401 --persian-month 12 --persian-day 27` // output: 2023-3-18  

### Output Separator for Persian Date

To specify the separator character, use `-s, --separator <char>` option for the output. The default separator is `-`.

Example usage:

`perscal --year 2022 --month 3 --day 18 --separator /`  

## License

This tool is licensed under the MIT license. See the [LICENSE](LICENSE) file for details.

