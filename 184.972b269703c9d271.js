(self.webpackChunklumar=self.webpackChunklumar||[]).push([[184],{7184:(w,T,B)=>{var M;!function(m,K,N){if(m){for(var k,h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},q={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},L={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},x={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p=1;p<20;++p)h[111+p]="f"+p;for(p=0;p<=9;++p)h[p+96]=p.toString();l.prototype.bind=function(r,e,n){var o=this;return o._bindMultiple.call(o,r=r instanceof Array?r:[r],e,n),o},l.prototype.unbind=function(r,e){return this.bind.call(this,r,function(){},e)},l.prototype.trigger=function(r,e){var n=this;return n._directMap[r+":"+e]&&n._directMap[r+":"+e]({},r),n},l.prototype.reset=function(){var r=this;return r._callbacks={},r._directMap={},r},l.prototype.stopCallback=function(r,e){if((" "+e.className+" ").indexOf(" mousetrap ")>-1||R(e,this.target))return!1;if("composedPath"in r&&"function"==typeof r.composedPath){var o=r.composedPath()[0];o!==r.target&&(e=o)}return"INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable},l.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},l.addKeycodes=function(r){for(var e in r)r.hasOwnProperty(e)&&(h[e]=r[e]);k=null},l.init=function(){var r=l(K);for(var e in r)"_"!==e.charAt(0)&&(l[e]=function(n){return function(){return r[n].apply(r,arguments)}}(e))},l.init(),m.Mousetrap=l,w.exports&&(w.exports=l),void 0!==(M=function(){return l}.call(T,B,T,w))&&(w.exports=M)}function C(r,e,n){r.addEventListener?r.addEventListener(e,n,!1):r.attachEvent("on"+e,n)}function D(r){if("keypress"==r.type){var e=String.fromCharCode(r.which);return r.shiftKey||(e=e.toLowerCase()),e}return h[r.which]?h[r.which]:q[r.which]?q[r.which]:String.fromCharCode(r.which).toLowerCase()}function U(r,e){return r.sort().join(",")===e.sort().join(",")}function P(r){return"shift"==r||"ctrl"==r||"alt"==r||"meta"==r}function Y(r,e,n){return n||(n=function X(){if(!k)for(var r in k={},h)r>95&&r<112||h.hasOwnProperty(r)&&(k[h[r]]=r);return k}()[r]?"keydown":"keypress"),"keypress"==n&&e.length&&(n="keydown"),n}function I(r,e){var n,o,_,y=[];for(n=function $(r){return"+"===r?["+"]:(r=r.replace(/\+{2}/g,"+plus")).split("+")}(r),_=0;_<n.length;++_)x[o=n[_]]&&(o=x[o]),e&&"keypress"!=e&&L[o]&&(o=L[o],y.push("shift")),P(o)&&y.push(o);return{key:o,modifiers:y,action:e=Y(o,y,e)}}function R(r,e){return null!==r&&r!==K&&(r===e||R(r.parentNode,e))}function l(r){var e=this;if(r=r||K,!(e instanceof l))return new l(r);e.target=r,e._callbacks={},e._directMap={};var o,n={},_=!1,y=!1,S=!1;function b(t){t=t||{};var s,f=!1;for(s in n)t[s]?f=!0:n[s]=0;f||(S=!1)}function F(t,f,s,i,u,v){var a,c,g=[],d=s.type;if(!e._callbacks[t])return[];for("keyup"==d&&P(t)&&(f=[t]),a=0;a<e._callbacks[t].length;++a)c=e._callbacks[t][a],!i&&c.seq&&n[c.seq]!=c.level||d!=c.action||("keypress"!=d||s.metaKey||s.ctrlKey)&&!U(f,c.modifiers)||((!i&&c.combo==u||i&&c.seq==i&&c.level==v)&&e._callbacks[t].splice(a,1),g.push(c));return g}function E(t,f,s,i){e.stopCallback(f,f.target||f.srcElement,s,i)||!1===t(f,s)&&(function H(r){r.preventDefault?r.preventDefault():r.returnValue=!1}(f),function W(r){r.stopPropagation?r.stopPropagation():r.cancelBubble=!0}(f))}function A(t){"number"!=typeof t.which&&(t.which=t.keyCode);var f=D(t);if(f){if("keyup"==t.type&&_===f)return void(_=!1);e.handleKey(f,function V(r){var e=[];return r.shiftKey&&e.push("shift"),r.altKey&&e.push("alt"),r.ctrlKey&&e.push("ctrl"),r.metaKey&&e.push("meta"),e}(t),t)}}function O(t,f,s,i,u){e._directMap[t+":"+s]=f;var a,v=(t=t.replace(/\s+/g," ")).split(" ");v.length>1?function G(t,f,s,i){function u(d){return function(){S=d,++n[t],function z(){clearTimeout(o),o=setTimeout(b,1e3)}()}}function v(d){E(s,d,t),"keyup"!==i&&(_=D(d)),setTimeout(b,10)}n[t]=0;for(var a=0;a<f.length;++a){var g=a+1===f.length?v:u(i||I(f[a+1]).action);O(f[a],g,i,t,a)}}(t,v,f,s):(a=I(t,s),e._callbacks[a.key]=e._callbacks[a.key]||[],F(a.key,a.modifiers,{type:a.action},i,t,u),e._callbacks[a.key][i?"unshift":"push"]({callback:f,modifiers:a.modifiers,action:a.action,seq:i,level:u,combo:t}))}e._handleKey=function(t,f,s){var u,i=F(t,f,s),v={},a=0,c=!1;for(u=0;u<i.length;++u)i[u].seq&&(a=Math.max(a,i[u].level));for(u=0;u<i.length;++u)if(i[u].seq){if(i[u].level!=a)continue;c=!0,v[i[u].seq]=1,E(i[u].callback,s,i[u].combo,i[u].seq)}else c||E(i[u].callback,s,i[u].combo);var g="keypress"==s.type&&y;s.type==S&&!P(t)&&!g&&b(v),y=c&&"keydown"==s.type},e._bindMultiple=function(t,f,s){for(var i=0;i<t.length;++i)O(t[i],f,s)},C(r,"keypress",A),C(r,"keydown",A),C(r,"keyup",A)}}(typeof window<"u"?window:null,typeof window<"u"?document:null)}}]);