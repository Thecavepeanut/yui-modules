YUI.add("gallery-algorithms",function(e,t){"use strict";function n(t,n,r,i){var s,o,u,a,f,l,c=!0;i||(i=e.Array.compareStringsCaseSensitive),a=Math.floor((n+r)/2),s=a,u=s--,f=t[u];while(s>=n&&c)o=s--,c=i(f,t[o])===0;s=a+1;while(s<=r&&c)o=s++,c=i(f,t[o])===0;if(c)return-1;i(t[o],f)>0&&(u=o,f=t[u]),s=n,o=r;while(s<=o){while(i(f,t[s])>0)s++;while(i(f,t[o])<=0)o--;s<o&&(l=t[o],t[o]=t[s],t[s]=l,o--,s++)}return s}function r(e,t,i,s){var o;t<i&&(o=n(e,t,i,s),o!=-1&&(r(e,t,o-1,s),r(e,o,i,s)))}e.Array.swap=function(e,t,n){var r=e[t];e[t]=e[n],e[n]=r},e.Array.compareStringsCaseSensitive=function(e,t){return e==t?0:e<t?-1:1},e.Array.compareStringsCaseInsensitive=function(t,n){return e.Array.compareStringsCaseSensitive(t.toLowerCase(),n.toLowerCase())},e.Array.quickSort=function(e,t){r(e,0,e.length-1,t)},e.Array.binarySearch=function(t,n,r){if(!t||!t.length||e.Lang.isUndefined(n))return null;r||(r=e.Array.compareStringsCaseSensitive);var i=0,s=t.length-1,o;while(i<=s){var u=(i+s)/2,a=u<1?0:parseInt(u,10),f=r(t[a],n);if(f<0){i=a+1;continue}if(f>0){s=a-1;continue}s=a-1,o=a}return e.Lang.isUndefined(o)?-1:o},e.ArrayList&&e.mix(e.ArrayList,{swap:function(t,n){e.Array.swap(this._items,t,n)},setComparator:function(e){this._compare=e},quickSort:function(){e.Array.quickSort(this._items,this._compare)},binarySearch:function(t){e.Array.binarySearch(this._items,t,this._compare)}})},"@VERSION@",{optional:["collection"]});
