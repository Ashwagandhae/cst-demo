import{s as p,a as u,c as g,i as _,B as d,d as v}from"../chunks/scheduler.a5e5241a.js";import{S as C,i as S,b as i,d as m,m as f,a as $,t as c,e as l}from"../chunks/index.b1dbd351.js";import{A as b}from"../chunks/Activities.2660f1d8.js";import{P as w}from"../chunks/Page.fb21337c.js";import{T as x}from"../chunks/Title.4de7dc55.js";function P(n){let r,a,e,s;return r=new x({props:{title:"Welcome to Computer Science Team",subtitle:"Check out some fun things to do"}}),e=new b({props:{items:[{title:"Slides",url:"slides"},{title:"Club fair activities",url:"fair"}]}}),{c(){i(r.$$.fragment),a=u(),i(e.$$.fragment)},l(t){m(r.$$.fragment,t),a=g(t),m(e.$$.fragment,t)},m(t,o){f(r,t,o),_(t,a,o),f(e,t,o),s=!0},p:d,i(t){s||($(r.$$.fragment,t),$(e.$$.fragment,t),s=!0)},o(t){c(r.$$.fragment,t),c(e.$$.fragment,t),s=!1},d(t){t&&v(a),l(r,t),l(e,t)}}}function T(n){let r,a;return r=new w({props:{$$slots:{default:[P]},$$scope:{ctx:n}}}),{c(){i(r.$$.fragment)},l(e){m(r.$$.fragment,e)},m(e,s){f(r,e,s),a=!0},p(e,[s]){const t={};s&1&&(t.$$scope={dirty:s,ctx:e}),r.$set(t)},i(e){a||($(r.$$.fragment,e),a=!0)},o(e){c(r.$$.fragment,e),a=!1},d(e){l(r,e)}}}class B extends C{constructor(r){super(),S(this,r,null,T,p,{})}}export{B as component};