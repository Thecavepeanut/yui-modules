if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/gallery-datetime-utils/gallery-datetime-utils.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-datetime-utils/gallery-datetime-utils.js",
    code: []
};
_yuitest_coverage["build/gallery-datetime-utils/gallery-datetime-utils.js"].code=["YUI.add('gallery-datetime-utils', function (Y, NAME) {","","\"use strict\";","","/**"," * @module gallery-datetime-utils"," */","","/**********************************************************************"," * Utility functions work working with dates and times."," * "," * @main gallery-datetime-utils"," * @class DateTimeUtils"," */","","function pad2(n)","{","	var s = n.toString();","	if (s.length < 2)","	{","		s = '0' + s;","	}","	return s;","}","","function validInteger(v)","{","	return /^\\d+$/.test(v);","}","","Y.DateTimeUtils =","{","	/**","	 * Position of the year in a string representation of a date: 1,2,3","	 *","	 * @property YEAR_POSITION","	 * @type {Number}","	 * @default 1","	 * @static","	 */","	YEAR_POSITION: 1,","","	/**","	 * Position of the month in a string representation of a date: 1,2,3","	 *","	 * @property MONTH_POSITION","	 * @type {Number}","	 * @default 2","	 * @static","	 */","	MONTH_POSITION: 2,","","	/**","	 * Position of the day in a string representation of a date: 1,2,3","	 *","	 * @property DAY_POSITION","	 * @type {Number}","	 * @default 3","	 * @static","	 */","	DAY_POSITION: 3,","","	/**","	 * Delimiter of fields in a string representation of a date.","	 *","	 * @property DATE_FIELD_DELIMITER","	 * @type {String}","	 * @default \"-\"","	 * @static","	 */","	DATE_FIELD_DELIMITER: '-',","","	/**","	 * Delimiter of fields in a string representation of a time.","	 *","	 * @property TIME_FIELD_DELIMITER","	 * @type {String}","	 * @default \":\"","	 * @static","	 */","	TIME_FIELD_DELIMITER: ':',","","	/**","	 * Antemeridian string.","	 *","	 * @property AM_STRING","	 * @type {String}","	 * @default \"AM\"","	 * @static","	 */","	AM_STRING: 'AM',","","	/**","	 * Postmeridian string.","	 *","	 * @property PM_STRING","	 * @type {String}","	 * @default \"PM\"","	 * @static","	 */","	PM_STRING: 'PM',","","	/**","	 * How hours should be displayed to the user by classes in the DateTime","	 * family: 12hr or 24hr.  (Internal values are always 24hr.)  This is","	 * global because your app should be consistent about how it displays","	 * times.","	 * ","	 * @property CLOCK_DISPLAY_TYPE","	 * @type {Number} 12 or 24","	 * @default 24","	 * @static","	 */","	CLOCK_DISPLAY_TYPE: 24,","","	/**","	 * Normalizes the given object by converting date\\_str into","	 * year,month,day, converting time\\_str into hour,minute (or adding in","	 * hour,minute from default\\_time), and adding date (instanceof Date).","	 * Individual fields take precedence over strings.","	 * ","	 * If input is a Date object, then the result contains a breakdown of","	 * the values.","	 * ","	 * @method normalize","	 * @static","	 * @param input {Date|Number|Object}","	 *	Can be specified either as instance of Date, a number specifying","	 *	milliseconds since midnight Jan 1, 1970, or as an object defining","	 *	date_str or year,month,day and (optional) either time_str or","	 *	hour,minute.","	 * @param default_time {Object} Default hour and minute to use if input only has date.","	 * @return {Object} normalized object defining date and time","	 */","	normalize: function(input, default_time)","	{","		if (input instanceof Date)","		{","			var result =","			{","				year:   input.getFullYear(),","				month:  input.getMonth()+1,","				day:    input.getDate(),","				hour:   input.getHours(),","				minute: input.getMinutes(),","				date:   input","			};","			return result;","		}","		else if (Y.Lang.isNumber(input))","		{","			return self.normalize(new Date(input));","		}","","		var result = Y.clone(input);","		if (result.date_str)","		{","			if (Y.Lang.isUndefined(result.year) &&","				Y.Lang.isUndefined(result.month) &&","				Y.Lang.isUndefined(result.day))","			{","				Y.mix(result, self.parseDate(result.date_str));","			}","			delete result.date_str;","		}","","		if (result.time_str)","		{","			if (Y.Lang.isUndefined(result.hour) &&","				Y.Lang.isUndefined(result.minute))","			{","				Y.mix(result, self.parseTime(result.time_str));","			}","			delete result.time_str;","		}","		else if (Y.Lang.isUndefined(result.hour))","		{","			result.hour   = default_time.hour;","			result.minute = default_time.minute;","		}","","		// return values inside standard ranges","		return self.normalize(new Date(result.year, result.month-1, result.day, result.hour, result.minute));","	},","","	/**","	 * Format the date portion of a Date object.","	 * ","	 * @method formatDate","	 * @static","	 * @param date {Mixed} string (returned as-is), Date, milliseconds, or object specifying day,month,year","	 * @return {String} formatted date, using positions and delimiters","	 */","	formatDate: function(date)","	{","		if (!date)","		{","			return '';","		}","		else if (Y.Lang.isString(date))","		{","			return date;","		}","","		if (Y.Lang.isNumber(date))","		{","			date = new Date(date);","		}","","		var a = [];","		if (date instanceof Date)","		{","			a[ self.YEAR_POSITION-1 ]  = date.getFullYear().toString();","			a[ self.MONTH_POSITION-1 ] = pad2(date.getMonth()+1);","			a[ self.DAY_POSITION-1 ]   = pad2(date.getDate());","		}","		else","		{","			a[ self.YEAR_POSITION-1 ]  = date.year.toString();","			a[ self.MONTH_POSITION-1 ] = pad2(date.month);","			a[ self.DAY_POSITION-1 ]   = pad2(date.day);","		}","","		return a.join(self.DATE_FIELD_DELIMITER);","	},","","	/**","	 * Inverse of formatDate().  Extracts year, month, and day from the","	 * string.  The values are normalized to fall inside the default","	 * ranges.","	 * ","	 * @method parseDate","	 * @static","	 * @param date {String} string from DateTimeUtils.formatDate()","	 * @return {Object} year,month,day, or null","	 */","	parseDate: function(date)","	{","		if (!date)","		{","			return null;","		}","		else if (!Y.Lang.isString(date))","		{","			return date;","		}","","		try","		{","			var obj = self.parseDateString(date, self.DATE_FIELD_DELIMITER,","				self.YEAR_POSITION, self.MONTH_POSITION, self.DAY_POSITION);","		}","		catch (e)","		{","			// Try the standard format provided by <input type=\"date\">.","			// If this fails, we let the exception propagate.","","			obj = self.parseDateString(date, '-', 1, 2, 3);","		}","","		var result =","		{","			year:  obj.year,","			month: obj.month,","			day:   obj.day","		}","		return result;","	},","","	/**","	 * Utility for parsing a date string that is not formatted based on the","	 * Y.DateTime configuration.","	 * ","	 * @method parseDate","	 * @static","	 * @param date {String} string from DateTimeUtils.formatDate()","	 * @param delimiater {String} delimiter between the date fields","	 * @param year_pos {Number} position of the year in the string representation: 1,2,3","	 * @param month_pos {Number} position of the month in the string representation: 1,2,3","	 * @param day_pos {Number} position of the day in the string representation: 1,2,3","	 * @return {Object} normalized object defining date","	 */","	parseDateString: function(date, delimiter, year_pos, month_pos, day_pos)","	{","		var d = date.split(delimiter);","		if (d.length != 3 || !Y.every(d, validInteger))","		{","			throw Error('Unparseable date format.');","		}","","		return self.normalize(","		{","			year:   parseInt(d[ year_pos-1 ], 10),","			month:  parseInt(d[ month_pos-1 ], 10),","			day:    parseInt(d[ day_pos-1 ], 10),","			hour:   0,","			minute: 0","		});","	},","","	/**","	 * Format the time portion of a Date object.","	 * ","	 * @method formatTime","	 * @static","	 * @param time {Mixed} string (returned as-is), Date, milliseconds, or object specifying hour,minute","	 * @return {String} formatted date, using positions and delimiters","	 */","	formatTime: function(time)","	{","		if (!time)","		{","			return '';","		}","		else if (Y.Lang.isString(time))","		{","			return time;","		}","","		if (Y.Lang.isNumber(time))","		{","			time = new Date(time);","		}","","		if (time instanceof Date)","		{","			time =","			{","				hour:   time.getHours(),","				minute: time.getMinutes()","			};","		}","","		if (self.CLOCK_DISPLAY_TYPE == 12)","		{","			var s = self.TIME_FIELD_DELIMITER + pad2(time.minute) + ' ';","			return (time.hour > 12 ?","					(time.hour - 12) + s + self.PM_STRING :","					time.hour + s + self.AM_STRING);","		}","		else","		{","			return time.hour + self.TIME_FIELD_DELIMITER + pad2(time.minute);","		}","	},","","	/**","	 * Inverse of formatTime().  Extracts hour and minute from the string.","	 * Throws an error if hour is outside [0,23] or minute is outside","	 * [0,59].","	 * ","	 * @method parseTime","	 * @static","	 * @param time {String} string from DateTimeUtils.formatTime()","	 * @return {Object} hour,minute, or null","	 */","	parseTime: function(","		/* string */	time)","	{","		if (!time)","		{","			return null;","		}","		else if (!Y.Lang.isString(time))","		{","			return time;","		}","","		var offset = 0;","		if (time.indexOf(self.AM_STRING) > 0)","		{","			time = Y.Lang.trim(time.replace(self.AM_STRING, ''));","		}","		else if (time.indexOf(self.PM_STRING) > 0)","		{","			time   = Y.Lang.trim(time.replace(self.PM_STRING, ''));","			offset = 12;","		}","","		var t = time.split(self.TIME_FIELD_DELIMITER);","		if (t.length != 2 || !Y.every(t, validInteger))","		{","			throw Error('Unparseable time format.');","		}","","		var result =","		{","			hour:   parseInt(t[0], 10) + offset,","			minute: parseInt(t[1], 10)","		};","","		if (result.hour   < 0 || 23 < result.hour ||","			result.minute < 0 || 59 < result.minute)","		{","			throw Error('Invalid time values: ' + result.hour + self.TIME_FIELD_DELIMITER + pad2(result.minute));","		}","","		return result;","	}","};","","var self = Y.DateTimeUtils;	// shortcut","","","}, '@VERSION@', {\"requires\": [\"gallery-funcprog\"]});"];
_yuitest_coverage["build/gallery-datetime-utils/gallery-datetime-utils.js"].lines = {"1":0,"3":0,"16":0,"18":0,"19":0,"21":0,"23":0,"26":0,"28":0,"31":0,"137":0,"139":0,"148":0,"150":0,"152":0,"155":0,"156":0,"158":0,"162":0,"164":0,"167":0,"169":0,"172":0,"174":0,"176":0,"178":0,"179":0,"183":0,"196":0,"198":0,"200":0,"202":0,"205":0,"207":0,"210":0,"211":0,"213":0,"214":0,"215":0,"219":0,"220":0,"221":0,"224":0,"239":0,"241":0,"243":0,"245":0,"248":0,"250":0,"258":0,"261":0,"267":0,"285":0,"286":0,"288":0,"291":0,"311":0,"313":0,"315":0,"317":0,"320":0,"322":0,"325":0,"327":0,"334":0,"336":0,"337":0,"343":0,"360":0,"362":0,"364":0,"366":0,"369":0,"370":0,"372":0,"374":0,"376":0,"377":0,"380":0,"381":0,"383":0,"386":0,"392":0,"395":0,"398":0,"402":0};
_yuitest_coverage["build/gallery-datetime-utils/gallery-datetime-utils.js"].functions = {"pad2:16":0,"validInteger:26":0,"normalize:135":0,"formatDate:194":0,"parseDate:237":0,"parseDateString:283":0,"formatTime:309":0,"parseTime:357":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-datetime-utils/gallery-datetime-utils.js"].coveredLines = 86;
_yuitest_coverage["build/gallery-datetime-utils/gallery-datetime-utils.js"].coveredFunctions = 9;
_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 1);
YUI.add('gallery-datetime-utils', function (Y, NAME) {

_yuitest_coverfunc("build/gallery-datetime-utils/gallery-datetime-utils.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 3);
"use strict";

/**
 * @module gallery-datetime-utils
 */

/**********************************************************************
 * Utility functions work working with dates and times.
 * 
 * @main gallery-datetime-utils
 * @class DateTimeUtils
 */

_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 16);
function pad2(n)
{
	_yuitest_coverfunc("build/gallery-datetime-utils/gallery-datetime-utils.js", "pad2", 16);
_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 18);
var s = n.toString();
	_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 19);
if (s.length < 2)
	{
		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 21);
s = '0' + s;
	}
	_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 23);
