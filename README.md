# JavaScriptDateFormat
PHP like Date Formatter in 2 flavors

*Formatting was inspired by [PHP:date](http://php.net/manual/en/function.date.php)*

Basic example: `new Date().format('m-d-Y h:i:s');` will return something like: `07-06-2016 06:38:34`

## Quick Links
 - [Date.format.min.js](https://cdn.rawgit.com/JDMcKinstry/JavaScriptDateFormat/master/Date.format.min.js)
 - [dateFormat.min.js](https://cdn.rawgit.com/JDMcKinstry/JavaScriptDateFormat/master/dateFormat.min.js)

### Basic Format Characters:

Day |  | Week | & Month |
--- | --- | --- | --- |
'd' | Day of the month, 2 digits with leading zeros | 'W' | ISO-8601 week number of year, weeks starting on Monday
'D' | A textual representation of a day, three letters | 'F' | A full textual representation of a month, such as January or March
'j' | Day of the month without leading zeros | 'm' | Numeric representation of a month, with leading zeros
'l (lowercase 'L')' | A full textual representation of the day of the week | 'M' | A short textual representation of a month, three letters
'N' | ISO-8601 numeric representation of the day of the week | 'n' | Numeric representation of a month, without leading zeros
'S' | English ordinal suffix for the day of the month, 2 characters | 't' | Number of days in the given month
'w' | Numeric representation of the day of the week
'z' | The day of the year (starting from 0)

Year |  |
--- | --- |
'L' | Whether it's a leap year
'o' | ISO-8601 year number. This has the same value as Y
'Y' | A full numeric representation of a year, 4 digits
'y' | A two digit representation of a year

Time |  | Timezone | & Full Date/Time |
--- | --- | --- | --- |
'a' | Lowercase Ante meridiem and Post meridiem | 'e' | Timezone identifier
'A' | Uppercase Ante meridiem and Post meridiem | 'I | (capital i)' Whether or not the date is in daylight saving time
'B' | Swatch Internet time | 'O' | Difference to Greenwich time (GMT) in hours
'g' | 12-hour format of an hour without leading zeros | 'P' | Difference to Greenwich time (GMT) with colon between hours and minutes
'G' | 24-hour format of an hour without leading zeros | 'T' | Timezone abbreviation
'h' | 12-hour format of an hour with leading zeros | 'Z' | Timezone offset in seconds
'H' | 24-hour format of an hour with leading zeros | 'c' | ISO 8601 date
'i' | Minutes with leading zeros | 'r' | » RFC 2822 formatted date
's' | Seconds, with leading zeros | 'U' | Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
'u' | Milliseconds | 

### Preset Format Keys

**Also included are premade formats!!!**
There are 3 types of premade formats: `compound`, `constants`, `pretty`.

To get a list of the premade formats, simply type the word, like: `new Date().format('compound');`

To use a premade format, simply insert the name!

compound |  | constants |  |
--- | --- | --- | --- |
'commonLogFormat' |  'd/M/Y:G:i:s' | 'AMERICAN' | 'F j Y'
'exif' | 'Y:m:d G:i:s' | 'AMERICANSHORT' | 'm/d/Y'
'isoYearWeek' |  'Y\\\WW' | 'AMERICANSHORTWTIME' | 'm/d/Y h:i:sA'
'isoYearWeek2' | 'Y-\\\WW' | 'ATOM' | 'Y-m-d\\\TH:i:sP'
'isoYearWeekDay' | 'Y\\\WWj' | 'COOKIE' | 'l d-M-Y H:i:s T'
'isoYearWeekDay2' | 'Y-\\\WW-j' | 'EUROPEAN' | 'j F Y'
'mySQL' | 'Y-m-d h:i:s' | 'EUROPEANSHORT' | 'd.m.Y'
'postgreSQL' | 'Y.z' | 'EUROPEANSHORTWTIME' | 'd.m.Y H:i:s'
'postgreSQL2' | 'Yz' | 'ISO8601' |  'Y-m-d\\\TH:i:sO'
'soap' | 'Y-m-d\\\TH:i:s.u' | 'LEGAL' | 'j F Y'
'soap2' | 'Y-m-d\\\TH:i:s.uP' | 'RFC822' | 'D d M y H:i:s O'
'unixTimestamp' | '@U' | 'RFC850' | 'l d-M-y H:i:s T'
'xmlrpc' | 'Ymd\\\TG:i:s' | 'RFC1036' | 'D d M y H:i:s O'
'xmlrpcCompact' | 'Ymd\\\tGis' | 'RFC1123' | 'D d M Y H:i:s O'
'wddx' | 'Y-n-j\\\TG:i:s' | 'RFC2822' |  'D d M Y H:i:s O'
 |  | 'RFC3339' |  'Y-m-d\\\TH:i:sP'
 |  | 'RSS' |  'D d M Y H:i:s O'
 |  | 'W3C' |  'Y-m-d\\\TH:i:sP'

Pretty |  |
--- | --- |
'pretty-a' | 'g:i.sA l jS \\\o\\\f F Y'
'pretty-b' | 'g:iA l jS \\\o\\\f F Y'
'pretty-c' | 'n/d/Y g:iA'
'pretty-d' | 'n/d/Y'
'pretty-e' | 'F jS - g:ia'
'pretty-f' | 'g:iA'

***TIP***: As you may have noticed, use double `\` to escape a character.
