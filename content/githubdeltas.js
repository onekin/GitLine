// ==UserScript==
// @name           GitHub Deltas
// @namespace      letiiiii
// @include        https://github.com/*
// @description    My description
// ==/UserScript== */
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/

///funciones de JQuery

(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
/**/
jQuery.noConflict();


///funciones de MERGE DE GWT

var $gwt_version = "2.5.1";
var $wnd = parent;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $strongName = 'F7B622D85436A24B806B0E12258C8979';
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null,
$sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
$stats && $stats({moduleName:'githubmerge',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});

var _, seedTable = {}, Q$Object = 0, Q$String = 1, Q$JavaScriptException = 2, Q$LongLibBase$LongEmul = 3, Q$Document = 4, Q$Element = 5, Q$DOMItem = 6, Q$Serializable = 7, Q$CharSequence = 8, Q$Comparable = 9, Q$Exception = 10, Q$StackTraceElement = 11, Q$Throwable = 12, Q$ArrayList = 13, Q$List = 14, Q$State = 15, Q$Transition = 16, CM$ = {};
function newSeed(id){
  return new seedTable[id];
}

function defineSeed(id, superSeed, castableTypeMap){
  var seed = seedTable[id];
  if (seed && !seed.___clazz$) {
    _ = seed.prototype;
  }
   else {
    !seed && (seed = seedTable[id] = function(){
    }
    );
    _ = seed.prototype = superSeed < 0?{}:newSeed(superSeed);
    _.castableTypeMap$ = castableTypeMap;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  if (seed.___clazz$) {
    _.___clazz$ = seed.___clazz$;
    seed.___clazz$ = null;
  }
}

function makeCastMap(a){
  var result = {};
  for (var i = 0, c = a.length; i < c; ++i) {
    result[a[i]] = 1;
  }
  return result;
}

function nullMethod(){
}

defineSeed(1, -1, CM$);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return this.___clazz$.typeName + '@' + toPowerOfTwoString(this.hashCode$());
}
;
_.toString = function(){
  return this.toString$();
}
;
_.typeMarker$ = nullMethod;
function $initCause(this$static, cause){
  if (this$static.cause) {
    throw new IllegalStateException_0;
  }
  if (cause == this$static) {
    throw new IllegalArgumentException_0;
  }
  this$static.cause = cause;
  return this$static;
}

function $printStackTrace(this$static){
  var causeMessage, currentCause, msg;
  msg = new StringBuffer_0;
  currentCause = this$static;
  while (currentCause) {
    causeMessage = currentCause.getMessage();
    currentCause != this$static && ($append(msg.data_0, 'Caused by: ') , msg);
    $append_0(msg, currentCause.___clazz$.typeName);
    $append(msg.data_0, ': ');
    $append(msg.data_0, causeMessage == null?'(No exception detail)':causeMessage);
    $append(msg.data_0, '\n');
    currentCause = currentCause.cause;
  }
 
}

function $setStackTrace(stackTrace){
  var c, copy, i;
  copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (!stackTrace[i]) {
      throw new NullPointerException_0;
    }
    copy[i] = stackTrace[i];
  }
}

defineSeed(8, 1, makeCastMap([Q$Serializable, Q$Throwable]));
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  var className, msg;
  className = this.___clazz$.typeName;
  msg = this.getMessage();
  return msg != null?className + ': ' + msg:className;
}
;
_.cause = null;
_.detailMessage = null;
defineSeed(7, 8, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]));
function RuntimeException_0(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

defineSeed(6, 7, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]));
function JavaScriptException_0(e){
  $fillInStackTrace();
  this.e = e;
  this.description = '';
  $createStackTrace(this);
}

function getExceptionDescription(e){
  return instanceOfJso(e)?getExceptionDescription0(dynamicCastJso(e)):e + '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName(e){
  var maybeJsoInvocation;
  return e == null?'null':instanceOfJso(e)?getExceptionName0(dynamicCastJso(e)):instanceOf(e, Q$String)?'String':(maybeJsoInvocation = e , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

function getExceptionProperties(e){
  return instanceOfJso(e)?$getProperties(dynamicCastJso(e)):'';
}

defineSeed(5, 6, makeCastMap([Q$JavaScriptException, Q$Serializable, Q$Exception, Q$Throwable]), JavaScriptException_0);
_.getMessage = function getMessage_0(){
  this.message_0 == null && (this.name_0 = getExceptionName(this.e) , this.description = this.description + ': ' + getExceptionDescription(this.e) , this.message_0 = '(' + this.name_0 + ') ' + getExceptionProperties(this.e) + this.description , undefined);
  return this.message_0;
}
;
_.description = '';
_.e = null;
_.message_0 = null;
_.name_0 = null;
defineSeed(12, 1, {});
function apply(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now;
  if (entryDepth != 0) {
    now = (new Date).getTime();
    if (now - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now;
      watchdogEntryDepthTimerId = watchdogEntryDepthSchedule();
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry(jsFunction){
  return function(){
    try {
      return entry0(jsFunction, this, arguments);
    }
     catch (e) {
      throw e;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthSchedule(){
  return $wnd.setTimeout(function(){
    entryDepth != 0 && (entryDepth = 0);
    watchdogEntryDepthTimerId = -1;
  }
  , 10);
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = nullMethod;
  INSTANCE = new SchedulerImpl_0;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl_0(){
}

function push(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var i, j, t;
  for (i = 0 , j = tasks.length; i < j; ++i) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push(rescheduled, t)):t[0].nullMethod();
    }
     catch ($e0) {
      $e0 = caught($e0);
      if (!instanceOf($e0, Q$Throwable))
        throw $e0;
    }
  }
  return rescheduled;
}

defineSeed(14, 12, {}, SchedulerImpl_0);
_.entryCommands = null;
_.finallyCommands = null;
var INSTANCE;
function extractNameFromToString(fnToString){
  var index, start, toReturn;
  toReturn = '';
  fnToString = $trim(fnToString);
  index = fnToString.indexOf('(');
  start = fnToString.indexOf('function') == 0?8:0;
  if (index == -1) {
    index = $indexOf(fnToString, String.fromCharCode(64));
    start = fnToString.indexOf('function ') == 0?9:0;
  }
  index != -1 && (toReturn = $trim(fnToString.substr(start, index - start)));
  return toReturn.length > 0?toReturn:'anonymous';
}

function $collect(this$static){
  var seen = {};
  var toReturn = [];
  var callee = arguments.callee.caller.caller;
  while (callee) {
    var name_0 = this$static.extractName(callee.toString());
    toReturn.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return toReturn;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
  return toReturn;
}

function $createStackTrace(e){
  var i, j, stack, stackTrace;
  stack = (instanceOfJso(e.e)?dynamicCastJso(e.e):null , []);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new StackTraceElement_0(stack[i]);
  }
  $setStackTrace(stackTrace);
}

function $fillInStackTrace(){
  var i, j, stack, stackTrace;
  stack = $collect(new StackTraceCreator$Collector_0);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new StackTraceElement_0(stack[i]);
  }
  $setStackTrace(stackTrace);
}

function $getProperties(e){
  var result = '';
  try {
    for (var prop in e) {
      if (prop != 'name' && prop != 'message' && prop != 'toString') {
        try {
          result += '\n ' + prop + ': ' + e[prop];
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

function StackTraceCreator$Collector_0(){
}

defineSeed(17, 1, {}, StackTraceCreator$Collector_0);
_.extractName = function extractName(fnToString){
  return extractNameFromToString(fnToString);
}
;
function $append(a, x){
  a[a.explicitLength++] = x == null?'null':x;
}

function $toString(a){
  var s, s_0;
  s = (s_0 = a.join('') , a.length = a.explicitLength = 0 , s_0);
  a[a.explicitLength++] = s;
  return s;
}

function Array_0(){
}

function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType == 3) {
    for (var i = 0; i < length_0; ++i) {
      var value = new Object;
      value.l = value.m = value.h = 0;
      array[i] = value;
    }
  }
   else if (seedType > 0) {
    var value = [null, 0, false][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function initDim(arrayClass, castableTypeMap, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  initValues(arrayClass, castableTypeMap, queryId, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, queryId, array){
  $clinit_Array$ExpandoWrapper();
  wrapArray(array, expandoNames_0, expandoValues_0);
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.queryId$ = queryId;
  return array;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value, array.queryId$)) {
      throw new ArrayStoreException_0;
    }
     else if (array.queryId$ == -1 && (value.typeMarker$ == nullMethod || canCast(value, 1))) {
      throw new ArrayStoreException_0;
    }
     else if (array.queryId$ < -1 && !(value.typeMarker$ != nullMethod && !canCast(value, 1)) && !canCastUnsafe(value, -array.queryId$)) {
      throw new ArrayStoreException_0;
    }
  }
  return array[index] = value;
}

defineSeed(22, 1, {}, Array_0);
_.queryId$ = 0;
function $clinit_Array$ExpandoWrapper(){
  $clinit_Array$ExpandoWrapper = nullMethod;
  expandoNames_0 = [];
  expandoValues_0 = [];
  initExpandos(new Array_0, expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function wrapArray(array, expandoNames, expandoValues){
  $clinit_Array$ExpandoWrapper();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCast(src, dstId){
  return src.castableTypeMap$ && !!src.castableTypeMap$[dstId];
}

function canCastUnsafe(src, dstId){
  return src.castableTypeMap$ && src.castableTypeMap$[dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !canCastUnsafe(src, dstId)) {
    throw new ClassCastException_0;
  }
  return src;
}

function dynamicCastJso(src){
  if (src != null && (src.typeMarker$ == nullMethod || canCast(src, 1))) {
    throw new ClassCastException_0;
  }
  return src;
}

function instanceOf(src, dstId){
  return src != null && canCast(src, dstId);
}

function instanceOfJso(src){
  return src != null && src.typeMarker$ != nullMethod && !canCast(src, 1);
}

function isJavaObject(src){
  return src.typeMarker$ == nullMethod || canCast(src, 1);
}

function init(){
  var runtimeValue;
  !!$stats && onModuleStart('com.google.gwt.useragent.client.UserAgentAsserter');
  runtimeValue = $getRuntimeValue();
  $equals('ie6', runtimeValue) || ($wnd.alert('ERROR: Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie6) does not match the runtime user.agent value (' + runtimeValue + '). Expect more errors.\n') , undefined);
  !!$stats && onModuleStart('com.google.gwt.user.client.DocumentModeAsserter');
  $onModuleLoad();
  !!$stats && onModuleStart('merge.client.GitHubMerge');
  $wnd.formatAsCurrency = formatAsCurrency;
}

function caught(e){
  if (instanceOf(e, Q$Throwable)) {
    return e;
  }
  return new JavaScriptException_0(e);
}

function onModuleStart(mainClassName){
  return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:mainClassName});
}

function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable]), Q$String, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; ++i) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current doucment rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom 'document.compatMode' configuration property settings.";
}

function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var makeVersion = function(result){
    return parseInt(result[1]) * 1000 + parseInt(result[2]);
  }
  ;
  if (function(){
    return ua.indexOf('opera') != -1;
  }
  ())
    return 'opera';
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 9;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 8;
  }
  ())
    return 'ie8';
  if (function(){
    var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
    if (result && result.length == 3)
      return makeVersion(result) >= 6000;
  }
  ())
    return 'ie6';
  if (function(){
    return ua.indexOf('gecko') != -1;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function DOMException_1(message){
  RuntimeException_0.call(this, message);
}

defineSeed(34, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]));
function $clinit_XMLParser(){
  $clinit_XMLParser = nullMethod;
  impl = ($clinit_XMLParserImpl() , $clinit_XMLParserImpl() , impl_0);
}

function parse(contents){
  $clinit_XMLParser();
  return $parse(impl, contents);
}

var impl;
defineSeed(38, 1, makeCastMap([Q$DOMItem]));
_.equals$ = function equals_0(o){
  if (instanceOf(o, Q$DOMItem)) {
    return this.jsObject == dynamicCast(o, Q$DOMItem).jsObject;
  }
  return false;
}
;
_.getJsObject = function getJsObject(){
  return this.jsObject;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this.jsObject);
}
;
_.jsObject = null;
function $replaceChild(this$static, newChild, oldChild){
  var e, newChildJs, oldChildJs, replaceChildResults;
  try {
    newChildJs = newChild.jsObject;
    oldChildJs = oldChild.jsObject;
    replaceChildResults = replaceChild(this$static.jsObject, newChildJs, oldChildJs);
    return build(replaceChildResults);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, Q$JavaScriptException)) {
      e = $e0;
      throw new DOMNodeException_0(e, this$static);
    }
     else 
      throw $e0;
  }
}

function NodeImpl_0(jso){
  this.jsObject = jso;
}

function build(node){
  var nodeType;
  if (!node) {
    return null;
  }
  nodeType = getNodeType(node);
  switch (nodeType) {
    case 2:
      return new AttrImpl_0(node);
    case 4:
      return new CDATASectionImpl_0(node);
    case 8:
      return new CommentImpl_0(node);
    case 11:
      return new DocumentFragmentImpl_0(node);
    case 9:
      return new DocumentImpl_0(node);
    case 1:
      return new ElementImpl_0(node);
    case 7:
      return new ProcessingInstructionImpl_0(node);
    case 3:
      return new TextImpl_0(node);
    default:return new NodeImpl_0(node);
  }
}

defineSeed(37, 38, makeCastMap([Q$DOMItem]), NodeImpl_0);
_.toString$ = function toString_2(){
  return $clinit_XMLParserImpl() , $toStringImpl(this);
}
;
function AttrImpl_0(o){
  this.jsObject = o;
}

defineSeed(36, 37, makeCastMap([Q$DOMItem]), AttrImpl_0);
defineSeed(41, 37, makeCastMap([Q$DOMItem]));
function TextImpl_0(o){
  this.jsObject = o;
}

defineSeed(40, 41, makeCastMap([Q$DOMItem]), TextImpl_0);
_.toString$ = function toString_3(){
  var b, i, x;
  b = new StringBuffer_0;
  x = $split(getData(this.jsObject), '(?=[;&<>\'"])', -1);
  for (i = 0; i < x.length; ++i) {
    if (x[i].indexOf(';') == 0) {
      $append(b.data_0, '&semi;');
      $append_0(b, $substring(x[i], 1));
    }
     else if (x[i].indexOf('&') == 0) {
      $append(b.data_0, '&amp;');
      $append_0(b, $substring(x[i], 1));
    }
     else if (x[i].indexOf('"') == 0) {
      $append(b.data_0, '&quot;');
      $append_0(b, $substring(x[i], 1));
    }
     else if (x[i].indexOf("'") == 0) {
      $append(b.data_0, '&apos;');
      $append_0(b, $substring(x[i], 1));
    }
     else if (x[i].indexOf('<') == 0) {
      $append(b.data_0, '&lt;');
      $append_0(b, $substring(x[i], 1));
    }
     else if (x[i].indexOf('>') == 0) {
      $append(b.data_0, '&gt;');
      $append_0(b, $substring(x[i], 1));
    }
     else {
      $append(b.data_0, x[i]);
    }
  }
  return $toString(b.data_0);
}
;
function CDATASectionImpl_0(o){
  this.jsObject = o;
}

defineSeed(39, 40, makeCastMap([Q$DOMItem]), CDATASectionImpl_0);
_.toString$ = function toString_4(){
  var b;
  b = new StringBuffer_1('<![CDATA[');
  $append_0(b, getData(this.jsObject));
  $append(b.data_0, ']]>');
  return $toString(b.data_0);
}
;
function CommentImpl_0(o){
  this.jsObject = o;
}

defineSeed(42, 41, makeCastMap([Q$DOMItem]), CommentImpl_0);
_.toString$ = function toString_5(){
  var b;
  b = new StringBuffer_1('<!--');
  $append_0(b, getData(this.jsObject));
  $append(b.data_0, '-->');
  return $toString(b.data_0);
}
;
function DOMNodeException_0(e, item){
  DOMException_1.call(this, 'Error during DOM manipulation of: ' + summarize(item.toString$()));
  $initCause(this, e);
}

defineSeed(43, 34, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), DOMNodeException_0);
function DOMParseException_0(contents, e){
  DOMException_1.call(this, 'Failed to parse: ' + $substring_0(contents, 0, min(contents.length)));
  $initCause(this, e);
}