return s;
}

_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 26);
function validInteger(v)
{
	_yuitest_coverfunc("build/gallery-datetime-utils/gallery-datetime-utils.js", "validInteger", 26);
_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 28);
return /^\d+$/.test(v);
}

_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 31);
Y.DateTimeUtils =
{
	/**
	 * Position of the year in a string representation of a date: 1,2,3
	 *
	 * @property YEAR_POSITION
	 * @type {Number}
	 * @default 1
	 * @static
	 */
	YEAR_POSITION: 1,

	/**
	 * Position of the month in a string representation of a date: 1,2,3
	 *
	 * @property MONTH_POSITION
	 * @type {Number}
	 * @default 2
	 * @static
	 */
	MONTH_POSITION: 2,

	/**
	 * Position of the day in a string representation of a date: 1,2,3
	 *
	 * @property DAY_POSITION
	 * @type {Number}
	 * @default 3
	 * @static
	 */
	DAY_POSITION: 3,

	/**
	 * Delimiter of fields in a string representation of a date.
	 *
	 * @property DATE_FIELD_DELIMITER
	 * @type {String}
	 * @default "-"
	 * @static
	 */
	DATE_FIELD_DELIMITER: '-',

	/**
	 * Delimiter of fields in a string representation of a time.
	 *
	 * @property TIME_FIELD_DELIMITER
	 * @type {String}
	 * @default ":"
	 * @static
	 */
	TIME_FIELD_DELIMITER: ':',

	/**
	 * Antemeridian string.
	 *
	 * @property AM_STRING
	 * @type {String}
	 * @default "AM"
	 * @static
	 */
	AM_STRING: 'AM',

	/**
	 * Postmeridian string.
	 *
	 * @property PM_STRING
	 * @type {String}
	 * @default "PM"
	 * @static
	 */
	PM_STRING: 'PM',

	/**
	 * How hours should be displayed to the user by classes in the DateTime
	 * family: 12hr or 24hr.  (Internal values are always 24hr.)  This is
	 * global because your app should be consistent about how it displays
	 * times.
	 * 
	 * @property CLOCK_DISPLAY_TYPE
	 * @type {Number} 12 or 24
	 * @default 24
	 * @static
	 */
	CLOCK_DISPLAY_TYPE: 24,

	/**
	 * Normalizes the given object by converting date\_str into
	 * year,month,day, converting time\_str into hour,minute (or adding in
	 * hour,minute from default\_time), and adding date (instanceof Date).
	 * Individual fields take precedence over strings.
	 * 
	 * If input is a Date object, then the result contains a breakdown of
	 * the values.
	 * 
	 * @method normalize
	 * @static
	 * @param input {Date|Number|Object}
	 *	Can be specified either as instance of Date, a number specifying
	 *	milliseconds since midnight Jan 1, 1970, or as an object defining
	 *	date_str or year,month,day and (optional) either time_str or
	 *	hour,minute.
	 * @param default_time {Object} Default hour and minute to use if input only has date.
	 * @return {Object} normalized object defining date and time
	 */
	normalize: function(input, default_time)
	{
		_yuitest_coverfunc("build/gallery-datetime-utils/gallery-datetime-utils.js", "normalize", 135);
_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 137);
if (input instanceof Date)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 139);
var result =
			{
				year:   input.getFullYear(),
				month:  input.getMonth()+1,
				day:    input.getDate(),
				hour:   input.getHours(),
				minute: input.getMinutes(),
				date:   input
			};
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 148);
return result;
		}
		else {_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 150);
