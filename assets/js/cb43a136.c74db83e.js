"use strict";(self.webpackChunkzharii=self.webpackChunkzharii||[]).push([[7900],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8284:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="Dev Random, but interesting stuff",u={unversionedId:"dev/dev-random",id:"dev/dev-random",title:"Dev Random, but interesting stuff",description:"- 2022-03-05 Perl tricks by Neil Kandalgaonkar",source:"@site/docs/dev/dev-random.md",sourceDirName:"dev",slug:"/dev/dev-random",permalink:"/docs/dev/dev-random",editUrl:"https://github.com/dzharii/dzharii.github.io/docs/dev/dev-random.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dev-job-hunt-coding-interview-and-algs",permalink:"/docs/dev/dev-job-hunt-coding-interview-and-algs"},next:{title:"dev-simd",permalink:"/docs/dev/dev-simd"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dev-random-but-interesting-stuff"},"Dev Random, but interesting stuff"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2022-03-05 ",(0,a.kt)("a",{parentName:"li",href:"http://montreal.pm.org/tech/neil_kandalgaonkar.shtml"},"Perl tricks by Neil Kandalgaonkar"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"A regular expression to check for prime numbers")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-perl"},"perl -wle 'print \"Prime\" if (1 x shift) !~ /^1?$|^(11+?)\\1+$/' [number]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-perl"},'/\n  ^1?$   # matches beginning, optional 1, ending.\n         # thus matches the empty string and "1".\n         # this matches the cases where N was 0 and 1\n         # and since it matches, will not flag those as prime.\n|   # or...\n  ^                # match beginning of string\n    (              # begin first stored group\n     1             # match a one\n      1+?          # then match one or more ones, minimally.\n    )              # end storing first group\n    \\1+            # match the first group, repeated one or more times.\n  $                # match end of string.\n/x\n')))}d.isMDXComponent=!0}}]);