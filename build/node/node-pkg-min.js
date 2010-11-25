/*
Copyright 2010, KISSY UI Library v1.1.6dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("node",function(a){function f(c,h,i){if(!(this instanceof f))return new f(c,h,i);if(c){if(a.isString(c)){c=o.create(c,h,i);if(c.nodeType===11)return new a.NodeList(c.childNodes)}else if(c instanceof f)return c;else c=c;this[0]=c}else this.length=0}var o=a.DOM;f.TYPE="-ks-Node";a.augment(f,{length:1,getDOMNode:function(){return this[0]},nodeType:f.TYPE});a.one=function(c,h){var i=a.get(c,h);return i?new f(i):null};a.Node=f});
KISSY.add("nodelist",function(a){function f(h){if(!(this instanceof f))return new f(h);c.push.apply(this,a.makeArray(h)||[])}var o=a.DOM,c=Array.prototype;a.mix(f.prototype,{length:0,item:function(h){var i=null;if(o._isElementNode(this[h]))i=new a.Node(this[h]);return i},getDOMNodes:function(){return c.slice.call(this)},each:function(h,i){var j=this.length,p=0,n;for(n=new a.Node(this[0]);p<j&&h.call(i||n,n,p,this)!==false;n=new a.Node(this[++p]));return this}});a.all=function(h,i){return new f(a.query(h,
i,true))};a.NodeList=f});
KISSY.add("node-attach",function(a,f){function o(b,d,e,k){b=[this[b?v:s]()].concat(a.makeArray(d));if(d[e]===f)return k.apply(j,b);else{k.apply(j,b);return this}}function c(b,d){a.each(b,function(e){a.each([q,t],function(k,g){k[e]=function(m){switch(d){case u:return function(){return o.call(this,g,arguments,1,m)};case r:return function(){return o.call(this,g,arguments,0,m)};case w:return function(){var l=this[g?v:s]();return(l=m.apply(j,[l].concat(a.makeArray(arguments))))?new (a[a.isArray(l)?"NodeList":
"Node"])(l):null};default:return function(){var l=this[g?v:s]();l=m.apply(j,[l].concat(a.makeArray(arguments)));return l===f?this:l}}}(j[e])})})}function h(b,d,e){b&&a.each(this,function(k){var g;if(d||a.isString(b))g=j.create(b);else{if(n(b,1)||n(b,3))g=b;if(x(b))g=b[0]}j[e](g,k)});return this}function i(b,d){if((b=a.get(b))&&b.appendChild)a.each(this,function(e){j[d](e,b)});return this}var j=a.DOM,p=a.Event,n=j._nodeTypeIs,x=j._isKSNode,q=a.Node.prototype,t=a.NodeList.prototype,s="getDOMNode",v=
s+"s",u=1,r=2,w=4;a.mix(q,{one:function(b){return a.one(b,this[0])},all:function(b){return a.all(b,this[0])}});c(["data","removeData"],u);c(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);c(["attr","removeAttr"],u);c(["val","text"],r);c(["css"],u);c(["width","height"],r);c(["offset"],r);c(["scrollIntoView"]);c(["parent","next","prev","siblings","children"],w);c(["contains"]);c(["html"],r);c(["remove"]);a.each(["insertBefore","insertAfter"],function(b){q[b]=function(d){j[b].call(j,
this[0],d);return this}});a.each([q,t],function(b,d){a.each(["append","prepend"],function(e){b[e]=function(k){return h.call(this,k,d,e)};b[e+"To"]=function(k){return i.call(this,k,e)}})});a.each([q,t],function(b){a.mix(b,a.EventTarget);b._supportSpecialEvent=true;b._addEvent=function(d,e,k){for(var g=0,m=this.length;g<m;g++)p._simpleAdd(this[g],d,e,k)};b._removeEvent=function(d,e,k){for(var g=0,m=this.length;g<m;g++)p._simpleRemove(this[g],d,e,k)};delete b.fire});t._getScope=function(b){for(var d=
0,e=this.length;d<e;d++)if(b===this[d])return new a.Node(this[d]);return null}});