if (Y.Lang.isNumber(input))
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 152);
return self.normalize(new Date(input));
		}}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 155);
var result = Y.clone(input);
		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 156);
if (result.date_str)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 158);
if (Y.Lang.isUndefined(result.year) &&
				Y.Lang.isUndefined(result.month) &&
				Y.Lang.isUndefined(result.day))
			{
				_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 162);
Y.mix(result, self.parseDate(result.date_str));
			}
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 164);
delete result.date_str;
		}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 167);
if (result.time_str)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 169);
if (Y.Lang.isUndefined(result.hour) &&
				Y.Lang.isUndefined(result.minute))
			{
				_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 172);
Y.mix(result, self.parseTime(result.time_str));
			}
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 174);
delete result.time_str;
		}
		else {_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 176);
if (Y.Lang.isUndefined(result.hour))
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 178);
result.hour   = default_time.hour;
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 179);
result.minute = default_time.minute;
		}}

		// return values inside standard ranges
		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 183);
return self.normalize(new Date(result.year, result.month-1, result.day, result.hour, result.minute));
	},

	/**
	 * Format the date portion of a Date object.
	 * 
	 * @method formatDate
	 * @static
	 * @param date {Mixed} string (returned as-is), Date, milliseconds, or object specifying day,month,year
	 * @return {String} formatted date, using positions and delimiters
	 */
	formatDate: function(date)
	{
		_yuitest_coverfunc("build/gallery-datetime-utils/gallery-datetime-utils.js", "formatDate", 194);
_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 196);
if (!date)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 198);
return '';
		}
		else {_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 200);
