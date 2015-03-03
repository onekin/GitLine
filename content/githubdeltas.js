// ==UserScript==
// @name           GitHub Deltas
// @namespace      letiiiii
// @include        https://github.com/*
// @description    My description
// ==/UserScript== */


/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
//**
jQuery.noConflict();



/**********************************************************************/
/**********************************************************************/
/*******   GitHub API v3   ********************************************/
//				https://github.com/k33g/gh3/
/**********************************************************************/

(function () {

	//var Gh3 = this.Gh3 = {}
	var root = this
	,	Gh3
	,	Kind
	,	Base64;

	if (typeof exports !== 'undefined') {
		Gh3 = exports;
	} else {
		Gh3 = root.Gh3 = {};
	}

	Gh3.VERSION = '1.0.0'; //2014.04.20

	//Object Model Tools (helpers) like Backbone
	Kind = function(){};

	Kind.inherits = function (parent, protoProps, staticProps) {
		var child
			, ctor = function(){}
			, merge = function (destination, source) {
				for (var prop in source) {
					destination[prop] = source[prop];
				}
		};
		//constructor ....
		if (protoProps && protoProps.hasOwnProperty('constructor')) {
			child = protoProps.constructor;
		} else {
			child = function(){ parent.apply(this, arguments); };
		}

		//inherits from parent
		merge(child, parent);

		ctor.prototype = parent.prototype;
		child.prototype = new ctor();

		//instance properties
		if(protoProps) merge(child.prototype, protoProps);

		//static properties
		if(staticProps) merge(child, staticProps);

		// Correctly set child's `prototype.constructor`.
		child.prototype.constructor = child;

		// Set a convenience property in case the parent's prototype is needed later.
		child.__super__ = parent.prototype;

		return child

	};
	Kind.extend = function (protoProps, staticProps) {
		var child = Kind.inherits(this, protoProps, staticProps);
		child.extend = this.extend;
		return child;
	};

	Base64 = { //http://www.webtoolkit.info/javascript-base64.html

		// private property
		_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

		// public method for decoding
		decode : function (input) {
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;

			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

			while (i < input.length) {

				enc1 = this._keyStr.indexOf(input.charAt(i++));
				enc2 = this._keyStr.indexOf(input.charAt(i++));
				enc3 = this._keyStr.indexOf(input.charAt(i++));
				enc4 = this._keyStr.indexOf(input.charAt(i++));

				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;

				output = output + String.fromCharCode(chr1);

				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}

			}

			output = Base64._utf8_decode(output);

			return output;

		},

		encode : function (input) {
				var output = "";
				var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
				var i = 0;

				input = Base64._utf8_encode(input);

				while (i < input.length) {

						chr1 = input.charCodeAt(i++);
						chr2 = input.charCodeAt(i++);
						chr3 = input.charCodeAt(i++);

						enc1 = chr1 >> 2;
						enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
						enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
						enc4 = chr3 & 63;

						if (isNaN(chr2)) {
								enc3 = enc4 = 64;
						} else if (isNaN(chr3)) {
								enc4 = 64;
						}

						output = output +
						this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
						this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

				}

				return output;
		},

		// private method for UTF-8 decoding
		_utf8_decode : function (utftext) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;

			while ( i < utftext.length ) {

				c = utftext.charCodeAt(i);

				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				}
				else if((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i+1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				}
				else {
					c2 = utftext.charCodeAt(i+1);
					c3 = utftext.charCodeAt(i+2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}

			}

			return string;
		},

		// private method for UTF-8 encoding
		_utf8_encode : function (string) {
				string = string.replace(/\r\n/g,"\n");
				var utftext = "";

				for (var n = 0; n < string.length; n++) {

						var c = string.charCodeAt(n);

						if (c < 128) {
								utftext += String.fromCharCode(c);
						}
						else if((c > 127) && (c < 2048)) {
								utftext += String.fromCharCode((c >> 6) | 192);
								utftext += String.fromCharCode((c & 63) | 128);
						}
						else {
								utftext += String.fromCharCode((c >> 12) | 224);
								utftext += String.fromCharCode(((c >> 6) & 63) | 128);
								utftext += String.fromCharCode((c & 63) | 128);
						}

				}

				return utftext;
		}

	}


	Gh3.Base64 = Base64;

	if (window.XDomainRequest != null) {
		try {
			new XDomainRequest()
			jQuery.support.cors = true
			jQuery.ajaxSetup.xhr = function() { return new XDomainRequest() }
		} catch (e) {}
	}

	Gh3.Helper = Kind.extend({

	},{
		protocol : "https",
		domain : "api.github.com",
		callHttpApi : function (apiParams) {
			//window.console.log("api params");
			//window.console.log(apiParams);
			apiParams.url = Gh3.Helper.protocol + "://" + Gh3.Helper.domain + "/" + apiParams.service+"?access_token="+DeltaUtils.getUserAccessToken();
			//apiParams.access_token=DeltaUtils.getUserAccessToken;

			if (jQuery.support.cors) {

				//apiParams.headers = {Origin: "api.github.com" }//not needed, the browser will do it
				
				//apiParams.headers={Access_Token: DeltaUtils.getUserAccessToken()}
				
				
				var success = apiParams.success
				if (jQuery.isFunction(success)) {
					apiParams.success = function (data, textStatus, jqXHR) {
						success.call(this, {data: data}, textStatus, jqXHR)
					}
				}
			} else {
				apiParams.dataType = 'jsonp';

			}
			apiParams.cache=false;
			jQuery.ajax(apiParams);
		}
	});

	Gh3.Users = Kind.extend({

	},{//static members
		users : [],
		search : function (keyword, pagesInfo, callback) {
			Gh3.Users.users = [];
			Gh3.Helper.callHttpApi({
				service : "legacy/user/search/"+keyword,
				data : pagesInfo,
				//beforeSend: function (xhr) { xhr.setRequestHeader ("rel", paginationInfo); },
				success : function(res) {
					_.each(res.data.users, function (user) {
						Gh3.Users.users.push(new Gh3.User(user.login, user));
					});

					if (callback) callback(null, Gh3.Users);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		reverse : function () {
			Gh3.Users.users.reverse();
		},
		sort : function (comparison_func) {
			if (comparison_func) {
				Gh3.Users.users.sort(comparison_func);
			} else {
				Gh3.Users.users.sort();
			}
		},
		getAll : function() { return Gh3.Users.users; },
		getByName : function (name) {
			return _.find(Gh3.Users.users, function (item) {
				return item.name == name;
			});
		},
		each : function (callback) {
			_.each(Gh3.Users.users, function (user) {
				callback(user);
			});
		},
		filter : function (comparator) {
			return _.filter(Gh3.Users.users, comparator);
		}

	});

	Gh3.User = Kind.extend({

		constructor : function (login, user_infos) {

			if (user_infos) {
				for(var prop in user_infos) {
					this[prop] = user_infos[prop];
				}
			}

			if (login) {
				this.login = login;
			} else {
				throw "login !";
			}
		},
		fetch : function (callback) {
			var that = this;

			Gh3.Helper.callHttpApi({
				service : "users/"+that.login,
				success : function (res) {
					for(var prop in res.data) {
						that[prop] = res.data[prop];
					}
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		}


	},{});


	/*Gists*/

	Gh3.GistComment = Kind.extend({
		constructor : function (gistCommentData) {
			for(var prop in gistCommentData) {
				this[prop] = gistCommentData[prop];
			}
		}
	},{});

	Gh3.Gist = Kind.extend({
		constructor : function (gistData) {
			for(var prop in gistData) {
				this[prop] = gistData[prop];
			}
		},
		fetchContents : function (callback) {
			var that = this;
			that.files = [];

			Gh3.Helper.callHttpApi({
				service : "gists/"+that.id,
				success : function(res) {

					for(var file in res.data.files) {
						that.files.push(res.data.files[file]);
					}

					delete res.data.files;

					for(var prop in res.data) {
						that[prop] = res.data[prop];
					}
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});


		},
		fetchComments : function (callback) {
			var that = this;
			that.comments = [];


			Gh3.Helper.callHttpApi({
				service : "gists/"+that.id+"/comments",
				success : function(res) {
					_.each(res.data, function (comment) {
						that.comments.push(new Gh3.GistComment(comment));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		getFileByName : function (name) {
			return _.find(this.files, function (file) {
				return file.filename == name;
			});
		},
		getFiles : function () {
			return this.files;
		},
		eachFile : function (callback) {
			_.each(this.files, function (file) {
				callback(file);

			});
		},
		getComments : function () { return this.comments; },
		eachComment : function (callback) {
			_.each(this.comments, function (comment) {
				callback(comment);
			});
		},
		filterComments : function (comparator) {
			return _.filter(this.comments, comparator);
		}

	},{});

	Gh3.Gists = Kind.extend({//http://developer.github.com/v3/gists/
		constructor : function (ghUser) {
			if (ghUser) this.user = ghUser;
			this.gists = []
		},
		fetch : function (pagesInfo, paginationInfo, callback) {//http://developer.github.com/v3/#pagination
			var that = this;

			Gh3.Helper.callHttpApi({
				service : "users/"+that.user.login+"/gists",
				data : pagesInfo,
				//beforeSend: function (xhr) { xhr.setRequestHeader ("rel", paginationInfo); }, --> why (pagination)
				success : function(res) {
					_.each(res.data, function (gist) {
						that.gists.push(new Gh3.Gist(gist));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},

		getGists : function () { return this.gists; },
		eachGist : function (callback) {
			_.each(this.gists, function (gist) {
				callback(gist);
			});
		},
		filter : function (comparator) {
			return _.filter(this.gists, comparator);
		}

	},{});


	Gh3.Commit = Kind.extend({
		constructor : function (commitInfos) {
			//window.console.log("commitInfos");
			//window.console.log(commitInfos);
			this.author = commitInfos.author;
			this.author.email = commitInfos.commit.author.email;
			this.author.name = commitInfos.commit.author.name;
			this.date =	commitInfos.commit.author.date;
			this.message = commitInfos.commit.message;
			this.sha = commitInfos.sha;
			this.url = commitInfos.url;
			this.parents=commitInfos.parents;
			//this.repositoryName=commitInfos.repository.name;

		},
		getFileByName : function (name) {
			return _.find(this.contents, function (item) {
			return item.name == name && item.type == "file";
			});
		},
		getDirByName : function (name) {
			return _.find(this.contents, function (item) {
			return item.name == name && item.type == "dir";
			});
		},
		eachContent : function (callback) {
			_.each(this.contents, function (commit) {
			callback(commit);
			});
		},
		fetchContents : function (repositoryName,callback) { //see how to refactor with Gh3.Dir
			var that = this;
			that.contents = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.author.login+"/"+repositoryName+"/contents",//?ref="+that.sha,
				data : {ref:that.sha },
				success : function(res) {
					_.each(res.data, function (item) {
					//window.console.log("item "+item);
					if (item.type == "file") that.contents.push(new Gh3.File(item, that.author, repositoryName, that.sha));
					if (item.type == "dir") that.contents.push(new Gh3.Dir(item, that.author, repositoryName, that.sha));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});
		}
	},{});

	Gh3.ItemContent = Kind.extend({
		constructor : function (contentItem, ghUser, repositoryName, branchName) {
			for(var prop in contentItem) {
				this[prop] = contentItem[prop];
			}
			if (ghUser) this.user = ghUser;
			if (repositoryName) this.repositoryName = repositoryName;
			if (branchName) this.branchName = branchName;
		}

	},{});

	Gh3.File = Gh3.ItemContent.extend({
		constructor : function (contentItem, ghUser, repositoryName, branchName) {
			Gh3.File.__super__.constructor.call(this, contentItem, ghUser, repositoryName, branchName);
		},
		fetchContent : function (callback) {
			var that = this;

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.repositoryName+"/contents/"+that.path,
				data : {ref:that.branchName },
				success : function(res) {
					that.content = res.data.content;

					that.rawContent = Base64.decode(res.data.content);
					//window.console.log("rawContent for: " +that.branchName);
					//window.console.log(that.rawContent);
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		fetchCommits : function (callback) {//http://developer.github.com/v3/repos/commits/
			var that = this;
			that.commits = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.repositoryName+"/commits",
				data : {path: that.path },
				success : function(res) {
					_.each(res.data, function (commit) {
						that.commits.push(new Gh3.Commit(commit));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		getRawContent : function() { return this.rawContent; },
		getCommits : function () { return this.commits; },
		getLastCommit : function () {
			return this.commits[0];
		},
		getFirstCommit : function () {
			return this.commits[this.commits.length-1];
		},
		eachCommit : function (callback) {
			_.each(this.commits, function (branch) {
				callback(branch);
			});
		},
		filterCommits : function (comparator) {
			return _.filter(this.commits, comparator);
		},
		reverseCommits : function () {
			this.commits.reverse();
		},
		sortCommits: function (comparison_func) {
			if (comparison_func) {
				this.commits.sort(comparison_func);
			} else {
				this.commits.sort();
			}
		}
	},{});


	Gh3.Dir = Gh3.ItemContent.extend({
		constructor : function (contentItem, ghUser, repositoryName, branchName) {
			Gh3.Dir.__super__.constructor.call(this, contentItem, ghUser, repositoryName, branchName);
		},
		fetchContents : function (callback) {
			var that = this;
			that.contents = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.repositoryName+"/contents/"+that.path,
				data : {ref: that.branchName },
				success : function(res) {
					_.each(res.data, function (item) {
						if (item.type == "file") that.contents.push(new Gh3.File(item, that.user, that.repositoryName, that.branchName));
						if (item.type == "dir") that.contents.push(new Gh3.Dir(item, that.user, that.repositoryName, that.branchName));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		reverseContents : function () {
			this.contents.reverse();
		},
		sortContents : function (comparison_func) {
			if (comparison_func) {
				this.contents.sort(comparison_func);
			} else {
				this.contents.sort();
			}
		},
		getContents : function() { return this.contents; },
		getFileByName : function (name) {
			return _.find(this.contents, function (item) {
				return item.name == name && item.type == "file";
			});
		},
		getDirByName : function (name) {
			return _.find(this.contents, function (item) {
				return item.name == name && item.type == "dir";
			});
		},
		eachContent : function (callback) {
			_.each(this.contents, function (branch) {
				callback(branch);
			});
		},
		filterContents : function (comparator) {
			return _.filter(this.contents, comparator);
		}

	},{});

	Gh3.Branch = Kind.extend({
		constructor : function (name, sha, url, ghUser, repositoryName) {
		if (name) this.name = name;
		if (sha) this.sha = sha;
		if (url) this.url = url;

		if (ghUser) this.user = ghUser;
		if (repositoryName) this.repositoryName = repositoryName;

		},

		fetchContents : function (callback) { //see how to refactor with Gh3.Dir
			var that = this;
			that.contents = [];

			Gh3.Helper.callHttpApi({
			service : "repos/"+that.user.login+"/"+that.repositoryName+"/contents",//?ref="+that.name,
			data : {ref: that.name },
			success : function(res) {
			_.each(res.data, function (item) {

			if (item.type == "file") that.contents.push(new Gh3.File(item, that.user, that.repositoryName, that.name));
			if (item.type == "dir") that.contents.push(new Gh3.Dir(item, that.user, that.repositoryName, that.name));
			});
			if (callback) callback(null, that);
			},


			error : function (res) {
				window.console.log("ERROR re:"+res);
				window.console.log(res);
			if (callback) callback(new Error(res.responseJSON.message),res);
			}
			});

		},
		fetchCommits : function (callback) {//http://developer.github.com/v3/repos/commits/
			window.console.log("fetch commits for branch "+this.name+" and sha:"+this.sha);
			var that = this;
			that.commits = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.repositoryName+"/commits",
				data : {sha: that.sha },
				success : function(res) {
					_.each(res.data, function (commit) {
						that.commits.push(new Gh3.Commit(commit));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		fetchSingleCommitBySha : function (sha, callback) {//http://developer.github.com/v3/repos/commits/
			window.console.log("fetch commits from Sha Gh3 Repository");
			var that = this;
			that.commits = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/commits/"+sha,
				data : {},
				success : function(res) {
					_.each(res.data, function (commit) {
						that.commits.push(new Gh3.Commit(commit));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		getCommits : function () { 
			window.console.log("branch "+this.name+" returning commits");
			return this.commits; },
		getLastCommit : function () {
			return this.commits[0];
		},
		getCommitBySha : function (shaId) {
			return _.find(this.commits, function (commit) {
				if (commit.sha == shaId)//that.s
					return commit;
			});
		},
		reverseContents : function () {
			this.contents.reverse();
		},
		sortContents : function (comparison_func) {
			if (comparison_func) {
			this.contents.sort(comparison_func);
			} else {
			this.contents.sort();
			}
		},
		getContents : function() { return this.contents; },
		getFileByName : function (name) {
			return _.find(this.contents, function (item) {
			return item.name == name && item.type == "file";
			});
		},
		getDirByName : function (name) {
			return _.find(this.contents, function (item) {
			return item.name == name && item.type == "dir";
			});
		},
		eachContent : function (callback) {
			_.each(this.contents, function (branch) {
			callback(branch);
			});
		},
		filterContents : function (comparator) {
			return _.filter(this.contents, comparator);
		}

		},{});

	Gh3.Issue = Kind.extend({
		constructor : function (number, ghUser, repositoryName, infos) {
			if (number) this.number = number;

			if (ghUser) this.user = ghUser;
			if (repositoryName) this.repositoryName = repositoryName;

			if (infos) {
				for(var prop in infos) {
					this[prop] = infos[prop];
				}
			}
		},

		fetchContents : function (callback) { //see how to refactor with Gh3.Dir
			var that = this;

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.repositoryName+"/issues/"+that.id,
				success : function(res) {
					_.each(res.data, function (item) {
						for(var prop in res.data) {
							that[prop] = res.data[prop];
						}
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		}

	},{});

	Gh3.Pull=Kind.extend({//Mine new Gh3.Pull(pull.number, pull.title, pull.body, pull.state, pull.user, that.name, pull));
		constructor : function (number, title, body, state, ghUser, repositoryName, infos){
			if (number) this.number = number;
			if (title) this.title = title;
			if (body) this.body = body;
			if (state) this.state = state

			if (ghUser) this.user = ghUser;
			if (repositoryName) this.repositoryName = repositoryName;

			if (infos) {
				for(var prop in infos) {
					this[prop] = infos[prop];
				}
			}

		},
		fetchContents : function (callback) {
			var that = this;

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.repositoryName+"/pulls/"+that.id,
				success : function(res) {
					_.each(res.data, function (item) {
						for(var prop in res.data) {
							that[prop] = res.data[prop];
						}
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		}

	},{});

	Gh3.Repository = Kind.extend({
		constructor : function (name, ghUser, infos) {

			if (infos) {
				for(var prop in infos) {
					this[prop] = infos[prop];
				}
			}

			if (name) this.name = name;

			if (ghUser) this.user = ghUser;

		},
		fetch : function (callback) {
			var that = this;
			//TODO test user.login & name
			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name,
				success : function(res) {
					window.console.log("success fetching repo api "+res);
					for(var prop in res.data) {
						that[prop] = res.data[prop];
					}
					if (callback) callback(null, that);
				},
				error : function (res) {
					window.console.log("erorr in fetching repo api "+res);
					window.console.log(res);
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},

		/*fetchFork : function (callback){
			var that = this;
			that.forks = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/forks",
				success : function(res) {
					_.each(res.data, function (branch) {
						that.forks.push(new Gh3.Repostiory(repository.name, that.user) );
					});

					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},*/



			fetchFork : function (callback){
			var that = this;
			that.forks = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/forks",
				success : function(res) {
					_.each(res.data, function (fork) {
						that.forks.push(new Gh3.Repository(fork.name, fork.owner, fork.infos) );
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},

		fetchBranches : function (callback) {
			var that = this;
			that.branches = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/branches",
				success : function(res) {
					_.each(res.data, function (branch) {
						that.branches.push(new Gh3.Branch(branch.name, branch.commit.sha, branch.commit.url, that.user, that.name));
					});

					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		
		fetchIssues : function (callback) {
			var that = this;
			that.issues = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/issues",
				data : {sort: "updated"},
				success : function(res) {
					_.each(res.data, function (issue) {
						that.issues.push(new Gh3.Issue(issue.number, issue.user, that.name, issue));
					});

					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});
		},

		fetchPullRequest : function (callback) {
			var that = this;
			that.pulls = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/pulls",
				data : {sort: "updated"},
				success : function(res) {
					_.each(res.data, function (pull) {
						that.pulls.push(new Gh3.Pull(pull.number, pull.title, pull.body, pull.state, pull.user, that.name, pull));
					});

					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},


		fetchClosedIssues : function (callback) {
			var that = this;
			that.issues = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/issues",
				data : {state: "closed", sort: "updated"},
				success : function(res) {
					_.each(res.data, function (issue) {
						that.issues.push(new Gh3.Issue(issue.number, issue.user, that.name, issue));
					});

					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		fetchCommits : function (callback) {//http://developer.github.com/v3/repos/commits/
			window.console.log("dentroooo fetchCommits para Gh3 Repository "+this.name);
			var that = this;
			that.commits = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/commits",
				//data : {},
				success : function(res) {
					_.each(res.data, function (commit) {
						that.commits.push(new Gh3.Commit(commit));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		fetchSingleCommitBySha : function (sha, callback) {//http://developer.github.com/v3/repos/commits/
			window.console.log("fetch commits from Sha Gh3 Repository");
			var that = this;
			that.commits = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/commits/"+sha,
				//data : {path: that.path },
				success : function(res) {
					_.each(res.data, function (commit) {
						that.commits.push(new Gh3.Commit(commit));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		fetchCommitsFromSha : function (sha, callback) {//http://developer.github.com/v3/repos/commits/
			window.console.log("fetch commits for repo "+this.name+ " with sha:"+sha);
			var that = this;
			that.commits=[];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/commits",//?sha="+sha,
				data : {sha: that.sha },
				success : function(res) {
					_.each(res.data, function (commit) {
						that.commits.push(new Gh3.Commit(commit));
						//window.console.log(commit);
						//return (new Gh3.Commit(commit));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		fetchBlob: function(sha, callback){
			window.console.log("fetch blob");
			var that = this;
			that.blob=[];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/blobs",//?sha="+sha,
				data : {sha: sha },
				success : function(res) {
					_.each(res.data, function (commit) {
						that.commits.push(new Gh3.Commit(commit));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		/*getCommitsFromShaSinceUntil : function (sha,since,until, callback) {//http://developer.github.com/v3/repos/commits/
			window.console.log("getCommitsFromShaSinceUntil Gh3 Repository");
			var that = this;
			that.commits = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/commits?sha="+sha+"&until="+until+"&since="+since,
				data : {path: that.path },
				success : function(res) {
					_.each(res.data, function (commit) {
						if (commit.date>since && commit.date<until) 
						that.commits.push(new Gh3.Commit(commit));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},*/
		getBranches : function () { return this.branches; },
		getForks : function () {return this.forks;},
		getPullRequests : function () { return this.pulls; },
		getBranchByName : function (name) {
			return _.find(this.branches, function (branch) {
				return branch.name == name;
			});
		},
		eachBranch : function (callback) {
			_.each(this.branches, function (branch) {
				callback(branch);
			});
		},
		reverseBranches : function () {
			this.branches.reverse();
		},
		sortBranches : function (comparison_func) {
			if (comparison_func) {
				this.branches.sort(comparison_func);
			} else {
				this.branches.sort();
			}
		},
		getIssues : function () { return this.issues; },
		getIssueByNumber : function (num) { 
			return _.find(this.issues, function (issue) {
				if (issue.number == num)
					return issue;
			});
		 },

		eachIssue : function (callback) {
			_.each(this.issues, function (issue) {
				callback(issue);
			});
		},
		reverseIssues : function () {
			this.issues.reverse();
		},	
		getCommits : function () { return this.commits; },
		getCommitBySha : function (sha) {
			return _.find(this.commits, function (commit) {
				if (commit.sha == sha)
					return commit;
			});
		},
		getLastCommit : function () {
			return this.commits[0];
		},
		getFirstCommit : function () {
			return this.commits[this.commits.length-1];
		},
		eachCommit : function (callback) {
			_.each(this.commits, function (branch) {
			callback(branch);
		});
		},
		filterCommits : function (comparator) {
			return _.filter(this.commits, comparator);
		},
		reverseCommits : function () {
			this.commits.reverse();
		},
		sortCommits: function (comparison_func) {
			if (comparison_func) {
			this.commits.sort(comparison_func);
			} else {
			this.commits.sort();
			}
		}

	},{});

	//TODO: Repositories for an organization

	Gh3.Repositories = Kind.extend({//http://developer.github.com/v3/repos/
		constructor : function (ghUser) {
			if (ghUser) this.user = ghUser;
		},
		//List user repositories
		fetch : function (pagesInfoAndParameters, paginationInfo, callback) {
			var that = this;
			that.repositories = [];

			Gh3.Helper.callHttpApi({
				service : "users/"+that.user.login+"/repos",
				data : pagesInfoAndParameters,
				//beforeSend: function (xhr) { xhr.setRequestHeader ("rel", paginationInfo); }, --> why ? (pagination)
				success : function(res) {
					_.each(res.data, function (repository) {
						that.repositories.push(new Gh3.Repository(repository.name, that.user));
					});

					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});
		},
		reverseRepositories : function () {
			this.repositories.reverse();
		},
		sortRepositories : function (comparison_func) {
			if (comparison_func) {
				this.repositories.sort(comparison_func);
			} else {
				this.repositories.sort();
			}
		},
		getRepositories : function() { return this.repositories; },
		getRepositoryByName : function (name) {
			return _.find(this.repositories, function (item) {
				return item.name == name;
			});
		},

		eachRepository : function (callback) {
			_.each(this.repositories, function (repository) {
				callback(repository);
			});
		},
		filterRepositories : function (comparator) {
			return _.filter(this.repositories, comparator);
		}


	},{//static members
		repositories : [],
		search : function (keyword, pagesInfo, callback) {
			Gh3.Repositories.repositories = [];
			Gh3.Helper.callHttpApi({
				service : "legacy/repos/search/"+keyword,
				data : pagesInfo,
				//beforeSend: function (xhr) { xhr.setRequestHeader ("rel", paginationInfo); },
				success : function(res) {
					//window.console.log("*** : ", res);
					_.each(res.data.repositories, function (repository) {
						Gh3.Repositories.repositories.push(new Gh3.Repository(repository.name, new Gh3.User(repository.owner), repository));
						//owner & login : same thing ???
					});

					if (callback) callback(null, Gh3.Repositories);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});

		},
		reverse : function () {
			Gh3.Repositories.repositories.reverse();
		},
		sort : function (comparison_func) {
			if (comparison_func) {
				Gh3.Repositories.repositories.sort(comparison_func);
			} else {
				Gh3.Repositories.repositories.sort();
			}
		},
		getAll : function() { return Gh3.Repositories.repositories; },
		getByName : function (name) {
			return _.find(Gh3.Repositories.repositories, function (item) {
				return item.name == name;
			});
		},
		each : function (callback) {
			_.each(Gh3.Repositories.repositories, function (repository) {
				callback(repository);
			});
		},
		filter : function (comparator) {
			return _.filter(Gh3.Repositories.repositories, comparator);
		}
	});


	Gh3.Search = Kind.extend({
	},{
		repos : function (params, pagesInfo, callback) {
			Gh3.Search._template(params, pagesInfo, callback, 'search/repositories',
								 function (rep) {
									 return new Gh3.Repository(rep.name, new Gh3.User(rep.owner), rep);
								 });
		},
		code : function (params, pagesInfo, callback) {
			Gh3.Search._template(params, pagesInfo, callback, 'search/code');
		},
		issues : function (params, pagesInfo, callback) {
			var reg = /.*\/(.*)\/issues\/.*/;
			Gh3.Search._template(params, pagesInfo, callback, 'search/issues',
								function (iss) {
									var rep = reg.exec(iss.html_url);
									if (rep && rep[1])
										return new Gh3.Issue(iss.number, iss.user, rep[1], iss);
									else return null;
								});
		},
		users : function (params, pagesInfo, callback) {
			Gh3.Search._template(params, pagesInfo, callback, 'search/users',
								 function (user) {
									 return new Gh3.User(user.login, user);
								 });
		},
		_template : function (params, pagesInfo, callback, service, createObj) {
			var data = jQuery.extend({}, params, pagesInfo);
			Gh3.Helper.callHttpApi({
				service : service + '?' + decodeURIComponent(jQuery.param(data)),
				success : function(res, text, jq) {
					var items = [];
					if (createObj) {
						_.each(res.data.items, function (item) {
							var obj = createObj(item);
							if (obj)
								items.push(obj);
						});
					} else {
						items = res.data.items;
					}

					if (callback) callback(null, items);
				},
				error : function (res) {
					if (callback) callback(new Error(res.responseJSON.message),res);
				}
			});
		}
	});

}).call(this);


/*************************************/ /*************************************//*************************************/
/*************************************//*************************************//*************************************/
/*************************************//*************************************//*************************************/
/*******  End  GitHub API v3   *******//*************************************//*************************************/
/*************************************//*************************************//*************************************/


/*************************************//*************************************//*************************************/
/*************************************//*********  Undescore ****************//*************************************/
/*************************************//*************************************//*************************************/

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);
//# sourceMappingURL=underscore-min.map

/*************************************//*************************************//*************************************/
/*************************************//*********  End Undescore ****************//*************************************/
/*************************************//*************************************//*************************************/



var GitHubWrapper=function(){

 this.nodes={};
 this.nodes.updatedFeatures="";


 //added by me:Leti 					//*[@class='minibutton select-menu-button js-menu-target']//*[@class='js-select-button']	
 this.nodes.currentBranch={node:null,listeners:{},xpath:"/html/body/div/div[2]/div[2]/div/div[2]/div[4]/div/span/span[2]", supplements:[],regexp:/([^ \n]+)/};
 
 this.nodes.userName={node:null,listeners:{},xpath:"//*[@id='user-links']//span[@class='css-truncate-target']",supplements:[],regexp:/([^ \n]+)/}; 
 this.nodes.currentAuthor={node:null,listeners:{},xpath:"//*[@class='author']",supplements:[],regexp:/([^ \n]+)/};

 this.nodes.currentRepository={node:null,listeners:{},xpath:"//*[contains(@class,'js-current-repository')]",supplements:[],regexp:/([^ \n]+)/}; 
// this.nodes.issueTitle=
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

 this.nodes.compareBase={node:null, listeners:{},xpath:"/html/body/div/div[3]/div[3]/div/div[2]/div/div/div/span/span[2]",supplements:[], regexp:/([^ \n]+)/};
												 // //span[@class='branch-name'][2]/span[2]  
 this.nodes.compareHead={node:null, listeners:{},xpath:"/html/body/div[1]/div[3]/div[3]/div[1]/div[2]/div[1]/div[1]/div/span[4]/span[2]",supplements:[],regexp:/([^ \n]+)/};
 //forked from <meta name="octolytics-dimension-repository_parent_nwo"
 this.nodes.forkedFrom={node:null, listeners:{},xpath:"//meta[@name='octolytics-dimension-repository_parent_nwo']/@content",supplements:[],regexp:/([^ \n]+)/};

 //this.nodes.pullRequest={node:null,listeners:{},xpath:"//*[@class='button primary']",supplements:[]}; 												//node.value
 this.nodes.pullRequest={node:null,listeners:{},xpath:"//*[@class='button primary left js-details-target']",supplements:[]}; 	
 this.nodes.diffCode={nodes:[],values:[],listeners:{},xpath:"//*[contains(@class,'file-diff-line js-file-line')]//*[@class='diff-line-code']",supplements:[],regexp:function(node){return node.textContent.trim();}}; 
 
this.nodes.selectedIssues={nodes:[],values:[],listeners:{},xpath:"//*[@class='list-group issue-list-group']/li[contains(@class,'selected')]",supplements:[], regexp:function(node){return node;}}; 
 
// this.nodes.issuePropagation

this.nodes.insertFeature={nodes:[],listeners:{},xpath:"//ul[@class='pagehead-actions']/li",supplements:[],                 
                     template: function(){
                         var object={};
						 object.executeTemplate=function(parameter){
						    var tabTemplate=document.createElement("template");
						    tabTemplate.innerHTML='<li><div><a rel="assemble1"  title="Assemble1" class="minibutton" href=""><span class="text">InsertFeature</span></a></div></li>';
						    var newTab=tabTemplate.content.cloneNode(true);

						    return newTab.querySelector("li");
						     };
						   return object;
						 	}
						   }; 

//EIG:Botoia
this.nodes.issuePropagation={nodes:[],listeners:{},xpath:"//ul[@class='pagehead-actions']/li",supplements:[],                 
                     template: function(){
                         var object={};
						 object.executeTemplate=function(parameter){
						    var tabTemplate=document.createElement("template");
						    tabTemplate.innerHTML='<li><div><a rel="assemble"  title="Assemble" class="minibutton" href=""><span class="text">ForwardPropagation</span></a></li>';
						    var newTab=tabTemplate.content.cloneNode(true);

						    return newTab.querySelector("li");
						     };
						   return object;
						 	}
						   }; 


this.nodes.actions={nodes:[],listeners:{},xpath:"//ul[@class='pagehead-actions']/li",supplements:[],                 
                     template: function(){
                         var object={};
						 object.executeTemplate=function(parameter){
						    var tabTemplate=document.createElement("template");
						    tabTemplate.innerHTML='<li><div><a rel="assemble"  title="Assemble" class="minibutton" href=""><span class="text">ProductFork</span></a></li>';
						    var newTab=tabTemplate.content.cloneNode(true);

						    return newTab.querySelector("li");
						     };
						   return object;
						 	}
						   }; 

	  
	 //js-range-editor is-collapsed is-cross-repo			//div[@class='js-details-container compare-pr ']/*"
this.nodes.compareSummary={nodes:[],listeners:{},xpath:"//div[contains(@class,'js-range-editor is-collapsed ')]/*",supplements:[],                 
                     template: function(){
                         var object={};
						 object.executeTemplate=function(parameter){
						    var tabTemplate=document.createElement("template");
						    tabTemplate.innerHTML='<div class="compare-pr-placeholder"><button class="button primary left" type="button">Pull Updates</button><a class="help-link right tooltipped tooltipped-w is-jump-link" aria-label="Updates: Features evolved" target="_blank" href=""><span class="octicon octicon-question"></span></a><p> This diff view shows feature evolution. \nPropagate the changes to your repository clicking "Pull Updates" button.</p><div>';
						    var newTab=tabTemplate.content.cloneNode(true);
						    return newTab.querySelector("div");
						     };
						   return object;
						 	}
						   };

this.nodes.backward={nodes:[],listeners:{},xpath:"//ul[@class='pagehead-actions']/li",supplements:[],                 
                     template: function(){
                         var object={};
						 object.executeTemplate=function(parameter){
						    var tabTemplate=document.createElement("template");
						    tabTemplate.innerHTML='<li><div><a rel="backward"  title="Backwards" class="minibutton" href=""><span class="text">Backward Propagation</span></a></div></li>';
						    var newTab=tabTemplate.content.cloneNode(true);
						    return newTab.querySelector("li");
						     };
						   return object;
						 	}
						   };	
/*			//issues-list-options
this.nodes.showFeatureUpdates={nodes:[],listeners:{},xpath:"//div[@class='issues-list-options']/*",supplements:[],                 
                     template: function(){
                         var object={};
						 object.executeTemplate=function(parameter){
						    var tabTemplate=document.createElement("template");
						    tabTemplate.innerHTML='<div class="select-menu js-menu-container js-select-menu"><a class="minibutton primary add-button" href="">New Forward Propagation</a></div>';
						    var newTab=tabTemplate.content.cloneNode(true);
						    return newTab.querySelector("div");
						     };
						   return object;
						 	}
						   };	*/

//chromed-list-browser pulls-list
this.nodes.pullRequestList={node:null, listeners:{},xpath:"//*[@class='chromed-list-browser pulls-list']",supplements:[]};	
this.nodes.newPullRequestButton={node:null, listeners:{},xpath:"//div[@class='issues-list-options']/a[@class='minibutton primary add-button']",supplements:[]};						   


this.nodes.toAsanaButton={nodes:[],listeners:{},xpath:"//div[@class='js-buttons button-wrap']/*",supplements:[],                 
                     template: function(){
                     	//window.console.log("en template")
                         var object={};
						 object.executeTemplate=function(parameter){
						    var tabTemplate=document.createElement("template");
						    tabTemplate.innerHTML='<div class="select-menu label-select-menu js-issue-list-label-select-menu js-issue-mass-assign js-menu-container js-select-menu" data-multiple=""><a class="minibutton js-menu-target  js-mass-assign-button disabled">Post to Asana</a></div>';
						    var newTab=tabTemplate.content.cloneNode(true);
						    return newTab.querySelector("div");

						 };
						 return object;
					}
};


this.nodes.showFeatureUpdates={nodes:[],listeners:{},xpath:"//*[@class='issues-listing']/*",supplements:[],                 
                     template: function(){
                         var object={};
						 object.executeTemplate=function(parameter){//parameter es feature list!!
						    var tabTemplate=document.createElement("template");
							window.console.log("Executing template with config:"+parameter[0]);
						   // var features= DeltaUtils.getUpdatedFeatures();
						    var list=parameter[0].split("\n");
						    var user=parameter[1];
						    var author=parameter[2];
						    var commitMessages=parameter[3];
						    var line;
						    var html="<div class='chromed-list-browser pulls-list'><ul class='list-group pulls-list-group js-navigation-container js-active-navigation-container'>";
						    for(var i=0;i<list.length-1;i++){
						    	line=list[i].split(" ");
						    	html+='<li class="list-group-item js-list-browser-item clearfix js-navigation-item read navigation-focus"><div><h4 class="list-group-item-name"><span class="type-icon octicon octicon-git-pull-request open " title="Show changes"></span><a class="js-navigation-open" href="compare/'+author+':'+line[1]+'...'+author+':'+line[0]+'">New Updates for Feature '+line[0]+ '</a></h4><a class="" href="compare/'+author+':'+line[1]+'...'+author+':'+line[0]+'"></a><p>'+commitMessages+'</p></div></li>';
						    }
						    html+="</div>";
						    tabTemplate.innerHTML=html;
						    var newTab=tabTemplate.content.cloneNode(true);
						    return newTab.querySelector("div");
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
	  	//window.console.log("Noooode");
	  	//window.console.log(node);
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
};										//node= this.nodes.toasaba, toAdd=
GitHubWrapper.prototype._addSibling=function(node,toAdd,position){
 var n=node.nodes;
 /*window.console.log("N: "+n);
 window.console.log(node)
 window.console.log("to add: " +toAdd);
 window.console.log(toAdd);
*/
 if(position==null){position=n.length;} 
 if(n!=null&&toAdd!=null&&position<=n.length){
  if(position==n.length){
 // 	window.console.log("N: "+n);
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

//EIG:Botoia
GitHubWrapper.prototype.injectIntoIssue=function(node,position){
this._addSibling(this.nodes.issuePropagation,node,position);
};

GitHubWrapper.prototype.getIssue=function(){
 return this.nodes.issuePropagation.nodes;
};

GitHubWrapper.prototype.getIssueTemplate=function(){
 return this.nodes.issuePropagation.template();
};
//EIG: insertFeature botoia
GitHubWrapper.prototype.injectIntoInsertFeature=function(node,position){
this._addSibling(this.nodes.insertFeature,node,position);
};

GitHubWrapper.prototype.getInsertFeature=function(){
 return this.nodes.insertFeature.nodes;
};

GitHubWrapper.prototype.getInsertFeatureTemplate=function(){
 return this.nodes.insertFeature.template();
};*/

GitHubWrapper.prototype.injectIntoAsana=function(node,position){
	//window.console.log("in injectIntoAsana ");
	//window.console.log(node);
	//window.console.log("to asana button");
this._addSibling(this.nodes.toAsanaButton,node,position);
};
//new showFeatureUpdates
GitHubWrapper.prototype.injectIntoShowFeatureUpdates=function(node,position){
this._addSibling(this.nodes.showFeatureUpdates,node,position);
};

GitHubWrapper.prototype.getShowFeatureUpdates=function(){
 return this.nodes.showFeatureUpdates.nodes;
};
GitHubWrapper.prototype.getButtonToAsana=function(){
 return this.nodes.toAsanaButton.nodes;
};
GitHubWrapper.prototype.getSelectedIssues=function(){
 return this.nodes.selectedIssues.nodes;
};

GitHubWrapper.prototype.getButtonToAsanaTemplate=function(){
 return this.nodes.toAsanaButton.template();
};

GitHubWrapper.prototype.getShowFeatureUpdatesTemplate=function(){
 return this.nodes.showFeatureUpdates.template();
};

//pullRequestList
GitHubWrapper.prototype.getPullRequestList=function(){
 return this.nodes.pullRequestList.node;
};
//newPullRequestButton
GitHubWrapper.prototype.getNewPullRequestButton=function(){
 return this.nodes.newPullRequestButton.node;
};

													//node =render (DIV)
GitHubWrapper.prototype.injectIntoCompareSummary=function(node,position){
this._addSibling(this.nodes.compareSummary,node,position);

};

GitHubWrapper.prototype.getCompareSummary=function(){
 return this.nodes.compareSummary.nodes;
};

GitHubWrapper.prototype.getCompareSummaryTemplate=function(){
 return this.nodes.compareSummary.template();
};

//backward propagation
GitHubWrapper.prototype.injectIntoBrackward=function(node,position){
this._addSibling(this.nodes.backward,node,position);

};

GitHubWrapper.prototype.getBrackward=function(){
 return this.nodes.backward.nodes;
};

GitHubWrapper.prototype.getBrackwardTemplate=function(){
 return this.nodes.backward.template();
};


GitHubWrapper.prototype.getForkedFrom=function(){
 return this.nodes.forkedFrom.value;
};

GitHubWrapper.prototype.getCompareBase=function(){
 return this.nodes.compareBase.value;
};

GitHubWrapper.prototype.getCompareHead=function(){
 return this.nodes.compareHead.value;
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

/*
GitHubWrapper.prototype.listenToBranchButton=function(ev,f){
 this._addListener(this.nodes.branchButton,ev,f);
};

GitHubWrapper.prototype.listenToBranchFilter=function(ev,f){
 this._addListener(this.nodes.branchFilter,ev,f);
};
*/
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

GitHubWrapper.prototype.setUpdatedFeatures=function(value){
	this.nodes.updatedFeatures=value;
}


GitHubWrapper.prototype.getUpdatedFeatures=function(){
	window.console.log("Returning updated features");
	return this.nodes.updatedFeatures;
}



var GitHub=new GitHubWrapper(); // NOTE that github api variable is Github! (minorcase H)
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

//EIG: Botoia
var ForwardView=function(){
this.click=null;
};
ForwardView.prototype.setViewData=function(params){
this.click=params.click;
};
ForwardView.prototype.render=function(){
var obj=this;
var tabTemplate=GitHub.getIssueTemplate();
var tab=GitHub.applyTemplate(tabTemplate,null);
tab.getElementsByTagName("a")[0].addEventListener("click",function(ev){
 ev.preventDefault();
 ev.stopPropagation();
 obj.click(ev);
},true);
return tab;
};

var InsertFeatureView=function(){
this.click=null;
};
InsertFeatureView.prototype.setViewData=function(params){
this.click=params.click;
};
InsertFeatureView.prototype.render=function(){
var obj=this;
var tabTemplate=GitHub.getInsertFeatureTemplate();
var tab=GitHub.applyTemplate(tabTemplate,null);
tab.getElementsByTagName("a")[0].addEventListener("click",function(ev){
 ev.preventDefault();
 ev.stopPropagation();
 obj.click(ev);
},true);
return tab;
};

var toAsanaView=function(){
this.click=null;
};
toAsanaView.prototype.setViewData=function(params){
this.click=params.click;
};
toAsanaView.prototype.render=function(){
	//window.console.log("into asana render");
var obj=this;
var tabTemplate=GitHub.getButtonToAsanaTemplate();

var tab=GitHub.applyTemplate(tabTemplate,null);
tab.getElementsByTagName("a")[0].addEventListener("click",function(ev){
	window.console.log(2222);
	 ev.preventDefault();
	 ev.stopPropagation();
	 obj.click(ev);
},true);
return tab;
};


var CompareSummaryView=function(){
this.click=null;
};
CompareSummaryView.prototype.setViewData=function(params){
this.click=params.click;
};
CompareSummaryView.prototype.render=function(){
var obj=this;
var tabTemplate=GitHub.getCompareSummaryTemplate();
var tab=GitHub.applyTemplate(tabTemplate,null);

tab.getElementsByTagName("button")[0].addEventListener("click",function(ev){
	
 ev.preventDefault();
 ev.stopPropagation();
 obj.click(ev);
},true);

/*
tab.getElementsByTagName("a")[0].addEventListener("mouseover",function(ev){//on mouseOver
	 window.console.log("event a");
	 window.console.log(ev);
	 var forwardPropagation=new ForwardPropagationEController();
  	 forwardPropagation.execute("help");
	 ev.preventDefault();
	 ev.stopPropagation();
	 obj.click(ev);
},true);*/

return tab;
};

var CompareBackwardView=function(){
this.click=null;
};
CompareBackwardView.prototype.setViewData=function(params){
this.click=params.click;
};
CompareBackwardView.prototype.render=function(){
var obj=this;
var tabTemplate=GitHub.getBrackwardTemplate();
var tab=GitHub.applyTemplate(tabTemplate,null);

tab.getElementsByTagName("a")[0].addEventListener("click",function(ev){
 ev.preventDefault();
 ev.stopPropagation();
 obj.click(ev);
},true);
return tab;
};


var ShowFeatureUpdatesView=function(){
this.click=null;
};
ShowFeatureUpdatesView.prototype.setViewData=function(params){
this.click=params.click;
};
ShowFeatureUpdatesView.prototype.render=function(features){
 window.console.log("En render ShowFeatureUpdatesView: "+features);
var obj=this;
var tabTemplate=GitHub.getShowFeatureUpdatesTemplate();

var tab=GitHub.applyTemplate(tabTemplate,features);//get updated Features

 tab.getElementsByTagName("a")[1].addEventListener("click",function(ev){
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


/*Eider: loadEController funtzioa exekutazen da GitHub Orrian sartzerakoan*/
LoadEController.prototype.execute=function(){       
//EIG: erabili behar diren parametroak editFile funt
 window.console.log("LoadEController dentrooo");
 var user=GitHub.getUserName(); 
 window.console.log("user "+user);
 var token=GitHub.getAuthenticityToken(); 
 var author=GitHub.getCurrentAuthor(); 
 var repo=GitHub.getCurrentRepository(); 
 var button=GitHub.getForkButton(); 


 
 var currentBranch=GitHub.getCurrentBranch();
/* NO CAPTURAR EL FORK
 if(user!=null&&token!=null&&author!=null&&repo!=null&&button!=null){
  var fork=new ForkEController();
  GitHub.listenToForkButton("click",function(ev){ev.preventDefault();ev.stopPropagation();fork.execute();});
 }*/
 

var fo;
if (GitHub.getForkedFrom()!=null)
 fo=GitHub.getForkedFrom().split("/")[0];
//window.console.log("Fo: "+fo);
 var actions=GitHub.getActions();  //product fork
 window.console.log(user);
 window.console.log(repo);
 window.console.log(actions);
 window.console.log(fo);

// if(user!=null&&repo!=null&&actions!=null&&fo!=user){
 //	if(user!=author){
		var install=new InstallEController();
		window.console.log("adding product fork");
  		install.execute("add");
  		//EIG:Botoia
  		var install2= new IssueEController();
  		window.console.log("adding forwardPRopagation");
  		install2.execute("add");
	//}
// }

try{
var compareSummary=GitHub.getCompareSummary();  
var button2=GitHub.getPullRequestButton(); 
 if(compareSummary!=null){//&&button2!=null){
 	  window.console.log("dentro fordward add");
 	  var forwardPropagation=new ForwardPropagationEController();
      forwardPropagation.execute("add");
 }}catch(e){
 	window.console.log("error compare summary");
 	//window.console.log(e);
 }

 var brackwardProp=GitHub.getBrackward();
 var actual=user+"/"+repo;


 if(brackwardProp!=null){
 	if(GitHub.getForkedFrom()==actual){
 	  var  backwardPropagation=new BackwardPropagationEController();
  	  backwardPropagation.execute("add");
	}
 }

var showFeatureUpdate=GitHub.getShowFeatureUpdates();
 //window.console.log("https://github.com/"+user+"/"+repo+"/pulls"+"--Es igual a---"+window.location.href);
 if(window.location.href=="https://github.com/"+user+"/"+repo+"/issues"){
 	  if(window.location.href!="https://github.com/"+user+"/"+repo+"/issues")
 	  	return;
 	  var  featureButton=new ShowFeatureUpdatesEController();//Trigger en it is in the pull request section
  	  featureButton.execute("add");
 }else window.console.log("not going to retreive for update features");


/****API DEIA PROBA EIDERRRENTZAT****/
window.console.log("API DEIA PROBA ");
			var ghAuthor= new Gh3.User(author);
			var ghAuthorRepo= new Gh3.Repository(repo, ghAuthor);
	    	//1: access repository
			ghAuthorRepo.fetch(function (err, res) {
	          if(err) { window.console.log("ERROR 3 ghRepo.fetch"); }
				//2:fetch repository all branches
				ghAuthorRepo.fetchBranches(function (err, res) {
					var master=ghAuthorRepo.getBranchByName("master");//3: get master branh
					master.fetchContents(function (err, res) {//4: get contents (folders and files) for master branch
			          if(err) { throw "outch ..." }
			          var featureModelFile = master.getFileByName("model.xml");//5: get model.xml file
			      	  if(featureModelFile==null){
			      	  	window.console.log("Could not reach model.xml file in master branch!\n.");
			      	  	return;
			      	  }
			      	  else{
			      	  	//Step 2: leer contenido del product config
			      	  	featureModelFile.fetchContent(function (err, res) {//6:fetch file content
			      	  		window.console.log(featureModelFile.getRawContent());//7: gte raw content and display in console
			      	  	});
			      	  }
			      	});
			    });
			});
/**API deia proba amaituta*/




/*var botonToAsana=GitHub.getButtonToAsana();
if(tasksToAsanaEController!="undefined"){
	 if(window.location.href.indexOf("https://github.com/"+user+"/"+repo+"/issues")!=-1){
	 	  var  toAsana=new tasksToAsanaEController();
	  	  toAsana.execute("add");
	 }else window.console.log("not going to add ");
}
*/

//http://wiki.greasespot.net/GM_xmlhttpRequest
//invocation.setRequestHeader("Username", "2kDOdTDX.X8DLAnayL1RZryH6JVYsL1R");
//invocation.setRequestHeader("Password", "");
//var url = 'https://app.asana.com/api/1.0/tasks/13842232691476';
/*
GM_xmlhttpRequest ({
    method:     "GET",
    url:        "https://app.asana.com/api/1.0/tasks/13842232691476",
    headers: {
    "Authorization": "Basic MmtET2RURFguOGxBVW5MV1MwVjZVSVBpelBkUWhNZUk6"
  	},
    onload:     function (response) {
    				var jsonResp = JSON.parse(response.responseText);
                    window.console.log (   response.status,
                                    response.responseText,
                                    jsonResp
                                );
                }
} );
//gitline: 8206296441983
//workspace

/*
GM_xmlhttpRequest({
  method: "POST",
  url: "https://app.asana.com/api/1.0/tasks",
  data: "name=pruebadesdeGitLine2&assignee=me&projects=8206296441983&workspace=8179240333828",
  headers: {
    "Authorization": "Basic MmtET2RURFguOGxBVW5MV1MwVjZVSVBpelBkUWhNZUk6",
    "Content-Type": "application/x-www-form-urlencoded",
    "Username": "2kDOdTDX.X8DLAnayL1RZryH6JVYsL1R",
    "Password": "",
  },
  onreadystatechange: function(response) {
  		var jsonResp = JSON.parse(response.responseText);
        window.console.log (response.status,response.responseText, jsonResp);
  		if(response.readyState === 4)
      		window.location.href = "https://asana.com";
  }
});
*/

/*
//GET WORKSPACE ID
var workspaceName="ONEKIN";

GM_xmlhttpRequest({
 method:     "GET",
    url:        "https://app.asana.com/api/1.0/workspaces",
    headers: {
    "Authorization": "Basic MmtET2RURFguOGxBVW5MV1MwVjZVSVBpelBkUWhNZUk6"
  },
  onreadystatechange: function(response) {
  		if(response.readyState === 4){
      		//window.location.href = "https://asana.com";
      		var jsonResp = JSON.parse(response.responseText);
        	window.console.log (jsonResp);
        	var listWorkspaces=jsonResp.data;
        	//window.console.log(listWorkspaces);
        	for (var i=0; i<listWorkspaces.length;i++){
        		if(listWorkspaces[i].name==workspaceName){
        			window.console.log(listWorkspaces[i].id);//return
        		}
        	}

      	}
  }
});*/


}; 



/*
window.console.log("before");
 jQuery.ajax({type: "GET", url: "https://api.github.com/repos/github/linguist",dataType: "json"}).done(function(data){
 	window.console.log("hola");
 	window.console.log(data);
 });
window.console.log("after");

var lem = new Gh3.User("lemome88");
window.console.log(lem);
var lemlog = new Gh3.Repository("notepad-spl", lem);
    lemlog.fetch(function (err, res) {
      if(err) { throw "outch ..." }
      window.console.log(lemlog);
       lemlog.fetchPullRequest(function(err,res){
       	window.console.log(lemlog.getPullRequests());
       });
	});
*/




//window.console.log("FORKED FROM: "+GitHub.getForkedFrom());
//window.console.log(GitHub.getPullRequestList());
//window.console.log("getNewPullRequestButton: "+GitHub.getNewPullRequestButton());
//window.console.log(GitHub.getNewPullRequestButton());

/* De momento no uso la semantica del branching
///branch semantics
 try{
 var button3=GitHub.getBranchButton();
 }catch(e){window.console.log(e);}
//window.console.log("Button branch:"+button3);
if(user!=null&&token!=null&&repo!=null&&button3!=null){
  var branching=new BranchEController();
  GitHub.listenToBranchButton("click",function(ev){ev.preventDefault();ev.stopPropagation();branching.execute(ev,ev.currentTarget.firstElementChild.textContent);});
 }



 var button4=GitHub.getBranchFilter();
//window.console.log("Form branch:"+button4);//.submit
if(user!=null&&token!=null&&repo!=null&&button4!=null){
  //var branchFilter=new BranchFilterEController();
  var branching= new BranchEController();
  GitHub.listenToBranchFilter("keydown",function(ev){
  	//window.console.log(ev.keyCode);
  	if(ev.keyCode==13){
  		ev.preventDefault();
  		ev.stopPropagation();  
  		window.console.log("KEYPRESS for "+ev.currentTarget.value);
  		branching.execute(ev,ev.currentTarget.value);
  		//branchFilter.execute(ev,GitHub.getParentBranch(),ev.currentTarget.value);
  	}
  });
 }
*/


//tasksToAsanaEController
var tasksToAsanaEController=function(){
 if (tasksToAsanaEController.prototype._singletonInstance) {
  return tasksToAsanaEController.prototype._singletonInstance;
 }
 tasksToAsanaEController.prototype._singletonInstance = this;        
};

tasksToAsanaEController.prototype.execute=function(act){ //compose product and create a repository for the user + config.blob	
	window.console.log("tasksToAsanaEController");
	if(act=="add"){
		var obj=this;
		var toAsana=new toAsanaView();
		toAsana.setViewData({click:function(){obj.execute("run");}});
		var render=toAsana.render();
		GitHub.injectIntoAsana(render);
		
	}else if(act=="run"){
		window.console.log("To Asana RUUUN");		
		//recorrer que
		
		//var worskpaceName=window.prompt("Select the workspace","<ul><li></li></ul>");
		//recorrer los issues y recoger aquellos que estan "selected"
		//tag issues as "inAsana"
	
		GitHub.init();
		var issues=GitHub.getSelectedIssues();
		window.console.log("issue: "+issues);
		window.console.log(issues);

		var gh3_issues=[];
		var user=GitHub.getUserName(); 
		var repo=GitHub.getCurrentRepository();
		var ghUser= new Gh3.User(user);
		window.console.log(ghUser);
		var ghRepo= new Gh3.Repository(repo,ghUser);
		
		ghRepo.fetch(function(err, res){
			ghRepo.fetchIssues(function(err, res){
				window.console.log(ghRepo);
				for(var i=0; i< issues.length;i++){
					window.console.log(issues[i].id);
					window.console.log(ghRepo.getIssues());
					var number=issues[i].id.split("issue_")[1];
					var issue=ghRepo.getIssueByNumber(number);
					window.console.log(issue);
					DeltaUtils.issueToAsana(issue);
				}
			});
		});


/*
		

*/
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

	window.console.log("New Branch ...");	
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
		window.console.log("parent: "+par);
		window.console.log("new one: "+nBranch);
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
				window.console.log("previous content: "+prevContent);
				var updatedContent=prevContent+"\n"+viewContent;
				window.console.log("updated content: "+updatedContent);
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


var BranchFilterEController=function(){
 if (BranchFilterEController.prototype._singletonInstance) {
  return BranchFilterEController.prototype._singletonInstance;
 }
 BranchFilterEController.prototype._singletonInstance = this;        
};


BranchFilterEController.prototype.execute=function(ev,parentBranch,newBranch){
	var key=ev.keyCode || e.which;
	//ALWAYS!!
		window.console.log("NEW BRANCH ");
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
		 window.console.log("EXECUTING PULL REQUEST...");
		 var user=GitHub.getUserName(); 
		 var repo=GitHub.getCurrentRepository(); 
		 var token=GitHub.getAuthenticityToken();
		 var pullId=GitHub.getPullId();   
		 
		 var diff=GitHub.getDiffCode().join("\n");   
		 window.console.log("1");
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
		 window.console.log("PULL REQUEST EXECUTED");
		 //InstallEController.prototype.execute=function("run");//compose files and create result
	}catch(e){
		window.console.log("ERROR IN EXECUTING PULL REQUEST "+e);
		}
}; 

//backward propagation
var BackwardPropagationEController=function(){ 
	if (BackwardPropagationEController.prototype._singletonInstance) {
  		return BackwardPropagationEController.prototype._singletonInstance;
 }
 BackwardPropagationEController.prototype._singletonInstance = this;        
};

BackwardPropagationEController.prototype.execute=function(act){
	//example https://github.com/letimome/stack/compare/lemome88:master...underFlow
	if(act=="add"){
		var obj=this;
		var backward=new CompareBackwardView();
		backward.setViewData({click:function(){obj.execute("run");}});
		var render=backward.render();
		GitHub.injectIntoBrackward(render);
	}else if(act=="run"){

	}
};

//feature updates button


var ShowFeatureUpdatesEController=function(){ 
	if (ShowFeatureUpdatesEController.prototype._singletonInstance){
  		return ShowFeatureUpdatesEController.prototype._singletonInstance;
 }
 ShowFeatureUpdatesEController.prototype._singletonInstance = this;        
};

ShowFeatureUpdatesEController.prototype.execute=function(act){
	//example https://github.com/letimome/stack/compare/lemome88:master...underFlow
	if(act=="add"){
		 var user=GitHub.getUserName(); 
		 var repo=GitHub.getCurrentRepository();  
		 var forked=GitHub.getForkedFrom().split("/");
		 var author=forked[0]; 
		 var obj=this;
		 window.console.log("ShowFeatureUpdatesEController triggered");
			var ghAuthor= new Gh3.User(author);
			var ghAuthorRepo= new Gh3.Repository(repo, ghAuthor);
			var ghUser = new Gh3.User(user);
	    	var ghRepo = new Gh3.Repository(repo, ghUser);
	    	
	    	var commitMessages="";
	    	var featuresChanged="";
	    
			ghRepo.fetch(function (err, res) {
	          if(err) { window.console.log("ERROR 3 ghRepo.fetch"); }
				ghRepo.fetchBranches(function (err, res) {
					//window.console.log(ghRepo);
					var master=ghRepo.getBranchByName("develop");
					master.fetchContents(function (err, res) {//step1: fetch product.config
			          if(err) { throw "outch ..." }
			          var productConfigFile = master.getFileByName(DeltaUtils.getProductConfigName());
			      	  if(productConfigFile==null){
			      	  	window.alert("Could not reach "+DeltaUtils.getProductConfigName()+" file in master branch!\n.");
			      	  	return;
			      	  }
			      	  else{
			      	  	//Step 2: leer contenido del product config
			      	  	productConfigFile.fetchContent(function (err, res) {
	            			if(err) { throw "outch ..." }
	           				//Step 2.1 parse productConfig File
	           				var lines=productConfigFile.getRawContent().split("\n");
	           				var colums;
	           				
	           				var bsha;
	           				var branches,commits;
	           				ghAuthorRepo.fetch(function (err, res) {//Step 3: fetch author repo
	         				if(err) { window.console.log("ERROR ghRepo.fetch"); }
	         				else{
	         					 	ghAuthorRepo.fetchBranches(function (err, res){//fetch author branches
	         					 		//for each branch get commit messages
	         					 		for(var i=0;i<lines.length;i++){
				           					colums=lines[i].split(" ");
				         					branches=colums[0];
				         					commits=colums[1];
				         					var branch=ghAuthorRepo.getBranchByName(branches);
				         					if(branch!=null){
				         					 	if(branch.sha!=commits){//is not up to date?
				         					 		bsha=branch.sha;
				         					 	  	featuresChanged+=branches+" "+commits+"\n";
				         					 	  	window.console.log( branch.name+" changed to sha: "+bsha);
				         					 	  	var tope=commits;
				         					 	  	//fetch and display commit messages for features not up-to
				         					 	  	DeltaUtils.fetchMessagesForFeature(branch,tope);
				         					 	  }
				         					 }
				         				}
	         					 	});
	         					}
	         				});
	           			});
			      	  }
			      	});
	  			});
			});
			
	}else if(act=="run"){
		window.console.log("BUTTON CLICK!");
	}
};



var ForwardPropagationEController=function(){ 
	if (ForwardPropagationEController.prototype._singletonInstance) {
  		return ForwardPropagationEController.prototype._singletonInstance;
 }
 ForwardPropagationEController.prototype._singletonInstance = this;        
};

ForwardPropagationEController.prototype.execute=function(act){
	//example https://github.com/letimome/stack/compare/lemome88:master...underFlow
	if(act=="help"){
		var user=GitHub.getUserName(); 
		var author=GitHub.getCurrentAuthor(); 
		var repo=GitHub.getCurrentRepository();
		window.console.log("HELPi");
		//DeltaUtils.searchUpdatedFeatures(repo, user, author);//+DeltaUtils.searchUpdatedFeatures(repo,user,author));
	}

	else{
		if(act=="add"){
			window.console.log("adding fordward propagation button");
			var obj=this;
			var forward=new CompareSummaryView();
			forward.setViewData({click:function(){obj.execute("run");}});
			//forward.setViewData({mouseover:function(){obj.execute("help");}});
			var render=forward.render();
			//window.console.log(render);
			GitHub.injectIntoCompareSummary(render);
		}
		else if(act=="run"){
			var fordwardFeature=GitHub.getCompareHead();
			var ok=window.confirm("You are going to forward-propagate: "+ fordwardFeature);
				window.console.log(ok);
				if(!ok){
				return;
			}

			CleanProjectFolder();

			var user=GitHub.getUserName(); 
			var author=GitHub.getCurrentAuthor(); 
			var repo=GitHub.getCurrentRepository();
			var token=GitHub.getAuthenticityToken(); 
			var ghUser = new Gh3.User(user);
	    	var ghRepo = new Gh3.Repository(repo, ghUser);

			//step 1: Comprobar que existe el product.config
			ghRepo.fetch(function (err, res){
	          if(err) { window.console.log("ERROR ghRepo.fetch"); }
				ghRepo.fetchBranches(function (err, res) {
					var master=ghRepo.getBranchByName("master");
					master.fetchContents(function (err, res){
				        if(err) { throw "outch ..." }
				        var productConfigFile = master.getFileByName("product.config");//DeltaUtils.getProductConfigName()
				      	if(productConfigFile==null){
				      		window.alert("There is no "+DeltaUtils.getProductConfigName()+" file in master branch!\nPropagation aborted.");
				      	  	return;
				      	}
				      	else{
				      	  	window.console.log(222-3);
				      	  	//step 2: leer el product config

				      	  	productConfigFile.fetchContent(function (err, res){
		            			if(err) { throw "outch ..." }
		           				window.console.log("Config File Content: "+productConfigFile.getRawContent());
		           			 	var ghAuthor= new Gh3.User(author);
								var authorRepo = new Gh3.Repository(repo, ghAuthor);
		           				authorRepo.fetch(function (err, res){
							        if(err) { window.console.log("ERROR authorRepo.fetch"); }
								    authorRepo.fetchBranches(function (err, res){ //ir a las branches del author
								    //Step 2.1 parse productConfig File
				           				var lines=productConfigFile.getRawContent().split("\n");
				           				window.console.log(lines);
				           				var colums;
				           				var branches=[];
				           				var commits=[];
				           				var i;
				           				window.console.log(444);
				           				window.console.log("fordwardFeature: "+fordwardFeature);
				           				var featureSplit=fordwardFeature.split(":")[1];
				           				//window.console.log("featureSplit: "+featureSplit);
				           				var configFileContent="";//file for featureHouse composition
				           				

				           				//download features at commits stated in product.config file!
				           				for (i=0; i<lines.length-1; i++){
				           					var l=lines[i];
				           					colums=l.split(" ");
				           					window.console.log("analyzing product feature: "+l);
				           					branches.push(colums[0]);//branch-feature
				           					//step 3: descargarse los branches con el commit adecuado y el updated branch actual //https://github.com/lemome88/stack/tree/3d6d53d2c77bb06e5de6c9f90953dd3e0eadfb81
				           					configFileContent+=branches[i]+"\n";
				           					window.console.log(fordwardFeature +"!="+colums[0]);
				           					if(fordwardFeature!=colums[0]){//si no es la feature to update
				           					  window.console.log("feature "+ branches[i]+ " remains equal");
				           					  commits.push(colums[1]);
				           					  DeltaUtils.newSeedConfig+=colums[0]+" "+colums[1]+"\n";
				           					  var shaToFetch=colums[1];
				           					  DeltaUtils.getCommitContent(ghAuthor,authorRepo,ghAuthor, shaToFetch,branches[i],configFileContent,DeltaUtils.newSeedConfig,false,true);
				           					}
				           					else{ //para la feature que se tiene que actualizar
				           					  //get updated files!!
				           					  window.console.log("get updated files for "+ branches[i]+" and commit sha:"+colums[1]);
				           					  commits.push(colums[1]);
				           					 var fetchBranch=authorRepo.getBranchByName(branches[i]);
				           					 DeltaUtils.newSeedConfig+=colums[0]+" "+fetchBranch.sha+"\n";
				           					 DeltaUtils.extractBranchContents(fetchBranch,ghAuthor,ghRepo,configFileContent,DeltaUtils.newSeedConfig,false,true);
				           					}
						           		}//end for
									});
		           				});
		          			});
				      	}
			      	});
			    });
			});
		}
	}
};



//



/*Eider: InstallEcontroller funtzioa executatzen da "ProductFork" botoia klikatzeakoan**/
/*
InsertEController.prototype.execute=function(act){

	var docTile= document.title;
	var str=docTile.split("at ");
	var currentBranch=str[1];
	if(!currentBranch) currentBranch="master";
	
	if(act=="add"){
		var obj=this;
		var install=new ActionView();
		install.setViewData({click:function(){obj.execute("run");}});
		var render=install.render();
		GitHub.injectIntoInsert(render);
	}else if(act=="run"){




	}
};*/

 var IssueEController=function(){
 if (IssueEController.prototype._singletonInstance) {
  return IssueEController.prototype._singletonInstance;
 }
 IssueEController.prototype._singletonInstance = this;        
};


//EIG:Botoia
IssueEController.prototype.execute=function(act){ //compose product and create a repository for the user + config.blob

	
		if(act=="add"){
			window.console.log("in issueEcontroller!!!!!");
			var obj=this;
			var install=new ForwardView();
			install.setViewData({click:function(){obj.execute("run");}});
			var render=install.render();
			GitHub.injectIntoIssue(render);
		}else if(act=="run"){

			window.console.log("in eider Forward propagation");
   		}

 };

var InsertFeatureEController=function(){
 if (InsertFeatureEController.prototype._singletonInstance) {
  return InsertFeatureEController.prototype._singletonInstance;
 }
 InsertFeatureEController.prototype._singletonInstance = this;        
};


//EIG:Botoia
InsertFeatureEController.prototype.execute=function(act){ //compose product and create a repository for the user + config.blob

	
		if(act=="add"){
			window.console.log("in InsertFeatureEController!!!!!");
			var obj=this;
			var install=new InsertfeatureView();
			install.setViewData({click:function(){obj.execute("run");}});
			var render=install.render();
			GitHub.injectIntoInsertFeature(render);
		}else if(act=="run"){

			window.console.log("in InsertFeatureEController");
   		}

 };


 var InstallEController=function(){
 if (InstallEController.prototype._singletonInstance) {
  return InstallEController.prototype._singletonInstance;
 }
 InstallEController.prototype._singletonInstance = this;        
};

InstallEController.prototype.execute=function(act){ //compose product and create a repository for the user + config.blob

		var docTile= document.title;
		var str=docTile.split("at ");
		var currentBranch=str[1];
		if(!currentBranch) currentBranch="master";
	
		if(act=="add"){
			var obj=this;
			var install=new ActionView();
			install.setViewData({click:function(){obj.execute("run");}});
			var render=install.render();
			GitHub.injectIntoActions(render);
		}else if(act=="run"){

			var botonAukera=window.prompt("Insert or Create?","issue");
			if(botonAukera=="insert"){
				window.console.log("insertFeature");
			//	DeltaUtils.interfaceOfInsertFeature(1);
			}else if(botonAukera=="create"){
			var user=GitHub.getUserName(); 
			var author=GitHub.getCurrentAuthor(); 
			var repo=GitHub.getCurrentRepository();
			var token=GitHub.getAuthenticityToken(); 	
			var configFileContent="";
			var error=false;
			//clean projetc folder
		
			/*step 0: Clean profile folder*/
			window.console.log("To erase project folder");
			CleanProjectFolder();

			var ghAuthor = new Gh3.User(author);
	    	var ghRepo = new Gh3.Repository(repo, ghAuthor);
			window.console.log(ghRepo);

			

	    	var manual=window.prompt("manual or assited configuration?","assisted");

		
		
			if(manual=="manual"){
				/*step 1: Ask for product configuration equation*/
				var productBranches=window.prompt("Please enter the configuration equation","");
				
				var listBranches=productBranches.split(" ");

				DeltaUtils.enactProductComposition(listBranches,ghRepo,ghAuthor);//listBranches= array of feature selected
			}
			else if(manual=="assisted"){
			
				DeltaUtils.createConfigurator(0); 
			}
			
   		}else if(botonAukera="issue"){
   			DeltaUtils.interfaceOfPropagation();
   		}
   	}

   	
};


var DeltaUtils={};

DeltaUtils.interfaceOfInsertFeature=function(insertoption){
	
	var configString='<html><head><title>Insert a Feature</title></head>';
	if(insertoption==1){
		configString+=("<div align='center'>");
		configString+=("<p> What kind of feature do you want to add? </p>");
		configString+=("<input value='mandatory' name='insertType' class='kind' type=radio  /> Mandatory");
		configString+=("<br>");
		configString+=("<input value='optional' name='insertType' class='kind' type=radio /> Optional  ");
		configString+=("<br>");
		configString+=("<input value='alternative' name='insertType' class='kind' type=radio /> Alternative");
		configString+=("<br></div></html>");

	}
	UI.Dialog.show_insertFeatureInterfaze(configString,1);

}

DeltaUtils.interfaceOfPropagation=function(){

	var configString='<html><head><title> Select an issue </title></head>';
	configString+=("<div align='center'>");
	configString+=("<p> What issue do you want to close?</p>");

	window.console.log("issue");
   	var token=GitHub.getAuthenticityToken();
	var user=GitHub.getUserName();  
	var author=GitHub.getCurrentAuthor(); 
	var repo=GitHub.getCurrentRepository(); 
	var ghUser=new Gh3.User(user);
	var ghUserRepo=new Gh3.Repository(repo,ghUser);
	DeltaUtils.sleep(1000);
	ghUserRepo.fetch(function (err, res) {
		window.console.log(ghUserRepo);
		if(err) { window.console.log("ERROR ghRepo.fetch");}
		ghUserRepo.fetchIssues(function(err,res){
			var issues= ghUserRepo.getIssues();
			for (i=0; i<issues.length;i++){
						
						if(issues[i].title.substring(0,4)=="New_"){
						configString+=("<input value=");
			    		configString+=(issues[i].number);
						configString+=(" name='issue' class='issue' type=radio  />");
						configString+=(issues[i].title);
						configString+=("<br>");
						configString+=("<br>");
						}
					}
					
			UI.Dialog.show_issueInterface(configString);
		
		});
	});
	
}

DeltaUtils.selectedCheckIssue=function(docu){
		  // perform the security-sensitive operation here
		  window.console.log("in check issue");
		var checkedValue = null; 
		var parser = new DOMParser();
		var html_nodes= docu;// parser.parseFromString(configString,"text/html");
		var inputElements = html_nodes.getElementsByClassName('issue');
		var issueSelected = "";

		for(var i=0; i<inputElements.length; i++){
			if(inputElements[i].checked){//if checked
				issueSelected+=inputElements[i].value+" ";
				//var numOfissue= inputElement[i]
			}
		}

		//DeltaUtils.editIssue(issueSelected);
		var token=GitHub.getAuthenticityToken();
		var user=GitHub.getUserName();  
		var author=GitHub.getCurrentAuthor(); 
		var repo=GitHub.getCurrentRepository(); 
		var ghUser=new Gh3.User(user);
		var ghUserRepo=new Gh3.Repository(repo,ghUser);
		DeltaUtils.sleep(1000);
		ghUserRepo.fetch(function (err, res) {
			window.console.log(ghUserRepo);
			if(err) { window.console.log("ERROR ghRepo.fetch");}
			ghUserRepo.fetchIssues(function(err,res){
				var issues= ghUserRepo.getIssueByNumber(issueSelected);
				window.console.log("selected forks: "+issueSelected);
				window.console.log(issues.state);
				var arrayOfFeatures = issues.title.split('_');
				window.console.log(arrayOfFeatures);
				var parent= arrayOfFeatures[4];
				var newFeature= arrayOfFeatures[5].substring(1,arrayOfFeatures[5].length-1);
				var kind= arrayOfFeatures[1];
				window.console.log("Parent: "+parent+" ------> New Feature: "+ newFeature+"---> Kind: "+kind);
				DeltaUtils.createConfiguratorForPropagation(kind,parent);
		
			});
		});

		
 
}
DeltaUtils.selectedInsert=function(docu,phase,allFeatures, kind){
	window.console.log(222311);
		  // perform the security-sensitive operation here
		var checkedValue = null; 
		var parser = new DOMParser();
		var html_nodes= docu;// parser.parseFromString(configString,"text/html");

		if(phase==1){
		var inputElements = html_nodes.getElementsByClassName('kind');
		}

		if(phase==2){
		var inputElements = html_nodes.getElementsByClassName('features');
		}

		//get the checked option
		var checkedOption = "";
		for(var i=0; i<inputElements.length; i++){
			if(inputElements[i].checked){//if checked
				checkedOption+=inputElements[i].value;
			}
		}
		window.console.log("Kind of insert: "+checkedOption);

		if(checkedOption==""){
			window.alert("You have to select one option");
			DeltaUtils.selectedInsert(docu);
		}


		if(checkedOption=="mandatory" || checkedOption=="optional" ){
			window.console.log("mandatory of optional");
			DeltaUtils.createConfigurator(3,checkedOption);

		}
		else if(checkedOption=="alternative"){
			window.console.log("alternative");
			DeltaUtils.createConfigurator(4,checkedOption);

		} else{
			
			window.console.log("Ezaugarria aukeratuta");

			DeltaUtils.validNameOfNewFeature(allFeatures,checkedOption,kind);
			

			

			//EIG: insert the name of the new feature, valid the name
			/*var newName =window.prompt("Name of the new feature");
			var arraynewName = newName.split(' ');
			var arrayOfFeatures = allFeatures.split(' ');
			newName="";
			for (i=0; i<arraynewName.length;i++){
				newName+=arraynewName[i];*/
				
			//}
			/*if (newName==""){
				window.alert("Write a name for de new feature");
				DeltaUtils.selectedInsert(docu, phase, allFeatures,kind);

			}
			window.console.log(newName);
			window.console.log("arrayofFEatures:"+arrayOfFeatures);
			for (i=0; i<arrayOfFeatures.length-1;i++){
				window.console.log(arrayOfFeatures[i]);
				if(newName.toLowerCase()==arrayOfFeatures[i].toLowerCase()){
					window.alert("The name of two features can not be repeated");
					DeltaUtils.selectedInsert(docu, phase, allFeatures,kind);
				}
			}*/


			//EIG: if the name is valid, insert in de model.
			/*if(kind=="mandatory"){
				var kindOption=0;
			}
			if(kind=="optional"){
				var kindOption=1;
			}
			if(kind=="alternative"){
				var kindOption=2;
			}
			var insertValid=insertFeature(checkedOption, newName,kindOption);
			var user=GitHub.getUserName(); 
	 		var token=GitHub.getAuthenticityToken(); 
	 		var repo=GitHub.getCurrentRepository(); 
	 		if(insertValid==0){
				window.alert(" The change is not valid");
				DeltaUtils.interfaceOfInsertFeature(1);
			}else{
				DeltaUtils.createBranch(checkedOption, newName,user,repo,token,DeltaUtils.editModelFile(kind,insertValid));
			}*/
	}


}


DeltaUtils.validNameOfNewFeature=function(allFeatures,checkedOption,kind){

	var valid=1;
	var newName =window.prompt("Name of the new feature");
	var arraynewName = newName.split(' ');
	var arrayOfFeatures = allFeatures.split(' ');
	newName="";

	for (i=0; i<arraynewName.length;i++){
		newName+=arraynewName[i];
				
	}

	if (newName==""){
		window.alert("Write a name for the new feature");
		valid=0;
		DeltaUtils.validNameOfNewFeature(allFeatures,checkedOption,kind);
	}
	window.console.log(newName);
	window.console.log("arrayofFEatures:"+arrayOfFeatures);
	for (i=0; i<arrayOfFeatures.length-1;i++){
		window.console.log(arrayOfFeatures[i]);
		if(newName.toLowerCase()==arrayOfFeatures[i].toLowerCase()){
			window.alert("The name of two features can not be repeated");
			valid=0;
			DeltaUtils.validNameOfNewFeature(allFeatures,checkedOption,kind);
		}
	}

	if(valid==1){
		window.console.log("return 1");
		DeltaUtils.createFeature(checkedOption,kind,newName);
	}

	
}

DeltaUtils.createFeature=function(checkedOption,kind,newName){
			if(kind=="mandatory"){
				var kindOption=0;
			}
			if(kind=="optional"){
				var kindOption=1;
			}
			if(kind=="alternative"){
				var kindOption=2;
			}
			var insertValid=insertFeature(checkedOption, newName,kindOption);
			var user=GitHub.getUserName(); 
	 		var token=GitHub.getAuthenticityToken(); 
	 		var repo=GitHub.getCurrentRepository(); 
	 		if(insertValid==0){
				window.alert(" The change is not valid");
				DeltaUtils.interfaceOfInsertFeature(1);
			}else{
				DeltaUtils.createBranch(checkedOption, newName,user,repo,token,DeltaUtils.editModelFile(kind,insertValid,newName,checkedOption));
			}
	
}

DeltaUtils.editModelFile=function(kind,insertValid,newName,checkedOption){

	var token=GitHub.getAuthenticityToken();
	var user=GitHub.getUserName();  
	var author=GitHub.getCurrentAuthor(); 
	var repo=GitHub.getCurrentRepository(); 
	var ghUser=new Gh3.User(user);
	var ghUserRepo=new Gh3.Repository(repo,ghUser);
	DeltaUtils.sleep(1000);
	ghUserRepo.fetch(function (err, res) {
		window.console.log(ghUserRepo);
		window.console.log("lehenengo fetch");
		if(err) { window.console.log("ERROR ghRepo.fetch");}
		ghUserRepo.fetchBranches(function(err,res){
			var master= ghUserRepo.getBranchByName("master");
			master.fetchCommits(function(err,res){
				var commit=master.getLastCommit().sha;
				window.console.log("commit for postinf product "+commit);
				DeltaUtils.editFile(user, repo, "master","model.xml",commit, token, insertValid, "new model.xml",null);
			});
		});
	});

	window.console.log("CreateIssue");
	DeltaUtils.createIssue(newName,"You have to propagate '"+newName+"' feature",checkedOption,kind);
	
	//DeltaUtils.createConfiguratorForPropagation(kind);
}



DeltaUtils.readProductConfig=function(Forks,parent,configString,kind,kont){
		//var kont=0;
	//for (j=0; j<Forks.length;j++){
		var fork = Forks[kont];
		window.console.log("Fork.fetch!!!!!!");
		window.console.log(fork);
		var user=GitHub.getUserName(); 
		var ghUserRepo=new Gh3.Repository(fork.name,fork.user);
		var repo=GitHub.getCurrentRepository(); 
		window.console.log("Fetching forks for repo: "+fork.name+" and author: "+fork.user);
		DeltaUtils.sleep(1000);
		fork.fetch(function(err,res){
			fork.fetchBranches(function (err, res) {
				var master=fork.getBranchByName("master");//3: get master branh
				master.fetchContents(function (err, res) {//4: get contents (folders and files) for master branch
		       		if(err) { throw "outch ..." }
		       		var productConfig = master.getFileByName("product.config");
		   	  		if(productConfig==null){
		   	  			window.console.log("Could not reach product.config file in master branch!\n.");
		      	  		return;
		   	  		}
		   	  		else{
		   	  			productConfig.fetchContent(function (err, res) {//6:fetch file content
		  	  				var content=productConfig.getRawContent();
			   	  			var arrayOfFeatureConfig = content.split('\n');
			   	  			for (i=0; i<arrayOfFeatureConfig.length;i++){		
								window.console.log(arrayOfFeatureConfig[i]);
								var featureName = arrayOfFeatureConfig[i].split(' ');
									if(featureName[0]==parent){
										window.console.log("badago ezaugarria"+fork.user.login);
										//return 1;
										configString+=("<input value=");
										configString+=(fork.user);
										if(kind=="mandatory"){
											configString+=(" name='forks' class='features' type=checkbox disabled checked />");
										}else{
											configString+=("  name='forks' class='features' type=checkbox  />");
										}
										configString+=( "Name of de repository: "+fork.name+ " ----> Owner: "+fork.user.login);
										configString+=("<br>");
								
										window.console.log(configString);
			   							
									}							

							}
							window.console.log("kont: "+kont+"length: "+Forks.length);
							if(kont==Forks.length-1){
								window.console.log("bukatu");
								UI.Dialog.show_ForksOfRepository (configString);
								//DeltaUtils.readProductConfig(Forks,parent,configString,kind,1);	
			      	  		}else{
			      	  			kont=kont+1;
			      	  			DeltaUtils.readProductConfig(Forks,parent,configString,kind,kont);
			      	  		}		
						});
			      	}
			    });

			      	  
			});

		});
	

	//}
}






DeltaUtils.createConfiguratorForPropagation=function(kind,parent){
	
	var user=GitHub.getUserName(); 
	var repo=GitHub.getCurrentRepository(); 
	var author=GitHub.getCurrentAuthor();

	window.console.log("Fetching forks for repo: "+repo+" and author: "+author);
	var ghUser=new Gh3.User(author);
	var ghUserRepo=new Gh3.Repository(repo,ghUser);

	ghUserRepo.fetch(function (err, res) {
		window.console.log(ghUserRepo);
		if(err) { window.console.log("ERROR ghRepo.fetch");}
		ghUserRepo.fetchFork(function(err,res){
			var Forks= ghUserRepo.getForks();
			window.console.log("Forks!!");
			window.console.log(Forks);
			window.console.log("Forks length:"+ Forks.length);
			var configString='<html><head><title>GitDelta Configurator</title></head>'
			configString+=("<div align='center'>");
			configString+=("<p> Forks of the repository </p>");
			if(Forks.length==0){
				configString+=("<p> NO forks of the repository </p>");
				UI.Dialog.show_ForksOfRepository (configString);
			}
			if(kind=="mandatory"){
				configString+=("<p> The feature will spread to all products </p>");
			}
			else{
				configString+=("<p> Choose product for propagation </p>");
			}
			//for (i=0; i<Forks.length;i++){

				//var conf=DeltaUtils.readProductConfig(Forks[i],parent,configString,kind);
				//window.console.log(conf);
				DeltaUtils.readProductConfig(Forks,parent,configString,kind,0);
				/*window.console.log(isParent);
				configString+=("<input value=");
			   	configString+=(Forks[i].user);
				if(kind=="mandatory"){
					configString+=(" name='forks' class='features' type=checkbox disabled checked />");
				}else{
					configString+=("  name='forks' class='features' type=checkbox  />");
				}
				configString+=( "Name of de repository: "+Forks[i].name+ " ----> Owner: "+Forks[i].user.login);
				configString+=("<br>");*/
					
					
			//}
			//UI.Dialog.show_ForksOfRepository (configString);
		});
	});


	

}

DeltaUtils.selectedCheckForks=function(docu){
	window.console.log("in selectedCheckForks");
		  // perform the security-sensitive operation here
		var checkedValue = null; 
		var parser = new DOMParser();
		var html_nodes= docu;// parser.parseFromString(configString,"text/html");
		var inputElements = html_nodes.getElementsByClassName('features');
		var forkSelected = "";

		for(var i=0; i<inputElements.length; i++){
			window.console.log(inputElements[i].value);
			window.console.log(i);
			if(inputElements[i].checked){//if checked
				forkSelected+=inputElements[i].value+" ";
			}
		}
		window.console.log("selected forks: "+forkSelected);
 
}

DeltaUtils.createConfigurator=function(option, kind){
	//Irakurri feature Modela
	var user=GitHub.getUserName(); 
	var author=GitHub.getCurrentAuthor(); 
	var ghAuthor= new Gh3.User(author);
	var repo=GitHub.getCurrentRepository();
	var token=GitHub.getAuthenticityToken();
			var ghAuthorRepo= new Gh3.Repository(repo, ghAuthor);
	    	//1: access repository
			ghAuthorRepo.fetch(function (err, res) {
	          if(err) { window.console.log("ERROR 3 ghRepo.fetch"); }
				//2:fetch repository all branches
				ghAuthorRepo.fetchBranches(function (err, res) {
					var master=ghAuthorRepo.getBranchByName("master");//3: get master branh
					master.fetchContents(function (err, res) {//4: get contents (folders and files) for master branch
			          if(err) { throw "outch ..." }
			          var featureModelFile = master.getFileByName("model.xml");//5: get model.xml file
			      	  if(featureModelFile==null){
			      	  	window.console.log("Could not reach model.xml file in master branch!\n.");
			      	  	return;
			      	  }
			      	  else{
			      	  	//Step 2: read model content

			      	  	featureModelFile.fetchContent(function (err, res) {//6:fetch file content
			      	  		var xml=featureModelFile.getRawContent();//xml String with the xml document content
			      	  		//window.console.log(xml);//7: gte raw content and display in console
			      	  		saveFeatureModel(xml,1);

			   
			      	  		var parser = new DOMParser();
 				  			var xmlNodes = parser.parseFromString(xml, "application/xml");
			      	  		//window.console.log("Node: \n"+xmlNodes);
			      	  		
			      	  		
			      	  		var configString='<html><head><title>GitDelta Configurator</title></head>';//</body></html>';
							
							if(option==0){
								//EIG: get Core features
			      	  			validProduct(1);
								path="//feature/@name | //solitaryFeature/@name | //groupedFeature/@name"
								var nodes=xmlNodes.evaluate(path, xmlNodes, null, XPathResult.ANY_TYPE, null);
								var result=nodes.iterateNext();
								var arrayofFeaturesReverse= readFileForExplanation(3);
								/*var arrayofFeatures = [];
								var size= arrayofFeaturesReverse.length-1;
								
								for (i=0; i<arrayofFeaturesReverse.length-1;i++){
										
										arrayofFeatures[size]=arrayofFeaturesReverse[i];
										size--;
										
								}*/
							

								var kont=1;
								configString+=("<div align='center'>");
								configString+=("<p> Select the features for your product </p>");
								while (result){
									  var core=0;
									  configString+=("<input value=");
									  configString+=(result.nodeValue);
									  window.console.log("Uneko ezaugarria:"+ result.nodeValue+ "Kontadore: "+kont);
									  for (i=0; i<arrayofFeaturesReverse.length-1;i++){

											if(arrayofFeaturesReverse[i]==result.nodeValue){
												core=1
											}
										
										
										}

									   /*if(arrayofFeatures[kont]== result.nodeValue){
									  	configString+=("  name='features' class='features' type=checkbox  disabled checked/>");
									  	window.console.log("in DISABLED:"+result.nodeValue+kont);
									  	kont=kont+1;
									  }else{
									  	configString+=("  name='features' class='features' type=checkbox  />");
									  }*/

									  if(core==1){
									  	configString+=("  name='features' class='features' type=checkbox  disabled checked/>");
									  	window.console.log("in DISABLED:"+result.nodeValue+kont);
									  	kont=kont+1;
									  }else{
									  	configString+=("  name='features' class='features' type=checkbox  />");
									  }
									  
									  configString+=(result.nodeValue);
									  configString+=("<br>");
									  result=nodes.iterateNext();
								}
								//configString+=("</center>");
								configString+=("</div>");
								configString+='</body></html>';
								UI.Dialog.show_product_configurator_dialog(configString,DeltaUtils.selectedCheck,DeltaUtils.selectedCheck,option);
							}
							//EIG: if the product is valid
							if(option==1){

								configString+=("<td><div align='center'>");
								configString+=("<p> Your product is valid </p>");
								var arrayofFeatures= readFileSelectedFeaturesLocal();
								configString+=("<ul>");
									for (i=0; i<arrayofFeatures.length-1;i++){
										configString+=("<li>");
										configString+=(arrayofFeatures[i]);
										configString+=("</li>");
									}
									configString+=("</ul>");
									configString+=("</div></td>");
								configString+='</body></html>';
								UI.Dialog.show_product_configurator_dialog(configString,DeltaUtils.selectedCheck,DeltaUtils.selectedCheck,option);
							}


							//EIG: if the product is invalid
							if(option==2){
								configString+=("<table style='width:100%''>");
								configString+=("<tr><th  style='bold' colspan='3'>Your porduct is NOT valid </td></tr>");
								configString+=("<tr><td  width='30%'>Selected features </td><td width='30%'>Features to deselect </td><td width='30%'> Proposed product</td></tr>");
								
								//EIG: checkbox-ak
								configString+=("<tr><td   width='30%'><div align='center'>");
								path="//feature/@name | //solitaryFeature/@name | //groupedFeature/@name"
								var nodes=xmlNodes.evaluate(path, xmlNodes, null, XPathResult.ANY_TYPE, null);
								var result=nodes.iterateNext();
								var arrayofFeatures= readFileForExplanation(2);
								var arrayofFeaturesEveryReverse= readFileForExplanation(3);

								/*var arrayofFeaturesEvery = [];
								var size= arrayofFeaturesEveryReverse.length-1;
								
								for (i=0; i<arrayofFeaturesEveryReverse.length-1;i++){
										
										arrayofFeaturesEvery[size]=arrayofFeaturesEveryReverse[i];
										size--;
										
								}*/



								var kont=0;
								var kontEvery=1;
								while (result){
									  configString+=("<input value=");
									  configString+=(result.nodeValue);
									  var core=0;
									  for (i=0; i<arrayofFeaturesEveryReverse.length-1;i++){

											if(arrayofFeaturesEveryReverse[i]==result.nodeValue){
												core=1
											}
										
										
										}

									  if(core==1){
									  	configString+=("  name='features' class='features' type=checkbox  disabled checked/>");
									  	window.console.log("in DISABLED:"+result.nodeValue+kont);
									  	kont=kont+1;
									  }else if(arrayofFeatures[kont]== result.nodeValue){
									  	configString+=("  name='features' class='features' type=checkbox   checked/>");
									  	kont++;
									  }else{
									  	configString+=("  name='features' class='features' type=checkbox  />");
									  }
									  
									 /* if(arrayofFeaturesEvery[kontEvery]== result.nodeValue){
									  	configString+=("  name='features' class='features' type=checkbox  disabled checked/>");
									  	kont++;
									  	kontEvery++;
									  }
									  else if(arrayofFeatures[kont]== result.nodeValue){
									  	configString+=("  name='features' class='features' type=checkbox   checked/>");
									  	kont++;
									  }
									  
									  else{
									  	configString+=("  name='features' class='features' type=checkbox  />");
									  }*/
									  configString+=(result.nodeValue);
									  configString+=("<br>");
									  result=nodes.iterateNext();
								}

								configString+=("</div></td>");
								


								//EIG: Features to deselect
								configString+=("<td width='30%'><div align='center'>");
								var arrayofFeatures= readFileForExplanation(0);
								configString+=("<ul>");
									for (i=0; i<arrayofFeatures.length-1;i++){
										configString+=("<li>");
										configString+=(arrayofFeatures[i]);
										configString+=("</li>");
									}

								configString+=("</ul>");
								configString+=("</div></td>");

								//EIG: Proposed product
								configString+=("<td width='30%'><div align='center'>");
								//configString+=("<p> Proposed product </p>");
								var arrayofFeatures= readFileForExplanation(1);
								configString+=("<ul>");
									for (i=0; i<arrayofFeatures.length-1;i++){
										configString+=("<li>");
										configString+=(arrayofFeatures[i]);
										configString+=("</li>");
									}
									
								configString+=("</ul>");
								configString+=("</div></td>");
 
								configString+=("</tr></table>");

								configString+='</body></html>';
								UI.Dialog.show_product_configurator_dialog(configString,DeltaUtils.selectedCheck,DeltaUtils.selectedCheck,option);
							}

							//EIG: all features to select one (insertFeature)
							if(option==3){
								saveFeatureModel(xml,2);
								path="//feature/@name | //solitaryFeature/@name | //groupedFeature/@name"
								var nodes=xmlNodes.evaluate(path, xmlNodes, null, XPathResult.ANY_TYPE, null);
								var result=nodes.iterateNext();
								var allFeatures = "";
								configString+=("<div align='center'>");
								configString+=("<p> Where do you want to insert the new feature ? </p>");
								while (result){
									  configString+=("<input value=");
									  configString+=(result.nodeValue);
									  configString+=("  name='features' class='features' type=radio />");
									  configString+=(result.nodeValue);
									  configString+=("<br>");
									  allFeatures+=result.nodeValue+" ";
									  result=nodes.iterateNext();
								}
								configString+=("</div>");
								configString+='</body></html>';
								window.console.log(allFeatures);
								UI.Dialog.show_insertFeatureInterfaze(configString,2,allFeatures,kind);
							}
							//EIG: features with alternative (insertFeature)
							if(option==4){
								saveFeatureModel(xml,2);
								window.console.log("option4");
								path="//solitaryFeature[setRelation/cardinality]/@name | //groupedFeature[setRelation/cardinality]/@name"
								var nodes=xmlNodes.evaluate(path, xmlNodes, null, XPathResult.ANY_TYPE, null);
								var result=nodes.iterateNext();
								var allFeatures = "";
								configString+=("<div align='center'>");
								configString+=("<p> Where do you want to insert the new feature ? </p>");
								while (result){
									  configString+=("<input value=");
									  configString+=(result.nodeValue);
									  configString+=("  name='features' class='features' type=radio />");
									  configString+=(result.nodeValue);
									  configString+=("<br>");
									  allFeatures+=result.nodeValue+" ";
									  result=nodes.iterateNext();
								}
								configString+=("</div>");
								configString+='</body></html>';
								window.console.log(allFeatures);
								UI.Dialog.show_insertFeatureInterfaze(configString,2,allFeatures,kind);
							}
			
							//configString+='</body></html>';
							

							//UI.Dialog.show_product_configurator_dialog(configString,DeltaUtils.selectedCheck,DeltaUtils.selectedCheck,option);
			      	  	});
			      	  }
			      	});
			    });
			});
}

DeltaUtils.selectedCheck=function(docu){
	window.console.log(222311);
		  // perform the security-sensitive operation here
		var checkedValue = null; 
		var parser = new DOMParser();
	//	window.console.log(configString);
		var html_nodes= docu;// parser.parseFromString(configString,"text/html");
		//window.console.log(html_nodes);
		var inputElements = html_nodes.getElementsByClassName('features');
		//window.console.log("inputElements "+inputElements.length);
		//window.console.log(inputElements);
		var featuresSelected = "";
		for(var i=0; i<inputElements.length; i++){
			//window.console.log(inputElements[i].value);
			window.console.log(i);
			if(inputElements[i].checked){//if checked
				featuresSelected+=inputElements[i].value+" ";
			}
		}
		window.console.log("selected features: "+featuresSelected);

		//EIG: save SelectedFeatures
		saveSelectedFeatures(featuresSelected);
	
	
		//EIG: read selectedFeaturesLocal
		//readFileSelectedFeaturesLocal();

		DeltaUtils.checkConfigurationValidity();
		//call FAMA to check validity of featuresSelected and model.xml
		//1.Download Model.xml to local folder
		//2.Call Fama to check validity
		//3.If 
}


DeltaUtils.checkConfigurationValidity=function(featureList, featureModel){


	//EIG: the product is valid?
	validProduct(2);
	//EIG: read isValid.txt, is valid de selected product
	var isValid=readFileIsValid();
	window.console.log("The product is valid:"+isValid);

	if (isValid==1){ //if validity is correct
		
		DeltaUtils.createConfigurator(1);
		//DeltaUtils.enactProductComposition();
	}
	else{
		
		DeltaUtils.createConfigurator(2);
	}
	return false;
}


//EIG: function to create the product whith the valid configuration
//option=1 --> create product from proposedProductFile.txt
//option=2 --> create product from selectedFeaturesLocal.txt
DeltaUtils.createProduct=function(option){
	var author=GitHub.getCurrentAuthor();
	var user=GitHub.getUserName(); 
	var repo=GitHub.getCurrentRepository();

	var ghUser=new Gh3.User(user);
	var ghAuthor= new Gh3.User(author);
	var ghRepo= new Gh3.Repository(repo, ghUser);

	var listBranches=readFileForExplanation(option);
	DeltaUtils.enactProductComposition(listBranches,ghRepo,ghAuthor);
	
}
//EIG:productua sortu!
DeltaUtils.enactProductComposition=function(listBranches,ghRepo,ghAuthor){//listBranches= array of feature selected
		//var productBranches=window.prompt("Please enter the configuration equation","");
		//var listBranches=productBranches.split(" ");
		//Step 1: Precondition, check configuration equation correspond to branch names
		var productConfig, configFileContent="";
		window.console.log("step ");
    	ghRepo.fetch(function (err, res){
          if(err) { window.console.log("ERROR ghRepo.fetch"); }
			ghRepo.fetchBranches(function (err, res) {
				var ghBranch;
				for (i=0; i<listBranches.length;i++){
					ghBranch=ghRepo.getBranchByName(listBranches[i]);
					if(ghBranch!=null){
						productConfig+=ghBranch.name+" "+ghBranch.sha+"\n";
						configFileContent+=ghBranch.name+"\n";
					}else{ 
						window.alert("No such feature in the repository: '"+listBranches[i]+"'");
						error=true;
						return;
					}
				}
				//step4: download branches to local
				DeltaUtils.downloadBranches(ghAuthor,ghRepo,configFileContent,productConfig);
          	});
        });
}

DeltaUtils.getUserAccessToken=function(){
	return "877f51e5b60ac4fa652c21788d2b2d29a12f4556";
}
DeltaUtils.getAssanaApiToken=function(){
	return "2kDOdTDX.8lAUnLWS0V6UIPizPdQhMeI";
}

DeltaUtils.newSeedConfig="";

DeltaUtils.currentBranch="master";

DeltaUtils.productForkTimeOut="undefined";
DeltaUtils.postProductTimeOut="undefined";
DeltaUtils.forwardPropagationTimeOut="undefined";

DeltaUtils.sleep=function(millis){
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < millis);
}

DeltaUtils.issueToAsana=function(ghIssue, workspaceId, projectId){
	window.console.log("To Asana Issue: "+ghIssue);


	GM_xmlhttpRequest({//POST Task in workspace ONEKIN y project 
	  method: "POST",
	  url: "https://app.asana.com/api/1.0/tasks",
	  data: "name="+ghIssue.title+"&assignee=me&projects=8206296441983&workspace=8179240333828",
	  headers: {
	    "Authorization": "Basic MmtET2RURFguOGxBVW5MV1MwVjZVSVBpelBkUWhNZUk6",
	    "Content-Type": "application/x-www-form-urlencoded",
	  },
	  onreadystatechange: function(response) {
	  		var jsonResp = JSON.parse(response.responseText);
	        window.console.log (response.status,response.responseText, jsonResp);

	  		//if(response.readyState === 4)
	      		//window.open("https://asana.com","_blank");
	      		//addTags
	      	//	DeltaUtils.addTagsToAsanaTask
	  }
	});



}


DeltaUtils.fetchMessagesForFeature=function(branch,sinceCommit){
	window.console.log("retrieving commit messages for feature: "+branch.name);
	var user=GitHub.getUserName(); 
	var repo=GitHub.getCurrentRepository();
	var forked=GitHub.getForkedFrom().split("/");
	var author=forked[0]; 
	branch.fetchCommits(function (err, res) {				         					 	  												
		//window.console.log("commits for branch"+ res.name);//res=branch
		//window.console.log(res.getCommits());
		var com=res.getCommits()[0];//.getLastCommit();//res.getCommitBySha(bsha); branch.getLastCommit()
		window.console.log("commit for "+branch.name);
		//window.console.log(com);
		var j=1;
		var msg="";
		//msg="<div id='commits_bucket' class='tab-content'><thead><tr><th class='timeline-commits-header' colspan='4'><span class='octicon octicon-calendar'></span>"+branch.name+"</th></thead><tbody>";
		msg='<h3 class="commit-group-heading">'+'Feature '+branch.name+' new commits</h3>';
		msg=msg+'<ol class="commit-group">';
		while(sinceCommit!=com.sha){//get all commits messages for a feature
			window.console.log("com");
			window.console.log(com);
			window.console.log("Message:");
			window.console.log(com.message);
			//original
			//msg=msg+"<h5>Update "+j+" from date "+com.date+" autored by "+com.author.login+":</h5>"+com.message+"<br>";
		
			msg=msg+'<li class="commit commit-group-item js-navigation-item js-details-container">';
			msg=msg+'<img class="gravatar" width="36" height="36" src="https://2.gravatar.com/avatar/405f5d2af7dd000b91c22a5920dcc565?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&r=x&s=140" alt="">';
			msg=msg+'<p class="commit-title js-pjax-commit-title">';
			msg=msg+'<a class="message" title="'+com.message+'" data-pjax="true" href="/'+user+'/'+repo+'/commit/'+com.sha+'">'+com.message+'</a></p>';
			msg=msg+'<div class="commit-meta"><div class="authorship">';
			msg=msg+'<span class="author-name"><a rel="contributor" href="/'+author+'"> '+author+' </a></span> authored <time is="relative-time" datetime="'+com.date+'" title="'+com.date+'">'+com.date+'</time></div></div>';
			msg=msg+'</li>';

			com=branch.getCommitBySha(com.parents[0].sha);
			window.console.log("new commit:"+com.sha);//res.getCommitBySha(com.parents[0].sha);
			window.console.log(branch.name+"  message "+j+" "+msg);
			j++;	
		}
		var params;
		var render;
		msg=msg+'</ol>';
		var featureUp=new ShowFeatureUpdatesView();
		featureUp.setViewData({click:function(){obj.execute("run");}});
		params=[branch.name+" "+sinceCommit+"\n",user,author,msg];
		render=featureUp.render(params);//pasarle parametros al render
		GitHub.injectIntoShowFeatureUpdates(render);
	});

}

DeltaUtils.getProductConfigName=function(){
	var name="product.config";
	return name;
}

DeltaUtils.getProductShadowBranchName=function(){
	var name="shadowProduct";
	return name;
}

DeltaUtils.getUpdateMessagesFromBanch=function(b,bsha,tope,iteration,len,commitMessages,user,author,featuresChanged){
	var nb=b;
	nb.fetchCommits(function (err, res) {				         					 	  		
		window.console.log("Lengh "+len+" and loop number: "+iteration);
		window.console.log(nb);
		window.console.log(nb.getCommits());
		var com=nb.getCommitBySha(bsha);
		window.console.log("com: "+com);
		var i=1;
		var msg;
		while(tope!=com.sha){//get all commits messages for a feature
			window.console.log("Message:");
			window.console.log(com.message);
			msg=msg+"<h5>Update "+i+" from date "+com.date+" autored by "+com.author.login+":</h5>"+com.message+"<br>";
			com=nb.getCommitBySha(com.parents[0].sha);
			i++;
		}
		return msg;

	});
}

DeltaUtils.postNewProduct=function(branchName, user,repo,token){//post en masterBranch o seedBranch
	var OSName;
	if (window.navigator.appVersion.indexOf("Win")!=-1) OSName="win";
	if (window.navigator.appVersion.indexOf("Mac")!=-1) OSName="mac";

	window.console.log("Listo para hacer POST del producto en la branch: "+branchName);
	var listFiles=[];
	if(OSName=="mac")
		listFiles=SearchFilesInLocalFolder("content/product/features",listFiles);
	else if (OSName=="win")
			listFiles=SearchFilesInLocalFolder("content\\product\\features",listFiles);
	window.console.log("lis files: "+listFiles);
	var createBranches,createPullRequest=false;
	var ghUser=new Gh3.User(user);
	var ghUserRepo=new Gh3.Repository(repo,ghUser);
	DeltaUtils.sleep(1000);
	ghUserRepo.fetch(function (err, res) {
		window.console.log(ghUserRepo);
		if(err) { window.console.log("ERROR ghRepo.fetch");}
		ghUserRepo.fetchBranches(function(err,res){
			var master= ghUserRepo.getBranchByName(branchName);//master
			master.fetchCommits(function(err,res){
				var commit=master.getLastCommit().sha;
				window.console.log("commit for postinf product "+commit);
				window.console.log("listFile len: "+listFiles.length);
				for (i=0; i<listFiles.length; i++){
					var file=listFiles[i];//file path
					window.console.log("file: "+file);
					var splitPath;
					//if (OSName=="mac")
					  splitPath=file.split("/");
					//else if(OSName=="win") 
						//splitPath=file.split("\\");
					var fileName=splitPath[(splitPath.length-1)];
					window.console.log("ahora "+fileName+ " for path file "+file);
					var fileContent;
					if (OSName=="mac")
						fileContent= ReadFilesFromLocal("content/product/features/"+listFiles[i]);	
					else if (OSName=="win")
						fileContent= ReadFilesFromLocal("content\\product\\features\\"+listFiles[i]);
					fileContent=fileContent.trim();
					if(i==listFiles.length-1){
						if(branchName=="master") createBranches=true;
						else if(branchName=="seeds") createPullRequest=true;
						
					}

					var commitMessage="";
					if (branchName=="master") commitMesage="New derived product";
					else commitMessage="Propagated change";
					var fileWithbarOk=file.replace(/\\/g, "/");
					window.console.log("fileWithbarOk "+fileWithbarOk );
					DeltaUtils.postFile(user,repo,branchName,fileName,fileWithbarOk,commit,token,fileContent,createBranches,createPullRequest,commitMessage);
				}
			});
		});
	});
}

DeltaUtils.editFile=function(user,repo,branchName,fileName,commit,token,fileContent,editMsg){
	window.console.log(" start in Edit File");
	window.console.log("/"+user+"/"+repo+"/blob/"+branchName+"/"+fileName);
	Utils.XHR("/"+user+"/"+repo+"/blob/"+branchName+"/"+fileName,function(res){
		Utils.XHR("/"+user+"/"+repo+"/edit/"+branchName+"/"+fileName,function(res){
			Utils.XHR("/"+user+"/"+repo+"/tree-save/"+branchName+"/"+fileName,function(res){
			},"POST","authenticity_token="+encodeURIComponent(token)+"&filename="+fileName+"&message="+editMsg+"&commit="+commit+"&value="+encodeURIComponent(fileContent)+"&placeholder_message="+editMsg);					
		},"POST","authenticity_token="+encodeURIComponent(token));
	},"GET");
	window.console.log(" end in Edit File");
}
/*DeltaUtils.editFile=function(user,repo,branchName,fileName,commit,token,fileContent,editMsg){
	window.console.log(" start in Edit File");
	window.console.log("User"+user );
	window.console.log("Repo"+repo );
	window.console.log("branchname"+branchName );
	window.console.log("filename"+fileName);
	window.console.log("commit"+commit);
	window.console.log("token"+token );
	window.console.log("fileContent"+fileContent);
	Utils.XHR("/"+user+"/"+repo+"/blob/"+branchName+"/"+fileName,function(res){
		Utils.XHR("/"+user+"/"+repo+"/edit/"+branchName+"/"+fileName,function(res){
			Utils.XHR("/"+user+"/"+repo+"/tree-save/"+branchName+"/"+fileName,function(res){

			},"POST","authenticity_token="+encodeURIComponent(token)+"&filename="+fileName+"&message="+editMsg+"&commit="+commit+"&value="+encodeURIComponent(fileContent)+"&placeholder_message="+editMsg);					
		},"POST","authenticity_token="+encodeURIComponent(token));
	},"GET");
	window.console.log(" start in Edit File");
}*/


DeltaUtils.postFile=function(user,repo,branchName,fileName,file,commit,token,fileContent,createBranches,createPullRequest,newOrUpdateMessage){
	Utils.XHR("/"+user+"/"+repo+"/tree/"+branchName,function(res){
		Utils.XHR("/"+user+"/"+repo+"/new/"+branchName,function(res){
			Utils.XHR("/"+user+"/"+repo+"/create/"+branchName+"/"+file,function(res){
				if(createBranches){//WHEN IT IS THE LAST POST FOR PRODUCT FORK
					DeltaUtils.createBranch("master","seeds",user,repo,token);
					DeltaUtils.createBranch("master","develop",user,repo,token);
					window.location.href="/"+user+"/"+repo+"/tree/master";
				}
				if(createPullRequest){//WHEN IT IS THE LAST POST FOR FORWARD PROPAGATION
					Utils.XHR("/"+user+"/"+repo+"/compare/"+user+":develop...seeds",function(res){//https://github.com/letimome/stack-SPL/pull/create     
						Utils.XHR("/"+user+"/"+repo+"/pull/create",function(res){
							var ghUser=new Gh3.User(user);
							var ghRepo= new Gh3.Repository(repo, ghUser);
							ghRepo.fetch(function(err,res){
								ghRepo.fetchPullRequest(function(err,res){
									var pull=ghRepo.getPullRequests()[0];
									window.location.href="/"+user+"/"+repo+"/pulls";
								/*	if(pull!="undefined")
										window.location.href="/"+user+"/"+repo+"/pull/"+pull.number;
									else window.location.href="/"+user+"/"+repo+"/pulls/";*/
								});
							});
						},"POST","authenticity_token="+encodeURIComponent(token)+"&pull_request[title]=Update Feature "+branchName+"&repo="+user+"/"+repo+"&base="+user+":develop&head="+user+":seeds");   		
					},"GET");
				}
			},"POST","authenticity_token="+encodeURIComponent(token)+"&filename="+fileName+"&new_filename="+file+"&commit="+commit+"&value="+encodeURIComponent(fileContent)+"&placeholder_message="+newOrUpdateMessage);					
		},"POST","authenticity_token="+encodeURIComponent(token));
	},"GET");
}
//EIG
DeltaUtils.createBranch=function(parent, newBranchName,user,repo,token,f){
	window.console.log("createBranch "+newBranchName);
	Utils.XHR("/"+user+"/"+repo+"/tree/"+parent,function(res){
		Utils.XHR("/"+user+"/"+repo+"/branches",function(res){
		},"POST","authenticity_token="+encodeURIComponent(token)+"&branch="+parent+"&name="+newBranchName+"&path=");	
	},"GET");
}

DeltaUtils.createIssue=function(newName,body,checkedOption,kind){

	var title="New_"+kind+"_feature_of_"+checkedOption+"_("+newName+")";
	window.console.log(title);
	var user=GitHub.getUserName(); 
	var repo=GitHub.getCurrentRepository(); 
	var token=GitHub.getAuthenticityToken();
	window.console.log("createIsue "+title);
	window.console.log(user+repo+token);
	Utils.XHR("/"+user+"/"+repo+"/issues/new",function(res){
		Utils.XHR("/"+user+"/"+repo+"/issues",function(res){
		},"POST","authenticity_token="+encodeURIComponent(token)+"&issue[title]="+title+"&issue[body]="+body);	
	},"GET");
	window.console.log("finish issue");
}

DeltaUtils.editIssue=function(number){

	
	window.console.log("Issue number to edit: "+number);
	var user=GitHub.getUserName(); 
	var repo=GitHub.getCurrentRepository(); 
	var token=GitHub.getAuthenticityToken();
	window.console.log(user+repo+token);
	Utils.XHR("/"+user+"/"+repo+"/issues/"+number,function(res){
		window.console.log("lehenengo utils");
		Utils.XHR("/"+user+"/"+repo+"/issue_comments",function(res){
		},"POST","authenticity_token="+encodeURIComponent(token)+"&comment_and_close=1&issue="+number+"&comment[body]=");	
	},"GET");
	window.console.log("finish issue");
}


DeltaUtils.getCommitContent=function(ghAuthor,authorRepo,ghuser,shaToFetch,featureName,configFileContent,productConfig,isForwardProp){
	window.console.log("en getCommitContent");
	window.console.log("shaToFetch "+shaToFetch);

	var featureBranch=authorRepo.getBranchByName(featureName);

	featureBranch.fetchCommits(function(err,res){
		if (err){ 
			window.console.log("error on getCommitContent");
			window.console.log(err);
		}
		else{
			window.console.log("author repo Commits ");
			window.console.log(res);//el commit

			var commit=featureBranch.getCommitBySha(shaToFetch);//authorRepo.getCommitBySha
			//
			window.console.log("commit ");
			window.console.log(commit);
			//window.console.log(authorRepo);
			commit.fetchContents(authorRepo.name, function(err,res){
				window.console.log("commit object");
				window.console.log(commit);
				commit.eachContent(function(content){
					if (content.type=='file'){
		        		var file=commit.getFileByName(content.name);
		         		file.fetchContent(function (err, res) {
							if(err) { throw "outch ..." }
							if(isForwardProp==true){
								if(DeltaUtils.forwardPropagationTimeOut!="undefined")//clear timeout
									window.clearTimeout(DeltaUtils.forwardPropagationTimeOut);
								DeltaUtils.forwardPropagationTimeOut=window.setTimeout(function (){//(re)set timeout
									RunFHComposition(configFileContent);
									DeltaUtils.forwardPropagation(ghAuthor,ghRepo,configFileContent,productConfig);
								},3000);
							}
							SaveToDisk(file.getRawContent(),file.name,featureName);
						});
			   	 	}else{
			         	window.console.log(content.name+" is a dir");
			         	var dir=commit.getDirByName(content.name);
			         	DeltaUtils.iterateDirs(dir,featureName,ghAuthor,authorRepo,configFileContent,productConfig,false,isForwardProp);//dir,branch.name,ghAuthor,ghRepo,configFileContent,productConfig
		        	}
				});
			});
		}
	});
}


DeltaUtils.deleteContent=function(ghUserRepo, content, branch, user, repo, token, commitSha,isProductFork,isForwardProp){//tiene set timeOut para el post product
	window.console.log("isForwardProp= "+isForwardProp);
	if(content.type=="file"){ 


		window.console.log("contnet "+content.name);
		window.console.log(content);
		window.console.log("Inside deleteBranchContents for "+branch.name+"  for file"+content.path);
		var file= branch.getFileByName(content.name);
		window.console.log("comparing file names: "+file.name+" and "+DeltaUtils.getProductConfigName());
		if(file.name!= DeltaUtils.getProductConfigName()){
			Utils.XHR("/"+user+"/"+repo+"/tree/"+branch.name,function(res){
				window.console.log("The sha:"+commitSha);
				Utils.XHR("/"+user+"/"+repo+"/blob/"+branch.name+"/"+content.path,function(res){					
				},"POST","authenticity_token="+encodeURIComponent(token)+"&_method=delete&commit="+commitSha+"&placeholder_message=remove file");
				commitSha=ghUserRepo.getLastCommit().sha;
				window.console.log("new commit sha:"+commitSha);
			},"GET");
		}
		else window.console.log(file.name+" not deleted");		
		
		if(isProductFork==true){
			if(DeltaUtils.postProductTimeOut!="undefined")
				window.clearTimeout(DeltaUtils.postProductTimeOut);
			DeltaUtils.postProductTimeOut=window.setTimeout(function(){
				DeltaUtils.postNewProduct("master",user,repo,token);//......
			},3000);
		}
		else if(isForwardProp==true){
				window.console.log("isForwardProp");
				if(DeltaUtils.postProductTimeOut!="undefined")
					window.clearTimeout(DeltaUtils.postProductTimeOut);
				DeltaUtils.postProductTimeOut=window.setTimeout(function(){
					window.console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
					DeltaUtils.postNewProduct("seeds",user,repo,token);//......
				},3000);
			}

	}
	else{
		var dir=branch.getDirByName(content.name);
		DeltaUtils.deleteDirectories(dir, user,repo,token, commitSha, branch);	
	}
}

DeltaUtils.deleteDirectories=function(dir,user, repo, token, commit, branch){
window.console.log("en deleteDirectories dirs for "+dir.name);
//window.console.log(dir);
	dir.fetchContents(function (err, res) {
		if(err) { throw "outch ..." }
		dir.eachContent(function (content) {
			if(content.type=="file"){ 
				window.console.log("contnet "+content.name);
				window.console.log(content);
				//var file=branch.getFileByName(content.name);
				window.console.log("Inside deleteBranchContents for "+branch.name+"  for file"+content.path);
				Utils.XHR("/"+user+"/"+repo+"/blob/"+branch.name+"/"+content.path,function(res){
			    },"POST","authenticity_token="+encodeURIComponent(token)+"&_method=delete&commit="+commit+"&placeholder_message=remove file");
			}
			else{//it's a dir
				var dir_aux=dir.getDirByName(content.name);
				DeltaUtils.deleteDirectories(dir_aux, user, repo, token, commit, branch);
			}
		});
    }); 
}

DeltaUtils.downloadBranches=function(ghAuthor,ghRepo,configFileContent,productConfig){
	var branchToFetch;
	var listBranches=configFileContent.split("\n");
	window.console.log("downloading branches. List branches:"+listBranches.length);// 3 for master and underFlow
	for(var i=0; i<listBranches.length-1;i++){//2 vueltas
		branchToFetch=ghRepo.getBranchByName(listBranches[i]);
		DeltaUtils.extractBranchContents(branchToFetch,ghAuthor,ghRepo,configFileContent,productConfig,true,false);
		//DeltaUtils.productFork(ghAuthor,ghRepo,configFileContent,productConfig);	has a timeout
	}
}

//eig:
DeltaUtils.productFork=function(ghAuthor,ghRepo,configFileContent,productConfig){
	//step 4: compose branches content with the config file (branch names)

	window.console.log("inside product fork");
	var user=GitHub.getUserName(); 
	var author=GitHub.getCurrentAuthor(); 
	var repo=GitHub.getCurrentRepository();
	var token=GitHub.getAuthenticityToken(); 
	//RunFHComposition(configFileContent);	
			var listFiles=[];
			var OSName;
			if (window.navigator.appVersion.indexOf("Win")!=-1){ 
				OSName="win";
				listFiles=SearchFilesInLocalFolder("content\\product\\features",listFiles);
			}
			else if (window.navigator.appVersion.indexOf("Mac")!=-1) {
				OSName="mac";
				listFiles=SearchFilesInLocalFolder("content/product/features",listFiles);
			}
			window.console.log("Files in feature folder to post:"+listFiles);

			if(listFiles==null) {
				window.alert("Error composing with FeatureHouse\n"+DeltaUtils.getErrorLog());
				return;
			}
			window.console.log("step 5");
			//Step5: create PRODUCT REPOSITORY
			Utils.XHR("/"+author+"/"+repo+"/fork",function(res){//FORK & delete all branches + post the product + seed and develop branches
				var productBranch=ghRepo.default_branch;//Master branch
				var develop_branch="develop";
				var seeds_branch = "seeds";				
					window.console.log("the files: "+listFiles);
					window.console.log("product config:"+productConfig);
					var len= listFiles.length;
					//Step 6: create the product.config  file
					window.console.log("step 6");
					var ghUser = new Gh3.User(user);
					var ghUserRepo = new Gh3.Repository(repo, ghUser);
					ghUserRepo.fetch(function (err, res) {
						window.console.log(ghUserRepo);
						if(err) { window.console.log("ERROR ghRepo.fetch");}
						ghUserRepo.fetchCommits(function(err,res){//get the last commit
							window.console.log(res);
							var commit1=res.getLastCommit();//ghUserRepo, ghRepo.getLastCommit
							//window.console.log(ghUserRepo.getCommits());
							window.console.log("last commit :"+commit1);
							//var commitSha=commit1.sha;
								ghUserRepo.fetchBranches(function (err, res){
									if(err) window.console.log("error on fetch branches: "+err);
									var branches= ghUserRepo.getBranches();
									window.console.log(branches);
									ghUserRepo.eachBranch(function (branch){
										if(branch.name!="master"){ //delete branches except default_branch
											Utils.XHR("/"+user+"/"+repo+"/branches/"+branch.name,function(res){
												window.console.log("deleted branch "+branch.name);
											},"DELETE",token);
										}else{
											window.console.log("deleteBranchContents for: "+branch.name);
											branch.fetchContents(function (err, res) {//for master branch only
										        if(err) { throw "outch ..." }
										    		var commit=branch.sha; 
													window.console.log("new commmit (not used): "+commit);
											    	Utils.XHR("/"+user+"/"+repo+"/tree/"+productBranch,function(res){    //POST product config
														Utils.XHR("/"+user+"/"+repo+"/new/"+productBranch,function(res){
																Utils.XHR("/"+user+"/"+repo+"/create/"+productBranch,function(res){
															        branch.eachContent(function(content){//DELETE EACH CONTENT
															       		branch.fetchCommits(function(err,res){
															       			var lastCommit=branch.getLastCommit();
															       			window.console.log("branch "+branch.name +" last commit: "+lastCommit.sha);
															       			DeltaUtils.deleteContent(ghUserRepo,content,branch,user, repo, token ,lastCommit.sha,true,false);
															       		});
																    });
																},"POST","authenticity_token="+encodeURIComponent(token)+"&filename="+DeltaUtils.getProductConfigName()+"&new_filename="+DeltaUtils.getProductConfigName()+"&commit="+commit+"&value="+encodeURIComponent(productConfig)+"&placeholder_message=product configuration File");					
														},"POST","authenticity_token="+encodeURIComponent(token));
													},"GET");
											});
										}
									});
								});
						});
					});
			},"POST","authenticity_token="+encodeURIComponent(token));
}


DeltaUtils.forwardPropagation=function(ghAuthor,ghRepo,configFileContent,productConfig){
	window.console.log("In forwardPropagation operation");
		
	//1. Delete contents from seed branch
	//2. Update new config file
	//3. Post newProduct in seed branch
	//4. Create pull request

	//Compare which content changed 
	//edit File
	
	window.console.log("configFileContent: "+configFileContent);
	window.console.log("productConfig:"+productConfig);
	window.console.log("new seed: "+DeltaUtils.newSeedConfig);
	
	var user=GitHub.getUserName(); 	
	var repo=GitHub.getCurrentRepository();
	var token=GitHub.getAuthenticityToken(); 

	var ghUser= new Gh3.User(user);
	var ghRepo= new Gh3.Repository(repo,ghUser);
	window.console.log(ghUser);
	window.console.log(ghRepo);
	DeltaUtils.sleep(500);

	ghRepo.fetch(function (err,res){
		window.console.log(res);
		ghRepo.fetchBranches(function(err,res){
			window.console.log(222-2);
			var branch=ghRepo.getBranchByName("seeds");
			branch.fetchContents(function (err, res) {//for master branch only
				if(err) { throw "outch ..." }
				window.console.log("res: "+res);
				var commit=res.sha; 
				window.console.log("new commmit: "+commit);
				Utils.XHR("/"+user+"/"+repo+"/blob/seeds/"+DeltaUtils.getProductConfigName(),function(res){
					Utils.XHR("/"+user+"/"+repo+"/edit/seeds/"+DeltaUtils.getProductConfigName(),function(res){
						Utils.XHR("/"+user+"/"+repo+"/tree-save/seeds/"+DeltaUtils.getProductConfigName(),function(res){
							branch.eachContent(function(content){//DELETE EACH CONTENT
								branch.fetchCommits(function(err,res){
									var lastCommit=branch.getLastCommit();
										window.console.log("branch "+branch.name +" last commit: "+lastCommit.sha);
																//ghUserRepo, content, branch, user, repo, token, commitSha,isProductFork,isForwardProp
										DeltaUtils.deleteContent(ghRepo,content,branch,user, repo, token ,lastCommit.sha,false,true);
								});
							});
						},"POST","authenticity_token="+encodeURIComponent(token)+"&filename="+DeltaUtils.getProductConfigName()+"&new_filename="+DeltaUtils.getProductConfigName()+"&commit="+commit+"&value="+encodeURIComponent(DeltaUtils.newSeedConfig)+"&placeholder_message=product configuration File updated");					
					},"POST","authenticity_token="+encodeURIComponent(token));
				},"GET");
			});
		});

	});
}

DeltaUtils.extractBranchContents=function(branch, ghAuthor,ghRepo,configFileContent,productConfig,isProductFork,isForwardProp){
	window.console.log("extractBranchContents for "+branch.name);
	branch.fetchContents(function (err, res) {
        if(err) { throw "outch ..." }
        branch.eachContent(function(content){
	        if (content.type=='file'){
	        	var file=branch.getFileByName(content.name);
	         	file.fetchContent(function (err, res) {
					if(err) { window.console.log( "outch extractBranchContents..."); }
					 window.console.log("saving: "+file.path);
					if(isProductFork==true){
						if(DeltaUtils.productForkTimeOut!="undefined")//clear timeout
							window.clearTimeout(DeltaUtils.productForkTimeOut);
						DeltaUtils.productForkTimeOut=window.setTimeout(function (){//(re)set timeout
							RunFHComposition(configFileContent);
							DeltaUtils.productFork(ghAuthor,ghRepo,configFileContent,productConfig);
						},3000);	
					}
					else if(isForwardProp==true){
						if(DeltaUtils.forwardPropagationTimeOut!="undefined")//clear timeout
							window.clearTimeout(DeltaUtils.forwardPropagationTimeOut);
						DeltaUtils.forwardPropagationTimeOut=window.setTimeout(function (){//(re)set timeout
							RunFHComposition(configFileContent);
							DeltaUtils.forwardPropagation(ghAuthor,ghRepo,configFileContent,productConfig);
						},3000);
					}
					SaveToDisk(file.getRawContent(),file.name,branch.name);//SAVE TO DISC! 
				});
		    }else{
	         	var dir=branch.getDirByName(content.name);
	         	DeltaUtils.iterateDirs(dir,branch.name,ghAuthor,ghRepo,configFileContent,productConfig,isProductFork,isForwardProp);	
	        }
        });
	});
}

DeltaUtils.iterateDirs=function(dir,branchName,ghAuthor,ghRepo,configFileContent,productConfig,isProductFork,isForwardProp){
window.console.log("en iterate dirs for "+dir.name+ "and branhc "+branchName);
//window.console.log(dir);
	dir.fetchContents(function (err, res) {
		if(err) { throw "outch ..." }
		dir.eachContent(function (content) {
			if(content.type=="file"){ 
				var file2=dir.getFileByName(content.name);
				file2.fetchContent(function (err, res) {
					if(err) { throw "outch ..." }
						if(isProductFork==true){
							if(DeltaUtils.productForkTimeOut!="undefined")//clear timeout
								window.clearTimeout(DeltaUtils.productForkTimeOut);
							DeltaUtils.productForkTimeOut=window.setTimeout(function (){//(re)set timeout
								RunFHComposition(configFileContent);
								DeltaUtils.productFork(ghAuthor,ghRepo,configFileContent,productConfig);
								},3000);
						}
						if(isForwardProp==true){
							if(DeltaUtils.forwardPropagationTimeOut!="undefined")//clear timeout
								window.clearTimeout(DeltaUtils.forwardPropagationTimeOut);
							DeltaUtils.forwardPropagationTimeOut=window.setTimeout(function (){//(re)set timeout
								RunFHComposition(configFileContent);
								DeltaUtils.forwardPropagation(ghAuthor,ghRepo,configFileContent,productConfig);
								},3000);
						}
						SaveToDisk(file2.getRawContent(),file2.path,branchName);
				});
			}
			else{//if it is a dir
				var dir_aux=dir.getDirByName(content.name);
				DeltaUtils.iterateDirs(dir_aux,branchName,ghAuthor,ghRepo,configFileContent,productConfig,isProductFork,isForwardProp);
			}
		});
    }); 

}

DeltaUtils.showConfigurator=function(){
	

}

UI = {};

UI.opaque_layer ={
		layer_css_style : "display:none; position:fixed; top:0px; left:0px; opacity:0.6; filter:alpha(opacity=60); background-color: #000000; z-Index:1000;",
		
		create : function(doc){
			if(!doc) doc = document;
			win = doc.defaultView;
			
			//only create if not created before
			if(!doc.getElementById("opaque_layer")){
				//create and add elements
				var opaque_layer = doc.createElement("div");
				opaque_layer.setAttribute("id", "opaque_layer");
				opaque_layer.setAttribute("style", UI.opaque_layer.layer_css_style);
			
				doc.body.appendChild(opaque_layer);
			}
		},
		show : function(doc){
			if(!doc) doc = document;
			
			if(!UI.opaque_layer.exists(doc)) UI.opaque_layer.create(doc);
			
			UI.opaque_layer.setPosition(doc);				
	
			doc.getElementById("opaque_layer").style.display = "block";
		},
		hide : function(doc){
			if(!doc) doc = document;
	
			doc.getElementById("opaque_layer").style.display = "none";
		},
		setPosition : function(doc){
			if(!doc) doc = document;
	
			var bws = Util.getBrowserSize();
			
			var shadow = doc.getElementById("opaque_layer");
			shadow.style.width = bws.width + "px";
			shadow.style.height = bws.height + "px";
		
		},
		exists : function(doc){
			return doc.getElementById("opaque_layer");
		},
		visible : function(doc){
			if(!doc) var doc = document;
			return (doc.getElementById("opaque_layer") && doc.getElementById("opaque_layer").style.display == "block");
		}
	},

UI.Dialog = {

		fontStyle : "font-size: 12px; font-family: Arial, Helvetica, sans-serif;",
		buttonStyle : "font-size: 12px; font-family: Arial, Helvetica, sans-serif; background: YellowGreen; color: White; margin: 5px; padding: 2px 4px; border: none; border-radius: 3px;",
	
		create_dialog : function(elems){			
			
		
			//look for opaque layer
			UI.opaque_layer.show(document);
		
			//if dialog already exists, change its content
			if(document.getElementById("prompt_wf")){
				main_div = document.getElementById("prompt_wf");
				main_div.innerHTML = "";
			}
		
			//else create div
			else{
				var main_div = document.createElement("div");
				main_div.setAttribute("id", "prompt_wf");
				main_div.setAttribute("style", "position: fixed; max-width: 400px; z-index: 7000; left: 50%; margin-left: -200px; top: 100px; background: white url() bottom right no-repeat; padding: 27px; border: 10px solid white; border-radius: 5px; text-align: center;"
												+ "font-size: 12px;");
											
				document.body.appendChild(main_div);
			}
		
			for(var i = 0; i < elems.length; i++){
				main_div.appendChild(elems[i]);
			}

			var div_width = document.getElementById("prompt_wf").offsetWidth;
			var margin_left = (parseInt(div_width)/2)*-1;
		
			document.getElementById("prompt_wf").style.marginLeft = margin_left+"px";
		},
	
		remove_dialog : function(){
			var documentc = document;
		
			//look for prompt div
			if(documentc.getElementById("prompt_wf")){
				var div = documentc.getElementById("prompt_wf");
				div.parentNode.removeChild(div);
				UI.opaque_layer.hide(documentc);
			}
		},
	
		/**
		* This function creates a dialog that shows a string and an image
		* @param {string} txt
		* @param {string=} img An image represented as a BASE64 string that will be shown at the bottom of the message (optional)
		**/
		show_message : function(txt, img){
			var documentc = document;
			var p = documentc.createElement("p");
			p.innerHTML = txt;
			p.setAttribute("style", UI.Dialog.fontStyle+"display: block; margin: 0 0 10px; text-align: center;");
		
			var elements = [p];
		
			if(img){
				var im = documentc.createElement("img");
				im.setAttribute("title", "Webfeeder message image");
				im.setAttribute("alt", "Webfeeder message image");
				im.setAttribute("src", img);
				im.setAttribute("style", "display: inline; margin: 10px;");
			
				elements.push(im);
			}
	
			//create dialog with created elements
			UI.Dialog.create_dialog(elements);
		},
	
		/**
		* This function creates a dialog that shows two options: yes or no
		* @param {string} txt
		* @param {function} yes_callback
		* @param {function} no_callback
		**/
		show_insertFeatureInterfaze : function(txt, phase, allFeatures,kind){
			//var document = document;
		
			var p = document.createElement("p");
			p.innerHTML = txt;
			p.setAttribute("style", UI.Dialog.fontStyle+"display: block; margin: 0 0 20px; text-align: center;");
			
			var yes_btn = document.createElement("input");
			yes_btn.setAttribute("type", "button");
			yes_btn.setAttribute("id", "general_FFD_dialog_yes");
			yes_btn.setAttribute("value", "Acept");
			yes_btn.setAttribute("style", UI.Dialog.buttonStyle);
		
			yes_btn.addEventListener("click", function(e){			
				//delete prompt
				DeltaUtils.selectedInsert(p,phase,allFeatures,kind);
				UI.Dialog.remove_dialog();
			
				yes_callback();
			});
	
			var no_btn = document.createElement("input");
			no_btn.setAttribute("type", "button");
			yes_btn.setAttribute("id", "general_FFD_dialog_no");
			no_btn.setAttribute("value", "Cancel");
			no_btn.setAttribute("style", UI.Dialog.buttonStyle);
			
			no_btn.addEventListener("click", function(e){			
				//delete prompt
				UI.Dialog.remove_dialog();
		
				no_callback();
			});
			
			var elements = [p, yes_btn, no_btn];
	
			//create dialog with created elements
			UI.Dialog.create_dialog(elements);
		},

		show_issueInterface : function(txt){
			//var document = document;
			window.console.log("issueinterface");
			var p = document.createElement("p");
			p.innerHTML = txt;
			p.setAttribute("style", UI.Dialog.fontStyle+"display: block; margin: 0 0 20px; text-align: center;");
			
			var yes_btn = document.createElement("input");
			yes_btn.setAttribute("type", "button");
			yes_btn.setAttribute("id", "general_FFD_dialog_yes");
			yes_btn.setAttribute("value", "Acept");
			yes_btn.setAttribute("style", UI.Dialog.buttonStyle);
		
			yes_btn.addEventListener("click", function(e){			
				
				DeltaUtils.selectedCheckIssue(p);
				UI.Dialog.remove_dialog();
			
				yes_callback();
			});
	
			var no_btn = document.createElement("input");
			no_btn.setAttribute("type", "button");
			yes_btn.setAttribute("id", "general_FFD_dialog_no");
			no_btn.setAttribute("value", "Cancel");
			no_btn.setAttribute("style", UI.Dialog.buttonStyle);
			
			no_btn.addEventListener("click", function(e){			
				//delete prompt
				UI.Dialog.remove_dialog();
		
				no_callback();
			});
			
			var elements = [p, yes_btn, no_btn];
	
			//create dialog with created elements
			UI.Dialog.create_dialog(elements);
		},


		show_ForksOfRepository : function(txt){
			//var document = document;
		
			var p = document.createElement("p");
			p.innerHTML = txt;
			p.setAttribute("style", UI.Dialog.fontStyle+"display: block; margin: 0 0 20px; text-align: center;");
			
			var yes_btn = document.createElement("input");
			yes_btn.setAttribute("type", "button");
			yes_btn.setAttribute("id", "general_FFD_dialog_yes");
			yes_btn.setAttribute("value", "Acept");
			yes_btn.setAttribute("style", UI.Dialog.buttonStyle);
		
			yes_btn.addEventListener("click", function(e){			
				//delete prompt
				window.console.log("Forward progagation for selected forks");
				DeltaUtils.selectedCheckForks(p);
				UI.Dialog.remove_dialog();
			
				yes_callback();
			});
	
			var no_btn = document.createElement("input");
			no_btn.setAttribute("type", "button");
			yes_btn.setAttribute("id", "general_FFD_dialog_no");
			no_btn.setAttribute("value", "Cancel");
			no_btn.setAttribute("style", UI.Dialog.buttonStyle);
			
			no_btn.addEventListener("click", function(e){			
				//delete prompt
				UI.Dialog.remove_dialog();
		
				no_callback();
			});
			
			var elements = [p, yes_btn, no_btn];
	
			//create dialog with created elements
			UI.Dialog.create_dialog(elements);
		},
											
		show_wf_yesno_dialog : function(txt, yes_callback, no_callback){
			//var document = document;
		
			var p = document.createElement("p");
			p.innerHTML = txt;
			p.setAttribute("style", UI.Dialog.fontStyle+"display: block; margin: 0 0 20px; text-align: center;");
			
			var yes_btn = document.createElement("input");
			yes_btn.setAttribute("type", "button");
			yes_btn.setAttribute("id", "general_FFD_dialog_yes");
			yes_btn.setAttribute("value", "Yes");
			yes_btn.setAttribute("style", UI.Dialog.buttonStyle);
		
			yes_btn.addEventListener("click", function(e){			
				//delete prompt
				UI.Dialog.remove_dialog();
			
				yes_callback();
			});
	
			var no_btn = document.createElement("input");
			no_btn.setAttribute("type", "button");
			yes_btn.setAttribute("id", "general_FFD_dialog_no");
			no_btn.setAttribute("value", "No");
			no_btn.setAttribute("style", UI.Dialog.buttonStyle);
			
			no_btn.addEventListener("click", function(e){			
				//delete prompt
				UI.Dialog.remove_dialog();
		
				no_callback();
			});
			
			var elements = [p, yes_btn, no_btn];
	
			//create dialog with created elements
			UI.Dialog.create_dialog(elements);
		},
		 //yes_callback the function to call when you press yes, and with no_callback when you press no
		
		show_product_configurator_dialog : function(txt, yes_callback, no_callback,option){
			
			var p = document.createElement("p");
			p.innerHTML = txt;
			p.setAttribute("style", UI.Dialog.fontStyle+"display: block; margin: 0 0 20px; text-align: center;");
			
			var yes_btn = document.createElement("input");
			yes_btn.setAttribute("type", "button");
			yes_btn.setAttribute("id", "general_FFD_dialog_yes");
			//yes_btn.setAttribute("value", "Create Product");
			if(option==1){
				yes_btn.setAttribute("value", "Create Your Product");
			}else if(option==2){
				yes_btn.setAttribute("value", "Create Proposed Product");
			}
			yes_btn.setAttribute("style", UI.Dialog.buttonStyle);
		
			yes_btn.addEventListener("click", function(e){	//create Product clickatu denean		
				window.console.log("yes_btn");
				if(option==1){
					window.console.log("Your product is created");
					DeltaUtils.createProduct(2);
				}else if (option==2){
					window.console.log("Proposed product is created");
					DeltaUtils.createProduct(1);
				}
				UI.Dialog.remove_dialog();//delete prompt
			});
	
			var no_btn = document.createElement("input");
			no_btn.setAttribute("type", "button");
			no_btn.setAttribute("id", "general_FFD_dialog_no");
			if(option==0){
				no_btn.setAttribute("value", "Check validity");
			}else if(option==2){
				no_btn.setAttribute("value", "Check validity again");
			}
			
			no_btn.setAttribute("style", UI.Dialog.buttonStyle);
			
			no_btn.addEventListener("click", function(e){			
				//delete prompt
				UI.Dialog.remove_dialog();
				DeltaUtils.selectedCheck(p);
			});
			
			var calcel_btn = document.createElement("input");
			calcel_btn.setAttribute("type", "button");
			calcel_btn.setAttribute("id", "general_FFD_dialog_cancel");
			calcel_btn.setAttribute("value", "Cancel");
			calcel_btn.setAttribute("style", UI.Dialog.buttonStyle);
			
			calcel_btn.addEventListener("click", function(e){			
				//delete prompt
				UI.Dialog.remove_dialog();
			});

			var start_btn = document.createElement("input");
			start_btn.setAttribute("type", "button");
			start_btn.setAttribute("id", "general_FFD_dialog_start");
			start_btn.setAttribute("value", "Check Validity of another Product");
			start_btn.setAttribute("style", UI.Dialog.buttonStyle);
			
			start_btn.addEventListener("click", function(e){			
				//delete prompt
				window.console.log("botoia");
				DeltaUtils.createConfigurator(0);
				UI.Dialog.remove_dialog();
			});

			if(option==0){
				var elements = [p,no_btn, calcel_btn];
			}else if (option==1){
				var elements = [p,  yes_btn, start_btn, calcel_btn];
			}else if(option==2){
				var elements = [p,no_btn, yes_btn,calcel_btn];
			}
			//var elements = [p, yes_btn, no_btn, calcel_btn];
	
			//create dialog with created elements
			UI.Dialog.create_dialog(elements);
		}
	},

Util={};

Util.getBrowserSize = function(doc){
		if(!doc) doc = document;
		win = doc.defaultView;
	
		var intH = 0;
		var intW = 0;
	
		if (typeof win.innerWidth == 'number') {
			intH = win.innerHeight;
			intW = win.innerWidth;
		} else if (doc.documentElement && (doc.documentElement.clientWidth || doc.documentElement.clientHeight)){
			intH = doc.documentElement.clientHeight;
			intW = doc.documentElement.clientWidth;
		} else if (doc.body && (doc.body.clientWidth || doc.body.clientHeight)) {
			intH = doc.body.clientHeight;
			intW = doc.body.clientWidth;
		}

		return {
			width: parseInt(intW),
			height: parseInt(intH)
		};
	};



DeltaUtils.getErrorLog=function(){
	var log=GetLogFileContent();
	window.console.log("LOG CONTENT:\n"+log);
	return log;
}

Utils={};

Utils.XHR=function(url,f,method,params){
 var xhr = new XMLHttpRequest();

 if(method=="DELETE"){
 //	window.console.log("method delete "+url+"   "+params);
 	xhr.open("DELETE", url, true);
 	if(params!=null){
 		window.console.log(params);
        xhr.setRequestHeader("X-CSRF-Token",params);
        xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
        xhr.setRequestHeader("Pragma","no-cache");
 	}
 }
 else{
	 		
	 		if(method=="POST"){ //it's a post
	 			xhr.open("POST",url,true);
	 			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	 			xhr.setRequestHeader("Pragma","no-cache");
	 			
	 		}
		 	else{
		 		xhr.open("GET", url, true);
		 		xhr.setRequestHeader("Pragma","no-cache");
		 		
		 	}
	 		
	 		
 } 
 xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
        debugger;
        f(xhr.responseText,xhr);//apply
    } else {
      console.error("error on XHR onload");
      console.error(xhr.statusText);
    }
  }
 };
/*  xhr.onreadystatechange = function() {
  if(this.readyState == 2) {
  	window.console.log("READYYYYYYYY!");
    window.console.log(xhr.getAllResponseHeaders());
  }
};*/
 xhr.onerror = function (e) {
     debugger;
  f(null,xhr);
  window.console.log("XHR ONERROR for method "+ method+" url "+url+" and params" +params);
  window.console.log(e);
  console.error(xhr.statusText);
 };

 xhr.send(params);     

}


//Capturing event for compare range change
//Ajax deletes "Fordward Propagation button"

/*/ Temporal fix to reloading problem 
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var list = document.querySelector('#js-repo-pjax-container');
  
  var observer = new MutationObserver(function(mutations) {  
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        var list_values = [].slice.call(list.children)
            .map( function(node) { return node.innerHTML; })
            .filter( function(s) {
              if (s === '<br>') {
                return false;
              }
              else {
                return true;
              }
         });
        window.console.log(list_values);
        var back=GitHub.getBrackward();
        window.console.log("back: "+back);
        var pullReq=GitHub.getPullRequestButton();
        window.console.log("pull: "+pullReq);
        if( back!=null ){
        	window.console.log("dentro");
        	window.location.reload();
        }
      }
    });
  });
  
  observer.observe(list, {
  	attributes: true, 
  	childList: true, 
  	characterData: true
  });
*/

new LoadEController().init();

