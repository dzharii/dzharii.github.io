"use strict";(self.webpackChunkzharii=self.webpackChunkzharii||[]).push([[1838],{96080:function(t,e,a){a.d(e,{Zo:function(){return l},kt:function(){return o}});var i=a(667);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,i,s=function(t,e){if(null==t)return{};var a,i,s={},n=Object.keys(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var r=i.createContext({}),d=function(t){var e=i.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},l=function(t){var e=d(t.components);return i.createElement(r.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var a=t.components,s=t.mdxType,n=t.originalType,r=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),h=d(a),o=s,f=h["".concat(r,".").concat(o)]||h[o]||g[o]||n;return a?i.createElement(f,c(c({ref:e},l),{},{components:a})):i.createElement(f,c({ref:e},l))}));function o(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var n=a.length,c=new Array(n);c[0]=h;var p={};for(var r in e)hasOwnProperty.call(e,r)&&(p[r]=e[r]);p.originalType=t,p.mdxType="string"==typeof t?t:s,c[1]=p;for(var d=2;d<n;d++)c[d]=a[d];return i.createElement.apply(null,c)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9738:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return r},metadata:function(){return d},toc:function(){return l},default:function(){return h}});var i=a(54570),s=a(89462),n=(a(667),a(96080)),c=["components"],p={},r="2023-02-12 Apache Spark Core\u2014Deep Dive\u2014Proper Optimization Daniel Tomes Databricks",d={unversionedId:"resources/2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization",id:"resources/2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization",title:"2023-02-12 Apache Spark Core\u2014Deep Dive\u2014Proper Optimization Daniel Tomes Databricks",description:"Videos",source:"@site/docs/resources/2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.md",sourceDirName:"resources",slug:"/resources/2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization",permalink:"/docs/resources/2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization",editUrl:"https://github.com/dzharii/dzharii.github.io/docs/resources/2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"A Programmers Guide to Stress",permalink:"/docs/psy-saved-articles/a-programmers-guide-to-stress"},next:{title:"GPT Prompts",permalink:"/docs/walking-seatle-places/0000-00-00-GPT-Prompts"}},l=[{value:"Videos",id:"videos",children:[],level:2},{value:"Slides",id:"slides",children:[],level:2},{value:"2023-02-12 <strong>\ud83c\udfa5 Apache Spark Core \u2013 Practical Optimization Daniel Tomes Databricks - YouTube</strong>",id:"2023-02-12--apache-spark-core--practical-optimization-daniel-tomes-databricks---youtube",children:[],level:2}],g={toc:l};function h(t){var e=t.components,p=(0,s.Z)(t,c);return(0,n.kt)("wrapper",(0,i.Z)({},g,p,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2023-02-12-apache-spark-coredeep-diveproper-optimization-daniel-tomes-databricks"},"2023-02-12 Apache Spark Core\u2014Deep Dive\u2014Proper Optimization Daniel Tomes Databricks"),(0,n.kt)("h2",{id:"videos"},"Videos"),(0,n.kt)("p",null,"2023-02-12 ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=daXEp4HmS-E"},"Apache Spark Core\u2014Deep Dive\u2014Proper Optimization Daniel Tomes Databricks - YouTube")," "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"133,082 views  May 6, 2019"),(0,n.kt)("p",{parentName:"blockquote"},'Optimizing spark jobs through a true understanding of spark core. Learn: What is a partition? What is the difference between read/shuffle/write partitions? How to increase parallelism and decrease output files? Where does shuffle data go between stages? What is the "right" size for your spark partitions and files? Why does a job slow down with only a few tasks left and never finish? Why doesn\'t adding nodes decrease my compute time? About: Databricks provides a unified data analytics platform, powered by Apache Spark\u2122, that accelerates innovation by unifying data science, engineering and business. Read more here: ',(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqblp6MkVKU0NJcVctWGM3ajM4RDk5emdmX2l1d3xBQ3Jtc0tsVFBUXzgyazhDRlFhZ3V3OUdCM0pWbktYOXA4VzU2Snl2bFd5c25KT2VFOHNzeVBtX1c2N2xmSHZBRWh4RUxYYU5VQlZNVnN3Y2NnYksxRk9sTGRIN3JCQmhEMXpoajNUZ0JnRXQ4WDJ3VXJtUXBuUQ&q=https%3A%2F%2Fdatabricks.com%2Fproduct%2Funified-data-analytics-platform&v=daXEp4HmS-E"},"https://databricks.com/product/unifie...")," Connect with us: Website: ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmNENWdOaGlOaXRpcDB6ajN5Y3JPck13TVdhQXxBQ3Jtc0tuakpqaVowNDhjeVZBdmU2c01QcFk3b1o3U1ZvYXllT0xLVFhqcDFqdlpDNFlDYVh0NjZSV3p2c3B5anNJdi04QmNzWVZ1QXJ3WGFHb2FBVER0RnNpb3l3cUxGR2t5U0kzckJvLUVZeVd0c180cFczRQ&q=https%3A%2F%2Fdatabricks.com%2F&v=daXEp4HmS-E"},"https://databricks.com")," Facebook: ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa285aUpvV3UzampaaGFMUW9BYVkzemQ0Z0M4UXxBQ3Jtc0ttMlVybGI4ejVYMGlfS05OVzVJODhLQ3UtMjVMNUQ0cVczdkhhU0lMQnFGVlJXcGhMSFJaT3dHbk5mei1RNHI4eE9nbElQeTlrQjZvVWxGYVBDQng0RlR4RGR1VVRkdEQ1aUhzOVp4b2ZJdXFnR2R1Yw&q=https%3A%2F%2Fwww.facebook.com%2Fdatabricksinc&v=daXEp4HmS-E"},"https://www.facebook.com/databricksinc")," Twitter: ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbThFdnJkYl9RTEVFcXBpNEhRb19WNjdZYy0wQXxBQ3Jtc0ttcU1yOG5zOXBPWXVDRnJ1V3JSakxYSjJVQkhBTktqMnNCSUVrSkVlbEpKemN0elQ5eXRNRlZNNGpzY2dXUmpxLTZnYmYxZk9wMlU2eWRpVWljY1VibHc5WXN2ck8zZm5TczNXb2VYVlF2bWVQcUprYw&q=https%3A%2F%2Ftwitter.com%2Fdatabricks&v=daXEp4HmS-E"},"https://twitter.com/databricks")," LinkedIn: ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWJPMElKc1dYZGVnbGd3RE5lRlVjRDBwcVF5UXxBQ3Jtc0tsWTV5RU1CV3dtQTZYVEtqaW1ZaEpmOXc2ZDhtdldhaGcxZGJTaDR2MGJibXhYZ2Y1TWRJYVRyaFZlWjNQY1NDc0ZWaVNKajV2TFZhN3JGR3BGNElmYmdTdGZieGVFRUFIQ2EwNW5ZM0RDLXhidG9YWQ&q=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fdatabricks&v=daXEp4HmS-E"},"https://www.linkedin.com/company/data...")," Instagram: ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUo0VU5pcnVIaEVDNkdzUXNBQlA5TWVwbndjZ3xBQ3Jtc0ttZ0x4QXZZOW1NQkQyUlJVWkh4TEVkZlBLYVc2YkFsQy14ZWpOT05jUEVXQVl4c1dEVUgwSkIyTGlVWlpfZ3NPckhSaUNzVzlyOUN4cXkzOXcxcE1TV0ZyUjAzWE8wNi1USzN4a1d2amlfUDNac2F5TQ&q=https%3A%2F%2Fwww.instagram.com%2Fdatabricksinc%2F&v=daXEp4HmS-E"},"https://www.instagram.com/databricksinc/")," Databricks is proud to announce that Gartner has named us a Leader in both the 2021 Magic Quadrant for Cloud Database Management Systems and the 2021 Magic Quadrant for Data Science and Machine Learning Platforms.")),(0,n.kt)("p",null,"2023-02-12 ",(0,n.kt)("a",{parentName:"p",href:"https://sparkbyexamples.com/spark/spark-shuffle-partitions/"},"Spark SQL Shuffle Partitions - Spark By {Examples}")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"spark.sql.shuffle.partitions\n")),(0,n.kt)("h2",{id:"slides"},"Slides"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101441",src:a(26416).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101443",src:a(46969).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101448",src:a(32594).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101450",src:a(7601).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101452",src:a(15038).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101453",src:a(43455).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101454",src:a(81667).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101456",src:a(79779).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101500",src:a(37381).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101510",src:a(98289).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101512",src:a(11297).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101513",src:a(31202).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101515",src:a(93288).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101516",src:a(19530).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101517",src:a(69066).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101518",src:a(74491).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101520",src:a(98437).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101521",src:a(10143).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101522",src:a(59848).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101523",src:a(93685).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101526",src:a(63210).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101528",src:a(63442).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101529",src:a(98822).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101530",src:a(48962).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101531",src:a(39246).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101532",src:a(84233).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101533",src:a(11477).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101534",src:a(81177).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101535",src:a(61979).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101537",src:a(49055).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101538",src:a(39651).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101539",src:a(95928).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101540",src:a(99592).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101541",src:a(59576).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101542",src:a(34905).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101544",src:a(58043).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101545",src:a(61039).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101546",src:a(75673).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101547",src:a(63996).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101548",src:a(64134).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101549",src:a(5515).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101551",src:a(86248).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101552",src:a(61218).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101553",src:a(72358).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101554",src:a(49307).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101555",src:a(54959).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101556",src:a(6129).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212101557",src:a(82748).Z,width:"1920",height:"1080"})),(0,n.kt)("h2",{id:"2023-02-12--apache-spark-core--practical-optimization-daniel-tomes-databricks---youtube"},"2023-02-12 ",(0,n.kt)("strong",{parentName:"h2"},"\ud83c\udfa5 ",(0,n.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=_ArCesElWp8"},"Apache Spark Core \u2013 Practical Optimization Daniel Tomes Databricks - YouTube"))),(0,n.kt)("p",null,"This is talk with similar content, but a bit different slides. Many thanks to Daniel Tomes for such amazing content."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212115121",src:a(22619).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212115316",src:a(20678).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212115616",src:a(31756).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212115636",src:a(38883).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212115643",src:a(88839).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212115657",src:a(24363).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212115823",src:a(82660).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212115918",src:a(97929).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212115926",src:a(52638).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212115956",src:a(84956).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212120253",src:a(11256).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212120352",src:a(64307).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212120704",src:a(99962).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212120939",src:a(51834).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212121014",src:a(15369).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212121223",src:a(41072).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212121256",src:a(96754).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212121444",src:a(14686).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212121612",src:a(15782).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212121633",src:a(99107).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212121656",src:a(69194).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212121744",src:a(17624).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212122026",src:a(433).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212122238",src:a(15121).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212122720",src:a(81443).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212122949",src:a(79911).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212123010",src:a(39101).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212123701",src:a(58350).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212123736",src:a(52021).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212123905",src:a(19596).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212123922",src:a(50740).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212124124",src:a(65776).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212124219",src:a(80284).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212124325",src:a(55368).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212124354",src:a(17238).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212124513",src:a(96847).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212124549",src:a(95527).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212124659",src:a(19065).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212124807",src:a(48252).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212124904",src:a(11618).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212125050",src:a(75487).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212125250",src:a(15327).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212125355",src:a(95115).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212125530",src:a(41584).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212125914",src:a(71946).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212130140",src:a(72193).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212130425",src:a(72412).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212130450",src:a(95892).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212130720",src:a(85434).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"20230212130842",src:a(63958).Z,width:"1920",height:"1080"})))}h.isMDXComponent=!0},26416:function(t,e,a){e.Z=a.p+"assets/images/20230212101441-2d4c873b89f370cc0b5deb22fda00c7a.png"},46969:function(t,e,a){e.Z=a.p+"assets/images/20230212101443-c614ed7e3d194a28fcd7319e6b14f55e.png"},32594:function(t,e,a){e.Z=a.p+"assets/images/20230212101448-bc3310818d16543dab24a97e62d3c089.png"},7601:function(t,e,a){e.Z=a.p+"assets/images/20230212101450-0535ebd3243459a5dda6f82d6350c60c.png"},15038:function(t,e,a){e.Z=a.p+"assets/images/20230212101452-73d0cc74a1111ccacc68d9501794b729.png"},43455:function(t,e,a){e.Z=a.p+"assets/images/20230212101453-77fdfe9b9bc8cb4724f31403eb3f9167.png"},81667:function(t,e,a){e.Z=a.p+"assets/images/20230212101454-8a985e29b8820658e22b1f1fecb3badf.png"},79779:function(t,e,a){e.Z=a.p+"assets/images/20230212101456-06390760f6dba2e36eeb2151e0f52c72.png"},37381:function(t,e,a){e.Z=a.p+"assets/images/20230212101500-ca560eb351bb7eb10e8d2e53b6eacfc5.png"},98289:function(t,e,a){e.Z=a.p+"assets/images/20230212101510-24ad05a83e4e061b53bbf23fd9e71664.png"},11297:function(t,e,a){e.Z=a.p+"assets/images/20230212101512-31d531c8dda02049fac6ef202bed4fa9.png"},31202:function(t,e,a){e.Z=a.p+"assets/images/20230212101513-396f5fe82ba8d1cde06b8e99e223f23d.png"},93288:function(t,e,a){e.Z=a.p+"assets/images/20230212101515-5cb26e9b83bb72c4f11ae3eb4f61294f.png"},19530:function(t,e,a){e.Z=a.p+"assets/images/20230212101516-1877aaf59ff455029b29881b2e18c009.png"},69066:function(t,e,a){e.Z=a.p+"assets/images/20230212101517-e50c8bd64973bba440b96400821fd8c0.png"},74491:function(t,e,a){e.Z=a.p+"assets/images/20230212101518-6b78998178e5d79729e059faacf041ed.png"},98437:function(t,e,a){e.Z=a.p+"assets/images/20230212101520-b01d08e0d49d975fb2a4216a4bd3a990.png"},10143:function(t,e,a){e.Z=a.p+"assets/images/20230212101521-b580e03a6b254cdc6571604b9109be79.png"},59848:function(t,e,a){e.Z=a.p+"assets/images/20230212101522-53315dd972dd7193a026502f1d9d95e6.png"},93685:function(t,e,a){e.Z=a.p+"assets/images/20230212101523-3f0f870db5572d0e869a45cf563e1875.png"},63210:function(t,e,a){e.Z=a.p+"assets/images/20230212101526-2a5d18fb9c35d63bb944f76b7234813a.png"},63442:function(t,e,a){e.Z=a.p+"assets/images/20230212101528-998466cdfe7f3f67c9a28fedf67d1b81.png"},98822:function(t,e,a){e.Z=a.p+"assets/images/20230212101529-9c82195dc86313c2444bdf78a46a006b.png"},48962:function(t,e,a){e.Z=a.p+"assets/images/20230212101530-10a0ef3278681e062f04b7e9becd28b7.png"},39246:function(t,e,a){e.Z=a.p+"assets/images/20230212101531-b1883e9b654b95d869a2713c41b0633c.png"},84233:function(t,e,a){e.Z=a.p+"assets/images/20230212101532-2e66c39a54927d1363586ec56477bfae.png"},11477:function(t,e,a){e.Z=a.p+"assets/images/20230212101533-bcd3cae2639ea2ad6fd5c185d1cee7c9.png"},81177:function(t,e,a){e.Z=a.p+"assets/images/20230212101534-6bf1d8a04acb2a918e42aeb778735c7b.png"},61979:function(t,e,a){e.Z=a.p+"assets/images/20230212101535-ca4da0b227630b76b850c393fe5a383d.png"},49055:function(t,e,a){e.Z=a.p+"assets/images/20230212101537-fa2383d3054c6fecc3edaa9e667147a9.png"},39651:function(t,e,a){e.Z=a.p+"assets/images/20230212101538-665f26352f81e44fd69dd3ecf37f4813.png"},95928:function(t,e,a){e.Z=a.p+"assets/images/20230212101539-ec5875c3007efbfcad157462e0eaf851.png"},99592:function(t,e,a){e.Z=a.p+"assets/images/20230212101540-2ad00b26c47c2485840f2c1aa18eb921.png"},59576:function(t,e,a){e.Z=a.p+"assets/images/20230212101541-19f39c920a1775be17324b86d57a32cc.png"},34905:function(t,e,a){e.Z=a.p+"assets/images/20230212101542-c7bf7f2f67dfd962afc0655e26794b8f.png"},58043:function(t,e,a){e.Z=a.p+"assets/images/20230212101544-867c258132d9be740fa4341f664cd6b4.png"},61039:function(t,e,a){e.Z=a.p+"assets/images/20230212101545-02dcef56bd079ac07e91067a9c745835.png"},75673:function(t,e,a){e.Z=a.p+"assets/images/20230212101546-cc0e1faf8663bb3cc6aef78d7e8a621b.png"},63996:function(t,e,a){e.Z=a.p+"assets/images/20230212101547-166996e8b8730e9321900b023c4dec0d.png"},64134:function(t,e,a){e.Z=a.p+"assets/images/20230212101548-c33d56cc7b399e8ddb2bc5551c3cfb84.png"},5515:function(t,e,a){e.Z=a.p+"assets/images/20230212101549-277a3088c026e49fed46821865c9c1b5.png"},86248:function(t,e,a){e.Z=a.p+"assets/images/20230212101551-be4faa8c08a175a1e76a5a9257377f9f.png"},61218:function(t,e,a){e.Z=a.p+"assets/images/20230212101552-6636b6cb53dacbfee62825ef03fcf3e1.png"},72358:function(t,e,a){e.Z=a.p+"assets/images/20230212101553-cb33078215ae7fb9267f4a87875e2b68.png"},49307:function(t,e,a){e.Z=a.p+"assets/images/20230212101554-50b57d9aa7144b3d06b0f369c1ee4625.png"},54959:function(t,e,a){e.Z=a.p+"assets/images/20230212101555-072d50a59c0b488ac1318fd31ca408f4.png"},6129:function(t,e,a){e.Z=a.p+"assets/images/20230212101556-884840369b133f82e3b67472b3a5e52a.png"},82748:function(t,e,a){e.Z=a.p+"assets/images/20230212101557-c9cdc6bcf0cb8adf2b39835e66908c4a.png"},22619:function(t,e,a){e.Z=a.p+"assets/images/20230212115121-a1b10483c973d7da264d39b089669011.png"},20678:function(t,e,a){e.Z=a.p+"assets/images/20230212115316-7a1cf07c9ae17461ff8f197841c449ad.png"},31756:function(t,e,a){e.Z=a.p+"assets/images/20230212115616-9da9b144cbad288f4ab435a46c3b7868.png"},38883:function(t,e,a){e.Z=a.p+"assets/images/20230212115636-35e0ddb7dcb07f2eb71fdcecd03d92b5.png"},88839:function(t,e,a){e.Z=a.p+"assets/images/20230212115643-69e64f67c5470dd761b14548ebff4f89.png"},24363:function(t,e,a){e.Z=a.p+"assets/images/20230212115657-f80512b19274f5afbb27c9cd33d747ea.png"},82660:function(t,e,a){e.Z=a.p+"assets/images/20230212115823-212788d8942854f7dce4101fcbf4c5c9.png"},97929:function(t,e,a){e.Z=a.p+"assets/images/20230212115918-9ad57e2a6bdd01fa34e0e55d49ab2afb.png"},52638:function(t,e,a){e.Z=a.p+"assets/images/20230212115926-acf6ef62c9c9b06816ce8274adf566d1.png"},84956:function(t,e,a){e.Z=a.p+"assets/images/20230212115956-6d3a221816624359366bcb841906537c.png"},11256:function(t,e,a){e.Z=a.p+"assets/images/20230212120253-82ab01ddc5b98f09bc6d729d22063ea9.png"},64307:function(t,e,a){e.Z=a.p+"assets/images/20230212120352-5e369dc195c2ec9ae597ada2cb70d9b4.png"},99962:function(t,e,a){e.Z=a.p+"assets/images/20230212120704-30157e3d0b23c54ad03e93857cda6170.png"},51834:function(t,e,a){e.Z=a.p+"assets/images/20230212120939-0c84af5443157d6f29214ff8c668a640.png"},15369:function(t,e,a){e.Z=a.p+"assets/images/20230212121014-ee49f0abfaecf5b573834597f3ce529d.png"},41072:function(t,e,a){e.Z=a.p+"assets/images/20230212121223-155f344e58cd93bd69dfedacaee9c87a.png"},96754:function(t,e,a){e.Z=a.p+"assets/images/20230212121256-0c3b4a1ca1fb3f0be26c2a5b2cafcf14.png"},14686:function(t,e,a){e.Z=a.p+"assets/images/20230212121444-c72428a352af094214e45491a1faeb20.png"},15782:function(t,e,a){e.Z=a.p+"assets/images/20230212121612-48784f5f8ffe98d951e110d3b9b9f8b0.png"},99107:function(t,e,a){e.Z=a.p+"assets/images/20230212121633-7255f0d64513c0900841b8627ce741c0.png"},69194:function(t,e,a){e.Z=a.p+"assets/images/20230212121656-1797c91b4348bea16464f58af304a84a.png"},17624:function(t,e,a){e.Z=a.p+"assets/images/20230212121744-2d26dbcb698b11fc31d4116a11c308eb.png"},433:function(t,e,a){e.Z=a.p+"assets/images/20230212122026-a7c2efb76c8b45619896820022da3e67.png"},15121:function(t,e,a){e.Z=a.p+"assets/images/20230212122238-47e9b3db292094f10cb087c39d1ed407.png"},81443:function(t,e,a){e.Z=a.p+"assets/images/20230212122720-2c24978c77cc74cf5a2a188cd281a87f.png"},79911:function(t,e,a){e.Z=a.p+"assets/images/20230212122949-19c077a63638e9dcc848ede1d3559782.png"},39101:function(t,e,a){e.Z=a.p+"assets/images/20230212123010-387e0df621461c8964d3a492cfaa1dd3.png"},58350:function(t,e,a){e.Z=a.p+"assets/images/20230212123701-ec5da8d8e3e72da9796fa1520282fa89.png"},52021:function(t,e,a){e.Z=a.p+"assets/images/20230212123736-75f74cec827bedacc661241cfb4adfdc.png"},19596:function(t,e,a){e.Z=a.p+"assets/images/20230212123905-fca964f79019237ec542362e366b7db3.png"},50740:function(t,e,a){e.Z=a.p+"assets/images/20230212123922-cdeb201015f17c3b11784ea627aa8351.png"},65776:function(t,e,a){e.Z=a.p+"assets/images/20230212124124-d04067495c6b4e69776616945d524439.png"},80284:function(t,e,a){e.Z=a.p+"assets/images/20230212124219-954e923b7e722c5aad00a9b22a7ad351.png"},55368:function(t,e,a){e.Z=a.p+"assets/images/20230212124325-0c952a4891ce2c81bd7af0d4b2e7e0d2.png"},17238:function(t,e,a){e.Z=a.p+"assets/images/20230212124354-c36d3af659ece0effd333e91d722bec9.png"},96847:function(t,e,a){e.Z=a.p+"assets/images/20230212124513-5caa82aa9b5aa824886361d1dbfb07b9.png"},95527:function(t,e,a){e.Z=a.p+"assets/images/20230212124549-1f811175833a3e0a1de4ec641663dafc.png"},19065:function(t,e,a){e.Z=a.p+"assets/images/20230212124659-1dce282c6d1a5f82b53f5b67408fe7c7.png"},48252:function(t,e,a){e.Z=a.p+"assets/images/20230212124807-80c2bb40185f542e30cee1f337d1e3f3.png"},11618:function(t,e,a){e.Z=a.p+"assets/images/20230212124904-e215fcd9ced8e76a8294be1d0613bff0.png"},75487:function(t,e,a){e.Z=a.p+"assets/images/20230212125050-7e9b459ec3de6ddbb25ac609dba54328.png"},15327:function(t,e,a){e.Z=a.p+"assets/images/20230212125250-7f37bbc8e74925131dac6d7c7665ab16.png"},95115:function(t,e,a){e.Z=a.p+"assets/images/20230212125355-75ab9f67bb0e1089b337afde92dff1c7.png"},41584:function(t,e,a){e.Z=a.p+"assets/images/20230212125530-f08979c37ea0d0454641e552d5cbc462.png"},71946:function(t,e,a){e.Z=a.p+"assets/images/20230212125914-5a7c8e3c4e73f2ab083e5382ea29f336.png"},72193:function(t,e,a){e.Z=a.p+"assets/images/20230212130140-018acb96eaaabdf034de7cd3d40a7d40.png"},72412:function(t,e,a){e.Z=a.p+"assets/images/20230212130425-acbbd7b0ac9f95fe69e07c766491fd83.png"},95892:function(t,e,a){e.Z=a.p+"assets/images/20230212130450-56a8290616a87f3685a898eac3f54bbe.png"},85434:function(t,e,a){e.Z=a.p+"assets/images/20230212130720-61a8e8aa4023f11a45c9c2366c933ee9.png"},63958:function(t,e,a){e.Z=a.p+"assets/images/20230212130842-d5ee077aff0ce059b4fdbb3e5d2a4bd3.png"}}]);