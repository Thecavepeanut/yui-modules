YUI.add("gallery-storage-lite",function(b){var p=b.config.doc,i=b.config.win,c=b.JSON,o=b.namespace("StorageLite"),h="yui_storage_lite",s="YUI StorageLite data",u=1048576,n="1.0",q="ready",t=0,g=1,a=2,l=3,j=4,e="yui_storage_lite",k="data",r={},m,f;if(i.localStorage){f=g;}else{if(i.globalStorage){f=a;}else{if(i.openDatabase&&navigator.userAgent.indexOf("Chrome")===-1){f=l;}else{if(b.UA.ie>=5){f=j;}else{f=t;}}}}b.StorageFullError=function(d){b.StorageFullError.superclass.constructor.call(d);this.name="StorageFullError";this.message=d||"Maximum storage capacity reached";if(b.UA.ie){this.description=this.message;}};b.extend(b.StorageFullError,Error);b.augment(o,b.EventTarget,true,null,{emitFacade:true,prefix:"storage-lite",preventable:false});o.publish(q,{fireOnce:true});b.mix(o,{clear:function(){},getItem:function(v,d){return null;},length:function(){return 0;},removeItem:function(d){},setItem:function(d,v){}});if(f===g||f===a){b.mix(o,{length:function(){return m.length;},removeItem:function(d){m.removeItem(d);},setItem:function(v,w,d){m.setItem(v,d?c.stringify(w):w);}},true);if(f===g){m=i.localStorage;b.mix(o,{clear:function(){m.clear();},getItem:function(w,v){try{return v?c.parse(m.getItem(w)):m.getItem(w);}catch(d){return null;}}},true);}else{if(f===a){m=i.globalStorage[i.location.hostname];b.mix(o,{clear:function(){for(var d in m){if(m.hasOwnProperty(d)){m.removeItem(d);delete m[d];}}},getItem:function(w,v){try{return v?c.parse(m[w].value):m[w].value;}catch(d){return null;}}},true);}}o.fire(q);}else{if(f===l||f===j){b.mix(o,{clear:function(){r={};o._save();},getItem:function(v,d){return r.hasOwnProperty(v)?r[v]:null;},length:function(){var v=0,d;for(d in r){if(r.hasOwnProperty(d)){v+=1;}}return v;},removeItem:function(d){delete r[d];o._save();},setItem:function(v,w,d){r[v]=w;o._save();}},true);if(f===l){m=i.openDatabase(h,n,s,u);b.mix(o,{_save:function(){m.transaction(function(d){d.executeSql("REPLACE INTO "+h+" (name, value) VALUES ('data', ?)",[c.stringify(r)]);});}},true);m.transaction(function(d){d.executeSql("CREATE TABLE IF NOT EXISTS "+h+"(name TEXT PRIMARY KEY, value TEXT NOT NULL)");d.executeSql("SELECT value FROM "+h+" WHERE name = 'data'",[],function(x,w){if(w.rows.length){try{r=c.parse(w.rows.item(0).value);}catch(v){r={};}}o.fire(q);});});}else{if(f===j){m=p.createElement("span");m.addBehavior("#default#userData");b.mix(o,{_save:function(){var v=c.stringify(r);try{m.setAttribute(k,v);m.save(e);}catch(d){throw new b.StorageFullError();}}},true);b.on("domready",function(){p.body.appendChild(m);m.load(e);try{r=c.parse(m.getAttribute(k)||"{}");}catch(d){r={};}o.fire(q);});}}}else{o.fire(q);}}},"gallery-2010.12.01-21-32",{requires:["event-base","event-custom","event-custom-complex","json"]});