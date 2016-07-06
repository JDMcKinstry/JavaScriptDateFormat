function dateFormat(dt, str, showFormatted) {
	function addHours(d, v) { d.setHours(d.getHours() + parseFloat(v)); return d; }
	function getDayName(d, sf) { var days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]; return sf ? days[d.getDay()].substr(0,3) : days[d.getDay()]; }
	function getWeek(d) { var a = new Date(d.getFullYear(), 0, 1); return Math.ceil(((d - a) / 864E5 + a.getDay() + 1) / 7); }
	function getMonthName(d, shortForm) {
		var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		return shortForm ? months[d.getMonth()].substr(0,3) : months[d.getMonth()];
	}
	var formats = {
			/*	DAY	*/
			'd': function() { var a = dt.getDate(); return a > 9 ? a : '0' + a; },
			'D': function() { return getDayName(dt, true); },
			'j': function() { return dt.getDate(); },
			'l': function() { return getDayName(dt); },
			'N': function() { return dt.getDay() + 1; },
			'S': function() {
				var suffixes = [ 'st', 'nd', 'rd', 'th' ],
					a = dt.getDate()
				if (a == 1 || a == 21 || a ==31) return "st";
				else if (a == 2 || a == 22) return "nd";
				else if (a == 3 || a == 23) return "rd";
				return "th";
			},
			'w': function() { return dt.getDay(); },
			'z': function() { return Math.round(Math.abs((dt.getTime() - new Date('1/1/' + dt.getFullYear()).getTime())/(8.64e7))); },
			/*	WEEK	*/
			'W': function() { return getWeek(dt); },
			/*	MONTH	*/
			'F': function() { return getMonthName(dt); },
			'm': function() { var a = dt.getMonth() + 1; return a > 9 ? a : '0' + a; },
			'M': function() { return getMonthName(dt, true); },
			'n': function() { return dt.getMonth() + 1; },
			't': function() { return new Date(dt.getFullYear(), dt.getMonth()+1, 0).getDate(); },
			/*	YEAR	*/
			'L': function() { var a = dt.getFullYear(); return 0 == a % 4 && 0 != a % 100 || 0 == a % 400; },
			'o': function() { return parseInt(dt.getFullYear()); },	//	todo: base on week's parent year
			'Y': function() { return parseInt(dt.getFullYear()); },
			'y': function() { return parseInt((dt.getFullYear()+'').substr(-2)); },
			/*	TIME	*/
			'a': function() { return dt.getHours() >= 12 ? "pm" : "am"; },
			'A': function() { return dt.getHours() >= 12 ? "PM" : "AM"; },
			'B': function() { return "@"+("00"+Math.floor((((dt.getHours()+1)%24*60+dt.getMinutes())*60+dt.getSeconds()+(dt.getMilliseconds()*0.001))/86.4)).slice(-3); },
			'g': function() { var a = dt.getHours(); return a <= 12 ? a : a - 12; },	//	12-hour format of an hour without leading zeros
			'G': function() { return dt.getHours(); },	//	24-hour format of an hour without leading zeros
			'h': function() { var a = dt.getHours(); a = a <= 12 ? a : a - 12; return a > 9 ? a : '0' + a; },	//		12-hour format of an hour with leading zeros
			'H': function() { var a = dt.getHours(); return a > 9 ? a : '0' + a; },	//		24-hour format of an hour with leading zeros
			'i': function() { var a = dt.getMinutes(); return a > 9 ? a : '0' + a; },	//	Minutes with leading zeros
			's': function() { var a = dt.getSeconds(); return a > 9 ? a : '0' + a; },	//	Seconds, with leading zeros
			'u': function() { return dt.getMilliseconds(); },	//	this is NOT microseconds ... it's JS :P,
			/*	TIMEZONE	*/
			'e': function() { var a = dt.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/); return a.length > 1 ? a[1] : ''; },
			'I': function() {
				var a = new Date(dt.getFullYear(), 0, 1),
					b = new Date(dt.getFullYear(), 6, 1),
					c = Math.max(a.getTimezoneOffset(), b.getTimezoneOffset());
				return dt.getTimezoneOffset() < c ? 1 : 0;
			},
			'O': function() { var a = dt.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/); return a.length > 2 ? a[2] : ''; },
			'P': function() { var a = dt.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/); return a.length > 2 ? a[2].substr(0,3) + ':' + a[2].substr(3,2) : ''; },
			'T': function() { return dt.toLocaleString('en', {timeZoneName:'short'}).split(' ').pop(); },	//	may not be reliable on Apple Systems	//	NOTE: Apple Sux
			'Z': function() { return dt.getTimezoneOffset() * 60; },
			/*	FULL DATE/TIME	*/
			'c': function() { return addHours(new Date(dt), -(dt.getTimezoneOffset() / 60)).toISOString(); },
			'r': function() { return addHours(new Date(dt), -(dt.getTimezoneOffset() / 60)).toISOString(); },
			'U': function() { return dt.getTime() / 1000 | 0; }
		},
		compound = {
			'commonLogFormat': 'd/M/Y:G:i:s',
			'exif': 'Y:m:d G:i:s',
			'isoYearWeek': 'Y\\WW',
			'isoYearWeek2': 'Y-\\WW',
			'isoYearWeekDay': 'Y\\WWj',
			'isoYearWeekDay2': 'Y-\\WW-j',
			'mySQL': 'Y-m-d h:i:s',
			'postgreSQL': 'Y.z',
			'postgreSQL2': 'Yz',
			'soap': 'Y-m-d\\TH:i:s.u',
			'soap2': 'Y-m-d\\TH:i:s.uP',
			'unixTimestamp': '@U',
			'xmlrpc': 'Ymd\\TG:i:s',
			'xmlrpcCompact': 'Ymd\\tGis',
			'wddx': 'Y-n-j\\TG:i:s'
		},
		constants = {
			'AMERICAN': 'F j, Y',
			'AMERICANSHORT': 'm/d/Y',
			'AMERICANSHORTWTIME': 'm/d/Y h:i:sA',
			'ATOM': 'Y-m-d\\TH:i:sP',
			'COOKIE': 'l, d-M-Y H:i:s T',
			'EUROPEAN': 'j F Y',
			'EUROPEANSHORT': 'd.m.Y',
			'EUROPEANSHORTWTIME': 'd.m.Y H:i:s',
			'ISO8601': 'Y-m-d\\TH:i:sO',
			'LEGAL': 'j F Y',
			'RFC822': 'D, d M y H:i:s O',
			'RFC850': 'l, d-M-y H:i:s T',
			'RFC1036': 'D, d M y H:i:s O',
			'RFC1123': 'D, d M Y H:i:s O',
			'RFC2822': 'D, d M Y H:i:s O',
			'RFC3339': 'Y-m-d\\TH:i:sP',
			'RSS': 'D, d M Y H:i:s O',
			'W3C': 'Y-m-d\\TH:i:sP'
		},
		pretty = {
			'pretty-a': 'g:i.sA l jS \\o\\f F, Y',
			'pretty-b': 'g:iA l jS \\o\\f F, Y',
			'pretty-c': 'n/d/Y g:iA',
			'pretty-d': 'n/d/Y',
			'pretty-e': 'F jS - g:ia',
			'pretty-f': 'g:iA',
		}
	if (str) {
		if (str == 'compound') {
			if (showFormatted === false) return compound;
			var r = {};
			for (var x in compound) r[x] = dateFormat(dt, compound[x]);
			return r;
		}
		else if (compound[str]) return dateFormat(dt, compound[str], showFormatted);
		
		if (str == 'constants') {
			if (showFormatted === false) return constants;
			var r = {};
			for (var x in constants) r[x] = dateFormat(dt, constants[x]);
			return r;
		}
		else if (constants[str]) return dateFormat(dt, constants[str], showFormatted);
		
		if (str == 'pretty') {
			if (showFormatted === false) return pretty;
			var r = {};
			for (var x in pretty) r[x] = dateFormat(dt, pretty[x]);
			return r;
		}
		else if (pretty[str]) return dateFormat(dt, pretty[str], showFormatted);
		
		var ret = str.split(''), lc = '';
		for (var x in ret) {
			var c = ret[x];
			if ((c && /[a-z]/i.test(c)) && !(/\\/.test(lc + c))) {
				var rx = new RegExp(c, 'g');
				ret[x] = formats[c] ? formats[c].apply(this) : c;
			}
			lc = ret[x];
		}
		return ret.join('').replace(/\\/g, '');
	}
	return dt;
}