import{s as j,f as d,l as v,a as T,g as m,h as _,m as p,d as h,c as g,j as b,i as S,v as c,n as k,A as D,D as q,J as A}from"./scheduler.c171d7f6.js";import{S as B,i as C}from"./index.8cb04724.js";import"./Title.svelte_svelte_type_style_lang.87c16789.js";function H(a){let t,s,o,u;return{c(){t=d("button"),s=v(a[2]),this.h()},l(e){t=m(e,"BUTTON",{class:!0});var i=_(t);s=p(i,a[2]),i.forEach(h),this.h()},h(){b(t,"class","start svelte-13aop2y")},m(e,i){S(e,t,i),c(t,s),o||(u=q(t,"click",a[3]),o=!0)},p(e,i){i&4&&k(s,e[2])},d(e){e&&h(t),o=!1,u()}}}function I(a){let t,s,o,u,e,i,n,l=a[2]!=null&&H(a);return{c(){t=d("div"),s=d("h2"),o=v(a[0]),u=T(),e=d("h3"),i=v(a[1]),n=T(),l&&l.c(),this.h()},l(f){t=m(f,"DIV",{class:!0});var r=_(t);s=m(r,"H2",{class:!0});var y=_(s);o=p(y,a[0]),y.forEach(h),u=g(r),e=m(r,"H3",{class:!0});var E=_(e);i=p(E,a[1]),E.forEach(h),n=g(r),l&&l.l(r),r.forEach(h),this.h()},h(){b(s,"class","svelte-13aop2y"),b(e,"class","svelte-13aop2y"),b(t,"class","upper svelte-13aop2y")},m(f,r){S(f,t,r),c(t,s),c(s,o),c(t,u),c(t,e),c(e,i),c(t,n),l&&l.m(t,null)},p(f,[r]){r&1&&k(o,f[0]),r&2&&k(i,f[1]),f[2]!=null?l?l.p(f,r):(l=H(f),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},i:D,o:D,d(f){f&&h(t),l&&l.d()}}}function J(a,t,s){let{title:o}=t,{subtitle:u}=t,{start:e=null}=t;function i(n){A.call(this,a,n)}return a.$$set=n=>{"title"in n&&s(0,o=n.title),"subtitle"in n&&s(1,u=n.subtitle),"start"in n&&s(2,e=n.start)},[o,u,e,i]}class V extends B{constructor(t){super(),C(this,t,J,I,j,{title:0,subtitle:1,start:2})}}export{V as T};