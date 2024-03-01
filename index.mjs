// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cospi@v0.3.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.1-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";var u=.62,l=.48,f=.38;function j(e,t,s){return s*(u-l*r(e/(t-=1)-.5)-f*i(2/t*e))}function v(r){var i,u,l,f,h,c;if(i={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(f=function(e,t){return n(t)?o(t,"duration")&&(e.duration=t.duration,!p(t.duration))?new TypeError(s("0tB3P","duration",t.duration)):o(t,"period")&&(e.period=t.period,!p(t.period))?new TypeError(s("0tB3P","period",t.period)):o(t,"amplitude")&&(e.amplitude=t.amplitude,!d(t.amplitude))?new TypeError(s("0tB4D","amplitude",t.amplitude)):o(t,"offset")&&(e.offset=t.offset,!m(t.offset))?new TypeError(s("0tB8M","offset",t.offset)):o(t,"iter")&&(e.iter=t.iter,!a(t.iter))?new TypeError(s("0tB2t","iter",t.iter)):null:new TypeError(s("0tB2V",t))}(i,r),f))throw f;if(-1===i.duration&&(i.duration=i.period),i.duration>i.period)throw new RangeError(s("0tB8K","duration",i.duration));if(i.duration<=2)throw new RangeError(s("0tB8L","duration",i.duration));return(h=(i.period-i.offset)%i.period)<0&&(h+=i.period),h-=1,c=0,e(u={},"next",(function(){if(c+=1,l||c>i.iter)return{done:!0};return{value:(h=(h+1)%i.period)<i.duration?j(h,i.duration,i.amplitude):0,done:!1}})),e(u,"return",(function(e){if(l=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),t&&e(u,t,(function(){return v(i)})),u}export{v as default};
//# sourceMappingURL=index.mjs.map
