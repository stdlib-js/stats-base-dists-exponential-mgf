"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=i(function(P,u){
var t=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/constants-float64-pinf/dist');function N(e,r){return t(e)||t(r)||r<=0||r===v||e>=r?NaN:r/(r-e)}u.exports=N
});var o=i(function(O,f){
var y=require('@stdlib/utils-constant-function/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/constants-float64-pinf/dist');function x(e){if(c(e)||e<=0||e===p)return y(NaN);return r;function r(n){return c(n)||n>=e?NaN:e/(e-n)}}f.exports=x
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=s(),g=o();F(q,"factory",g);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
