YUI.add("gallery-simple-accordion",function(a){YUI.add("gallery-simple-accordion",function(c){function b(d){b.superclass.constructor.apply(this,arguments);}b.NAME="simple-accordion";b.ATTRS={};c.extend(b,c.Base,{config:null,_ACCORDION_ITEM:".accordion-item",_ACCORDION_ITEM_LINK:".accordion-item-link",_ACCORDION_ITEM_CONTENT:".accordion-item-content",_HIDE:"hide",_SHOW:"show",_SELECTED:"selected",initializer:function(d){this.config=d;this._initializesItemClicked();},_initializesItemClicked:function(){var d=this.config;var e=this;if(e.hasItems()){d.mainNode.delegate("click",function(h){h.preventDefault();e._deselectAllItems();var f=h.target.get("parentNode");var g=f.one(e._ACCORDION_ITEM_CONTENT);f.addClass(e._SELECTED);if(g){g.removeClass(e._HIDE);g.addClass(e._SHOW);}console.info("event clicked");},e._ACCORDION_ITEM_LINK);}},_deselectAllItems:function(){var d=this.config;d.mainNode.all(this._ACCORDION_ITEM).removeClass(this._SELECTED);d.mainNode.all(this._ACCORDION_ITEM_CONTENT).removeClass(this._SHOW);d.mainNode.all(this._ACCORDION_ITEM_CONTENT).addClass(this._HIDE);},hasItems:function(){var d=this.config;return d.mainNode&&d.mainNode.all(this._ACCORDION_ITEM_LINK).size()>0;},destructor:function(){}});c.SimpleAccordion=b;},"0.0.1",{requires:["base","node","node-event-delegate"]});},"gallery-2012.09.19-20-07",{requires:["base","node","node-event-delegate"],skinnable:true});