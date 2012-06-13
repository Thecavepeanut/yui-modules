YUI.add("gallery-neon",function(e){function b(f){b.superclass.constructor.call(this,f);}b.NAME="NeonPlugin";b.NS="neon";b.ATTRS={backgroundColor:{validator:e.Lang.isString},textColor:{validator:e.Lang.isString},textShadow:{validator:e.Lang.isString},flickerCount:{value:10,validator:e.Lang.isNumber},easing:{value:e.Easing.easeIn,validator:e.Lang.isFunction}};function c(){e.later(Math.round(Math.random()*1000/(this.flicker_max-this.flicker_count)),this,d);this.node.setStyle("display","none");}function d(){this.flicker_count--;if(this.flicker_count>0){var g=this.get("easing");var f={r:g(this.flicker_count,parseInt(this.end_color[1],10),this.start_color[1]-this.end_color[1],this.flicker_max),g:g(this.flicker_count,parseInt(this.end_color[2],10),this.start_color[2]-this.end_color[2],this.flicker_max),b:g(this.flicker_count,parseInt(this.end_color[3],10),this.start_color[3]-this.end_color[3],this.flicker_max)};e.later(Math.round(Math.random()*1000/this.flicker_count),this,c);}else{var f={r:this.end_color[1],g:this.end_color[2],b:this.end_color[3]};}f="rgb("+Math.round(f.r)+","+Math.round(f.g)+","+Math.round(f.b)+")";this.node.setStyle("color",f);var h=this.get("textShadow");if(h){this.node.setStyle("textShadow",e.Lang.sub(h,{color:e.Color.toHex(f)}));}this.node.setStyle("display","");if(this.flicker_count===0){this.node.fire("neon:finished");}}function a(){if(!this._isHidden()){return;}var f=this.neon;f.node=this;f.flicker_max=Math.max(0,f.get("flickerCount"));f.flicker_count=f.flicker_max;f.start_color=e.Color.re_RGB.exec(e.Color.toRGB(f.get("backgroundColor")));f.end_color=e.Color.re_RGB.exec(e.Color.toRGB(f.get("textColor")));d.call(f);}e.extend(b,e.Plugin.Base,{initializer:function(f){var g=this.get("host");this.orig_show=g.show;g.show=a;},destructor:function(){this.get("host").show=this.orig_show;}});e.namespace("Plugin");e.Plugin.Neon=b;},"@VERSION@",{requires:["node-style","node-pluginhost","anim-easing","plugin"]});