function summarize(text){
  return $substring_0(text, 0, min(text.length));
}

defineSeed(44, 34, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), DOMParseException_0);
function DocumentFragmentImpl_0(o){
  this.jsObject = o;
}

defineSeed(45, 37, makeCastMap([Q$DOMItem]), DocumentFragmentImpl_0);
function $getElementsByTagName(this$static, tagName){
  return new NodeListImpl_0(($clinit_XMLParserImpl() , $getElementsByTagNameImpl(this$static.jsObject, tagName)));
}

function DocumentImpl_0(o){
  this.jsObject = o;
}

defineSeed(46, 37, makeCastMap([Q$Document, Q$DOMItem]), DocumentImpl_0);
function $setAttribute(this$static, value){
  var e;
  try {
    setAttribute(this$static.jsObject, 'element', value);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, Q$JavaScriptException)) {
      e = $e0;
      throw new DOMNodeException_0(e, this$static);
    }
     else 
      throw $e0;
  }
}

function ElementImpl_0(o){
  this.jsObject = o;
}

defineSeed(47, 37, makeCastMap([Q$Element, Q$DOMItem]), ElementImpl_0);
function NodeListImpl_0(o){
  this.jsObject = o;
}

defineSeed(48, 38, makeCastMap([Q$DOMItem]), NodeListImpl_0);
_.toString$ = function toString_6(){
  var b, i;
  b = new StringBuffer_0;
  for (i = 0; i < getLength(this.jsObject); ++i) {
    $append_0(b, build(item_0(this.jsObject, i)).toString$());
  }
  return $toString(b.data_0);
}
;
function ProcessingInstructionImpl_0(o){
  this.jsObject = o;
}

defineSeed(49, 37, makeCastMap([Q$DOMItem]), ProcessingInstructionImpl_0);
_.toString$ = function toString_7(){
  return $clinit_XMLParserImpl() , $toStringImpl(this);
}
;
function $clinit_XMLParserImpl(){
  $clinit_XMLParserImpl = nullMethod;
  impl_0 = new XMLParserImplIE6_0;
}

function $parse(this$static, contents){
  var e;
  try {
    return dynamicCast(build($parseImpl(this$static, contents)), Q$Document);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, Q$JavaScriptException)) {
      e = $e0;
      throw new DOMParseException_0(contents, e);
    }
     else 
      throw $e0;
  }
}

function getAttribute(o, name_0){
  $clinit_XMLParserImpl();
  return o.getAttribute(name_0);
}

function getChildNodes(t){
  $clinit_XMLParserImpl();
  return t.childNodes;
}

function getData(o){
  $clinit_XMLParserImpl();
  return o.data;
}

function getLength(o){
  $clinit_XMLParserImpl();
  return o.length;
}

function getNodeType(jsObject){
  $clinit_XMLParserImpl();
  var out = jsObject.nodeType;
  return out == null?-1:out;
}

function getNodeValue(o){
  $clinit_XMLParserImpl();
  return o.nodeValue;
}

function getParentNode(o){
  $clinit_XMLParserImpl();
  return o.parentNode;
}

function item_0(t, index){
  $clinit_XMLParserImpl();
  if (index >= t.length) {
    return null;
  }
  return t.item(index);
}

function replaceChild(jsObject, newChildJs, oldChildJs){
  $clinit_XMLParserImpl();
  return jsObject.replaceChild(newChildJs, oldChildJs);
}

function setAttribute(jsObject, name_0, value){
  $clinit_XMLParserImpl();
  jsObject.setAttribute(name_0, value);
}

defineSeed(50, 1, {});
var impl_0;
function $getElementsByTagNameImpl(o, tagName){
  return o.selectNodes(".//*[local-name()='" + tagName + "']");
}

function $parseImpl(this$static, contents){
  var doc = this$static.createDocumentImpl();
  if (!doc.loadXML(contents)) {
    var err = doc.parseError;
    throw new Error('line ' + err.line + ', char ' + err.linepos + ':' + err.reason);
  }
   else {
    return doc;
  }
}

function $toStringImpl(node){
  var jsNode = node.getJsObject();
  return jsNode.xml;
}

function XMLParserImplIE6_0(){
}

function selectDOMDocumentVersion(){
  try {
    return new ActiveXObject('Msxml2.DOMDocument');
  }
   catch (e) {
  }
  try {
    return new ActiveXObject('MSXML.DOMDocument');
  }
   catch (e) {
  }
  try {
    return new ActiveXObject('MSXML3.DOMDocument');
  }
   catch (e) {
  }
  try {
    return new ActiveXObject('Microsoft.XmlDom');
  }
   catch (e) {
  }
  try {
    return new ActiveXObject('Microsoft.DOMDocument');
  }
   catch (e) {
  }
  throw new Error('XMLParserImplIE6.createDocumentImpl: Could not find appropriate version of DOMDocument.');
}

defineSeed(51, 50, {}, XMLParserImplIE6_0);
_.createDocumentImpl = function createDocumentImpl(){
  var doc = selectDOMDocumentVersion();
  doc.preserveWhiteSpace = true;
  doc.setProperty('SelectionNamespaces', "xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");
  doc.setProperty('SelectionLanguage', 'XPath');
  return doc;
}
;
function ArrayStoreException_0(){
  $fillInStackTrace();
}

defineSeed(52, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), ArrayStoreException_0);
function Class_0(){
}

function createForArray(packageName, className, seedId){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = packageName + className;
  isInstantiable(seedId != 0?-seedId:0) && setClassLiteral(seedId != 0?-seedId:0, clazz);
  clazz.modifiers = 4;
  return clazz;
}

function createForClass(packageName, className, seedId){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = packageName + className;
  isInstantiable(seedId) && setClassLiteral(seedId, clazz);
  return clazz;
}

function getSeedFunction(clazz){
  var func = seedTable[clazz.seedId];
  clazz = null;
  return func;
}

function isInstantiable(seedId){
  return typeof seedId == 'number' && seedId > 0;
}

function setClassLiteral(seedId, clazz){
  var proto;
  clazz.seedId = seedId;
  if (seedId == 2) {
    proto = String.prototype;
  }
   else {
    if (seedId > 0) {
      var seed = getSeedFunction(clazz);
      if (seed) {
        proto = seed.prototype;
      }
       else {
        seed = seedTable[seedId] = function(){
        }
        ;
        seed.___clazz$ = clazz;
        return;
      }
    }
     else {
      return;
    }
  }
  proto.___clazz$ = clazz;
}

defineSeed(53, 1, {}, Class_0);
_.toString$ = function toString_8(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + this.typeName;
}
;
_.modifiers = 0;
_.seedId = 0;
_.typeName = null;
function ClassCastException_0(){
  $fillInStackTrace();
}

defineSeed(54, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), ClassCastException_0);
function IllegalArgumentException_0(){
  RuntimeException_0.call(this, 'Self-causation not permitted');
}

defineSeed(55, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), IllegalArgumentException_0);
function IllegalStateException_0(){
  RuntimeException_0.call(this, "Can't overwrite cause");
}

defineSeed(56, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), IllegalStateException_0);
function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineSeed(57, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), IndexOutOfBoundsException_0);
function toPowerOfTwoString(value){
  var buf, digits, pos;
  buf = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, 8, 1);
  digits = ($clinit_Number$__Digits() , digits_0);
  pos = 7;
  if (value >= 0) {
    while (value > 15) {
      buf[pos--] = digits[value & 15];
      value >>= 4;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value & 15];
      value >>= 4;
    }
  }
  buf[pos] = digits[value & 15];
  return __valueOf(buf, pos, 8);
}

function min(x){
  return x < 128?x:128;
}

function NullPointerException_0(){
  $fillInStackTrace();
}