if (Y.Lang.isString(date))
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 202);
return date;
		}}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 205);
if (Y.Lang.isNumber(date))
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 207);
date = new Date(date);
		}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 210);
var a = [];
		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 211);
if (date instanceof Date)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 213);
a[ self.YEAR_POSITION-1 ]  = date.getFullYear().toString();
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 214);
a[ self.MONTH_POSITION-1 ] = pad2(date.getMonth()+1);
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 215);
a[ self.DAY_POSITION-1 ]   = pad2(date.getDate());
		}
		else
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 219);
a[ self.YEAR_POSITION-1 ]  = date.year.toString();
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 220);
a[ self.MONTH_POSITION-1 ] = pad2(date.month);
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 221);
a[ self.DAY_POSITION-1 ]   = pad2(date.day);
		}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 224);
return a.join(self.DATE_FIELD_DELIMITER);
	},

	/**
	 * Inverse of formatDate().  Extracts year, month, and day from the
	 * string.  The values are normalized to fall inside the default
	 * ranges.
	 * 
	 * @method parseDate
	 * @static
	 * @param date {String} string from DateTimeUtils.formatDate()
	 * @return {Object} year,month,day, or null
	 */
	parseDate: function(date)
	{
		_yuitest_coverfunc("build/gallery-datetime-utils/gallery-datetime-utils.js", "parseDate", 237);
_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 239);
if (!date)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 241);
return null;
		}
		else {_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 243);
