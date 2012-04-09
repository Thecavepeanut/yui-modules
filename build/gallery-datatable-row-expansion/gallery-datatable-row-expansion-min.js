YUI.add("gallery-datatable-row-expansion",function(g){function f(h){f.superclass.constructor.call(this,h);}f.NAME="DataTableRowExpansionPlugin";f.NS="rowexpander";f.ATTRS={template:{value:"",validator:function(h){return(g.Lang.isString(h)||g.Lang.isFunction(h));}},uniqueIdKey:{value:"",validator:g.Lang.isString}};f.column_key="row-expander";f.row_class="row-expansion";function a(j){var m=this.rowexpander;var h=j.data[m.get("uniqueIdKey")];var l=m.open_rows[h];j.td.addClass("row-toggle");j.td.replaceClass("row-(open|closed)",l?"row-open":"row-closed");j.td.on("click",function(){m.open_rows[h]=!m.open_rows[h];g.later(0,this,function(){this.syncUI();});},this);j.cell.set("innerHTML",'<a class="row-expand-nub" href="javascript:void(0);"></a>');if(l){var q="";for(var k=0;k<=m.col_count.pre;k++){q+='<td class="yui3-datatable-cell pre-row-expansion">&nbsp;</td>';}var p=m.get("template");if(g.Lang.isFunction(p)){var t=p.call(this,j.data);}else{var t=g.Lang.sub(p,j.data);}var r=j.cell.ancestor();var n=g.Lang.sub('<tr class="{c}">'+"{pre}"+'<td colspan="{post}" class="yui3-datatable-cell post-row-expansion">{tmpl}</td>'+"</tr>",{c:r.get("className")+" "+f.row_class,pre:q,post:m.col_count.post,tmpl:t});r.insert(n,"after");}}function c(){function h(i,j){if(j.key==f.column_key){j.nodeFormatter=a;i.found=true;}else{if(j.children){i=g.reduce(j.children,i,h);}else{i[i.found?"post":"pre"]++;}}return i;}this.col_count=g.reduce(this.get("host").get("columns"),{pre:0,post:0,found:false},h);}var b={above:[-1,0],below:[1,0],next:[0,1],prev:[0,-1],previous:[0,-1]};function e(l,h){var k=this.get("container"),r,p;if(l&&k){if(g.Lang.isString(h)){if(b[h]){h=b[h];}else{throw Error("unknown shift in getCell: "+h);}}if(g.Lang.isArray(l)){r=k.get("children").item(0);p=r&&r.get("children").item(l[1]);if(h){h[0]+=l[0];}else{h=[l[0],0];}}else{if(l._node){p=l.ancestor("."+this.getClassName("cell"),true);if(p.ancestor("tr."+f.row_class)){throw Error("getCell cannot be called with an element from an expansion row");}}}if(p&&h){var q=k.get("firstChild.rowIndex");if(g.Lang.isArray(h)){r=p.ancestor();var o=Math.sign(h[0]);if(o!==0){var s=k.get("children");var n=r.get("rowIndex")-q;var m=Math.abs(h[0]);for(var j=0;j<m&&r;j++){n+=o;r=s.item(n);if(r&&r.hasClass(f.row_class)){n+=o;r=s.item(n);}}}n=p.get("cellIndex")+h[1];p=r&&r.get("children").item(n);}}}return(p||null);}function d(){var h=this.get("host");if(!(h.body instanceof g.DataTable.BodyView)||h.body.getCell===e){return;}h.body.getCell=e;}g.extend(f,g.Plugin.Base,{initializer:function(h){this.open_rows={};this.on("uniqueIdKeyChange",function(){this.open_rows={};});c.call(this);this.afterHostEvent("columnsChange",c);this.afterHostEvent("renderTable",d);}});g.namespace("Plugin");g.Plugin.RowExpansion=f;},"@VERSION@",{requires:["datatable","plugin","gallery-funcprog","gallery-node-optimizations","gallery-math"]});