defineSeed(61, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), NullPointerException_0);
function $clinit_Number$__Digits(){
  $clinit_Number$__Digits = nullMethod;
  digits_0 = initValues(_3C_classLit, makeCastMap([Q$Serializable]), -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function StackTraceElement_0(methodName){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.lineNumber = -1;
}

defineSeed(63, 1, makeCastMap([Q$Serializable, Q$StackTraceElement]), StackTraceElement_0);
_.toString$ = function toString_9(){
  return this.className + '.' + this.methodName + '(Unknown Source' + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.className = null;
_.lineNumber = 0;
_.methodName = null;
function $charAt(this$static, index){
  return this$static.charCodeAt(index);
}

function $equals(this$static, other){
  if (!instanceOf(other, Q$String)) {
    return false;
  }
  return String(this$static) == other;
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __createArray(numElements){
  return initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable]), Q$String, numElements, 0);
}

function __valueOf(x, start, end){
  x = x.slice(start, end);
  return String.fromCharCode.apply(null, x);
}

_ = String.prototype;
_.castableTypeMap$ = makeCastMap([Q$String, Q$Serializable, Q$CharSequence, Q$Comparable]);
_.equals$ = function equals_1(other){
  return $equals(this, other);
}
;
_.hashCode$ = function hashCode_2(){
  return getHashCode_0(this);
}
;
_.toString$ = _.toString;
function $clinit_String$HashCache(){
  $clinit_String$HashCache = nullMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  return hashCode | 0;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $$init(this$static){
  var array;
  this$static.data_0 = (array = [] , array.explicitLength = 0 , array);
}

function $append_0(this$static, x){
  $append(this$static.data_0, x);
  return this$static;
}

function StringBuffer_0(){
  $$init(this);
}

function StringBuffer_1(s){
  $$init(this);
  $append(this.data_0, s);
}

defineSeed(65, 1, makeCastMap([Q$CharSequence]), StringBuffer_0, StringBuffer_1);
_.toString$ = function toString_10(){
  return $toString(this.data_0);
}
;
defineSeed(66, 1, {});
_.toString$ = function toString_11(){
  var comma, iter, sb, value;
  sb = new StringBuffer_0;
  comma = null;
  $append(sb.data_0, '[');
  iter = new AbstractList$IteratorImpl_0(this);
  while (iter.i < iter.this$0.size) {
    comma != null?($append(sb.data_0, comma) , sb):(comma = ', ');
    value = $next(iter);
    $append(sb.data_0, value === this?'(this Collection)':'' + value);
  }
  $append(sb.data_0, ']');
  return $toString(sb.data_0);
}
;
function $equals_0(this$static, o){
  var elem, elemOther, iter, iterOther, other, maybeJsoInvocation;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, Q$List)) {
    return false;
  }
  other = dynamicCast(o, Q$List);
  if (this$static.size != other.size) {
    return false;
  }
  iter = new AbstractList$IteratorImpl_0(this$static);
  iterOther = new AbstractList$IteratorImpl_0(other);
  while (iter.i < iter.this$0.size) {
    elem = $next(iter);
    elemOther = $next(iterOther);
    if (!(elem == null?elemOther == null:(maybeJsoInvocation = elem , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.equals$(elemOther):maybeJsoInvocation === elemOther))) {
      return false;
    }
  }
  return true;
}

function checkIndex(index, size){
  (index < 0 || index >= size) && indexOutOfBounds(index, size);
}

function indexOutOfBounds(index, size){
  throw new IndexOutOfBoundsException_0('Index: ' + index + ', Size: ' + size);
}

defineSeed(67, 66, makeCastMap([Q$List]));
_.equals$ = function equals_2(o){
  return $equals_0(this, o);
}
;
_.hashCode$ = function hashCode_3(){
  var iter, k, obj, maybeJsoInvocation;
  k = 1;
  iter = new AbstractList$IteratorImpl_0(this);
  while (iter.i < iter.this$0.size) {
    obj = $next(iter);
    k = 31 * k + (obj == null?0:(maybeJsoInvocation = obj , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.hashCode$():getHashCode(maybeJsoInvocation)));
    k = ~~k;
  }
  return k;
}
;
function $next(this$static){
  if (this$static.i >= this$static.this$0.size) {
    throw new NoSuchElementException_0;
  }
  return $get(this$static.this$0, this$static.i++);
}

function AbstractList$IteratorImpl_0(this$0){
  this.this$0 = this$0;
}

defineSeed(68, 1, {}, AbstractList$IteratorImpl_0);
_.i = 0;
_.this$0 = null;
function $add(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $get(this$static, index){
  checkIndex(index, this$static.size);
  return this$static.array[index];
}

function $set(this$static, o){
  var previous;
  previous = (checkIndex(4, this$static.size) , this$static.array[4]);
  setCheck(this$static.array, 4, o);
  return previous;
}

function ArrayList_0(){
  this.array = initDim(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, 0, 0);
}

defineSeed(69, 67, makeCastMap([Q$Serializable, Q$ArrayList, Q$List]), ArrayList_0);
_.size = 0;
function NoSuchElementException_0(){
  $fillInStackTrace();
}

defineSeed(70, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), NoSuchElementException_0);
function $clinit_DeltaFileUpdate(){
  $clinit_DeltaFileUpdate = nullMethod;
  deleted_elems = new ArrayList_0;
  added_elems_0 = new ArrayList_0;
  modified_elems = new ArrayList_0;
  originalStates = new ArrayList_0;
}

function buildDeltaForAdded(elems, operationsUpadate){
  var elementType, parentId, scriptContent, updateList, deltaOperation;
  elementType = (checkIndex(0, elems.size) , dynamicCast(elems.array[0], Q$String));
  parentId = (checkIndex(2, elems.size) , dynamicCast(elems.array[2], Q$String));
  scriptContent = (checkIndex(3, elems.size) , dynamicCast(elems.array[3], Q$String));
  if ($equals(elementType, 'onentry')) {
    updateList = new ArrayList_0;
    setCheck(updateList.array, updateList.size++, elementType);
    setCheck(updateList.array, updateList.size++, parentId);
    $add(updateList, (deltaOperation = ' \n\n<modify element="onentry" module="' + parentId + '">\n' , deltaOperation += '\t<add script="' + scriptContent + '">\n' , deltaOperation += '\t<\/add>\n' , deltaOperation += ' <\/modify>\n' , deltaOperation));
    setCheck(operationsUpadate.array, operationsUpadate.size++, updateList);
  }
}

function buildDeltaOperation(del, operations){
  var elementId, elementType, parentId, st, tr, tr_0, on, deltaOperation, deltaOperation_0, deltaOperation_1;
  elementType = (checkIndex(0, del.size) , dynamicCast(del.array[0], Q$String));
  elementId = (checkIndex(1, del.size) , dynamicCast(del.array[1], Q$String));
  parentId = (checkIndex(2, del.size) , dynamicCast(del.array[2], Q$String));
  if ($equals(elementType, 'state')) {
    parentId = dynamicCast($get(originalStates, 0), Q$State).id;
    $add(operations, (st = getStateById(elementId) , getDeltaOperationForState(st, parentId)));
  }
   else 
    $equals(elementType, 'transition')?$add(operations, (tr = getTransitionByElementId(elementId) , deltaOperation = ' \n\n<modify element="state" module="' + parentId + '"> \n' , deltaOperation += '\t<add element="transition"> \n' , (!tr.script.length || tr.script != null) && (deltaOperation += '\t\t<set script="' + tr.script + '"/>\n') , deltaOperation += '\t<\/add>\n' , deltaOperation += ' <\/modify>\n' , deltaOperation)):$equals(elementType, 'transition.script')?$add(operations, (tr_0 = getTransitionByElementId(elementId) , deltaOperation_0 = ' \n\n<modify element="transition" module="' + elementId + '">\n' , deltaOperation_0 += '\t\t<set script="' + tr_0.script + '"/>\n' , deltaOperation_0 += '\t<\/add>\n' , deltaOperation_0 += ' <\/modify>\n' , deltaOperation_0)):$equals(elementType, 'onentry.script') && $add(operations, (on = getOnentryByParentId(parentId) , deltaOperation_1 = ' \n \n<modify element="state" module="' + parentId + '">\n' , deltaOperation_1 += '\t<add element="onentry">\n' , on.script != null && (deltaOperation_1 += '\t\t<set script="' + on.script + '"/>\n') , deltaOperation_1 += '\t<\/add>\n' , deltaOperation_1 += ' <\/modify>\n' , deltaOperation_1));
}

function conflictResolution(){
  var e;
  try {
  	//console.log("In conflict resolution\n");
    readDelta();
    searchForConflicts();
    readBaseScript(baseForked);
    getConflictAndRipple();
    //console.log("In conflict resolution, NEW DELTA:\n"+newDelta);
    return newDelta;
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, Q$Exception)) {
      e = $e0;
      $printStackTrace(e);
      
    }
     else 
      throw $e0;
  }
  return delta_0;
}

function decodeLine(line){
  if (line == null)
    return;
  if (line.indexOf('---') != -1)
    return;
  if (line.indexOf('+++') != -1)
    return;
  if (line.indexOf('@@') != -1)
    return;
  line.indexOf('-') == 0?extractElement($substring(line, 1), '-'):line.indexOf('+') == 0?extractElement($substring(line, 1), '+'):extractOperationRoot(line);
}

function deleteConflictFromList(st, list){
  var del, str;
  del = new AbstractList$IteratorImpl_0(list);
  while (del.i < del.this$0.size) {
    str = dynamicCast($next(del), Q$ArrayList);
    $equals_0(str, st) && $set(str, 'false');
  }
}

function extractElement(line1, operation){
  var i, line2, line3, cond, nList, line3_0, id, nList_0, nList_1;
  i = line1.indexOf('<');
  line2 = $substring(line1, i);
  line2.indexOf('<transition') == 0?(line3 = $split(line2, 'cond="', 0) , cond = $substring_0(line3[1], 0, line3[1].indexOf('"')) , currentTransition = cond , nList = new ArrayList_0 , setCheck(nList.array, nList.size++, 'transition') , setCheck(nList.array, nList.size++, cond) , $add(nList, currentState) , setCheck(nList.array, nList.size++, line2) , operation == '-'?$add(deleted_elems, nList):operation == '+' && $add(added_elems_0, nList) , undefined):line2.indexOf('<state') == 0?(line3_0 = $split(line2, 'id="', 0) , id = $substring_0(line3_0[1], 0, line3_0[1].indexOf('"')) , currentState = id , nList_0 = new ArrayList_0 , setCheck(nList_0.array, nList_0.size++, 'state') , setCheck(nList_0.array, nList_0.size++, id) , setCheck(nList_0.array, nList_0.size++, '') , setCheck(nList_0.array, nList_0.size++, id) , operation == '-'?$add(deleted_elems, nList_0):operation == '+' && $add(added_elems_0, nList_0) , undefined):line2.indexOf('<onentry') == 0?(nList_1 = new ArrayList_0 , setCheck(nList_1.array, nList_1.size++, 'onentry') , $add(nList_1, currentState) , $add(nList_1, currentState) , setCheck(nList_1.array, nList_1.size++, '') , operation == '-'?$add(deleted_elems, nList_1):operation == '+' && $add(added_elems_0, nList_1) , undefined):line2.indexOf('<script>') == 0?extractScript(line2, operation):line2.indexOf('<\/transition') == 0?(currentTransition = null):line2.indexOf('<\/state') == 0 && (currentState = null);
}

function extractOperationRoot(line){
  var i, line2, line3;
  i = line.indexOf('<');
  line2 = $substring(line, i);
  if (line2.indexOf('<state') == 0) {
    line3 = $split(line2, 'id="', 0);
    currentState = $substring_0(line3[1], 0, line3[1].indexOf('"'));
  }
   else if (line2.indexOf('<\/state') == 0) {
    currentState = null;
  }
   else if (line2.indexOf('<transition') == 0) {
    line3 = $split(line2, 'cond="', 0);
    currentTransition = $substring_0(line3[1], 0, line3[1].indexOf('"'));
  }
   else 
    line2.indexOf('<\/transition') == 0 && (currentTransition = null);
}

function extractScript(line2, operation){
  var elemt, line3, nList, script_content, script_parent;
  line3 = $split(line2, '>', 0);
  script_content = $substring_0(line3[1], 0, line3[1].indexOf('<'));
  script_parent = null;
  elemt = null;
  nList = new ArrayList_0;
  if (currentTransition == null) {
    script_parent = currentState;
    elemt = 'onentry.script';
  }
   else if (currentTransition != null) {
    script_parent = currentTransition;
    elemt = 'transition.script';
  }
  setCheck(nList.array, nList.size++, elemt);
  setCheck(nList.array, nList.size++, script_parent);
  $add(nList, currentState);
  setCheck(nList.array, nList.size++, script_content);
  operation == '-'?$add(deleted_elems, nList):operation == '+' && $add(added_elems_0, nList);
}

function findModificationsAndDeleteConflict(deleted_elems2, added_elems2){
  var add, del, st, st1;
  del = new AbstractList$IteratorImpl_0(deleted_elems2);
  while (del.i < del.this$0.size) {
    st = dynamicCast($next(del), Q$ArrayList);
    add = new AbstractList$IteratorImpl_0(added_elems2);
    while (add.i < add.this$0.size) {
      st1 = dynamicCast($next(add), Q$ArrayList);
      if ($equals((checkIndex(0, st1.size) , dynamicCast(st1.array[0], Q$String)), (checkIndex(0, st.size) , st.array[0])) && $equals((checkIndex(1, st1.size) , dynamicCast(st1.array[1], Q$String)), (checkIndex(1, st.size) , st.array[1]))) {
        $add(modified_elems, st);
        deleteConflictFromList(st, deleted_elems2);
        deleteConflictFromList(st, added_elems2);
      }
    }
  }
}

