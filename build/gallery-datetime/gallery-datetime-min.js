YUI.add("gallery-datetime",function(e,t){"use strict";function s(e){s.superclass.constructor.apply(this,arguments)}function o(e){return e&&e._node&&e._node.tagName=="INPUT"}function u(){this.ignore_value_set||a.call(this,"same-day")}function a(t){var n=this.getDateTime();if(!n)return;n=n.date;var r=new Date(n.getTime());if(this.blackout.length>0){var i=n.getTime(),s=i,o=this.get("blackoutSnapDirection");for(var u=0;u<this.blackout.length;u++){var a=this.blackout[u];if(a[0]<i&&i<a[1]){o>0?i=a[1]+6e4:i=a[0];if(t=="same-day"){var f=new Date(i);if(f.getDate()!=n.getDate()||f.getMonth()!=n.getMonth()||f.getFullYear()!=n.getFullYear())i=o>0?a[0]:a[1]+6e4}break}}i!=s&&(n=new Date(i))}var l=this.get("minDateTime");if(l){var i=this.min.date.getTime();if(this.blackout.length>0){var s=i,u=0;while(u<this.blackout.length&&this.blackout[u][0]<i)i=Math.max(s,this.blackout[u][1]),u++}n.getTime()<i&&(n=new Date(i))}var h=this.get("maxDateTime");if(h){var i=this.max.date.getTime();if(this.blackout.length>0){var s=i,u=this.blackout.length-1;while(u>=0&&i<this.blackout[u][1])i=Math.min(s,this.blackout[u][0]),u--}i<n.getTime()&&(n=new Date(i))}this.ignore_value_set=!0;if(n.getFullYear()!==r.getFullYear()||n.getMonth()!==r.getMonth()||n.getDate()!==r.getDate())this.get("dateInput").set("value",e.DateTimeUtils.formatDate(n)),this.get("timeInput").set("value",e.DateTimeUtils.formatTime(n)),c.call(this,"dateInput","timeInput");else if(n.getHours()!==r.getHours()||n.getMinutes()!==r.getMinutes())this.get("timeInput").set("value",e.DateTimeUtils.formatTime(n)),c.apply(this,"timeInput");this.ignore_value_set=!1,this.fire("limitsEnforced")}function f(){return;var e}function l(e){return function(t,n){Dom.addClass(n,e)}}function c(){var t=this.get("pingDuration");if(t<=0)return;var n=new e.NodeList(e.reduce(arguments,[],function(e,t){return e.push(this.get(t)),e})),r=this.get("pingClass");this.ping_task&&(this.ping_task.nodes.removeClass(r),this.ping_task.cancel(),n=n.concat(this.ping_task.nodes)),n.addClass(r),this.ping_task=e.later(this.get("pingDuration"),this,function(){this.ping_task=null,n.removeClass(r)}),this.ping_task.nodes=n}var n=-40,r=40,i=0<e.UA.ie;s.NAME="datetime",s.ATTRS={dateInput:{validator:o,writeOnce:!0},timeInput:{validator:o,writeOnce:!0},defaultDateTime:{setter:function(t){return t?e.DateTimeUtils.normalize(t,this.get("blankTime")):null}},minDateTime:{setter:function(t){return t?e.DateTimeUtils.normalize(t,this.get("blankTime")):null}},maxDateTime:{setter:function(t){return t?e.DateTimeUtils.normalize(t,this.get("blankTime")):null}},blankTime:{value:{hour:0,minute:0},validator:function(t){return e.Lang.isObject(t)&&e.Lang.isNumber(t.hour)&&e.Lang.isNumber(t.minute)}},blackouts:{value:[],validator:e.Lang.isArray,setter:function(t){var i=[],s=this.get("blankTime");for(var o=0;o<t.length;o++){var u=t[o];u.start=e.DateTimeUtils.normalize(u.start,s),u.end=e.DateTimeUtils.normalize(u.end,s),u=[(new Date(u.start.year,u.start.month-1,u.start.day,u.start.hour,u.start.minute,n)).getTime(),(new Date(u.end.year,u.end.month-1,u.end.day,u.end.hour,u.end.minute,r)).getTime()];var a=!1;for(var f=0;f<i.length;f++){var l=i[f];if(u[0]<=l[0]){f>0&&u[0]<i[f-1][1]&&u[1]<=i[f-1][1]||(f>0&&u[0]-6e4<i[f-1][1]&&l[0]<u[1]+6e4?(u=[i[f-1][0],u[1]],i.splice(f-1,2,u)):f>0&&u[0]-6e4<i[f-1][1]?i[f-1][1]=u[1]:l[0]<u[1]+6e4?l[0]=u[0]:i.splice(f,0,u)),a=!0;break}}!a&&f>0&&u[0]<i[f-1][1]&&u[1]<=i[f-1][1]||(!a&&f>0&&u[0]-6e4<i[f-1][1]?i[f-1][1]=u[1]:a||i.push(u))}return i}},blackoutSnapDirection:{"default":1,validator:function(e){return e==-1||e==+1}},pingDuration:{value:2,validator:e.Lang.isNumber},pingClass:{value:"yui3-datetime-ping",validator:e.Lang.isString}},e.extend(s,e.Base,{initializer:function(t,n){var r=this.get("dateInput");r.on("change",a,this),r.after("valueSet",u,this);var i=this.get("timeInput");i?(i.on("change",a,this),i.after("valueSet",u,this)):(i=e.Node.create('<input type="hidden"></input>'),this.set("timeInput",i));var s=this.get("defaultDateTime");s&&(r.set("value",e.DateTimeUtils.formatDate(s)),i.set("value",e.DateTimeUtils.formatTime(s)));if(r.calendarSync){this.calendar=r.calendarSync.get("calendar"),this.calendar&&s&&this.calendar.set("date",s.date);var o=this.get("minDateTime");this.calendar&&o&&this.calendar.set("minimumDate",o.date),o=this.get("maxDateTime"),this.calendar&&o&&this.calendar.set("maximumDate",o.date)}f.call(this),this.on("blackoutsChange",f)},destroy:function(){},getDateTime:function(){try{var t=e.DateTimeUtils.parseDate(this.get("dateInput").get("value"));if(!t)return!1}catch(n){return!1}var r=this.get("timeInput");if(r)try{var i=e.DateTimeUtils.parseTime(r.get("value"));if(!i)return!1}catch(n){return!1}else var i=this.get("blankTime");var s=e.DateTimeUtils.normalize(e.mix(t,i));return s.date_str=e.DateTimeUtils.formatDate(s),s.time_str=e.DateTimeUtils.formatTime(s),s},setDateTime:function(e){this.rb[this.rb.length-1].checked=!0,this.calendar.setDate(e);if(e instanceof Date)this.hour_menu.value=e.getHours(),this.minute_menu.value=e.getMinutes();else if(e.time_str){var t=s.parseTime(e.time_str);this.hour_menu.value=t.hour,this.minute_menu.value=t.minute}else this.hour_menu.value=e.hour,this.minute_menu.value=e.minute;a.call(this)},resetDateTime:function(){this.default_date_time?(this.ignore_value_set=!0,this.calendar.setDate(this.default_date_time),this.ignore_value_set=!1,this.hour_menu.value=this.default_date_time.hour,this.minute_menu.value=this.default_date_time.minute):(this.calendar.clearDate(),this.hour_menu.value=this.blank_time.hour,this.minute_menu.value=this.blank_time.minute),a.call(this)},clearDateTime:function(){this.get("dateInput").set("value","");var e=this.get("timeInput");e&&e.set("value","")},setMinDateTime:function(t){if(t){t=e.DateTimeUtils.normalize(t,this.blank_time);if(!this.min_date_time||this.min_date_time.date.getTime()!=t.date.getTime())this.min_date_time=t,a.call(this),this.calendar.setMinDate(this.min_date_time),f.call(this)}else this.min_date_time&&(this.min_date_time=null,this.calendar.clearMinDate(),f.call(this))},setMaxDateTime:function(t){if(t){t=e.DateTimeUtils.normalize(t,this.blank_time);if(!this.max_date_time||this.max_date_time.date.getTime()!=t.date.getTime())this.max_date_time=t,a.call(this),this.calendar.setMaxDate(this.max_date_time),f.call(this)}else this.max_date_time&&(this.max_date_time=null,this.calendar.clearMaxDate(),f.call(this))}}),e.DateTime=s},"@VERSION@",{requires:["base","gallery-datetime-utils","gallery-funcprog"],optional:["calendar","gallery-timepicker"]});