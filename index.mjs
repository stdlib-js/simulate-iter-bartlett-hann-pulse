// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cospi@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";function u(e,t){return n(t)?o(t,"duration")&&(e.duration=t.duration,!p(t.duration))?new TypeError(s("0tB3P,Fv","duration",t.duration)):o(t,"period")&&(e.period=t.period,!p(t.period))?new TypeError(s("0tB3P,Fv","period",t.period)):o(t,"amplitude")&&(e.amplitude=t.amplitude,!d(t.amplitude))?new TypeError(s("0tB4D,Gu","amplitude",t.amplitude)):o(t,"offset")&&(e.offset=t.offset,!m(t.offset))?new TypeError(s("0tB8M,JG","offset",t.offset)):o(t,"iter")&&(e.iter=t.iter,!a(t.iter))?new TypeError(s("0tB2t,G9","iter",t.iter)):null:new TypeError(s("0tB2V,FD",t))}function l(e,t,s){return s*(.62-.48*r(e/(t-=1)-.5)-.38*i(2/t*e))}function f(r){var i,n,o,d,m,p;if(i={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(d=u(i,r)))throw d;if(-1===i.duration&&(i.duration=i.period),i.duration>i.period)throw new RangeError(s("0tB8K,JE","duration",i.duration));if(i.duration<=2)throw new RangeError(s("0tB8L,JF","duration",i.duration));return(m=(i.period-i.offset)%i.period)<0&&(m+=i.period),m-=1,p=0,e(n={},"next",a),e(n,"return",j),t&&e(n,t,v),n;function a(){return p+=1,o||p>i.iter?{done:!0}:{value:(m=(m+1)%i.period)<i.duration?l(m,i.duration,i.amplitude):0,done:!1}}function j(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function v(){return f(i)}}export{f as default};
//# sourceMappingURL=index.mjs.map