function getConflictAndRipple(){
  var elems, it, itAdd, operationsPreserve, operationsUpadate;
  it = new AbstractList$IteratorImpl_0(deleted_elems);
  operationsPreserve = new ArrayList_0;
  operationsUpadate = new ArrayList_0;
  while (it.i < it.this$0.size) {
    elems = dynamicCast($next(it), Q$ArrayList);
    $equals((checkIndex(4, elems.size) , dynamicCast(elems.array[4], Q$String)), 'true') && buildDeltaOperation(elems, operationsPreserve);
  }
  itAdd = new AbstractList$IteratorImpl_0(added_elems_0);
  while (itAdd.i < itAdd.this$0.size) {
    elems = dynamicCast($next(itAdd), Q$ArrayList);
    $equals((checkIndex(4, elems.size) , dynamicCast(elems.array[4], Q$String)), 'true') && buildDeltaForAdded(elems, operationsUpadate);
  }
  if (operationsPreserve.size != 0 || operationsUpadate.size != 0) {
    newDelta = '';
    insertOperationIntoDeltaFile(operationsPreserve);
    modifyDeltaOperationsIfOentryAddConflictExist(operationsUpadate);
  }
}

function getDeltaOperationForState(st, parentId){
  var deltaOperation, i, sc, trans;
  deltaOperation = ' \n\n<modify element="state" module="' + parentId + '">\n';
  deltaOperation += '\t<add element="state">\n';
  deltaOperation += '\t\t<set id="' + st.id + '"/>\n';
  for (i = 0; i < st.transitions.size; ++i) {
    trans = dynamicCast($get(st.transitions, i), Q$Transition);
    sc = trans.script;
    deltaOperation += '\t\t<add element="transition">\n';
    deltaOperation += '\t\t\t<set event="' + trans.event_0 + '"/>\n';
    deltaOperation += '\t\t\t<set cond="' + trans.cond + '"/>\n';
    deltaOperation += '\t\t\t<set target="' + trans.target + '"/>\n';
    sc != null && (deltaOperation += '\t\t\t<set script="' + sc + '"/>\n');
    deltaOperation += '\t\t<\/add>\n';
    deltaOperation += '\t<\/add>\n';
    deltaOperation += ' <\/modify>\n';
  }
  return deltaOperation;
}

function getOnentry(stateEl){
  var el, nd, nl, on, sc;
  sc = null;
  nl = new NodeListImpl_0(($clinit_XMLParserImpl() , $getElementsByTagNameImpl(stateEl.jsObject, 'onentry')));
  if (!nl)
    return null;
  el = null;
  !!nl && getLength(nl.jsObject) > 0 && (el = dynamicCast(build(item_0(nl.jsObject, 0)), Q$Element));
  if (!el)
    return null;
  nd = new NodeListImpl_0($getElementsByTagNameImpl(el.jsObject, 'script'));
  !!nd && getLength(nd.jsObject) > 0 && (el = dynamicCast(build(item_0(nd.jsObject, 0)), Q$Element));
  !!el && (sc = getNodeValue(build(item_0(nl.jsObject, 0)).jsObject));
  on = new Onentry_0(sc);
  return on;
}

function getOnentryByParentId(parentId){
  var it, st;
  it = new AbstractList$IteratorImpl_0(originalStates);
  while (it.i < it.this$0.size) {
    st = dynamicCast($next(it), Q$State);
    if ($equals(parentId, st.id))
      return st.onentry;
  }
  return null;
}

function getStateById(elementId){
  var it, st;
  it = new AbstractList$IteratorImpl_0(originalStates);
  while (it.i < it.this$0.size) {
    st = dynamicCast($next(it), Q$State);
    if ($equals(elementId, st.id))
      return st;
  }
  return null;
}

function getTransitionByElementId(cond){
  var it, st, tr, trans;
  it = new AbstractList$IteratorImpl_0(originalStates);
  while (it.i < it.this$0.size) {
    st = dynamicCast($next(it), Q$State);
    tr = new AbstractList$IteratorImpl_0(st.transitions);
    while (tr.i < tr.this$0.size) {
      trans = dynamicCast($next(tr), Q$Transition);
      if ($equals(trans.cond, cond))
        return trans;
    }
  }
  return null;
}

function getTransitions(stateEl){
  var el, i, n, nl, script, tran, trans;
  nl = new NodeListImpl_0(($clinit_XMLParserImpl() , $getElementsByTagNameImpl(stateEl.jsObject, 'transition')));
  trans = new ArrayList_0;
  script = null;
  for (i = 0; i < getLength(nl.jsObject); ++i) {
    el = dynamicCast(build(item_0(nl.jsObject, i)), Q$Element);
    n = build(item_0((new NodeListImpl_0(getChildNodes(el.jsObject))).jsObject, 0));
    !!n && (script = getNodeValue(n.jsObject));
    tran = new Transition_0(getAttribute(el.jsObject, 'event'), getAttribute(el.jsObject, 'cond'), getAttribute(el.jsObject, 'target'), script);
    setCheck(trans.array, trans.size++, tran);
  }
  return trans;
}

function identifyOnentryAddInDeltaFile(addList){
  var elem, nNode, onentryUpdate, parentElem, temp;
  onentryUpdate = new ArrayList_0;
  for (temp = 0; temp < getLength(addList.jsObject); ++temp) {
    nNode = build(item_0(addList.jsObject, temp));
    elem = dynamicCast(nNode, Q$Element);
    if ($equals(getAttribute(elem.jsObject, 'element'), 'onentry')) {
      parentElem = dynamicCast(build(getParentNode(nNode.jsObject)), Q$Element);
      $add(onentryUpdate, getAttribute(elem.jsObject, 'element'));
      $add(onentryUpdate, getAttribute(parentElem.jsObject, 'module'));
      $add(onentryUpdate, getAttribute(elem.jsObject, 'script'));
      'Onentry modified Operaiton:\n' + getAttribute(elem.jsObject, 'element') + ' ' + getAttribute(parentElem.jsObject, 'module') + ' ' + getAttribute(elem.jsObject, 'script');
      $add(deltaAddOnentryOperations, onentryUpdate);
    }
  }
}

function identifyOperationsFromDiffFile(diff_file){
  var diffLine, e, i, line;
  try {
    diffLine = $split(diff_file, '\n', 0);
    i = 0;
    while (i < diffLine.length) {
      line = diffLine[i];
      decodeLine(line);
      ++i;
    }
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, Q$Exception)) {
      e = $e0;
      $printStackTrace(e);
     
    }
     else 
      throw $e0;
  }
}

function insertOperationIntoDeltaFile(operations){
  var e, i, it, oldDeltaLine, oldDeltaLines;
  try {
    if (operations.size == 0)
      return;
    oldDeltaLines = $split(delta_0, '\n', 0);
    it = new AbstractList$IteratorImpl_0(operations);
    i = 0;
    while (i < oldDeltaLines.length) {
      oldDeltaLine = oldDeltaLines[i];
      if (oldDeltaLine.indexOf('delta') != -1 && oldDeltaLine.indexOf('<\/delta>') == -1) {
        newDelta = oldDeltaLine + '\n';
        while (it.i < it.this$0.size) {
          newDelta += dynamicCast($next(it), Q$String) + '\n';
        }
      }
       else {
        newDelta += oldDeltaLine + '\n';
      }
      ++i;
    }
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, Q$Exception)) {
      e = $e0;
      $printStackTrace(e);

    }
     else 
      throw $e0;
  }
}

function isInConflictWithAnOnentryAdd(deltaAddOperation){
  var ite, listElem;
  ite = new AbstractList$IteratorImpl_0(deltaAddOnentryOperations);
  while (ite.i < ite.this$0.size) {
    listElem = dynamicCast($next(ite), Q$ArrayList);
    if ((checkIndex(0, deltaAddOperation.size) , deltaAddOperation.array[0]) === 'onentry' && $equals((checkIndex(1, listElem.size) , dynamicCast(listElem.array[1], Q$String)), (checkIndex(0, deltaAddOperation.size) , deltaAddOperation.array[0])))
      return true;
  }
  return false;
}

function modifyDeltaOperationsIfOentryAddConflictExist(operationsUpadate){
  var addElement, addNode, childs, delta, e, j, modifyElement, modifyNode, nList, newElement, temp;
  try {
    if (operationsUpadate.size == 0)
      return;
    deltaDoc = parse(newDelta);
    nList = $getElementsByTagName(deltaDoc, 'modify');
    delta = build(item_0($getElementsByTagName(deltaDoc, 'delta').jsObject, 0));
    for (temp = 0; temp < getLength(nList.jsObject); ++temp) {
      modifyNode = build(item_0(nList.jsObject, temp));
      if (getNodeType(modifyNode.jsObject) == 1) {
        modifyElement = dynamicCast(modifyNode, Q$Element);
        childs = new NodeListImpl_0(($clinit_XMLParserImpl() , $getElementsByTagNameImpl(modifyElement.jsObject, 'add')));
        for (j = 0; j < getLength(childs.jsObject); ++j) {
          addNode = build(item_0(childs.jsObject, j));
          addElement = dynamicCast(addNode, Q$Element);
          if (needsModifyElementHasToBeUpdated(modifyElement, operationsUpadate) && $equals(getAttribute(addElement.jsObject, 'element'), 'onentry')) {
            newElement = ($setAttribute(modifyElement, 'onentry') , $setAttribute(addElement, 'script') , modifyElement);
            $replaceChild(delta, newElement, modifyElement);
            newDelta = delta.toString$();
          }
        }
      }
    }
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, Q$Exception)) {
      e = $e0;
      $printStackTrace(e);
    }
     else 
      throw $e0;
  }
}

function needsModifyElementHasToBeUpdated(modifyElement, operationsUpadate){
  var ite, operation, stateId;
  ite = new AbstractList$IteratorImpl_0(operationsUpadate);
  while (ite.i < ite.this$0.size) {
    operation = dynamicCast($next(ite), Q$ArrayList);
    stateId = (checkIndex(1, operation.size) , dynamicCast(operation.array[1], Q$String));
    if ($equals(getAttribute(modifyElement.jsObject, 'module'), stateId))
      return true;
  }
  return false;
}

function readBaseScript(base_original2){
  var doc, el, i, nl, s, se, id, transitions, onentry;
  try {
    doc = ($clinit_XMLParser() , $parse(impl, base_original2));
    nl = new NodeListImpl_0(($clinit_XMLParserImpl() , $getElementsByTagNameImpl(doc.jsObject, 'state')));
    if (!!nl && getLength(nl.jsObject) > 0) {
      for (i = 0; i < getLength(nl.jsObject); ++i) {
        el = dynamicCast(build(item_0(nl.jsObject, i)), Q$Element);
        s = (id = getAttribute(el.jsObject, 'id') , transitions = getTransitions(el) , onentry = getOnentry(el) , new State_0(id, transitions, onentry));
        $add(originalStates, s);
      }
    }
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, Q$Exception)) {
      se = $e0;
      $printStackTrace(se);
    }
     else 
      throw $e0;
  }
}

function readDelta(){

  var addElem, dList, e, eElement, nList, nNode, temp;
  deltaModifiesOperations = new ArrayList_0;
  deltaAddOnentryOperations = new ArrayList_0;
  try {
    deltaDoc = parse(delta_0);
    nList = $getElementsByTagName(deltaDoc, 'modify');
    for (temp = 0; temp < getLength(nList.jsObject); ++temp) {
      nNode = build(item_0(nList.jsObject, temp));
      if (getNodeType(nNode.jsObject) == 1) {
        dList = new ArrayList_0;
        eElement = dynamicCast(nNode, Q$Element);
        $add(dList, getAttribute(eElement.jsObject, 'element'));
        $add(dList, getAttribute(eElement.jsObject, 'module'));
        $add(deltaModifiesOperations, dList);
        addElem = new NodeListImpl_0(($clinit_XMLParserImpl() , $getElementsByTagNameImpl(eElement.jsObject, 'add')));
        identifyOnentryAddInDeltaFile(addElem);
      }
    }
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, Q$Exception)) {
      e = $e0;
      $printStackTrace(e);
    }
     else 
      throw $e0;
  }
}

