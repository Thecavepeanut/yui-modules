YUI.add("gallery-dispatcher",function(c){var j=c.ClassNameManager.getClassName,l="dispatcher",t="script",w="fetch",s="purge",e="beforeExecute",v="load",q="ready",a="error",i="uri",f="content",g="autopurge",p="loading",r="node",h="normalize",b=/<\s*body.*?>(.*?)<\/\s*?body[^>\w]*?>/i,u=/<\s*head.*?>(.*?)<\/\s*?head[^>\w]*?>/i,d=j(l,"loading"),k=c.Lang,m=k.isBoolean,n=k.isString;function x(D,y){var A=c.Node.create("<div></div>"),C=A.cloneNode(),E={},z=null,B="";if(y&&(z=u.exec(D))){A.setContent(z[1]).all(t+",style,link").each(function(F){C.append(F);});B=C.get("innerHTML");}A.setContent(B+((z=b.exec(D))?z[1]:D));E.js=A.all(t).each(function(F){F.get("parentNode").removeChild(F);});E.content=A.get("innerHTML");return E;}function o(A,y,z){if(y&&y.on&&y.on[A]){y.on[A].apply(y.context||c,z);}}c.Dispatcher=c.Base.create(l,c.Base,[],{_queue:null,_io:null,initializer:function(z){var y=this;z=z||{};y._queue=new c.AsyncQueue();y.after(f+"Change",function(A){y._dispatch(A.newVal);});y.after(i+"Change",function(A){y._fetch(A.newVal);});if(z[f]){y._dispatch(y.get(f));}if(z[i]){y._fetch(y.get(i));}},destructor:function(){var y=this;y.stop();y._queue=null;y._io=null;},_executeScript:function(D,A){var B=c.config.doc,C=(A?A.get("ownerDocument"):null)||B,z=C.one("head")||C.get("documentElement"),y=c.one(B.createElement(t));if(D){y._node.text=D;}z.appendChild(y);y.remove();if(A){A.remove();}},_getScript:function(B,z){var y=this,A=y._queue;c.Get.script(B,{autopurge:true,onFailure:function(C){y.fire(a,C);},onEnd:function(C){if(A){A.run();}}});},_setContent:function(y){var z=this.get(r);z.setContent(y);},_purgeContent:function(){var y=this.get(r);y.get("children").each(function(z){z.purge(true);});},_dispatch:function(z){var y=this,B=x(z,y.get(h)),A=y._queue,C=y.get(r);y.stop();if(!C){return;}if(y.get(g)){A.add({fn:function(){y._purgeContent();y.fire(s,C);}});}A.add({fn:function(){y._setContent(B.content);y.fire(e,C);}});B.js.each(function(D){if(D&&D.get("src")){A.add({fn:c.bind(y._getScript,y,D.get("src"),D),autoContinue:false});}else{A.add({fn:c.bind(y._executeScript,y,D._node.text,D)});}});A.add({fn:function(){y.fire(q);}});y._queue.run();},_fetch:function(B){var y=this,A=y.get("ioConfig")||{},z;y.stop();if(!B){return false;}z=c.merge({method:"GET"},A);z.on={start:function(){y._set(p,true);o("start",A,arguments);},success:function(C,D){y.set(f,D.responseText);o("success",A,arguments);},failure:function(C,D){o("failure",A,arguments);y.fire(a,D);},end:function(){y._set(p,false);o("end",A,arguments);}};z.context=y;return(y._io=c.io(B,z));},stop:function(){var y=this;y._queue.stop();if(y._io){y._io.abort();}return y;}},{EVENT_PREFIX:l,ATTRS:{node:{value:null,setter:function(y){this.stop();return c.one(y);}},autopurge:{value:true,validator:m},normalize:{value:false,validator:m},uri:{value:null,validator:function(y){return(y&&n(y)&&(y!==""));}},content:{value:"",validator:n},loading:{value:false,validator:m,readOnly:true,setter:function(z){var y=this;if(z){y.fire(w);y.get(r).addClass(d);}else{y.fire(v);y.get(r).removeClass(d);}return z;}},ioConfig:{value:null}}});},"gallery-2011.05.12-13-26",{requires:["base","node-base","io-base","get","async-queue","classnamemanager"]});