if (!Y.Lang.isString(date))
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 245);
return date;
		}}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 248);
try
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 250);
var obj = self.parseDateString(date, self.DATE_FIELD_DELIMITER,
				self.YEAR_POSITION, self.MONTH_POSITION, self.DAY_POSITION);
		}
		catch (e)
		{
			// Try the standard format provided by <input type="date">.
			// If this fails, we let the exception propagate.

			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 258);
obj = self.parseDateString(date, '-', 1, 2, 3);
		}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 261);
var result =
		{
			year:  obj.year,
			month: obj.month,
			day:   obj.day
		}
		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 267);
return result;
	},

	/**
	 * Utility for parsing a date string that is not formatted based on the
	 * Y.DateTime configuration.
	 * 
	 * @method parseDate
	 * @static
	 * @param date {String} string from DateTimeUtils.formatDate()
	 * @param delimiater {String} delimiter between the date fields
	 * @param year_pos {Number} position of the year in the string representation: 1,2,3
	 * @param month_pos {Number} position of the month in the string representation: 1,2,3
	 * @param day_pos {Number} position of the day in the string representation: 1,2,3
	 * @return {Object} normalized object defining date
	 */
	parseDateString: function(date, delimiter, year_pos, month_pos, day_pos)
	{
		_yuitest_coverfunc("build/gallery-datetime-utils/gallery-datetime-utils.js", "parseDateString", 283);
_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 285);
var d = date.split(delimiter);
		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 286);