function searchElementInAddedListSetConlict(added_elems){
  var elem, it, iter, listElem;
  it = new AbstractList$IteratorImpl_0(added_elems);
  iter = new AbstractList$IteratorImpl_0(deltaAddOnentryOperations);
  if (iter.i < iter.this$0.size) {
    while (iter.i < iter.this$0.size) {
      elem = dynamicCast($next(iter), Q$ArrayList);
      while (it.i < it.this$0.size) {
        listElem = dynamicCast($next(it), Q$ArrayList);
        $equals((checkIndex(0, listElem.size) , dynamicCast(listElem.array[0], Q$String)), 'onentry') && $equals((checkIndex(0, listElem.size) , dynamicCast(listElem.array[0], Q$String)), (checkIndex(0, elem.size) , elem.array[0])) && $equals((checkIndex(1, listElem.size) , dynamicCast(listElem.array[1], Q$String)), (checkIndex(1, elem.size) , elem.array[1])) || isInConflictWithAnOnentryAdd(listElem)?listElem.size == 4?(setCheck(listElem.array, listElem.size++, 'true') , true):$set(listElem, 'true'):listElem.size == 4 && (setCheck(listElem.array, listElem.size++, 'false') , true);
      }
    }
  }
   else {
    while (it.i < it.this$0.size) {
      listElem = dynamicCast($next(it), Q$ArrayList);
      listElem.size == 4 && (setCheck(listElem.array, listElem.size++, 'false') , true);
    }
  }
}

function searchElementInListAndSetConflic(elemList, elem){
  var it, listElem;
  it = new AbstractList$IteratorImpl_0(elemList);
  while (it.i < it.this$0.size) {
    listElem = dynamicCast($next(it), Q$ArrayList);
    $equals((checkIndex(0, listElem.size) , dynamicCast(listElem.array[0], Q$String)), (checkIndex(0, elem.size) , elem.array[0])) && $equals((checkIndex(1, listElem.size) , dynamicCast(listElem.array[1], Q$String)), (checkIndex(1, elem.size) , elem.array[1]))?listElem.size == 4?(setCheck(listElem.array, listElem.size++, 'true') , true):$set(listElem, 'true'):listElem.size == 4 && (setCheck(listElem.array, listElem.size++, 'false') , true);
  }
}

function searchForConflicts(){
  var elem, it;
  it = new AbstractList$IteratorImpl_0(deltaModifiesOperations);
  while (it.i < it.this$0.size) {
    elem = dynamicCast($next(it), Q$ArrayList);
    searchElementInListAndSetConflic(deleted_elems, elem);
  }
  searchElementInAddedListSetConlict(added_elems_0);
  findModificationsAndDeleteConflict(deleted_elems, added_elems_0);
}

function updateDelta(base, diffFile, deltaFile){
  $clinit_DeltaFileUpdate();
  consle.log("en update delta");
  var newDeltaContent;
  delta_0 = deltaFile;
  baseForked = base;
  identifyOperationsFromDiffFile(diffFile);
 // console.log("deleted elems:\n"deleted_elems);
  //console.log("deleted elemens 2:\n" deleted_elems2"");
  newDeltaContent = conflictResolution();
  return newDeltaContent;
}

var added_elems_0, baseForked = null, currentState = null, currentTransition = null, deleted_elems, delta_0 = null, deltaAddOnentryOperations = null, deltaDoc = null, deltaModifiesOperations = null, modified_elems, newDelta = null, originalStates;

function formatAsCurrency(x){
  var delta;
  baseForked_0 = '<scxml initial="COWPATH_state" name="" version="1.0" xmlns="http://www.w3.org/2005/07/scxml" clock="true" notes="true" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" > <state id="COWPATH_state">  <initial>      <transition event="COWPATH:LOAD" cond="htps://www.easychair.org/conferences/review_all.cgi?*" target="https://www.easychair.org/conferences/review_all.cgi?*"/>  <\/initial>  <state id="https://www.easychair.org/conferences/review_all.cgi?*">      <transition event="COWPATH:LOAD" cond= "https://www.easychair.org/conferences/review_add.cgi?*" target="https://www.easychair.org/conferences/review_add.cgi?*"/>      <transition event="COWPATH:LOAD" cond="htps://www.easychair.org/conferences/submission_info_show.cgi?*" target="https://www.easychair.org/conferences/submission_info_show.cgi?*"/> <\/state>\t   <state id="https://www.easychair.org/conferences/review_add.cgi?*">     <transition event="COWPATH:CLICK" cond="easychair2easychair" target="https://www.easychair.org/conferences/review_all.cgi?*"/>     <transition event="COWPATH:CLICK" cond="easychair2uni-trier" target="http://dblp.uni-trier.de/pers/*">        <script>GoTo("http://dblp.uni-trier.de/").Paste("$author").Into("//*[@NAME=\'q\']").Click("//*[@VALUE=\'Submit\']");<\/script>    <\/transition>\t\t\t    <onentry>       <script>Copy("//*[text()=\'Authors:\']/../../td[]/text()","(.*?)( and |,|$)").Into("$author")<\/script>   <\/onentry> <\/state> <state id="http://dblp.uni-trier.de/pers/*">     <transition event="COWPATH:CLICK" cond="uni-trier2easychair" target="https://www.easychair.org/conferences/review_add.cgi?*"/> <\/state> <state id="https://www.easychair.org/conferences/submission_info_show.cgi?*">    <transition event="COWPATH:CLICK" cond="easychair2easychair" target="https://www.easychair.org/conferences/review_all.cgi?*"/> <\/state>\t\t <\/state><\/scxml>';
  diff = '<script>Copy("//*[text()=\'Authors:\']/../../td[]/text()","(.*?)( and |,|$)").Into("$author")<\/script>\n<\/onentry>\n<\/state>\n-        <state id="http://dblp.uni-trier.de/pers/*">\n-            <transition event="COWPATH:CLICK" cond="uni-trier2easychair" target="https://www.easychair.org/conferences/review_add.cgi?*"/>\n-        <\/state>\n<state id="https://www.easychair.org/conferences/submission_info_show.cgi?*">\n<transition event="COWPATH:CLICK" cond="easychair2easychair" target="https://www.easychair.org/conferences/review_all.cgi?*"/>\n<\/state>\n';
  deltaFile_0 = '<delta core="https://github.com/letimome/EasyChair/blob/master/base.xml" > \n  <modify element="state" module="http://dblp.uni-trier.de/pers/*"> \n\t<add element="transiton"> \n\t  <set event="event"/> \n\t  <set cond="cond"/> \n\t  <set target="target"/> \n \t<\/add> \n <\/modify> \n<\/delta>\n';
  delta = updateDelta(baseForked_0, diff, deltaFile_0);
  return 'Leti here is your new delta:\n' + delta;
}

var baseForked_0 = null, deltaFile_0 = null, diff = null;
function Onentry_0(sc){
  this.script = sc;
}

defineSeed(73, 1, {}, Onentry_0);
_.script = null;
function State_0(id, transitions, onentry2){
  this.id = id;
  this.transitions = transitions;
  this.onentry = onentry2;
}

defineSeed(74, 1, makeCastMap([Q$State]), State_0);
_.id = null;
_.onentry = null;
_.transitions = null;
function Transition_0(event_0, cond, target, script){
  this.event_0 = event_0;
  this.cond = cond;
  this.target = target;
  this.script = script;
}

