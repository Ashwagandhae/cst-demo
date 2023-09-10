import{s as D,f as p,l as v,a as q,g as d,h as g,m as w,d as u,c as z,j as b,i as $,u as h,n as y,z as k,e as P,F as B,I as F}from"../chunks/scheduler.61254369.js";import{S as H,i as V,b as S,d as E,m as T,a as m,t as _,e as C,g as L,c as N}from"../chunks/index.60efb3f9.js";import{e as x}from"../chunks/each.e59479a4.js";import{P as A}from"../chunks/Title.svelte_svelte_type_style_lang.310ba8cc.js";import{T as G}from"../chunks/Title.9ee4902d.js";function j(o){let e=" "+o[1],n;return{c(){n=v(e)},l(t){n=w(t,e)},m(t,i){$(t,n,i)},p(t,i){i&2&&e!==(e=" "+t[1])&&y(n,e)},d(t){t&&u(n)}}}function J(o){let e,n,t,i,s,r,l=o[1]!=null&&j(o);return{c(){e=p("div"),n=p("h2"),t=v(o[0]),l&&l.c(),i=q(),s=p("h3"),r=v(o[2]),this.h()},l(a){e=d(a,"DIV",{class:!0});var c=g(e);n=d(c,"H2",{class:!0});var f=g(n);t=w(f,o[0]),l&&l.l(f),f.forEach(u),i=z(c),s=d(c,"H3",{class:!0});var I=g(s);r=w(I,o[2]),I.forEach(u),c.forEach(u),this.h()},h(){b(n,"class","svelte-xemsnm"),b(s,"class","svelte-xemsnm"),b(e,"class","stat svelte-xemsnm")},m(a,c){$(a,e,c),h(e,n),h(n,t),l&&l.m(n,null),h(e,i),h(e,s),h(s,r)},p(a,[c]){c&1&&y(t,a[0]),a[1]!=null?l?l.p(a,c):(l=j(a),l.c(),l.m(n,null)):l&&(l.d(1),l=null),c&4&&y(r,a[2])},i:k,o:k,d(a){a&&u(e),l&&l.d()}}}function K(o,e,n){let{number:t}=e,{unit:i=null}=e,{description:s=null}=e;return o.$$set=r=>{"number"in r&&n(0,t=r.number),"unit"in r&&n(1,i=r.unit),"description"in r&&n(2,s=r.description)},[t,i,s]}class M extends H{constructor(e){super(),V(this,e,K,J,D,{number:0,unit:1,description:2})}}const O=[{number:1,unit:"second",description:"is the time it takes for a hummingbird to flap its wings once"},{number:1,unit:"minute",description:"is the time it takes for a hummingbird to flap its wings 50 times"},{number:1,unit:"hour",description:"is the time it takes for a hummingbird to flap its wings 3000 times"},{number:1,unit:"day",description:"is the time it takes for a hummingbird to flap its wings 72000 times"},{number:1,unit:"week",description:"is the time it takes for a hummingbird to flap its wings 504000 times"},{number:1,unit:"week",description:"is the time it takes for a hummingbird to flap its wings 504000 times"},{number:1,unit:"week",description:"is the time it takes for a hummingbird to flap its wings 504000 times"}];function Q(o,e,n){const t=o.slice();return t[2]=e[n],t}function R(o){let e,n,t=x(O),i=[];for(let s=0;s<t.length;s+=1)i[s]=W(Q(o,t,s));return{c(){e=p("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=d(s,"DIV",{class:!0});var r=g(e);for(let l=0;l<i.length;l+=1)i[l].l(r);r.forEach(u),this.h()},h(){b(e,"class","stats svelte-f3spja")},m(s,r){$(s,e,r);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);n=!0},p:k,i(s){if(!n){for(let r=0;r<t.length;r+=1)m(i[r]);n=!0}},o(s){i=i.filter(Boolean);for(let r=0;r<i.length;r+=1)_(i[r]);n=!1},d(s){s&&u(e),B(i,s)}}}function U(o){let e,n;return e=new G({props:{title:"CST Stats",subtitle:"Learn about the Computer Science Team",start:"Show me"}}),e.$on("click",o[1]),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){T(e,t,i),n=!0},p:k,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function W(o){let e,n;const t=[o[2]];let i={};for(let s=0;s<t.length;s+=1)i=F(i,t[s]);return e=new M({props:i}),{c(){S(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,r){T(e,s,r),n=!0},p(s,r){const l={};e.$set(l)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){_(e.$$.fragment,s),n=!1},d(s){C(e,s)}}}function X(o){let e,n,t,i;const s=[U,R],r=[];function l(a,c){return a[0]?1:0}return e=l(o),n=r[e]=s[e](o),{c(){n.c(),t=P()},l(a){n.l(a),t=P()},m(a,c){r[e].m(a,c),$(a,t,c),i=!0},p(a,c){let f=e;e=l(a),e===f?r[e].p(a,c):(L(),_(r[f],1,1,()=>{r[f]=null}),N(),n=r[e],n?n.p(a,c):(n=r[e]=s[e](a),n.c()),m(n,1),n.m(t.parentNode,t))},i(a){i||(m(n),i=!0)},o(a){_(n),i=!1},d(a){a&&u(t),r[e].d(a)}}}function Y(o){let e,n;return e=new A({props:{$$slots:{default:[X]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,i){T(e,t,i),n=!0},p(t,[i]){const s={};i&33&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Z(o,e,n){let t=!1;return[t,()=>n(0,t=!0)]}class re extends H{constructor(e){super(),V(this,e,Z,Y,D,{})}}export{re as component};