if (d.length != 3 || !Y.every(d, validInteger))
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 288);
throw Error('Unparseable date format.');
		}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 291);
return self.normalize(
		{
			year:   parseInt(d[ year_pos-1 ], 10),
			month:  parseInt(d[ month_pos-1 ], 10),
			day:    parseInt(d[ day_pos-1 ], 10),
			hour:   0,
			minute: 0
		});
	},

	/**
	 * Format the time portion of a Date object.
	 * 
	 * @method formatTime
	 * @static
	 * @param time {Mixed} string (returned as-is), Date, milliseconds, or object specifying hour,minute
	 * @return {String} formatted date, using positions and delimiters
	 */
	formatTime: function(time)
	{
		_yuitest_coverfunc("build/gallery-datetime-utils/gallery-datetime-utils.js", "formatTime", 309);
_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 311);
if (!time)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 313);
return '';
		}
		else {_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 315);
if (Y.Lang.isString(time))
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 317);
return time;
		}}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 320);
if (Y.Lang.isNumber(time))
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 322);
time = new Date(time);
		}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 325);
if (time instanceof Date)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 327);
time =
			{
				hour:   time.getHours(),
				minute: time.getMinutes()
			};
		}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 334);
if (self.CLOCK_DISPLAY_TYPE == 12)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 336);
var s = self.TIME_FIELD_DELIMITER + pad2(time.minute) + ' ';
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 337);
return (time.hour > 12 ?
					(time.hour - 12) + s + self.PM_STRING :
					time.hour + s + self.AM_STRING);
		}
		else
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 343);
return time.hour + self.TIME_FIELD_DELIMITER + pad2(time.minute);
		}
	},

	/**
	 * Inverse of formatTime().  Extracts hour and minute from the string.
	 * Throws an error if hour is outside [0,23] or minute is outside
	 * [0,59].
	 * 
	 * @method parseTime
	 * @static
	 * @param time {String} string from DateTimeUtils.formatTime()
	 * @return {Object} hour,minute, or null
	 */
	parseTime: function(
		/* string */	time)
	{
		_yuitest_coverfunc("build/gallery-datetime-utils/gallery-datetime-utils.js", "parseTime", 357);
_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 360);
if (!time)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 362);
return null;
		}
		else {_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 364);
if (!Y.Lang.isString(time))
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 366);
return time;
		}}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 369);
var offset = 0;
		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 370);
if (time.indexOf(self.AM_STRING) > 0)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 372);
time = Y.Lang.trim(time.replace(self.AM_STRING, ''));
		}
		else {_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 374);
if (time.indexOf(self.PM_STRING) > 0)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 376);
time   = Y.Lang.trim(time.replace(self.PM_STRING, ''));
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 377);
offset = 12;
		}}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 380);
var t = time.split(self.TIME_FIELD_DELIMITER);
		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 381);
if (t.length != 2 || !Y.every(t, validInteger))
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 383);
throw Error('Unparseable time format.');
		}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 386);
var result =
		{
			hour:   parseInt(t[0], 10) + offset,
			minute: parseInt(t[1], 10)
		};

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 392);
if (result.hour   < 0 || 23 < result.hour ||
			result.minute < 0 || 59 < result.minute)
		{
			_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 395);
throw Error('Invalid time values: ' + result.hour + self.TIME_FIELD_DELIMITER + pad2(result.minute));
		}

		_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 398);
return result;
	}
};

_yuitest_coverline("build/gallery-datetime-utils/gallery-datetime-utils.js", 402);
var self = Y.DateTimeUtils;	// shortcut


}, '@VERSION@', {"requires": ["gallery-funcprog"]});
