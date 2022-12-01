// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function r(t,e){return n(t)||n(e)||e<=0||e===s||t>=e?NaN:e/(e-t)}function i(t){return n(t)||t<=0||t===s?e(NaN):function(s){if(n(s)||s>=t)return NaN;return t/(t-s)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
