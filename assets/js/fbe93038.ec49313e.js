"use strict";(self.webpackChunkzharii=self.webpackChunkzharii||[]).push([[8432],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64534:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={},l="testing",c={unversionedId:"testing",id:"testing",title:"testing",description:"Spark",source:"@site/docs/testing.md",sourceDirName:".",slug:"/testing",permalink:"/docs/testing",editUrl:"https://github.com/dzharii/dzharii.github.io/docs/testing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testing-distributed-systems",permalink:"/docs/testing-distributed-systems"},next:{title:"tools-WireGuard",permalink:"/docs/tools-WireGuard"}},p=[{value:"Spark",id:"spark",children:[],level:2},{value:"Tools",id:"tools",children:[{value:"Pairwise",id:"pairwise",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing"},"testing"),(0,o.kt)("h2",{id:"spark"},"Spark"),(0,o.kt)("p",null,"2023-10-29 ",(0,o.kt)("a",{parentName:"p",href:"https://luminousmen.com/post/how-to-speed-up-spark-jobs-on-small-test-datasets"},"How to Speed Up Spark Jobs on Small Test Datasets - Blog | luminousmen")),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"1-use-a-single-executor-with-local1"},"1. Use a Single Executor with ",(0,o.kt)("inlineCode",{parentName:"h3"},"local[1]")),(0,o.kt)("p",{parentName:"blockquote"},"By default, Apache Spark allocates multiple executors per Spark session. In a small dataset scenario, this can be an inefficient use of resources. To address this, you can configure Spark to use only one local executor by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"local[1]")," when creating a session:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'.master("local[1]")\n')),(0,o.kt)("p",{parentName:"blockquote"},"This ensures that your computational resources are optimally utilized."),(0,o.kt)("h3",{parentName:"blockquote",id:"2-adjust-sparksqlshufflepartitions"},"2. Adjust ",(0,o.kt)("inlineCode",{parentName:"h3"},"spark.sql.shuffle.partitions")),(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.sql.shuffle.partitions")," configuration controls the number of partitions used during shuffle operations. Shuffling redistributes data across partitions and almost always is computationally expensive. For larger datasets, the default value of 200 makes sense, but for smaller datasets, it's excessive."),(0,o.kt)("p",{parentName:"blockquote"},"Consider reducing ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.sql.shuffle.partitions")," to a smaller value, such as 20 or even 1, depending on your use-case:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'.config("spark.sql.shuffle.partitions", 1)\n')),(0,o.kt)("p",{parentName:"blockquote"},"This modification prevents Spark from spending unnecessary time on ",(0,o.kt)("a",{parentName:"p",href:"https://luminousmen.com/post/spark-tips-partition-tuning"},"shuffling operations")," and generating excessive tasks, resulting in much faster processing."),(0,o.kt)("h3",{parentName:"blockquote",id:"3-adjust-sparkdefaultparallelism"},"3. Adjust ",(0,o.kt)("inlineCode",{parentName:"h3"},"spark.default.parallelism")),(0,o.kt)("p",{parentName:"blockquote"},"Think of your machine's CPU cores as eager workers waiting to tackle tasks. The ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.default.parallelism")," parameter determines how many tasks Spark can run concurrently. To make the most of your available cores, set it equal to the number of available cores in the processing environment:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'.config("spark.default.parallelism", <number_of_cores>)\n')),(0,o.kt)("p",{parentName:"blockquote"},"This configuration ensures that each core is efficiently utilized, leading to a significant speedup in processing."),(0,o.kt)("h3",{parentName:"blockquote",id:"4-disable-compression"},"4. Disable Compression"),(0,o.kt)("p",{parentName:"blockquote"},"Compression can be resource-intensive, and for small datasets, it may not provide significant benefits while consuming CPU cycles. Disabling compression can save computational resources and improve processing speed."),(0,o.kt)("p",{parentName:"blockquote"},"You can disable compression for both RDDs and shuffle operations using the following configurations:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'.config("spark.rdd.compress", "false")\n.config("spark.shuffle.compress", "false")\n')),(0,o.kt)("p",{parentName:"blockquote"},'By setting these values to "false," you instruct Spark to skip unnecessary data compression.'),(0,o.kt)("h3",{parentName:"blockquote",id:"5-disable-dynamic-allocation"},"5. Disable Dynamic Allocation"),(0,o.kt)("p",{parentName:"blockquote"},"Dynamic allocation is a feature in Spark that adjusts executor resources based on the workload. While beneficial for larger datasets and clusters, it may not be advantageous for smaller datasets."),(0,o.kt)("p",{parentName:"blockquote"},"You can disable dynamic allocation with the following configuration:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'.config("spark.dynamicAllocation.enabled", "false")\n'))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This ensures that the number of allocated resources remains fixed and does not fluctuate based on the workload."),(0,o.kt)("h3",{parentName:"blockquote",id:"6-control-executor-resources"},"6. Control Executor Resources"),(0,o.kt)("p",{parentName:"blockquote"},"In a smaller dataset scenario, fine-grained control over executor resources can be beneficial. You can explicitly set the number of CPU cores and executor instances using the following configurations:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'.config("spark.executor.cores", 1)\n.config("spark.executor.instances", 1)\n')),(0,o.kt)("p",{parentName:"blockquote"},"Setting both values to 1 ensures that Spark efficiently utilizes available resources without overcommitting them. This is especially valuable when working with a single machine and small datasets."),(0,o.kt)("h3",{parentName:"blockquote",id:"7-disabling-spark-ui-for-tests"},"7. Disabling Spark UI for Tests"),(0,o.kt)("p",{parentName:"blockquote"},"For testing scenarios, you can further enhance efficiency by disabling Spark's user interface:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'.config("spark.ui.enabled", "false")\n.config("spark.ui.showConsoleProgress", "false")\n')),(0,o.kt)("p",{parentName:"blockquote"},"This step streamlines your testing process, ensuring that resources are allocated solely to your computations.")),(0,o.kt)("h2",{id:"tools"},"Tools"),(0,o.kt)("h3",{id:"pairwise"},"Pairwise"),(0,o.kt)("p",null,"2023-10-29 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/pict"},"microsoft/pict: Pairwise Independent Combinatorial Tool")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"PICT generates test cases and test configurations. With PICT, you can generate tests that are more effective than manually generated tests and in a fraction of the time required by hands-on test case design.\nPICT runs as a command line tool. Prepare a model file detailing the parameters of the interface (or set of configurations, or data) you want to test. PICT generates a compact set of parameter value choices that represent the test cases you should use to get comprehensive combinatorial coverage of your parameters.")))}m.isMDXComponent=!0}}]);