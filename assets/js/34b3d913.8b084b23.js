"use strict";(self.webpackChunkzharii=self.webpackChunkzharii||[]).push([[5789],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91728:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},l=void 0,u={unversionedId:"dev-linux",id:"dev-linux",title:"dev-linux",description:"X11",source:"@site/docs/dev-linux.md",sourceDirName:".",slug:"/dev-linux",permalink:"/docs/dev-linux",editUrl:"https://github.com/dzharii/dzharii.github.io/docs/dev-linux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dev-ide-visualstudio",permalink:"/docs/dev-ide-visualstudio"},next:{title:"dev-oculus-quest2-inbox",permalink:"/docs/dev-oculus-quest2-inbox"}},c=[{value:"X11",id:"x11",children:[],level:2},{value:"Systemd",id:"systemd",children:[],level:2},{value:"Kiosk",id:"kiosk",children:[],level:2},{value:"Bash Snippets",id:"bash-snippets",children:[],level:2},{value:"Tools",id:"tools",children:[{value:"Data processing",id:"data-processing",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"x11"},"X11"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2022-02-24 ",(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/je-so/903479/834dfd78705b16ec5f7bbd10925980ace4049e17"},"Xlib transparent window with OpenGL support"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"This program demonstrates how an X11 window with OpenGL support  can be drawn transparent.")))),(0,a.kt)("h2",{id:"systemd"},"Systemd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2022-10-26 ",(0,a.kt)("a",{parentName:"p",href:"https://www.psdn.io/posts/systemd-shutdown-unit/"},"systemd Shutdown Units - Poseidon Labs")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Designing a system to shutdown gracefully can be tricky. In an ideal world, every service would be managed by a systemd unit. ExecStart would start a process that handles SIGTERM by stopping itself and an  ExecStop would inform the process and block to gracefully stop the process and its resources."),(0,a.kt)("p",{parentName:"blockquote"},"But not all software stops gracefully or does a full teardown of what it set up. In this post, we\u2019ll look at systemd\u2019s shutdown behavior and strategies for writing systemd units that perform custom cleanup tasks before shutdown.")))),(0,a.kt)("h2",{id:"kiosk"},"Kiosk"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2022-10-22 ",(0,a.kt)("a",{parentName:"li",href:"https://superuser.com/questions/219511/browser-instead-of-window-manager"},"linux - Browser instead of window manager? - Super User"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yes:\n\n% startx /usr/bin/google-chrome --kiosk\n(or use any other webbrowser)\n\nyou could also add this to your .xinitrc / .xsession file:\n\nexec /usr/bin/google-chrome --kiosk\n")),(0,a.kt)("h2",{id:"bash-snippets"},"Bash Snippets"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2022-05-21 ",(0,a.kt)("a",{parentName:"li",href:"https://www.onlinegdb.com/1h1BpiINv"},"Bash trap for debugging bash scripts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'trap \'echo "# $BASH_COMMAND";read\' DEBUG\necho line1\necho line2\necho line3\necho "Hello World";\n')),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("h3",{id:"data-processing"},"Data processing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2022-03-07 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/TomWright/dasel"},"TomWright/dasel: Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Comparable to jq / yq, but supports JSON, YAML, TOML, XML and CSV with zero runtime dependencies.")))))}d.isMDXComponent=!0}}]);