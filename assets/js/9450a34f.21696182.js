"use strict";(self.webpackChunkzharii=self.webpackChunkzharii||[]).push([[8882],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),m=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(a),f=r,d=u["".concat(p,".").concat(f)]||u[f]||c[f]||n;return a?o.createElement(d,i(i({ref:t},s),{},{components:a})):o.createElement(d,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<n;m++)i[m]=a[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5254:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var o=a(7462),r=a(3366),n=(a(7294),a(3905)),i=["components"],l={},p=void 0,m={unversionedId:"media-ffmpeg/ffmpeg-recipes",id:"media-ffmpeg/ffmpeg-recipes",title:"ffmpeg-recipes",description:"- Using FFmpeg with NVIDIA GPU Hardware Acceleration :: NVIDIA Video Codec SDK Documentation",source:"@site/docs/media-ffmpeg/ffmpeg-recipes.md",sourceDirName:"media-ffmpeg",slug:"/media-ffmpeg/ffmpeg-recipes",permalink:"/docs/media-ffmpeg/ffmpeg-recipes",editUrl:"https://github.com/dzharii/dzharii.github.io/docs/media-ffmpeg/ffmpeg-recipes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ffmpeg-inbox",permalink:"/docs/media-ffmpeg/ffmpeg-inbox"},next:{title:"ffmpeg and tools",permalink:"/docs/media-ffmpeg/ffmpeg"}},s=[{value:"Tools",id:"tools",children:[],level:2},{value:"Snippets",id:"snippets",children:[],level:2},{value:"FFmpeg: convert for android",id:"ffmpeg-convert-for-android",children:[],level:2},{value:"Webcam Streaming",id:"webcam-streaming",children:[],level:2},{value:"GoPRO Camera",id:"gopro-camera",children:[{value:"GoPro Tools and Code",id:"gopro-tools-and-code",children:[],level:3}],level:2},{value:"Youtube",id:"youtube",children:[],level:2},{value:"Tools / Other",id:"tools--other",children:[],level:2}],c={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/video-technologies/video-codec-sdk/ffmpeg-with-nvidia-gpu/index.html"},"Using FFmpeg with NVIDIA GPU Hardware Acceleration :: NVIDIA Video Codec SDK Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jeromewu.github.io/ffmpeg-wasm-a-pure-webassembly-javascript-port-of-ffmpeg/"},"FFmpeg.wasm, a pure WebAssembly / JavaScript port of\xa0FFmpeg  TechBlog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mattj.io/posts/2021-02-27-create-animated-gif-and-webp-from-videos-using-ffmpeg/"},"Create animated GIF and WebP from videos using\xa0FFmpeg  Matt Joseph")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/28803/how-can-i-reduce-a-videos-size-with-ffmpeg"},"How can I reduce a video's size with ffmpeg? - Unix & Linux Stack Exchange")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cytopia/ffscreencast"},"cytopia/ffscreencast: ffscreencast - ffmpeg screencast/desktop-recording with video overlay and multi monitor support")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://streaminglearningcenter.com/blogs/ffmpeg-command-threads-how-it-affects-quality-and-performance.html"},"FFmpeg Threads Command: How it Affects Quality and Performance - Streaming Learning Center")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://galene.org/"},"Gal\xe8ne videoconference server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25484133"},"Show HN: Owncast \u2013 An open-source, self-hosted live streaming server Hacker News")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://blog.gregzaal.com/2014/05/30/camera-stabilisation-with-ffmpeg/"},"Camera Stabilisation with FFmpeg")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.imakewebsites.ca/posts/2018/02/17/stabilizing-gopro-video-with-ffmpeg-and-vid.stab/"},"Stabilizing GoPro Video with FFmpeg and vid.stab Important Bits")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kokomins.wordpress.com/2019/10/10/anime-encoding-guide-for-x265-and-why-to-never-use-flac/"},"Anime Encoding Guide for x265  HEVC  & AAC/OPUS  and Why to Never Use FLAC  \u2013 Kokomins"))),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://alfg.dev/ffmpeg-commander/"},"FFmpeg Commander"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/alfg/ffmpeg-commander"},"github: alfg/ffmpeg-commander: \ud83d\udee0\ufe0f FFmpeg Command Generator Web UI")," - generates commandline for the workload!")))),(0,n.kt)("h2",{id:"snippets"},"Snippets"),(0,n.kt)("p",null,"Audio - increase volume:\n",(0,n.kt)("a",{parentName:"p",href:"https://trac.ffmpeg.org/wiki/AudioVolume"},"AudioVolume \u2013 FFmpeg")," Audio Volume Manipulation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -i VID_20211212_130236045.mp4  -c:v copy -filter:a loudnorm VID_20211212_130236045_vol_50.mp4\n")),(0,n.kt)("p",null,"Add sound wave on top of video (under construction):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'ffmpeg -i in.mp4 -filter_complex "[0:a]showwaves=s=1920x300:mode=line:colors=red|yellow[sw];[0][sw]overlay=(W-w)/2:(H-h)/2:format=auto,format=yuv420p[v]" -map "[v]" -map 0:a -movflags +faststart output.mp4\n')),(0,n.kt)("p",null,"Reduce frame rate:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ffmpeg -i one.mkv -movflags +faststart -filter:v fps=24 two.mp4\n")),(0,n.kt)("p",null,"Make a clip"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -i i.mp4 -ss 00:01:00 -t 00:02:00 -c copy o.mp4\n")),(0,n.kt)("p",null,"Group photos into video"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -framerate 10 -pattern_type glob -i '*.jpg' -c:v libx264 o.mp4\n")),(0,n.kt)("p",null,"Get a screenshot from a video."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -i o.mp4 -r 1 -q:v 2 -f image2 img-3%d.jpeg\n")),(0,n.kt)("p",null,"Concatenate videos"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"file 'video1.mp4'\nfile 'video2.mp4'\nfile 'videoN.mp4'\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -f concat -i list.txt -c copy o.mp4\n")),(0,n.kt)("p",null,"Remove audio from video"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -i i.mp4 -c:v copy -an o.mp4\n")),(0,n.kt)("p",null,"Extract audio from video"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -i i.mp4 -vn 0.wav\n")),(0,n.kt)("p",null,"Crop video"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'ffmpeg -i i.mp4 -filter:v "crop=w:h:x:y" o.mp4\n')),(0,n.kt)("p",null,"Stack videos horizontaly"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -i i0.mp4 -i i1.mp4 -filter_complex hstack=inputs=2 o.mp4\n")),(0,n.kt)("p",null,"Vertical"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -i i0.mp4 -i i1.mp4 -filter_complex vstack=inputs=2 o.mp4\n")),(0,n.kt)("p",null,"Grid 2x2"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'ffmpeg \\ -i i0.mp4 -i i1.mp4 -i i2.mp4 -i i3.mp4 \\ -filter_complex \\ "[0:v][1:v]hstack=inputs=2[top]; \\ [2:v][3:v]hstack=inputs=2[bottom]; \\ [top][bottom]vstack=inputs=2[v]" \\ -map "[v]" \\ o.mp4\n')),(0,n.kt)("p",null,"Grid 3x2"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'ffmpeg \\ -i i0.mp4 -i i1.mp4 \\ -i i2.mp4 -i i3.mp4 \\ -i i4.mp4 -i i5.mp4 \\ -filter_complex \\ "[0:v][1:v][2:v]hstack=inputs=3[top];\\ [3:v][4:v][5:v]hstack=inputs=3[bottom];\\ [top][bottom]vstack=inputs=2[v]" \\ -map "[v]" \\ o.mp4\n')),(0,n.kt)("p",null,"Rotate (re-encode):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'ffmpeg -i i.mp4 -vf "transpose=0" o.mp4\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ostechnix.com/how-to-rotate-videos-using-ffmpeg-from-commandline/"},"How To Rotate Videos Using FFMpeg From Commandline")),(0,n.kt)("p",null,"transpose=..."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"0 - Rotate by 90 degrees counter-clockwise and flip vertically. This is the default."),(0,n.kt)("li",{parentName:"ul"},"1 - Rotate by 90 degrees clockwise."),(0,n.kt)("li",{parentName:"ul"},"2 - Rotate by 90 degrees counter-clockwise."),(0,n.kt)("li",{parentName:"ul"},"3 - Rotate by 90 degrees clockwise and flip vertically.")),(0,n.kt)("p",null,"Rotate 180 dec:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'ffmpeg -i input.mp4 -vf "transpose=2,transpose=2" output.mp4\n')),(0,n.kt)("p",null,"Rotate (metadata only):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -i inp.mp4  -c copy -metadata:s:v:0 rotate=180 output.mp4\n")),(0,n.kt)("h2",{id:"ffmpeg-convert-for-android"},"FFmpeg: convert for android"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(2021-09-15) ",(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/14171826/converting-video-for-android-using-ffmpeg"},"Converting Video for Android using FFMPEG - Stack Overflow"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -i <input> -c:v libx264 -c:a aac -movflags +faststart output.mp4\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -i <input> -s 480x320 -vcodec mpeg4 -acodec aac -strict -2 -ac 1 -ar 16000 -r 13 -ab 32000 -aspect 3:2 <output>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -y -i input_file.mp4 -s 352x288 -b:v 384k -flags +loop+mv4 -cmp 256 -partitions +parti4x4+parti8x8+partp4x4+partp8x8 -subq 6 -trellis 0 -refs 5 -bf 0 -coder 0 -me_range 16 -g 250 -keyint_min 25 -sc_threshold 40 -i_qfactor 0.71 -qmin 10 -qmax 51 -qdiff 4 -c:a aac -ac 1 -ar 16000 -r 13 -ab 32000 -aspect 3:2 -strict experimental output_file.3gp\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ffmpeg -i <INPUT_VIDEO> -c:v libx264 -profile:v baseline -c:a libvo_aacenc -ar 44100 -ac 2 -b:a 128k -movflags faststart output.mp4\n")),(0,n.kt)("p",null,"Powershell: Convert files in the current folder for mobile upload"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"$files = Get-ChildItem\nNew-Item  -Name \"out\" -ItemType \"directory\"\nforeach($file in $files) {\n    $file.Extension\n    if ($file.Extension -cin ('.webm', '.mp4', '.mkv')) {\n        $fn = '\"out/' + $file.BaseName + '.mp4'\n        ffmpeg -i \"$file\" -c:v libx264 -c:a aac -movflags +faststart $fn\n    }\n}\n")),(0,n.kt)("h2",{id:"webcam-streaming"},"Webcam Streaming"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://4youngpadawans.com/stream-camera-video-and-audio-with-ffmpeg/"},"Stream camera video and audio with FFmpeg")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -list_devices true -f dshow -i dummy\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'"HD Pro Webcam C920"\n"Microphone (TKGOU PnP USB Microphone)"')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'ffmpeg -f dshow -i video="HD Pro Webcam C920":audio="Microphone (TKGOU PnP USB Microphone)" -profile:v high -pix_fmt yuvj420p -level:v 4.1 -preset ultrafast -tune zerolatency -vcodec libx264 -r 10 -b:v 512k -s 640x360 -acodec aac -ac 2 -ab 32k -ar 44100 -f mpegts -flush_packets 0 udp://192.168.1.101:5666?pkt_size=1316\n')),(0,n.kt)("p",null,"VLC -> Open Network Stream: ",(0,n.kt)("inlineCode",{parentName:"p"},"udp://@192.168.1.101:5666")),(0,n.kt)("h2",{id:"gopro-camera"},"GoPRO Camera"),(0,n.kt)("p",null,"Reddit Thread: ",(0,n.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/Windows10/comments/j58y6f/no_longer_free_windows_10_hevc_video_extensions/"},"No longer free: Windows 10 HEVC Video Extensions from Device Manufacturer : Windows10"),"\nworkaround"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"start ms-windows-store://pdp/?ProductId=9n4wgh0z6vhq\n")),(0,n.kt)("p",null,"Downscale 4K video example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -i input.MP4 -c:v libx264 -crf 19 -preset slow -c:a aac -b:a 192k -ac 2 -vf scale=1920:1080 output_4k_to_1080p_converted.MP4\n")),(0,n.kt)("p",null,"Convert h.264 to h.265 (no change in resolution)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -i input.mp4 -c:v libx265 -vtag hvc1 -vf scale=1920:1080 -crf 20 -c:a copy output.mp4\n")),(0,n.kt)("p",null,"crf:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-crf 0")," high-quality, low compression, large file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-crf 23")," default"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-crf 51")," low-quality, high compression, small file")),(0,n.kt)("h3",{id:"gopro-tools-and-code"},"GoPro Tools and Code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(2021-12-26) ",(0,n.kt)("a",{parentName:"li",href:"https://gopro.com/en/us/news/gopro-video-metadata-open-source-explained"},"GoPro Open Sources Video Metadata")),(0,n.kt)("li",{parentName:"ul"},"(2021-12-26) ",(0,n.kt)("a",{parentName:"li",href:"https://www.cgsecurity.org/wiki/TestDisk"},"TestDisk - CGSecurity")," - Open source SD Card recovery tool"),(0,n.kt)("li",{parentName:"ul"},"2022-05-13 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/destroyedlolo/GPMFMetersGenerator"},"destroyedlolo/GPMFMetersGenerator: Generate skickers from GoPro's GPMF"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Generate skickers from GoPro's GPMF\nTry it \ud83c\udf4e\ud83c\udf4e\ud83c\udf4e"))),(0,n.kt)("li",{parentName:"ul"},"2022-05-13 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gyroflow/gyroflow"},"gyroflow/gyroflow: Video stabilization using gyroscope data"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Video stabilization using gyroscope data Homepage \u2022 Download \u2022 Documentation \u2022 Discord \u2022 Report bug \u2022 Request feature"))),(0,n.kt)("li",{parentName:"ul"},"2022-05-13 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KonradIT/goprowifihack"},"KonradIT/goprowifihack: Unofficial GoPro WiFi API Documentation - HTTP GET requests for commands, status, livestreaming and media query."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The unofficial API for GoPro cameras (The WiFi enabled models)"))),(0,n.kt)("li",{parentName:"ul"},"2022-05-13 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gopro/gpmf-parser"},"gopro/gpmf-parser: Parser for GPMF\u2122 formatted telemetry data used within GoPro\xae cameras."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The GPMF structured storage format was originally proposed to store high-frequency periodic sensor data within a video file like an MP4. Action cameras, like that from GoPro, have limited computing resources beyond that needed to store video and audio, so")))),(0,n.kt)("h2",{id:"youtube"},"Youtube"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2022-05-08 ",(0,n.kt)("a",{parentName:"li",href:"https://trac.ffmpeg.org/wiki/Encode/YouTube"},"Encode/YouTube \u2013 FFmpeg"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Upscaling video for higher peak quality")))),(0,n.kt)("p",null,"Due to the encoding ladders that Youtube and other streaming sites utilise to re-encode uploaded videos in different qualities, higher resolution videos receive a higher bitrate. It's possible to use upscaling to exploit this for higher peak viewing quality."),(0,n.kt)("p",null,"The following will use nearest neighbor scaling to upscale a video by 2x in each direction for 4 times the total resolution and minimal scaling artifacts:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ffmpeg -i input.mkv -vf scale=iw*2:ih*2:flags=neighbor -c:v libx264 -preset slow -crf 18 output.mkv\n")),(0,n.kt)("p",null,"To upscale by 4x or 8x, use scale=iw",(0,n.kt)("em",{parentName:"p"},"4:ih"),"4:flags=neighbor and scale=iw",(0,n.kt)("em",{parentName:"p"},"8:ih"),"8:flags=neighbor respectively. This can be useful for low-resolution material such as VHS captures, DVD video, and gameplay capture of old video games that would otherwise suffer from excessive loss of detail if uploaded in 480p or lower resolution."),(0,n.kt)("h2",{id:"tools--other"},"Tools / Other"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(2021-09-26) ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/jely2002/youtube-dl-gui"},"jely2002/youtube-dl-gui: A cross-platform GUI for youtube-dl made in Electron and node.js - open video downloader"))))}u.isMDXComponent=!0}}]);