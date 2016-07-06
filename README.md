# JavaScriptDateFormat
PHP like Date Formatter in 2 flavors

*Formatting was inspired by [PHP:date](http://php.net/manual/en/function.date.php)*

Basic example: `new Date().format('m-d-Y h:i:s');` will return something like: `07-06-2016 06:38:34`

## Basic Format Characters:

### Day
---
	'd'	Day of the month, 2 digits with leading zeros
	'D'	A textual representation of a day, three letters
	'j'	Day of the month without leading zeros
	'l (lowercase 'L')'	A full textual representation of the day of the week
	'N'	ISO-8601 numeric representation of the day of the week (added in\n           PHP 5.1.0)
	'S'	English ordinal suffix for the day of the month, 2 characters
	'w'	Numeric representation of the day of the week
	'z'	The day of the year (starting from 0)
### Week
---
	'W'	ISO-8601 week number of year, weeks starting on Monday (added in PHP 4.1.0)
	'Month'	---
	'F'	A full textual representation of a month, such as January or March
	'm'	Numeric representation of a month, with leading zeros
	'M'	A short textual representation of a month, three letters
	'n'	Numeric representation of a month, without leading zeros
	't'	Number of days in the given month
### Year
---
	'L'	Whether it's a leap year
	'o'	ISO-8601 year number. This has the same value as\n            Y, except that if the ISO week number\n            (W) belongs to the previous or next year, that year\n            is used instead. (added in PHP 5.1.0)
	'Y'	A full numeric representation of a year, 4 digits
	'y'	A two digit representation of a year
### Time
---
	'a'	Lowercase Ante meridiem and Post meridiem
	'A'	Uppercase Ante meridiem and Post meridiem
	'B'	Swatch Internet time
	'g'	12-hour format of an hour without leading zeros
	'G'	24-hour format of an hour without leading zeros
	'h'	12-hour format of an hour with leading zeros
	'H'	24-hour format of an hour with leading zeros
	'i'	Minutes with leading zeros
	's'	Seconds, with leading zeros
	'u'	Microseconds (added in PHP 5.2.2). Note that\n            date() will always generate\n            000000 since it takes an integer\n            parameter, whereas DateTime::format() does\n            support microseconds if DateTime was\n            created with microseconds.
### Timezone
---
	'e'	Timezone identifier (added in PHP 5.1.0)
	'I (capital i)'	Whether or not the date is in daylight saving time
	'O'	Difference to Greenwich time (GMT) in hours
	'P'	Difference to Greenwich time (GMT) with colon between hours and minutes (added in PHP 5.1.3)
	'T'	Timezone abbreviation
	'Z'	Timezone offset in seconds. The offset for timezones west of UTC is always\n           negative, and for those east of UTC is always positive.
	'Full Date/Time'	---
	'c'	ISO 8601 date (added in PHP 5)
	'r'	» RFC 2822 formatted date
	'U'	Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)

**Also included are premade formats!!!**
There are 3 types of premade formats: `compound`, `constants`, `pretty`.

To get a list of the premade formats, simply type the word, like: `new Date().format('compound');`

To use a premade format, simply insert the name!

### compound
---
	'commonLogFormat'	'd/M/Y:G:i:s'
	'exif'	'Y:m:d G:i:s'
	'isoYearWeek'	'Y\\WW'
	'isoYearWeek2'	'Y-\\WW'
	'isoYearWeekDay'	'Y\\WWj'
	'isoYearWeekDay2'	'Y-\\WW-j'
	'mySQL'	'Y-m-d h:i:s'
	'postgreSQL'	'Y.z'
	'postgreSQL2'	'Yz'
	'soap'	'Y-m-d\\TH:i:s.u'
	'soap2'	'Y-m-d\\TH:i:s.uP'
	'unixTimestamp'	'@U'
	'xmlrpc'	'Ymd\\TG:i:s'
	'xmlrpcCompact'	'Ymd\\tGis'
	'wddx'	'Y-n-j\\TG:i:s'
### constants
---
	'AMERICAN'	'F j Y'
	'AMERICANSHORT'	'm/d/Y'
	'AMERICANSHORTWTIME'	'm/d/Y h:i:sA'
	'ATOM'	'Y-m-d\\TH:i:sP'
	'COOKIE'	'l d-M-Y H:i:s T'
	'EUROPEAN'	'j F Y'
	'EUROPEANSHORT'	'd.m.Y'
	'EUROPEANSHORTWTIME'	'd.m.Y H:i:s'
	'ISO8601'	'Y-m-d\\TH:i:sO'
	'LEGAL'	'j F Y'
	'RFC822'	'D d M y H:i:s O'
	'RFC850'	'l d-M-y H:i:s T'
	'RFC1036'	'D d M y H:i:s O'
	'RFC1123'	'D d M Y H:i:s O'
	'RFC2822'	'D d M Y H:i:s O'
	'RFC3339'	'Y-m-d\\TH:i:sP'
	'RSS'	'D d M Y H:i:s O'
	'W3C'	'Y-m-d\\TH:i:sP'
### pretty
---
	'pretty-a'	'g:i.sA l jS \\o\\f F Y'
	'pretty-b'	'g:iA l jS \\o\\f F Y'
	'pretty-c'	'n/d/Y g:iA'
	'pretty-d'	'n/d/Y'
	'pretty-e'	'F jS - g:ia'
	'pretty-f'	'g:iA'

***TIP***: As you may have noticed, use double `\` to escape a character.
