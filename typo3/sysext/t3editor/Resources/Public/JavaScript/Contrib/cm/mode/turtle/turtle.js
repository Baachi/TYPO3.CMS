!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("turtle",function(a){function b(a){return new RegExp("^(?:"+a.join("|")+")$","i")}function c(a,b){var c=a.next();if(g=null,"<"==c&&!a.match(/^[\s\u00a0=]/,!1))return a.match(/^[^\s\u00a0>]*>?/),"atom";if('"'==c||"'"==c)return b.tokenize=d(c),b.tokenize(a,b);if(/[{}\(\),\.;\[\]]/.test(c))return g=c,null;if("#"==c)return a.skipToEnd(),"comment";if(j.test(c))return a.eatWhile(j),null;if(":"==c)return"operator";if(a.eatWhile(/[_\w\d]/),":"==a.peek())return"variable-3";var e=a.current();return i.test(e)?"meta":c>="A"&&c<="Z"?"comment":"keyword";var e}function d(a){return function(b,d){for(var e,f=!1;null!=(e=b.next());){if(e==a&&!f){d.tokenize=c;break}f=!f&&"\\"==e}return"string"}}function e(a,b,c){a.context={prev:a.context,indent:a.indent,col:c,type:b}}function f(a){a.indent=a.context.indent,a.context=a.context.prev}var g,h=a.indentUnit,i=(b([]),b(["@prefix","@base","a"])),j=/[*+\-<>=&|]/;return{startState:function(){return{tokenize:c,context:null,indent:0,col:0}},token:function(a,b){if(a.sol()&&(b.context&&null==b.context.align&&(b.context.align=!1),b.indent=a.indentation()),a.eatSpace())return null;var c=b.tokenize(a,b);if("comment"!=c&&b.context&&null==b.context.align&&"pattern"!=b.context.type&&(b.context.align=!0),"("==g)e(b,")",a.column());else if("["==g)e(b,"]",a.column());else if("{"==g)e(b,"}",a.column());else if(/[\]\}\)]/.test(g)){for(;b.context&&"pattern"==b.context.type;)f(b);b.context&&g==b.context.type&&f(b)}else"."==g&&b.context&&"pattern"==b.context.type?f(b):/atom|string|variable/.test(c)&&b.context&&(/[\}\]]/.test(b.context.type)?e(b,"pattern",a.column()):"pattern"!=b.context.type||b.context.align||(b.context.align=!0,b.context.col=a.column()));return c},indent:function(a,b){var c=b&&b.charAt(0),d=a.context;if(/[\]\}]/.test(c))for(;d&&"pattern"==d.type;)d=d.prev;var e=d&&c==d.type;return d?"pattern"==d.type?d.col:d.align?d.col+(e?0:1):d.indent+(e?0:h):0},lineComment:"#"}}),a.defineMIME("text/turtle","turtle")});