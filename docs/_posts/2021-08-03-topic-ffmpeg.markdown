---
layout: post
title:  "FFmpeg links"
date:   2021-08-03 07:47 -0700
categories: links
---

- [Using FFmpeg with NVIDIA GPU Hardware Acceleration :: NVIDIA Video Codec SDK Documentation](https://docs.nvidia.com/video-technologies/video-codec-sdk/ffmpeg-with-nvidia-gpu/index.html)
- [FFmpeg.wasm, a pure WebAssembly / JavaScript port of FFmpeg  TechBlog](https://jeromewu.github.io/ffmpeg-wasm-a-pure-webassembly-javascript-port-of-ffmpeg/)
- [Create animated GIF and WebP from videos using FFmpeg  Matt Joseph](https://mattj.io/posts/2021-02-27-create-animated-gif-and-webp-from-videos-using-ffmpeg/)
- [How can I reduce a video's size with ffmpeg? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/28803/how-can-i-reduce-a-videos-size-with-ffmpeg)
- [cytopia/ffscreencast: ffscreencast - ffmpeg screencast/desktop-recording with video overlay and multi monitor support](https://github.com/cytopia/ffscreencast)
- [FFmpeg Threads Command: How it Affects Quality and Performance - Streaming Learning Center](https://streaminglearningcenter.com/blogs/ffmpeg-command-threads-how-it-affects-quality-and-performance.html)
- [Galène videoconference server](https://galene.org/)
- [Show HN: Owncast – An open-source, self-hosted live streaming server Hacker News](https://news.ycombinator.com/item?id=25484133)
- [Camera Stabilisation with FFmpeg](http://blog.gregzaal.com/2014/05/30/camera-stabilisation-with-ffmpeg/)
- [Stabilizing GoPro Video with FFmpeg and vid.stab Important Bits](https://www.imakewebsites.ca/posts/2018/02/17/stabilizing-gopro-video-with-ffmpeg-and-vid.stab/)
- [Anime Encoding Guide for x265  HEVC  & AAC/OPUS  and Why to Never Use FLAC  – Kokomins](https://kokomins.wordpress.com/2019/10/10/anime-encoding-guide-for-x265-and-why-to-never-use-flac/)


Make a clip

```sh
ffmpeg -i i.mp4 -ss 00:01:00 -t 00:02:00 -c copy o.mp4
```
Group photos into video

```sh
ffmpeg -framerate 10 -pattern_type glob -i '*.jpg' -c:v libx264 o.mp4
```

Get a screenshot from a video.
```sh
ffmpeg -i o.mp4 -r 1 -q:v 2 -f image2 img-3%d.jpeg
```
Concatenate videos

```sh
file 'video1.mp4'
file 'video2.mp4'
file 'videoN.mp4'
```

```sh
ffmpeg -f concat -i list.txt -c copy o.mp4
```
Remove audio from video
```sh
ffmpeg -i i.mp4 -c:v copy -an o.mp4
```
Extract audio from video
```sh
ffmpeg -i i.mp4 -vn 0.wav
```

Crop video
```sh
ffmpeg -i i.mp4 -filter:v "crop=w:h:x:y" o.mp4
```

Stack videos horizontaly
```sh
ffmpeg -i i0.mp4 -i i1.mp4 -filter_complex hstack=inputs=2 o.mp4
```
Vertical
```sh
ffmpeg -i i0.mp4 -i i1.mp4 -filter_complex vstack=inputs=2 o.mp4
```

Grid 2x2
```sh
ffmpeg \ -i i0.mp4 -i i1.mp4 -i i2.mp4 -i i3.mp4 \ -filter_complex \ "[0:v][1:v]hstack=inputs=2[top]; \ [2:v][3:v]hstack=inputs=2[bottom]; \ [top][bottom]vstack=inputs=2[v]" \ -map "[v]" \ o.mp4
```

Grid 3x2
```sh
ffmpeg \ -i i0.mp4 -i i1.mp4 \ -i i2.mp4 -i i3.mp4 \ -i i4.mp4 -i i5.mp4 \ -filter_complex \ "[0:v][1:v][2:v]hstack=inputs=3[top];\ [3:v][4:v][5:v]hstack=inputs=3[bottom];\ [top][bottom]vstack=inputs=2[v]" \ -map "[v]" \ o.mp4
```

Rotate:
```sh
ffmpeg -i i.mp4 -vf "transpose=0" o.mp4
```

## FFmpeg: convert for android

- (2021-09-15) [Converting Video for Android using FFMPEG - Stack Overflow](https://stackoverflow.com/questions/14171826/converting-video-for-android-using-ffmpeg)

```sh
ffmpeg -i <input> -c:v libx264 -c:a aac -movflags +faststart output.mp4
```

```sh
ffmpeg -i <input> -s 480x320 -vcodec mpeg4 -acodec aac -strict -2 -ac 1 -ar 16000 -r 13 -ab 32000 -aspect 3:2 <output>
```

```sh
ffmpeg -y -i input_file.mp4 -s 352x288 -b:v 384k -flags +loop+mv4 -cmp 256 -partitions +parti4x4+parti8x8+partp4x4+partp8x8 -subq 6 -trellis 0 -refs 5 -bf 0 -coder 0 -me_range 16 -g 250 -keyint_min 25 -sc_threshold 40 -i_qfactor 0.71 -qmin 10 -qmax 51 -qdiff 4 -c:a aac -ac 1 -ar 16000 -r 13 -ab 32000 -aspect 3:2 -strict experimental output_file.3gp
```

```sh
ffmpeg -i <INPUT_VIDEO> -c:v libx264 -profile:v baseline -c:a libvo_aacenc -ar 44100 -ac 2 -b:a 128k -movflags faststart output.mp4
```


