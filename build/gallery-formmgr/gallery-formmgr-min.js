YUI.add("gallery-formmgr",function(D){function J(N,M){M=M||{};J.superclass.constructor.call(this,M);this.form_name=N;this.status_node=D.one(M.status_node);this.enabled=true;this.default_value_map=M.default_value_map;this.validation={fn:{},regex:{}};this.validation_msgs={};this.has_messages=false;this.has_errors=false;this.button_list=[];this.user_button_list=[];this.has_file_inputs=false;}var E="(?:^|\\s)(?:";var H=")(?:\\s|$)";J.row_marker_class="formmgr-row";J.field_marker_class="formmgr-field";J.status_marker_class="formmgr-message-text";J.status_none_class="formmgr-status-hidden";J.status_success_class="formmgr-status-success";J.status_failure_class="formmgr-status-failure";J.row_status_prefix="formmgr-has";var G;var L;var K;function B(){if(!G){G=J.status_success_class+"|"+J.status_failure_class;}return G;}function C(){if(!L){L=J.row_status_prefix+"([^\\s]+)";}return L;}function A(){if(!K){K=new RegExp(E+C()+H);}return K;}J.status_order=["error","warn","success","info"];J.getStatusPrecedence=function(M){for(var N=0;N<J.status_order.length;N++){if(M==J.status_order[N]){return N;}}return J.status_order.length;};J.statusTakesPrecedence=function(N,M){return(!N||J.getStatusPrecedence(M)<J.getStatusPrecedence(N));};J.getElementStatus=function(N){var M=D.one(N).get("className").match(A());return(M&&M.length>1?M[1]:false);};function F(M){if(D.Lang.isString(M)){return M.replace(/^#/,"");}else{if(M instanceof D.Node){return M.get("id");}else{return M.id;}}}J.cleanValues=function(Q){var P=false;for(var N=0;N<Q.length;N++){var M=Q[N];var O=M.type&&M.type.toLowerCase();if(O=="file"){P=true;}else{if(O=="select-multiple"){}else{if(M.value&&!D.DOM.hasClass(M,"yiv-no-trim")){M.value=D.Lang.trim(M.value);}}}}return P;};function I(){var Q=(this.button_list.length===0);for(var P=0;P<this.form.elements.length;P++){var T=this.form.elements[P];var O=T.tagName.toLowerCase();var R=(T.type?T.type.toLowerCase():null);if(Q&&(R=="submit"||R=="reset"||O=="button")){this.button_list.push(T);}if(!T.name){continue;}var M=this.default_value_map[T.name];if(O=="input"&&R=="file"){T.value="";}else{if(D.Lang.isUndefined(M)){if(O=="input"&&(R=="password"||R=="text")){this.default_value_map[T.name]=T.value;}else{if(O=="input"&&R=="checkbox"){this.default_value_map[T.name]=(T.checked?T.value:"");}else{if(O=="input"&&R=="radio"){var S=this.form[T.name];if(S&&!S.length){this.default_value_map[T.name]=S.value;}else{if(S){this.default_value_map[T.name]=S[0].value;for(var N=0;N<S.length;N++){if(S[N].checked){this.default_value_map[T.name]=S[N].value;break;}}}}}else{if((O=="select"&&R=="select-one")||O=="textarea"){this.default_value_map[T.name]=T.value;}}}}}else{if(O=="input"&&(R=="password"||R=="text")){T.value=M;}else{if(O=="input"&&(R=="checkbox"||R=="radio")){T.checked=(T.value==M);}else{if(O=="select"&&R=="select-one"){T.value=M;if(T.selectedIndex>=0&&T.options[T.selectedIndex].value!==M.toString()){T.selectedIndex=-1;}}else{if(O=="textarea"){T.value=M;}}}}}}}}J.clearMessage=function(N){var M=D.one(N).getAncestorByClassName(D.FormManager.row_marker_class);if(M&&M.hasClass(C())){M.all("."+D.FormManager.status_marker_class).set("innerHTML","");M.removeClass(C());M.all("."+D.FormManager.field_marker_class).removeClass(C());}};J.displayMessage=function(R,N,T,O,U){if(D.Lang.isUndefined(U)){U=true;}R=D.one(R);var M=R.getAncestorByClassName(J.row_marker_class);if(M&&J.statusTakesPrecedence(J.getElementStatus(M),T)){var Q=M.all("."+J.field_marker_class);if(Q){Q.removeClass(C());}if(N){M.one("."+J.status_marker_class).set("innerHTML",N);}var P=J.row_status_prefix+T;M.replaceClass(C(),P);Q=R.getAncestorByClassName(J.field_marker_class,true);if(Q){Q.replaceClass(C(),P);}var V=R.getAncestorByTagName("fieldset");if(V&&J.statusTakesPrecedence(J.getElementStatus(V),T)){V.removeClass(C());V.addClass(J.row_status_prefix+T);}if(!O&&U){M.scrollIntoView();try{R.focus();}catch(S){}}return true;}return false;};D.extend(J,D.Plugin.Host,{getForm:function(){if(!this.form){this.form=D.config.doc.forms[this.form_name];}return this.form;},hasFileInputs:function(){return this.has_file_inputs;},setStatusNode:function(M){this.status_node=D.one(M);},setDefaultValues:function(M){this.default_value_map=M;},setDefaultValue:function(N,M){this.default_value_map[N]=M;},saveCurrentValuesAsDefault:function(){this.default_value_map={};this.button_list=[];I.call(this);},setFunction:function(N,M){this.validation.fn[F(N)]=M;},setRegex:function(O,N,M){O=F(O);if(D.Lang.isString(N)){this.validation.regex[O]=new RegExp(N,M);}else{this.validation.regex[O]=N;}if(!this.validation_msgs[O]||!this.validation_msgs[O].regex){D.error(D.substitute("No error message provided for regex validation of {id}!",{id:O}),null,"FormManager");}},setErrorMessages:function(N,M){this.validation_msgs[F(N)]=M;},addErrorMessage:function(O,M,N){O=F(O);if(!this.validation_msgs[O]){this.validation_msgs[O]={};}this.validation_msgs[O][M]=N;},clearForm:function(){this.clearMessages();this.form.reset();this.postPopulateForm();},populateForm:function(){if(!this.default_value_map){this.default_value_map={};}this.clearMessages();I.call(this);this.postPopulateForm();},postPopulateForm:function(){},isChanged:function(){for(var O=0;O<this.form.elements.length;O++){var R=this.form.elements[O];if(!R.name){continue;}var P=(R.type?R.type.toLowerCase():null);var N=R.tagName.toLowerCase();var M=this.default_value_map[R.name];if(M===null||typeof M==="undefined"){M="";}if(N=="input"&&P=="file"){if(R.value){return true;}}else{if(N=="input"&&(P=="password"||P=="text"||P=="file")){if(R.value!=M){return true;}}else{if(N=="input"&&(P=="checkbox"||P=="radio")){var Q=(R.value==M);if((Q&&!R.checked)||(!Q&&R.checked)){return true;}}else{if((N=="select"&&P=="select-one")||N=="textarea"){if(R.value!=M){return true;}}}}}}return false;},prepareForm:function(){this.getForm();if(!this.prePrepareForm.apply(this,arguments)){return false;}this.populateForm();return this.postPrepareForm.apply(this,arguments);},prePrepareForm:function(){return true;
},postPrepareForm:function(){return true;},initFocus:function(){for(var O=0;O<this.form.elements.length;O++){var Q=this.form.elements[O];if(Q.disabled||Q.offsetHeight===0){continue;}var M=Q.tagName.toLowerCase();var P=(Q.type?Q.type.toLowerCase():null);if((M=="input"&&(P=="file"||P=="password"||P=="text"))||M=="textarea"){try{Q.focus();}catch(N){}Q.select();break;}}},validateForm:function(){this.clearMessages();var N=true;var S=this.form.elements;this.has_file_inputs=J.cleanValues(S);for(var O=0;O<S.length;O++){var T=S[O].id;var M=this.validation_msgs[T];var R=J.validateFromCSSData(S[O],M);if(R.error){this.displayMessage(S[O],R.error,"error");N=false;continue;}if(R.keepGoing){if(this.validation.regex[T]&&!this.validation.regex[T].test(S[O].value)){this.displayMessage(S[O],M?M.regex:null,"error");N=false;continue;}}var Q=this.validation.fn[T];var P=this;if(D.Lang.isFunction(Q)){}else{if(D.Lang.isString(Q)){Q=P[Q];}else{if(Q&&Q.scope){P=Q.scope;Q=(D.Lang.isString(Q.fn)?P[Q.fn]:Q.fn);}else{Q=null;}}}if(Q&&!Q.call(P,this.form,D.one(S[O]))){N=false;continue;}}if(!this.postValidateForm(this.form)){N=false;}if(!N){this.notifyErrors();}return N;},postValidateForm:function(M){return true;},registerButton:function(M){var N={e:D.Lang.isString(M)||M.tagName?D.one(M):M};this.user_button_list.push(N);},isFormEnabled:function(){return this.enabled;},enableForm:function(){this.setFormEnabled(true);},disableForm:function(){this.setFormEnabled(false);},setFormEnabled:function(M){this.enabled=M;var O=!M;for(var N=0;N<this.button_list.length;N++){this.button_list[N].disabled=O;}for(N=0;N<this.user_button_list.length;N++){var P=this.user_button_list[N];P.e.set("disabled",O);}},hasMessages:function(){return this.has_messages;},hasErrors:function(){return this.has_errors;},getRowStatus:function(N){var M=D.one(N).getAncestorByClassName(J.row_marker_class,true);return J.getElementStatus(M);},clearMessages:function(){this.has_messages=false;this.has_errors=false;if(this.status_node){this.status_node.set("innerHTML","");this.status_node.replaceClass(B(),J.status_none_class);}D.Array.each(this.form.elements,function(O){var M=O.tagName.toLowerCase();var N=(O.type?O.type.toLowerCase():null);if(M!="button"&&N!="submit"&&N!="reset"){J.clearMessage(O);}});D.one(this.form).all("fieldset").removeClass(C());},displayMessage:function(O,P,N,M){if(J.displayMessage(O,P,N,this.has_messages,M)){this.has_messages=true;if(N=="error"){this.has_errors=true;}return true;}else{return false;}},notifyErrors:function(){this.displayFormMessage(J.Strings.validation_error,true,false);},displayFormMessage:function(O,N,M){if(D.Lang.isUndefined(M)){M=true;}if(this.status_node){if(!this.status_node.innerHTML){this.status_node.replaceClass(J.status_none_class,(N?J.status_failure_class:J.status_success_class));this.status_node.set("innerHTML",O);}if(M){this.status_node.scrollIntoView();}}else{}}});D.aggregate(J,D.FormManager);D.FormManager=J;},"@VERSION@",{optional:["gallery-scrollintoview"],requires:["pluginhost-base","gallery-node-optimizations","gallery-formmgr-css-validation"]});