defineSeed(75, 1, makeCastMap([Q$Transition]), Transition_0);
_.cond = null;
_.event_0 = null;
_.script = null;
_.target = null;
var $entry = entry;
function gwtOnLoad(errFn, modName, modBase, softPermutationId){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(init)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(init)();
  }
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$', 9), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;', 79), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable', 8), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception', 7), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException', 6), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement', 63), _3Ljava_lang_StackTraceElement_2_classLit = createForArray('[Ljava.lang.', 'StackTraceElement;', 81), Lcom_google_gwt_lang_SeedUtil_2_classLit = createForClass('com.google.gwt.lang.', 'SeedUtil', 28), _3C_classLit = createForArray('', '[C', 82), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class', 53), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String', 2), _3Ljava_lang_String_2_classLit = createForArray('[Ljava.lang.', 'String;', 80), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException', 54), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException', 52), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException', 5), Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$Collector', 17), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler', 12), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl', 14), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException', 61), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException', 55), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection', 66), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList', 67), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList', 69), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl', 68), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer', 65), Lcom_google_gwt_xml_client_impl_XMLParserImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'XMLParserImpl', 50), Lmerge_client_State_2_classLit = createForClass('merge.client.', 'State', 74), Lcom_google_gwt_xml_client_impl_XMLParserImplIE6_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'XMLParserImplIE6', 51), Lcom_google_gwt_xml_client_impl_DOMItem_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DOMItem', 38), Lcom_google_gwt_xml_client_impl_NodeImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'NodeImpl', 37), Lcom_google_gwt_xml_client_DOMException_2_classLit = createForClass('com.google.gwt.xml.client.', 'DOMException', 34), Lcom_google_gwt_xml_client_impl_DOMParseException_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DOMParseException', 44), Lmerge_client_Onentry_2_classLit = createForClass('merge.client.', 'Onentry', 73), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException', 70), Lcom_google_gwt_xml_client_impl_AttrImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'AttrImpl', 36), Lcom_google_gwt_xml_client_impl_CharacterDataImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'CharacterDataImpl', 41), Lcom_google_gwt_xml_client_impl_TextImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'TextImpl', 40), Lcom_google_gwt_xml_client_impl_CDATASectionImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'CDATASectionImpl', 39), Lcom_google_gwt_xml_client_impl_CommentImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'CommentImpl', 42), Lcom_google_gwt_xml_client_impl_DocumentFragmentImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DocumentFragmentImpl', 45), Lcom_google_gwt_xml_client_impl_DocumentImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DocumentImpl', 46), Lcom_google_gwt_xml_client_impl_ElementImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'ElementImpl', 47), Lcom_google_gwt_xml_client_impl_ProcessingInstructionImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'ProcessingInstructionImpl', 49), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException', 57), Lmerge_client_Transition_2_classLit = createForClass('merge.client.', 'Transition', 75), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException', 56), Lcom_google_gwt_xml_client_impl_DOMNodeException_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DOMNodeException', 43), Lcom_google_gwt_xml_client_impl_NodeListImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'NodeListImpl', 48);
$stats && $stats({moduleName:'githubmerge',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if ($wnd.githubmerge) $wnd.githubmerge.onScriptLoad();

/***Fin codifo updateDelta GWT**/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/
/**********************************************************************************************************************************************/


var GitHubWrapper=function(){
 this.nodes={};
 //added by me:Leti 					//*[@class='minibutton select-menu-button js-menu-target']//*[@class='js-select-button']	
 this.nodes.currentBranch={node:null,listeners:{},xpath:"/html/body/div/div[2]/div[2]/div/div[2]/div[4]/div/span/span[2]", supplements:[],regexp:/([^ \n]+)/};
 
 this.nodes.userName={node:null,listeners:{},xpath:"//*[@id='user-links']//a[@class='name']",supplements:[],regexp:/([^ \n]+)/}; 
 this.nodes.currentAuthor={node:null,listeners:{},xpath:"//*[@class='author']",supplements:[],regexp:/([^ \n]+)/};

 this.nodes.currentRepository={node:null,listeners:{},xpath:"//*[contains(@class,'js-current-repository')]",supplements:[],regexp:/([^ \n]+)/}; 
 this.nodes.authenticityToken={node:null,listeners:{},xpath:"//meta[@name='csrf-token']/@content",supplements:[],regexp:/([^ \n]+)/}; 
 this.nodes.pullId={node:null,listeners:{},xpath:"//*[@type='text/x-diff']/@href",supplements:[],regexp:/([0-9]+)\.diff$/};  
 this.nodes.forkButton={node:null,listeners:{},xpath:"//a[contains(@class,'fork-button')]",supplements:[],regexp:/([^ \n]+)/};  
 //this.nodes.pullRequest={node:null,listeners:{},xpath:"//*[@class='merge-branch-form-actions']//button[@type='submit']",supplements:[]}; 		;;//*[@class='select-menu-item-text']"			
 									 
//changing branch semantics
 this.nodes.branchButton={node:null,listeners:{},xpath:"//*[contains(@class,'js-create-branch')]//*[@class='select-menu-item-text']",supplements:[]}; //form[contains(@class,'js-create-branch')]
 this.nodes.branchButtonNewBranch={node:null,listeners:{},xpath:"//*[contains(@class,'js-create-branch')]//*[@class='select-menu-item-text']/input[0]/@value",supplements:[]}; 
 this.nodes.branchFilter={node:null, listeners:{},xpath:"//*[@id='context-commitish-filter-field']",supplements:[]};
						//*[@class='select-menu-item-text']//*[@class='js-new-item-name']
 this.nodes.newBranchName={node:null, listeners:{},xpath:"/html/body/div/div[2]/div[2]/div/div[2]/div[4]/div/div/div/div[3]/form/div[2]/h4/span",supplements:[]};
 this.nodes.parentBranch={node:null, listeners:{},xpath:"//*[@aria-label='Switch branches or tags']/*[@class='js-select-button']",supplements:[],regexp:/([^ \n]+)/}; 
 
 this.nodes.newBranchValue;
 this.nodes.parentBranchValue;


 this.nodes.pullRequest={node:null,listeners:{},xpath:"//*[@class='button primary']",supplements:[]}; 												//node.value
 this.nodes.diffCode={nodes:[],values:[],listeners:{},xpath:"//*[contains(@class,'file-diff-line js-file-line')]//*[@class='diff-line-code']",supplements:[],regexp:function(node){return node.textContent.trim();}}; 
 this.nodes.actions={nodes:[],listeners:{},xpath:"//ul[@class='pagehead-actions']/li",supplements:[],                 
                     template: function(){
                         var object={};
object.executeTemplate=function(parameter){
                             var tabTemplate=document.createElement("template");
                             tabTemplate.innerHTML='<li><div><a rel="nofollow"  title="Compose branch" class="minibutton" href=""><span class="text">Compose</span></a></div></li>';
                             var newTab=tabTemplate.content.cloneNode(true);
                             return newTab.querySelector("li");
                         };
                         return object;
 						}
                         }; 
};


GitHubWrapper.prototype.isApplicableToThisPage=function(){
 return window.location.href.match(/^https:\/\/github\.com/)!=null;
};
GitHubWrapper.prototype.init=function(){
 var obj=this;
 /*window.addEventListener("load",function(ev){*/obj._populateObj();/*},true)*/;
};
GitHubWrapper.prototype._populateObj=function(){
 var type;
 for(type in this.nodes){
  var node=this.nodes[type];
  var nod=null;
  if(node.xpath!=null){
   var tempNod=document.evaluate(node.xpath,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
   if(node.nodes!=null){
    nod=[];
	var i=0;
	for(i=0;i<tempNod.snapshotLength;i++){
     nod[i]=tempNod.snapshotItem(i);
 	 if(node.regexp!=null){	 
	  var val;
	  if(typeof node.regexp=="function"){
	   val=node.regexp(nod[i]);
	  }else{
	   val=this._getFirstMatch(nod[i].textContent,node.regexp);
	  }
      node.values[node.values.length]=val;
	 }	   
	}
	node.nodes=nod;
   }else if(tempNod.snapshotLength>0){
	nod=tempNod.snapshotItem(0);
	if(node.regexp!=null){
	 node.value=this._getFirstMatch(nod.textContent,node.regexp);  
	}	
	node.node=nod;
   }
  }else if(node.locator){
   nod=node.locator();
   if(node.regexp!=null){
    node.value=this._getFirstMatch(nod,node.regexp);
   }
   node.node=nod;  	
  }
 }
};
GitHubWrapper.prototype._getFirstMatch=function(content,regexp){
 var res=null;
 var matches=content.match(regexp);
 if(matches!=null){
  res=matches[1];
 }   
 return res;
};
GitHubWrapper.prototype._getNode=function(type){
 return this.nodes[type];
};

GitHubWrapper.prototype._addChild=function(node,toAdd){
 var n=node.node;
 if(n!=null&&toAdd!=null){
  n.appendChild(toAdd);
  node.supplements[node.supplements.length]=toAdd;
 }
};
GitHubWrapper.prototype._addSibling=function(node,toAdd,position){
 var n=node.nodes;
 if(position==null){position=n.length;} 
 if(n!=null&&toAdd!=null&&position<=n.length){
  if(position==n.length){
   var last=n[position-1];
   last.parentNode.appendChild(toAdd);          
  }else{
   var refNode=n[position];
   refNode.parentNode.insertBefore(toAdd,refNode);        
  }
  node.supplements[node.supplements.length]=toAdd;
 }
};
GitHubWrapper.prototype._removeChild=function(node,toRemove){
 var ind=node.supplements.indexOf(toRemove);
 var n=node.node; 
 if(n!=null&&ind>-1){
  node.supplements.splice(ind,1);
  n.removeChild(toRemove);     
 }
};
GitHubWrapper.prototype._addListener=function(node,ev,f){
 var handlers=node.listeners[ev];
 var realNode=node.node; 
 if(realNode!=null){
  if(handlers==null){
   handlers={};
   node.listeners[ev]=handlers;
   var obj=this;
   handlers.userHandlers=[];
   var obj=this;  
   handlers.mainManager=function(eve){obj._notifyToAll(eve,handlers);}

   realNode.addEventListener(ev,handlers.mainManager,true);
  }
  handlers.userHandlers[handlers.userHandlers.length]=f;
 }
};

GitHubWrapper.prototype.injectIntoActions=function(node,position){
this._addSibling(this.nodes.actions,node,position);
};

GitHubWrapper.prototype.getActions=function(){
 return this.nodes.actions.nodes;
};

GitHubWrapper.prototype.getActionTemplate=function(){
 return this.nodes.actions.template();
};

GitHubWrapper.prototype.getUserName=function(){
 return this.nodes.userName.value;
};

GitHubWrapper.prototype.getCurrentAuthor=function(){
 return this.nodes.currentAuthor.value;
};

GitHubWrapper.prototype.getCurrentBranch=function(){
	return this.nodes.currentBranch.value;
};

GitHubWrapper.prototype.getCurrentRepository=function(){
 return this.nodes.currentRepository.value;
};

GitHubWrapper.prototype.getAuthenticityToken=function(){
 return this.nodes.authenticityToken.value;
};

GitHubWrapper.prototype.getPullId=function(ev,f){
 return this.nodes.pullId.value;
};

GitHubWrapper.prototype.listenToForkButton=function(ev,f){
 this._addListener(this.nodes.forkButton,ev,f);
};

GitHubWrapper.prototype.listenToBranchButton=function(ev,f){
 this._addListener(this.nodes.branchButton,ev,f);
};

GitHubWrapper.prototype.listenToBranchFilter=function(ev,f){
 this._addListener(this.nodes.branchFilter,ev,f);
};

GitHubWrapper.prototype.listenToPullRequestButton=function(ev,f){
 this._addListener(this.nodes.pullRequest,ev,f);
};

GitHubWrapper.prototype.getForkButton=function(){
 return this.nodes.forkButton.node;  
};

GitHubWrapper.prototype.getBranchButton=function(){
 return this.nodes.branchButton.node;
};
GitHubWrapper.prototype.getBranchButtonNewBranch=function(){
 return this.nodes.branchButtonNewBranch.value;
};
GitHubWrapper.prototype.getParentBranch=function(){
 return this.nodes.parentBranch.value;
};
GitHubWrapper.prototype.getNewBranch=function(){
 return this.nodes.newBranchName.value;
};


GitHubWrapper.prototype.getNewBranchValue=function(){
 return  this.nodes.newBranchValue;
};
GitHubWrapper.prototype.setNewBranchValue=function(val){
 this.nodes.newBranchValue=val;
};
GitHubWrapper.prototype.getParentBranchValue=function(){
 return   this.nodes.parentBranchValue;
};
GitHubWrapper.prototype.setParentBranchValue=function(val){
    this.nodes.parentBranchValue=val;
};


GitHubWrapper.prototype.getBranchFilter=function(){
 return this.nodes.branchFilter.node;
};
GitHubWrapper.prototype.getPullRequestButton=function(){
 return this.nodes.pullRequest.node;  
};

GitHubWrapper.prototype.getDiffCode=function(){
 return this.nodes.diffCode.values;  
};

GitHubWrapper.prototype._notifyToAll=function(ev,ls){
 var i=0;
 for(i=0;i<ls.userHandlers.length;i++){
  var listen=ls.userHandlers[i];
  listen(ev);
 }
};

GitHubWrapper.prototype.applyTemplate=function(template,params){
return template.executeTemplate(params);
};

var GitHub=new GitHubWrapper();
GitHub.init();

var ActionView=function(){
this.click=null;
};
ActionView.prototype.setViewData=function(params){
this.click=params.click;
};
ActionView.prototype.render=function(){
var obj=this;
var tabTemplate=GitHub.getActionTemplate();
var tab=GitHub.applyTemplate(tabTemplate,null);
tab.getElementsByTagName("a")[0].addEventListener("click",function(ev){
 ev.preventDefault();
 ev.stopPropagation();
 obj.click(ev);
},true);
return tab;
};

var LoadEController=function(){
 if (LoadEController.prototype._singletonInstance) {
  return LoadEController.prototype._singletonInstance;
 }
 LoadEController.prototype._singletonInstance = this;        
};
LoadEController.prototype.init=function(func){
 var obj=this;
 /*window.addEventListener("load",function(){*/obj.execute();/*},true);*/ 
};

LoadEController.prototype.execute=function(){       

//console.log("EN LOAD") ;
 var user=GitHub.getUserName(); 
 var token=GitHub.getAuthenticityToken(); 
 var author=GitHub.getCurrentAuthor(); 
 var repo=GitHub.getCurrentRepository(); 
 var button=GitHub.getForkButton(); 

 /*hacer un listener para que cada vez que cambie el branch se actualice*/
 var currentBranch=GitHub.getCurrentBranch();
 //console.log("current branch "+currentBranch); 

 //console.log("Fork: "+button);
 if(user!=null&&token!=null&&author!=null&&repo!=null&&button!=null){
  var fork=new ForkEController();
  GitHub.listenToForkButton("click",function(ev){ev.preventDefault();ev.stopPropagation();fork.execute();});
 }
 
 var pullId=GitHub.getPullId();  
 var diff=GitHub.getDiffCode();  
 var button2=GitHub.getPullRequestButton(); 
 if(user!=null&&token!=null&&repo!=null&&pullId!=null&&diff!=null&&button2!=null){
  var pull=new PullRequestEController();
  GitHub.listenToPullRequestButton("click",function(ev){ev.preventDefault();ev.stopPropagation();pull.execute();});
 }

 var actions=GitHub.getActions();  
 if(user!=null&&repo!=null&&actions!=null){
  var install=new InstallEController();
  install.execute("add");
 }

///branch semantics
 try{
 var button3=GitHub.getBranchButton();
 }catch(e){console.log(e);}
//console.log("Button branch:"+button3);
if(user!=null&&token!=null&&repo!=null&&button3!=null){
  var branching=new BranchEController();
  GitHub.listenToBranchButton("click",function(ev){ev.preventDefault();ev.stopPropagation();branching.execute(ev,ev.currentTarget.firstElementChild.textContent);});
 }



 var button4=GitHub.getBranchFilter();
//console.log("Form branch:"+button4);//.submit
if(user!=null&&token!=null&&repo!=null&&button4!=null){
  //var branchFilter=new BranchFilterEController();
  var branching= new BranchEController();
  GitHub.listenToBranchFilter("keydown",function(ev){
  	//console.log(ev.keyCode);
  	if(ev.keyCode==13){
  		ev.preventDefault();
  		ev.stopPropagation();  
  		console.log("KEYPRESS for "+ev.currentTarget.value);
  		branching.execute(ev,ev.currentTarget.value);
  		//branchFilter.execute(ev,GitHub.getParentBranch(),ev.currentTarget.value);
  	}
  });
 }

}; 



var BranchEController=function(){
 if (BranchEController.prototype._singletonInstance) {
  return BranchEController.prototype._singletonInstance;
 }
 BranchEController.prototype._singletonInstance = this;        
};


//BRANCH CONTROLLER FOR VIEW ARTIFACT

BranchEController.prototype.execute=function(ev, newb){

	console.log("New Branch ...");	
	var user=GitHub.getUserName(); 
	var repo=GitHub.getCurrentRepository(); 
	var par=GitHub.getParentBranch();
		var nBranch;
		if(ev.currentTarget.value){//evento por keydown
			nBranch=newb;
		}
		else{//evento por mouseclick
			var createBranch=newb.split(': ');
			nBranch=createBranch[1];
		} 
		console.log("parent: "+par);
		console.log("new one: "+nBranch);
		var token=GitHub.getAuthenticityToken();
	    var commit;

	Utils.XHR("/"+user+"/"+repo+"/branches",function(res){//post a new branch
		var viewContent="http://github.com/"+user+"/"+repo+"/tree/"+par;//parent branch URL
		if(par=='master'){
			Utils.XHR("/"+user+"/"+repo+"/new/"+nBranch,function(res){//create a new artefact.txt file
			 var commit = jQuery(res).find("input[name='commit']").attr("value");
			 Utils.XHR("/"+user+"/"+repo+"/create/"+nBranch,function(res){
			 window.location.href="/"+user+"/"+repo+"/tree/"+nBranch;
			 },"POST","authenticity_token="+encodeURIComponent(token)+"&commit="+commit+"&filename="+DeltaUtils.viewArtefactName+"&new_filename="+DeltaUtils.viewArtefactName+"&pr=&content_changed=true&value="+viewContent+"&message=&placeholder_message=&description=");    
			 },"POST","authenticity_token="+encodeURIComponent(token));
		}//end if
		else{//edit view Artefact (1) get the content (2)Add content
			Utils.XHR("/"+user+"/"+repo+"/blob/"+nBranch+"/"+DeltaUtils.viewArtefactName,function(res){
				//get here class line content!!!
				var prevContent=jQuery(res).find("div[class='line']").map(function() {return jQuery(this).text();}).toArray().join("\n");
				console.log("previous content: "+prevContent);
				var updatedContent=prevContent+"\n"+viewContent;
				console.log("updated content: "+updatedContent);
				Utils.XHR("/"+user+"/"+repo+"/edit/"+nBranch+"/"+DeltaUtils.viewArtefactName,function(res){
					commit = jQuery(res).find("input[name='commit']").attr("value");
					Utils.XHR("/"+user+"/"+repo+"/tree-save/"+nBranch+"/"+DeltaUtils.viewArtefactName,function(res){//https://github.com/letimome/miRepo/tree-save/nuevo/resultado.xml			
					  window.location.href="/"+user+"/"+repo+"/tree/"+nBranch;
					},"POST","authenticity_token="+encodeURIComponent(token)+"&filename="+DeltaUtils.viewArtefactName+"&new_filename="+DeltaUtils.viewArtefactName+"&commit="+commit+"&value="+updatedContent+"&placeholder_message=updated view Artefact");					
				},"GET");
			},"GET");
		}//end else
	},"POST","authenticity_token="+encodeURIComponent(token)+"&branch="+par+"&name="+nBranch+"&path=");	
};


//ORIGINAL BRANCH!! COMMENT IT :)

/*
BranchEController.prototype.execute=function(ev, newb){

	console.log("New Branch ...");	
	//console.log(ev.currentTarget.innerHTML);
	//console.log(ev.currentTarget.firstElementChild.textContent);
	var user=GitHub.getUserName(); 
	var repo=GitHub.getCurrentRepository(); 
	var par=GitHub.getParentBranch();
		var nBranch;
		if(ev.currentTarget.value){//evento por keydown
			nBranch=newb;
		}
		else{//evento por mouseclick
			var createBranch=newb.split(': ');
			nBranch=createBranch[1];
		} 
		console.log("parent: "+par);
		console.log("nexw one: "+nBranch);
		var token=GitHub.getAuthenticityToken();
	    var commit;
		Utils.XHR("/"+user+"/"+repo+"/branches",function(res){//post a new branch
		  Utils.XHR("/"+user+"/"+repo+"/blob/"+nBranch+"/"+DeltaUtils.ResultXMLName,function(res){//https://github.com/letimome/miRepo/nuevo/result.xml  
			var resultContent=jQuery(res).find("div[class='line']").map(function() {return jQuery(this).text();}).toArray().join("\n");
			Utils.XHR("/"+user+"/"+repo+"/edit/"+nBranch+"/"+DeltaUtils.ResultXMLName,function(res){//https://github.com/letimome/miRepo/edit/nuevo/result.xml   
				commit = jQuery(res).find("input[name='commit']").attr("value");
				console.log("content of the new base: "+resultContent);
				//1 borrar el base
				Utils.XHR("/"+user+"/"+repo+"/delete/"+nBranch+"/"+DeltaUtils.BaseXMLName ,function(res){//POST https://github.com/letimome/SimpleRobot/delete/qweqeqweqwe/base.xml, authentity
					Utils.XHR("/"+user+"/"+repo+"/blob/"+nBranch+"/"+DeltaUtils.BaseXMLName ,function(res){//POST https://github.com/letimome/SimpleRobot/blob/qweqeqweqwe/base.xml, _method:delete, auth, commit, placeholder: delete base.xml
						//2 el result pasa a ser el base
						Utils.XHR("/"+user+"/"+repo+"/tree-save/"+nBranch+"/"+DeltaUtils.ResultXMLName ,function(res){//https://github.com/letimome/miRepo/tree-save/nuevo/resultado.xml			
						  window.location.href="/"+user+"/"+repo+"/tree/"+nBranch;//console.log("Comit value 3: "+commit);	
						  //3 borrar conrenido del delta
						  Utils.XHR("/"+user+"/"+repo+"/tree-save/"+nBranch+"/"+DeltaUtils.DeltaXMLName ,function(res){//https://github.com/letimome/miRepo/tree-save/nuevo/resultado.xml			
						  },"POST","authenticity_token="+encodeURIComponent(token)+"&filename="+DeltaUtils.DeltaXMLName+"&new_filename="+DeltaUtils.DeltaXMLName+"&commit="+commit+"&value="+DeltaUtils.getDeltaFileHeaderForNewBranch(user,repo,par)+"&placeholder_message=Design yout new increment");					
						},"POST","authenticity_token="+encodeURIComponent(token)+"&filename="+DeltaUtils.BaseXMLName+"&new_filename="+DeltaUtils.BaseXMLName+"&commit="+commit+"&value="+resultContent+"&placeholder_message=Result from branch: "+par);
					},"POST","authenticity_token="+encodeURIComponent(token)+"&_method=delete"+"&commit="+commit+"&placeholder_message=Delete "+DeltaUtils.BaseXMLName);				
				},"POST","authenticity_token="+encodeURIComponent(token));
			},"POST","authenticity_token="+encodeURIComponent(token)); 
			},"GET");
		
		},"POST","authenticity_token="+encodeURIComponent(token)+"&branch="+par+"&name="+nBranch+"&path=");	
};
*/
var BranchFilterEController=function(){
 if (BranchFilterEController.prototype._singletonInstance) {
  return BranchFilterEController.prototype._singletonInstance;
 }
 BranchFilterEController.prototype._singletonInstance = this;        
};


BranchFilterEController.prototype.execute=function(ev,parentBranch,newBranch){
	//https://github.com/lemome88/SimpleRobot/branches?authenticity_token=Bp9OCHqst7Ww9sQj913AqYDBSvzkqlNpvJY57HF3vQs%3D&branch=master&name=hhhghghghghghg&path=
	//Location= https://github.com/lemome88/SimpleRobot/tree/hhhghghghghghg
	//post parametros: authenticity_token, branch (currentBrancg), name(new branch name), path?
	
	var key=ev.keyCode || e.which;
	//ALWAYS!!
		console.log("NEW BRANCH ");

};

var ForkEController=function(){
 if (ForkEController.prototype._singletonInstance) {
  return ForkEController.prototype._singletonInstance;
 }
 ForkEController.prototype._singletonInstance = this;        
};

ForkEController.prototype.execute=function(){    
 var user=GitHub.getUserName(); 
 var author=GitHub.getCurrentAuthor();  
 var repo=GitHub.getCurrentRepository(); 
 var token=GitHub.getAuthenticityToken();
 Utils.XHR("/"+author+"/"+repo+"/fork",function(){
 Utils.XHR("/"+user+"/"+repo+"/new/master",function(res){
 var commit = jQuery(res).find("input[name='commit']").attr("value");
 Utils.XHR("/"+user+"/"+repo+"/create/master",function(res){
 window.location.href="/"+user+"/"+repo;
 },"POST","authenticity_token="+encodeURIComponent(token)+"&commit="+commit+"&filename="+DeltaUtils.DeltaXMLName+"&new_filename="+DeltaUtils.DeltaXMLName+"&pr=&content_changed=true&value="+DeltaUtils.createDeltaXML(author,repo)+"&message=&placeholder_message=&description=");    
 },"POST","authenticity_token="+encodeURIComponent(token));
 },"POST","authenticity_token="+encodeURIComponent(token));
}; 

var PullRequestEController=function(){
 if (PullRequestEController.prototype._singletonInstance) {
  return PullRequestEController.prototype._singletonInstance;
 }
 PullRequestEController.prototype._singletonInstance = this;        
};

PullRequestEController.prototype.execute=function(){
	try{  
		 console.log("EXECUTING PULL REQUEST...");
		 var user=GitHub.getUserName(); 
		 var repo=GitHub.getCurrentRepository(); 
		 var token=GitHub.getAuthenticityToken();
		 var pullId=GitHub.getPullId();   
		 
		 var diff=GitHub.getDiffCode().join("\n");   
		 console.log("1");
		 Utils.XHR("/"+user+"/"+repo+"/blob/master/"+DeltaUtils.BaseXMLName,function(res){
		 	
		 var baseXML=jQuery(res).find("div[class='line']").map(function() {return jQuery(this).text();}).toArray().join("\n");
		 Utils.XHR("/"+user+"/"+repo+"/blob/master/"+DeltaUtils.DeltaXMLName,function(res){
		 var deltaXML=jQuery(res).find("div[class='line']").map(function() {return jQuery(this).text();}).toArray().join("\n");
		 Utils.XHR("/"+user+"/"+repo+"/pull/"+pullId+"/merge",function(){
		 Utils.XHR("/"+user+"/"+repo+"/edit/master/"+DeltaUtils.DeltaXMLName,function(res){
		 var commit = jQuery(res).find("input[name='commit']").attr("value");
		 Utils.XHR("/"+user+"/"+repo+"/tree-save/master/"+DeltaUtils.DeltaXMLName,function(res){
		 window.location.href="/"+user+"/"+repo;
		 },"POST","authenticity_token="+encodeURIComponent(token)+"&commit="+commit+"&filename="+DeltaUtils.DeltaXMLName+"&new_filename="+DeltaUtils.DeltaXMLName+"&pr=&content_changed=true&value="+ DeltaUtils.updateDelta(baseXML, deltaXML,diff)+"&message=&placeholder_message=&description="); //call to DeltaUtils.updateDelta!! Implement it   DeltaUtils.updateDelta(baseXML, deltaXML,diff)
		 },"POST","authenticity_token="+encodeURIComponent(token));
		 },"POST","authenticity_token="+encodeURIComponent(token));
		 },"GET");
		 },"GET");
		 console.log("  PULL REQUEST EXECUTED");
		 //InstallEController.prototype.execute=function("run");//compose files and create result
	}catch(e){
		console.log("ERROR IN EXECUTING PULL REQUEST "+e);
		}
}; 

var InstallEController=function(){
 if (InstallEController.prototype._singletonInstance) {
  return InstallEController.prototype._singletonInstance;
 }
 InstallEController.prototype._singletonInstance = this;        
};


InstallEController.prototype.execute=function(act){//compose files and create result

	console.log("holaaaa");
	var docTile= document.title;// e.g. lemome88/SimpleRobot at de (de is branch)
	var str=docTile.split("at ");
	var currentBranch=str[1];
	if(!currentBranch) currentBranch="master";
	console.log("current branch"+currentBranch);
	if(act=="add"){
		var obj=this;
		var install=new ActionView();
		install.setViewData({click:function(){obj.execute("run");}});
		var render=install.render();
		GitHub.injectIntoActions(render);

	}else if(act=="run"){
		 var user=GitHub.getUserName(); 
		 var repo=GitHub.getCurrentRepository();
		 var token=GitHub.getAuthenticityToken(); 	
		 var branch=currentBranch;//DeltaUtils.currentBranch;	
		 var configFileContent="";

		 /* (1) get the current viewArtefact.txt
		  	(2) get the branches involved for the composition
		  	(3) download branch files
		  	(4) execute composition with featureHouse
		  	(5) create the result-product branch
			*/
		 Utils.XHR("/"+user+"/"+repo+"/tree/"+branch+"/"+DeltaUtils.viewArtefactName,function(res){	// (1) getViewArtefact
			 	var artefactContent=jQuery(res).find("div[class='line']").map(function() {return jQuery(this).text();}).toArray().join("\n");
			 	var branches=artefactContent.split("\n");
			 	var branchCompose;
			 	var i=0;
			 	DeltaUtils.getBranchFiles(user,repo,branch);//save files from current branch
			 	for (i; i<branches.length;i++){ //(2) get the branched involved in the composition
			 		try{
				 		branchCompose=branches[i].split("/tree/");
				 		console.log("branch to compose: "+branchCompose[1]);
				 		configFileContent+=branchCompose[1]+"\n";
				 		//(3) download branches http//DownloadBranchFile(user, repo, branchCompose[1]); // e.g http://github.com/lemome88/HelloWorld/tree/master //wget .sh con parametro
				 		DeltaUtils.getBranchFiles(user,repo,branchCompose[1]);
			 		}catch(e){
			 			console.log("ERROR: "+e);
			 		}
			 	}
		  //(4) run composition 
			 	configFileContent+=branch+"\n";//el current branhc es el ultimo en aparecer
			 	RunFHComposition(configFileContent);	//create FH config file y el sh con el run 
			 	//New Branch to upload the result
				var listFiles=SearchFilesInLocalFolder("content/product/features");
				console.log("the files: "+listFiles);
				var len= listFiles.length;
				var productBranch=configFileContent.trim();
				var token=GitHub.getAuthenticityToken();
	    		var commit;
					Utils.XHR("/"+user+"/"+repo+"/branches",function(res){//post a new branch
						for (var i=0; i<len; i++){
							var file=listFiles[i];
							console.log("ahora: "+file);
							//console.log("ahora");
							var fileContent= ReadFilesFromLocal("content/product/features/"+listFiles[i]);	
							console.log("file content:"+fileContent);
							Utils.XHR("/"+user+"/"+repo+"/edit/"+productBranch+"/"+listFiles[i],function(res){
							commit = jQuery(res).find("input[name='commit']").attr("value");
								Utils.XHR("/"+user+"/"+repo+"/tree-save/"+productBranch+"/"+file,function(res){//https://github.com/letimome/miRepo/tree-save/nuevo/resultado.xml			
					 			 	window.location.href="/"+user+"/"+repo+"/tree/"+productBranch;
								},"POST","authenticity_token="+encodeURIComponent(token)+"&filename="+file+"&new_filename="+file+"&commit="+commit+"&value="+fileContent+"&placeholder_message=updated view Artefact");					
							},"GET");	
						}	
					},"POST","authenticity_token="+encodeURIComponent(token)+"&branch="+branch+"&name="+productBranch+"&path=");	

		 },"GET");
	}
};


/*

//COMPOSE FOR SCXML artefacts
InstallEController.prototype.execute=function(act){//compose files and create result
	var docTile= document.title;// e.g. lemome88/SimpleRobot at de (de is branch)
	//console.log("doc : "+document.title);
	var str=docTile.split("at ");
	//console.log("str: "+str[0]+", "+str[1]);
	var currentBranch=str[1];
	if(!currentBranch) currentBranch="master";
	console.log("current branch "+currentBranch);
	//DeltaUtils.currentBranch=currentBranch;

	if(act=="add"){
		var obj=this;
		var install=new ActionView();
		install.setViewData({click:function(){obj.execute("run");}});
		var render=install.render();
		GitHub.injectIntoActions(render);
	}else if(act=="run"){
		 var user=GitHub.getUserName(); 
		 var repo=GitHub.getCurrentRepository();
		 var token=GitHub.getAuthenticityToken(); 	
		 var branch=currentBranch;//DeltaUtils.currentBranch;	
		 Utils.XHR("/"+user+"/"+repo+"/blob/"+branch+"/"+DeltaUtils.BaseXMLName,function(res){		
			 	var baseXML=jQuery(res).find("div[class='line']").map(function() {return jQuery(this).text();}).toArray().join("\n");
			 	Utils.XHR("/"+user+"/"+repo+"/blob/"+branch+"/"+DeltaUtils.DeltaXMLName,function(res){
			 	var deltaXML=jQuery(res).find("div[class='line']").map(function() {return jQuery(this).text();}).toArray().join("\n");
		      	//RUN COMPOSER --llamar al código de componer
		      	console.log("RUN_Delta:\n"+deltaXML);
		      	console.log("RUN_Base:\n"+baseXML);

		      	console.log("Llamar al composer");
		      	//runComposition  DeltaComposer
		      	if(DeltaUtils.validateSCXML(baseXML,"base")){
		      		if(DeltaUtils.validateSCXML(deltaXML,"delta")){
		      			var newStateChart=DeltaComposer(deltaXML,baseXML);
		      			console.log("despues de llamar a DeltaComposer");
		      			var st=newStateChart.split(">")
		      			var joined=st.join(">\n");
		      			console.log("New StateChart: "+newStateChart);
		      			console.log("aquiiiiiii");
		      		}
		      		else{
		      			console.log("ERROR VALIDATING the delta XML");
		      			alert("Error validating the delta");
		      		}
		      	}else{
		      		console.log("ERROR VALIDATING the base XML");
		      		alert("Error validating the base");
		      	}
		 		Utils.XHR("/"+user+"/"+repo+"/new/"+branch,function(res){
 				var commit = jQuery(res).find("input[name='commit']").attr("value");
 				Utils.XHR("/"+user+"/"+repo+"/create/"+branch,function(res){
 				window.location.href="/"+user+"/"+repo;
				},"POST","authenticity_token="+encodeURIComponent(token)+"&commit="+commit+"&filename="+DeltaUtils.ResultXMLName+"&new_filename="+DeltaUtils.ResultXMLName+"&pr=&content_changed=true&value="+joined+"&message=&placeholder_message=&description=resultFile");    
 				},"POST","authenticity_token="+encodeURIComponent(token));
		 	},"GET");
		 },"GET");
	}
};

*/

/*function  getCowpathURLCoded(xmlCode){
	try{
		var str2="http://webaugmentation.org/cowpath/";
		var raw= RawDeflate.deflate(unescape(encodeURIComponent(xmlCode)));
		var str=btoa(raw);
		
		contentXMLCoded=str;
		return str2+"?CONTENT="+str;      
	
	}catch(err){
		console.log("error: "+err.message);}  
	
}*/


new LoadEController().init();

Utils={};
Utils.XHR=function(url,f,method,params){
 var xhr = new XMLHttpRequest();
 xhr.open(method?method:"GET", url, true);
 if(params!=null){
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 } 
 xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
        debugger;
      f(xhr.responseText,xhr);
    } else {
      console.error(xhr.statusText);
    }
  }
 };
 xhr.onerror = function (e) {
     debugger;
  f(null,xhr);
  console.error(xhr.statusText);
 };
 xhr.send(params);       
}

