YUI.add("gallery-beforeunload",function(c){var b="gallery-dom0beforeunload",a=window.onbeforeunload;window.onbeforeunload=function(f){var h=f||window.event;if(a){a(h);}var d=new c.DOMEventFacade(h),g;c.fire(b,d);g=d.returnValue;if(g){h.returnValue=g;return g;}};c.Env.evt.plugins.beforeunload={on:function(f,e){var d=c.Array(arguments,0,true);d[0]=b;return c.on.apply(c,d);}};},"gallery-2012.03.28-20-16",{requires:["event-base"]});
