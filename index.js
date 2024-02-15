// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBartlettHannPulse=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,b=/^(\d+)e/,g=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function O(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var A=String.fromCharCode,E=isNaN,_=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,a,f,s,l,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(n=r[l]))f+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,o;for(e=[],o=0,n=U.exec(r);n;)(t=r.slice(o,U.lastIndex-n[0].length)).length&&e.push(t),e.push(N(n)),o=U.lastIndex,n=U.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function I(r){return"string"==typeof r}function P(r){var t,e;if(!I(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var F,k=Object.prototype,V=k.toString,G=k.__defineGetter__,L=k.__defineSetter__,$=k.__lookupGetter__,C=k.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&($.call(r,t)||C.call(r,t)?(n=r.__proto__,r.__proto__=k,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&L&&L.call(r,t,e.set),r};var H=F;function R(r,t,e){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var B=Object.prototype.hasOwnProperty;var W="function"==typeof Symbol?Symbol:void 0;var M,Z,X="function"==typeof W&&"symbol"==typeof W("foo")&&(Z="iterator",null!=(M=W)&&B.call(M,Z))&&"symbol"==typeof W.iterator?Symbol.iterator:null;function Y(r){return Math.abs(r)}function q(r){return r!=r}var z=Number.POSITIVE_INFINITY,D=Number,J=D.NEGATIVE_INFINITY;function K(r){return r===z||r===J}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var tr=Object.prototype.toString;var er=Object.prototype.hasOwnProperty;var nr,or="function"==typeof W?W.toStringTag:"";nr=rr()?function(r){var t,e,n;if(null==r)return tr.call(r);e=r[or],t=function(r,t){return null!=r&&er.call(r,t)}(r,or);try{r[or]=void 0}catch(t){return tr.call(r)}return n=tr.call(r),t?r[or]=e:delete r[or],n}:function(r){return tr.call(r)};var ir=nr,ar="function"==typeof Uint32Array;var ur="function"==typeof Uint32Array?Uint32Array:null;var cr,fr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,t;if("function"!=typeof ur)return!1;try{r=function(r){return ar&&r instanceof Uint32Array||"[object Uint32Array]"===ir(r)}(t=new ur(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr=cr,lr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var dr,yr="function"==typeof Float64Array?Float64Array:void 0;dr=function(){var r,t;if("function"!=typeof pr)return!1;try{r=function(r){return lr&&r instanceof Float64Array||"[object Float64Array]"===ir(r)}(t=new pr([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr=dr,br="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var hr,wr="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,t;if("function"!=typeof gr)return!1;try{r=function(r){return br&&r instanceof Uint8Array||"[object Uint8Array]"===ir(r)}(t=new gr(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr=hr,jr="function"==typeof Uint16Array;var Or="function"==typeof Uint16Array?Uint16Array:null;var Ar,Er="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,t;if("function"!=typeof Or)return!1;try{r=function(r){return jr&&r instanceof Uint16Array||"[object Uint16Array]"===ir(r)}(t=new Or(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var _r,Tr={uint16:Ar,uint8:mr};(_r=new Tr.uint16(1))[0]=4660;var Sr=52===new Tr.uint8(_r.buffer)[0],Ur=!0===Sr?1:0,Nr=new vr(1),xr=new sr(Nr.buffer);function Ir(r){return Nr[0]=r,xr[Ur]}function Pr(r,t){var e,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(e=.5*i))+(1-o-e+(i*n-r*t))}var Fr=-.16666666666666632;function kr(r,t){var e,n,o;return e=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),n=o*r,0===t?r+n*(Fr+o*e):r-(o*(.5*t-n*e)-t-n*Fr)}var Vr,Gr,Lr=2147483647,$r=2146435072,Cr=!0===Sr?0:1,Hr=new vr(1),Rr=new sr(Hr.buffer);!0===Sr?(Vr=1,Gr=0):(Vr=0,Gr=1);var Br={HIGH:Vr,LOW:Gr},Wr=new vr(1),Mr=new sr(Wr.buffer),Zr=Br.HIGH,Xr=Br.LOW;function Yr(r,t){return Mr[Zr]=r,Mr[Xr]=t,Wr[0]}var qr,zr,Dr=Math.floor;!0===Sr?(qr=1,zr=0):(qr=0,zr=1);var Jr={HIGH:qr,LOW:zr},Kr=new vr(1),Qr=new sr(Kr.buffer),rt=Jr.HIGH,tt=Jr.LOW;function et(r,t,e,n){return Kr[0]=r,t[n]=Qr[rt],t[n+e]=Qr[tt],t}function nt(r){return et(r,[0,0],1,0)}R(nt,"assign",et);var ot=[0,0];function it(r,t,e,n){return q(r)||K(r)?(t[n]=r,t[n+e]=0,t):0!==r&&Y(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}R((function(r){return it(r,[0,0],1,0)}),"assign",it);var at=[0,0],ut=[0,0];function ct(r,t){var e,n,o,i,a,u;return 0===t||0===r||q(r)||K(r)?r:(it(r,at,1,0),t+=at[1],t+=function(r){var t=Ir(r);return(t=(t&$r)>>>20)-1023|0}(r=at[0]),t<-1074?(o=0,i=r,nt.assign(o,ot,1,0),a=ot[0],a&=Lr,u=Ir(i),Yr(a|=u&=2147483648,ot[1])):t>1023?r<0?J:z:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,nt.assign(r,ut,1,0),e=ut[0],e&=2148532223,n*Yr(e|=t+1023<<20,ut[1])))}function ft(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var st=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],lt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pt=16777216,dt=5.960464477539063e-8,yt=ft(20),vt=ft(20),bt=ft(20),gt=ft(20);function ht(r,t,e,n,o,i,a,u,c){var f,s,l,p,d,y,v,b,g;for(p=i,g=n[e],b=e,d=0;b>0;d++)s=dt*g|0,gt[d]=g-pt*s|0,g=n[b-1]+s,b-=1;if(g=ct(g,o),g-=8*Dr(.125*g),g-=v=0|g,l=0,o>0?(v+=d=gt[e-1]>>24-o,gt[e-1]-=d<<24-o,l=gt[e-1]>>23-o):0===o?l=gt[e-1]>>23:g>=.5&&(l=2),l>0){for(v+=1,f=0,d=0;d<e;d++)b=gt[d],0===f?0!==b&&(f=1,gt[d]=16777216-b):gt[d]=16777215-b;if(o>0)switch(o){case 1:gt[e-1]&=8388607;break;case 2:gt[e-1]&=4194303}2===l&&(g=1-g,0!==f&&(g-=ct(1,o)))}if(0===g){for(b=0,d=e-1;d>=i;d--)b|=gt[d];if(0===b){for(y=1;0===gt[i-y];y++);for(d=e+1;d<=e+y;d++){for(c[u+d]=st[a+d],s=0,b=0;b<=u;b++)s+=r[b]*c[u+(d-b)];n[d]=s}return ht(r,t,e+=y,n,o,i,a,u,c)}}if(0===g)for(e-=1,o-=24;0===gt[e];)e-=1,o-=24;else(g=ct(g,-o))>=pt?(s=dt*g|0,gt[e]=g-pt*s|0,o+=24,gt[e+=1]=s):gt[e]=0|g;for(s=ct(1,o),d=e;d>=0;d--)n[d]=s*gt[d],s*=dt;for(d=e;d>=0;d--){for(s=0,y=0;y<=p&&y<=e-d;y++)s+=lt[y]*n[d+y];bt[e-d]=s}for(s=0,d=e;d>=0;d--)s+=bt[d];for(t[0]=0===l?s:-s,s=bt[0]-s,d=1;d<=e;d++)s+=bt[d];return t[1]=0===l?s:-s,7&v}function wt(r,t,e,n){var o,i,a,u,c,f,s;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),s=a+4,c=0;c<=s;c++)yt[c]=f<0?0:st[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*yt[a+(c-f)];vt[c]=o}return 4,ht(r,t,4,vt,u,4,i,a,yt)}var mt=Math.round;function jt(r,t,e){var n,o,i,a,u;return i=r-1.5707963267341256*(n=mt(.6366197723675814*r)),a=6077100506506192e-26*n,u=t>>20|0,e[0]=i-a,u-(Ir(e[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),e[0]=i-a,u-(Ir(e[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var Ot=1.5707963267341256,At=6077100506506192e-26,Et=2*At,_t=3*At,Tt=4*At,St=[0,0,0],Ut=[0,0];function Nt(r,t){var e,n,o,i,a,u,c;if((o=Ir(r)&Lr|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?jt(r,o,t):o<=1073928572?r>0?(c=r-Ot,t[0]=c-At,t[1]=c-t[0]-At,1):(c=r+Ot,t[0]=c+At,t[1]=c-t[0]+At,-1):r>0?(c=r-2*Ot,t[0]=c-Et,t[1]=c-t[0]-Et,2):(c=r+2*Ot,t[0]=c+Et,t[1]=c-t[0]+Et,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?jt(r,o,t):r>0?(c=r-3*Ot,t[0]=c-_t,t[1]=c-t[0]-_t,3):(c=r+3*Ot,t[0]=c+_t,t[1]=c-t[0]+_t,-3):1075388923===o?jt(r,o,t):r>0?(c=r-4*Ot,t[0]=c-Tt,t[1]=c-t[0]-Tt,4):(c=r+4*Ot,t[0]=c+Tt,t[1]=c-t[0]+Tt,-4);if(o<1094263291)return jt(r,o,t);if(o>=$r)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return Hr[0]=r,Rr[Cr]}(r),c=Yr(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)St[a]=0|c,c=16777216*(c-St[a]);for(St[2]=c,i=3;0===St[i-1];)i-=1;return u=wt(St,Ut,n,i),r<0?(t[0]=-Ut[0],t[1]=-Ut[1],-u):(t[0]=Ut[0],t[1]=Ut[1],u)}var xt=[0,0];function It(r){var t;if(t=Ir(r),(t&=2147483647)<=1072243195)return t<1044381696?1:Pr(r,0);if(t>=2146435072)return NaN;switch(3&Nt(r,xt)){case 0:return Pr(xt[0],xt[1]);case 1:return-kr(xt[0],xt[1]);case 2:return-Pr(xt[0],xt[1]);default:return kr(xt[0],xt[1])}}var Pt=[0,0];var Ft,kt=3.141592653589793;function Vt(r){var t,e,n,o;return q(r)||K(r)?NaN:(t=Y(r))>9007199254740992?1:.5===(n=t-(e=Dr(t)))?0:(o=n<.25?It(kt*n):n<.75?function(r){var t;if(t=Ir(r),(t&=Lr)<=1072243195)return t<1045430272?r:kr(r,0);if(t>=$r)return NaN;switch(3&Nt(r,Pt)){case 0:return kr(Pt[0],Pt[1]);case 1:return Pr(Pt[0],Pt[1]);case 2:return-kr(Pt[0],Pt[1]);default:return-Pr(Pt[0],Pt[1])}}(kt*(n=.5-n)):-It(kt*(n=1-n)),e%2==1?-o:o)}Ft=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)};var Gt=Ft;var Lt=/./;function $t(r){return"boolean"==typeof r}var Ct=Boolean,Ht=Boolean.prototype.toString;var Rt=rr();function Bt(r){return"object"==typeof r&&(r instanceof Ct||(Rt?function(r){try{return Ht.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ir(r)))}function Wt(r){return $t(r)||Bt(r)}function Mt(){return new Function("return this;")()}R(Wt,"isPrimitive",$t),R(Wt,"isObject",Bt);var Zt="object"==typeof self?self:null,Xt="object"==typeof window?window:null,Yt="object"==typeof global?global:null,qt="object"==typeof globalThis?globalThis:null;var zt=function(r){if(arguments.length){if(!$t(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Mt()}if(qt)return qt;if(Zt)return Zt;if(Xt)return Xt;if(Yt)return Yt;throw new Error("unexpected error. Unable to resolve global object.")}(),Dt=zt.document&&zt.document.childNodes,Jt=Int8Array;function Kt(){return/^\s*function\s*([^(]*)/i}var Qt=/^\s*function\s*([^(]*)/i;function re(r){return null!==r&&"object"==typeof r}R(Kt,"REGEXP",Qt);var te=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!Gt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(re);function ee(r){var t,e,n;if(("Object"===(e=ir(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Qt.exec(n.toString()))return t[1]}return function(r){return re(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}(r)?"Buffer":e}R(re,"isObjectLikeArray",te);var ne="function"==typeof Lt||"object"==typeof Jt||"function"==typeof Dt?function(r){return ee(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?ee(r).toLowerCase():t};function oe(r){return"function"===ne(r)}var ie,ae=Object,ue=Object.getPrototypeOf;ie=oe(Object.getPrototypeOf)?ue:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===ir(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ce=ie;var fe=Object.prototype.hasOwnProperty;function se(r,t){return null!=r&&fe.call(r,t)}var le=Object.prototype;function pe(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!Gt(r)}(r)&&(t=function(r){return null==r?null:(r=ae(r),ce(r))}(r),!t||!se(r,"constructor")&&se(t,"constructor")&&oe(t.constructor)&&"[object Function]"===ir(t.constructor)&&se(t,"isPrototypeOf")&&oe(t.isPrototypeOf)&&(t===le||function(r){var t;for(t in r)if(!se(r,t))return!1;return!0}(r)))}var de=Object.prototype.hasOwnProperty;function ye(r,t){return null!=r&&de.call(r,t)}function ve(r){return"number"==typeof r}var be=D.prototype.toString;var ge=rr();function he(r){return"object"==typeof r&&(r instanceof D||(ge?function(r){try{return be.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ir(r)))}function we(r){return ve(r)||he(r)}function me(r){return ve(r)&&r>0}function je(r){return he(r)&&r.valueOf()>0}function Oe(r){return me(r)||je(r)}function Ae(r){return r<z&&r>J&&Dr(t=r)===t;var t}function Ee(r){return ve(r)&&Ae(r)}function _e(r){return he(r)&&Ae(r.valueOf())}function Te(r){return Ee(r)||_e(r)}function Se(r){return Ee(r)&&r>0}function Ue(r){return _e(r)&&r.valueOf()>0}function Ne(r){return Se(r)||Ue(r)}function xe(r){return Ee(r)&&r>=0}function Ie(r){return _e(r)&&r.valueOf()>=0}function Pe(r){return xe(r)||Ie(r)}function Fe(r,t){return pe(t)?ye(t,"duration")&&(r.duration=t.duration,!Se(t.duration))?new TypeError(P("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",t.duration)):ye(t,"period")&&(r.period=t.period,!Se(t.period))?new TypeError(P("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",t.period)):ye(t,"amplitude")&&(r.amplitude=t.amplitude,!me(t.amplitude))?new TypeError(P("invalid option. `%s` option must be a positive number. Option: `%s`.","amplitude",t.amplitude)):ye(t,"offset")&&(r.offset=t.offset,!Ee(t.offset))?new TypeError(P("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):ye(t,"iter")&&(r.iter=t.iter,!xe(t.iter))?new TypeError(P("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(P("invalid argument. Options argument must be an object. Value: `%s`.",t))}R(we,"isPrimitive",ve),R(we,"isObject",he),R(Oe,"isPrimitive",me),R(Oe,"isObject",je),R(Te,"isPrimitive",Ee),R(Te,"isObject",_e),R(Ne,"isPrimitive",Se),R(Ne,"isObject",Ue),R(Pe,"isPrimitive",xe),R(Pe,"isObject",Ie);function ke(r,t,e){return e*(.62-.48*Y(r/(t-=1)-.5)-.38*Vt(2/t*r))}return function r(t){var e,n,o,i,a,u;if(e={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(i=Fe(e,t)))throw i;if(-1===e.duration&&(e.duration=e.period),e.duration>e.period)throw new RangeError(P("invalid option. `%s` option must be less than or equal to the period. Option: `%u`.","duration",e.duration));if(e.duration<=2)throw new RangeError(P("invalid option. `%s` option must be greater than 2. Option: `%s`.","duration",e.duration));return(a=(e.period-e.offset)%e.period)<0&&(a+=e.period),a-=1,u=0,R(n={},"next",c),R(n,"return",f),X&&R(n,X,s),n;function c(){return u+=1,o||u>e.iter?{done:!0}:{value:(a=(a+1)%e.period)<e.duration?ke(a,e.duration,e.amplitude):0,done:!1}}function f(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function s(){return r(e)}}}));
//# sourceMappingURL=index.js.map