var DeltaUtils={};
DeltaUtils.currentBranch="master";
DeltaUtils.BaseXMLName="base.xml";
DeltaUtils.DeltaXMLName="delta.xml";
DeltaUtils.ResultXMLName="result.xml";   
DeltaUtils.viewArtefactName="viewArtefact.txt";


DeltaUtils.createDeltaXML=function(author,repo){
 var delta='<delta id="delta_name" core="https://github.com/'+author+'/'+repo+'">\n';
 delta=delta+'</delta>';
 return delta;
}

DeltaUtils.getDeltaFileHeaderForNewBranch=function(user,repo,parent){
	var delta='<delta id="delta_name" core="https://github.com/'+user+'/'+repo+'/tree/'+parent+'">\n';
 delta=delta+'</delta>';
 console.log("in getDeltaFileHeaderForNewBranch");
 return delta;
}

//Added by me:Leti. This function is called everytime a pull request is confirmed
DeltaUtils.updateDelta=function(baseXML, deltaXML,diff){//Needs to call to GWT code to obtain the new delta
	console.log("Vamos a hacer update del DELTA!:");
    console.log("Diff Content: "+diff);
    console.log("Delta code:\n"+deltaXML);
    console.log("Base:\n"+baseXML);
   //unsafeWindow.diff=diff;
    //unsafeWindow.deltaXML=deltaXML;
    //unsafeWindow.baseXML=baseXML;
    //unsafeWindow.updateDelta=updateDelta;
	var newDelta=updateDelta(baseXML,diff,deltaXML);//call GWT code to function: String updateDelta(String base, String diffFile, String deltaFile )
	console.log("New Delta\n:"+newDelta);
	//alert("Your delta is updated!");
	//if(newDelta==null) return deltaXML;
	return newDelta;

}

