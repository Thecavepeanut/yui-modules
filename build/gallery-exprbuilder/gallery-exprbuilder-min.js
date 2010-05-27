YUI.add("gallery-exprbuilder",function(B){function E(K){if(arguments.length===0){return;}E.superclass.constructor.call(this,K);}E.NAME="exprbuilder";E.ATTRS={fieldId:{value:B.guid(),validator:B.Lang.isString,writeOnce:true},fieldName:{value:"",validator:B.Lang.isString,writeOnce:true},formMgr:{validator:function(K){return(!K||K instanceof B.FormManager);},writeOnce:true},queryBuilder:{validator:function(K){return(!K||K instanceof B.QueryBuilder);},writeOnce:true},parenLabel:{value:"()",validator:B.Lang.isString,writeOnce:true},andLabel:{value:"AND",validator:B.Lang.isString,writeOnce:true},orLabel:{value:"OR",validator:B.Lang.isString,writeOnce:true},notLabel:{value:"NOT",validator:B.Lang.isString,writeOnce:true},clearLabel:{value:"Clear",validator:B.Lang.isString,writeOnce:true},insertLabel:{value:"Insert",validator:B.Lang.isString,writeOnce:true},resetLabel:{value:"Reset",validator:B.Lang.isString,writeOnce:true},tooManyParensError:{value:'The expression contains an extra closing parenthesis at "{context}".',validator:B.Lang.isString},unmatchedSingleQuoteError:{value:"The expression contains an unmatched single quote.",validator:B.Lang.isString},unclosedParenError:{value:"The expression contains an unclosed parenthesis.",validator:B.Lang.isString}};function F(){this.ie_range=document.selection.createRange();}function A(O,N){N=N||O.length;this.field.focus();var L=B.Node.getDOMNode(this.field);if(L.setSelectionRange){var P=L.selectionStart;L.value=L.value.substring(0,P)+O+L.value.substring(L.selectionEnd,L.value.length);var K=P+N;L.setSelectionRange(K,K);}else{if(document.selection){if(!this.ie_range){this.ie_range=document.selection.createRange();}var M=this.ie_range.duplicate();M.text=O;this.ie_range.move("character",N);this.ie_range.select();}}}function I(K){A.call(this,"()",1);K.halt();}function J(K){return function(L){A.call(this," "+this.get(K+"Label")+" ");L.halt();};}function D(K){this.clear();K.halt();}function H(R){if(!this.qb_form.validateForm()){R.halt();return;}var O=this.get("queryBuilder");var T=O.toDatabaseQuery();if(T.length===0){var N=O.get("contentBox").one("select");this.qb_form.displayMessage(N,"Please choose a variable.","error");R.halt();return;}var L=this.get("combinatorMap");var U="";var Q=" "+this.get("andLabel")+" ";for(var P=0;P<T.length;P++){var K=T[P];if(P>0){U+=Q;}U+=K[0];var S=K[1];if(S.indexOf("{")==-1){S+="{value}";}var M=L&&L[K[1]];if(M){Q=M.op;S=M.pattern;}U+=B.Lang.substitute(S,{value:K[2].replace(/'/g,"\\'")});}A.call(this,U);O.reset();R.halt();}function G(K){this.qb_form.clearMessages();this.get("queryBuilder").reset();K.halt();}function C(L){if(L){var K=this;L.setFunction(this.get("fieldId"),function(M,N){return K._validateExpression(M,N,this);});}}B.extend(E,B.Widget,{initializer:function(K){C.call(this,K.formMgr);this.after("formMgrChange",function(L){C.call(this,L.newVal);});},renderUI:function(){var N=B.guid();var K=this.get("contentBox");K.set("innerHTML",this._field());this.field=K.one("#"+this.get("fieldId"));if(document.selection){this.field.on("change",F,this);}K.one("."+this.getClassName("paren")).on("click",I,this);var M=["and","or","not"];for(var L=0;L<M.length;L++){K.one("."+this.getClassName(M[L])).on("click",J(M[L]),this);}K.one("."+this.getClassName("clear")).on("click",D,this);var O=this.get("queryBuilder");if(O){K.appendChild(B.Node.create(this._query(N)));O.render(K.one("."+this.getClassName("querybuilder")));K.one("."+this.getClassName("insert")).on("click",H,this);K.one("."+this.getClassName("reset")).on("click",G,this);this.qb_form=new B.FormManager(N);this.qb_form.prepareForm();}},destructor:function(){var K=this.get("queryBuilder");if(K){K.destroy();}this.ie_range=null;},clear:function(){this.field.set("value","");this.field.focus();},_validateExpression:function(P,Q,K){var O=Q.get("value");var N=0;var L=false;for(var M=0;M<O.length;M++){if(!L&&O[M]=="("){N++;}else{if(!L&&O[M]==")"){N--;if(N<0){var R=B.Lang.substitute(this.get("tooManyParensError"),{context:O.substr(0,M+1)});K.displayMessage(Q,R,"error");return false;}}else{if(O[M]=="'"&&(M===0||O[M-1]!="\\")){L=!L;}}}}if(L){K.displayMessage(Q,this.get("unmatchedSingleQuoteError"),"error");return false;}else{if(N>0){K.displayMessage(Q,this.get("unclosedParenError"),"error");return false;}}return true;},_field:function(){var K='<div class="{td}">'+'<textarea id="{tid}" name="{tn}" class="{ta}"></textarea>'+"</div>"+'<div class="{fctl}">'+'<button class="{pc}">{paren}</button>'+'<button class="{ac}">{and}</button>'+'<button class="{oc}">{or}</button>'+'<button class="{nc}">{not}</button>'+'<button class="{cc}">{clear}</button>'+"</div>";return B.Lang.substitute(K,{td:this.getClassName("field-container"),ta:this.getClassName("field"),tid:this.get("fieldId"),tn:this.get("fieldName"),fctl:this.getClassName("controls"),pc:this.getClassName("paren"),ac:this.getClassName("and"),oc:this.getClassName("or"),nc:this.getClassName("not"),cc:this.getClassName("clear"),paren:this.get("parenLabel"),and:this.get("andLabel"),or:this.get("orLabel"),not:this.get("notLabel"),clear:this.get("clearLabel")});},_query:function(L){var K='<form name="{qbf}">'+'<div class="{qb}"></div>'+'<div class="{qbctl}">'+'<button class="{ic}">{insert}</button>'+'<button class="{rc}">{reset}</button>'+"</div>"+"</form>";return B.Lang.substitute(K,{qbf:L,qb:this.getClassName("querybuilder"),qbctl:this.getClassName("querybuilder-controls"),ic:this.getClassName("insert"),rc:this.getClassName("reset"),insert:this.get("insertLabel"),reset:this.get("resetLabel")});}});B.ExpressionBuilder=E;},"@VERSION@",{requires:["gallery-querybuilder","gallery-formmgr"]});