DeltaUtils.sleep=function(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
}

DeltaUtils.getBranchFiles=function(user,repo,branch){
	console.log("getBranchFiles");
	try{
		var fileName;
		 Utils.XHR("/"+user+"/"+repo+"/tree/"+branch,function(res){	//GET THE BRANCH
		 	//console.log("inside");
		 	var listFiles=jQuery(res).find("td[class='content']").map(function() {return jQuery(this).text();}).toArray();//.join("\n")
		 	//console.log(listFiles[0].trim());
		 	var i=0;
		 	//console.log("len: "+listFiles.length);
		 	for(i=0;i<listFiles.length;i++){
		 		fileName=listFiles[i].trim();
		 		//console.log("fileName:"+fileName);
		 		if(fileName!=DeltaUtils.viewArtefactName)
		 			Utils.XHR("/"+user+"/"+repo+"/blob/"+branch+"/"+fileName,function(res){//Go to files 
						var fileContent=jQuery(res).find("div[class='line']").map(function() {return jQuery(this).text();}).toArray().join("\n");					
						var file=jQuery(res).find("strong[class='final-path']").map(function() {return jQuery(this).text();}).toArray().join("\n");					
						//console.log(file);
						SaveToDisk(fileContent, file,branch);
					},"GET");
		 	}
		 },"GET");
	}catch(e){
		console.log("ERROR in getBranchFiles:"+e);
	}

}





/**************        SCXML checkings   **************************************************/
/********************************************//********************************************/
/********************************************//********************************************/
/********************************************//********************************************/
/********************************************//********************************************/
/********************************************//********************************************/
/********************************************//********************************************/
/********************************************//********************************************/
/********************************************//********************************************/


/*Firefox extension Components*/

DeltaUtils.validateSCXML=function(fileToValidate,str){
//script-compiler

	return FileValidation(fileToValidate,str);
}

/*
DeltaUtils.validateSCXML2=function(scxml,name){
	var arrayStates=[];
	var numStates=0;
	var parser=new DOMParser();	 
	var xmlDoc=parser.parseFromString(scxml,"text/xml");

	var nodes=xmlDoc.evaluate("//scxml:state",xmlDoc,DeltaUtils.scxmlResolver,6, null); 
	for(var i=0;i<nodes.snapshotLength;i++){
		var node=nodes.snapshotItem(i);
		var id=node.getAttribute("id");
		if ((id=="") ||(id==null)||(id==undefined)) 
		{
			alert("State 'id' value is not correct!!!!");
			return false;
		}else{
			arrayStates[numStates]=id;
			numStates=numStates+1;
		}
	}
	if ( DeltaUtils.checkDuplicateStateId(arrayStates)==false){
		alert("Duplicate states exist!!!!");
		return false;
	}
	var arrayTargets=[];
	var numTargets=0;													//result type 6 is UNORDERED_NODE_SNAPSHOT_TYPE
	var nodes=xmlDoc.evaluate("//scxml:state//scxml:transition",xmlDoc,DeltaUtils.scxmlResolver,6, null); 
	for(var i=0;i<nodes.snapshotLength;i++){
		var node=nodes.snapshotItem(i);
		var cond=node.getAttribute("cond");
		var event=node.getAttribute("event");
		var target=node.getAttribute("target");
		if ((cond=="") ||(cond==null)||(cond==undefined)) 
		{
			alert("Transition 'cond' value is not correct!!!!");
			return false;
		}
		if ((event=="") ||(event==null)||(event==undefined)) 
		{
			alert("Transition 'event' value is not correct!!!!");
			return false;
		}
		if ((target=="") ||(target==null)||(target==undefined)) 
		{
			alert("Transition 'target' value is not correct!!!!");
			return false;
		}else{
			arrayTargets[numTargets]=id;
			numTargets=numTargets+1;
		}		
	}	
	if (DeltaUtils.checkExistsTargetAsState(arrayStates, arrayTargets)==false){
		alert("Target not exists as state!!!!");
		return false;
	}	
	return true;
}

DeltaUtils.scxmlResolver=function(ns){
	if(ns=="scxml") 	return "http://www.w3.org/2005/07/scxml";
}


DeltaUtils.checkExistsTargetAsState=function(arrayStates, arrayTargets){
	for (var i=0;i<arrayTargets.length;i++){
		var target=arrayTargets[i];
		var find=false;
		for (var j=0;j<arrayStates.length;j++){
			var stateId=arrayStates[j];
			if (target==stateId){
				find=true;
			}
		}
		if (find==false) return false;
	}
	return true;
}

DeltaUtils.checkDuplicateStateId=function(arrayStates){
	for (var i=0;i<arrayStates.length;i++){
		var stateIdi=arrayStates[i];
		for (var j=0;j<arrayStates.length;j++){
			if (j!=i){
				var stateIdj=arrayStates[j];
				if (stateIdi==stateIdj) return false;
			}
		}
	}
	return true;
}*/
	