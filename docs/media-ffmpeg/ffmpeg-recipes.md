
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

## Tools

- [FFmpeg Commander](https://alfg.dev/ffmpeg-commander/)
    * [github: alfg/ffmpeg-commander: 🛠️ FFmpeg Command Generator Web UI](https://github.com/alfg/ffmpeg-commander) - generates commandline for the workload!

## Snippets

Audio - increase volume:
[AudioVolume – FFmpeg](https://trac.ffmpeg.org/wiki/AudioVolume) Audio Volume Manipulation

```sh
ffmpeg -i VID_20211212_130236045.mp4  -c:v copy -filter:a loudnorm VID_20211212_130236045_vol_50.mp4
```

Add sound wave on top of video (under construction):

```sh
ffmpeg -i in.mp4 -filter_complex "[0:a]showwaves=s=1920x300:mode=line:colors=red|yellow[sw];[0][sw]overlay=(W-w)/2:(H-h)/2:format=auto,format=yuv420p[v]" -map "[v]" -map 0:a -movflags +faststart output.mp4
```

Reduce frame rate:
```
ffmpeg -i one.mkv -movflags +faststart -filter:v fps=24 two.mp4
```

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

Rotate (re-encode):
```sh
ffmpeg -i i.mp4 -vf "transpose=0" o.mp4
```

[How To Rotate Videos Using FFMpeg From Commandline](https://ostechnix.com/how-to-rotate-videos-using-ffmpeg-from-commandline/)

transpose=...
- 0 - Rotate by 90 degrees counter-clockwise and flip vertically. This is the default.
- 1 - Rotate by 90 degrees clockwise.
- 2 - Rotate by 90 degrees counter-clockwise.
- 3 - Rotate by 90 degrees clockwise and flip vertically.

Rotate 180 dec:
```sh
ffmpeg -i input.mp4 -vf "transpose=2,transpose=2" output.mp4
```

Rotate (metadata only):
```sh
ffmpeg -i inp.mp4  -c copy -metadata:s:v:0 rotate=180 output.mp4
```

## Audio filter loudnorm

- 2022-06-12 [FFmpeg How to normalize audio? - John Riselvato](http://johnriselvato.com/ffmpeg-how-to-normalize-audio/)
```
ffmpeg -i input.mp3 -af loudnorm=I=-16:LRA=11:TP=-1.5 output.mp3
```

```
loudnorm
	Indicates the name of the normalization filter

I, i
	Indicates the integrated loudness (-70 to -5.0 with default -24.0)

LRA, lra
	Indicates the loudness range (1.0 to 20.0 with default 7.0)

TP, tp
	Indicates the max true peak (-9.0 to 0.0 with default -2.0)
```
See also: [loudnorm](http://k.ylo.ph/2016/04/04/loudnorm.html)
> Loudness Normalization. The algorithm goes like this: Measure the integrated loudness of the source file, calculate an appropriate offset gain, and then apply makeup gain. It’s a pretty simple algorithm, but what about when there’s nowhere near enough headroom for a simple upwards linear gain adjustment? And how should we handle the loudness normalization of livestreams?



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

Powershell: Convert files in the current folder for mobile upload

```powershell
$files = Get-ChildItem
New-Item  -Name "out" -ItemType "directory"
foreach($file in $files) {
    $file.Extension
    if ($file.Extension -cin ('.webm', '.mp4', '.mkv')) {
        $fn = '"out/' + $file.BaseName + '.mp4'
        ffmpeg -i "$file" -c:v libx264 -c:a aac -movflags +faststart $fn
    }
}
```

## Webcam Streaming

[Stream camera video and audio with FFmpeg](http://4youngpadawans.com/stream-camera-video-and-audio-with-ffmpeg/)

```bash
ffmpeg -list_devices true -f dshow -i dummy
```

> "HD Pro Webcam C920"
> "Microphone (TKGOU PnP USB Microphone)"


```bash
ffmpeg -f dshow -i video="HD Pro Webcam C920":audio="Microphone (TKGOU PnP USB Microphone)" -profile:v high -pix_fmt yuvj420p -level:v 4.1 -preset ultrafast -tune zerolatency -vcodec libx264 -r 10 -b:v 512k -s 640x360 -acodec aac -ac 2 -ab 32k -ar 44100 -f mpegts -flush_packets 0 udp://192.168.1.101:5666?pkt_size=1316
```


VLC -> Open Network Stream: `udp://@192.168.1.101:5666`

## GoPRO Camera

Reddit Thread: [No longer free: Windows 10 HEVC Video Extensions from Device Manufacturer : Windows10](https://www.reddit.com/r/Windows10/comments/j58y6f/no_longer_free_windows_10_hevc_video_extensions/)
workaround
```
start ms-windows-store://pdp/?ProductId=9n4wgh0z6vhq
```


Downscale 4K video example

```bash
ffmpeg -i input.MP4 -c:v libx264 -crf 19 -preset slow -c:a aac -b:a 192k -ac 2 -vf scale=1920:1080 output_4k_to_1080p_converted.MP4
```

Convert h.264 to h.265 (no change in resolution)

```bash
ffmpeg -i input.mp4 -c:v libx265 -vtag hvc1 -vf scale=1920:1080 -crf 20 -c:a copy output.mp4
```

crf:
- `-crf 0` high-quality, low compression, large file
- `-crf 23` default
- `-crf 51` low-quality, high compression, small file

### GoPro Tools and Code

- (2021-12-26) [GoPro Open Sources Video Metadata](https://gopro.com/en/us/news/gopro-video-metadata-open-source-explained)
- (2021-12-26) [TestDisk - CGSecurity](https://www.cgsecurity.org/wiki/TestDisk) - Open source SD Card recovery tool
- 2022-05-13 [destroyedlolo/GPMFMetersGenerator: Generate skickers from GoPro's GPMF](https://github.com/destroyedlolo/GPMFMetersGenerator)
> Generate skickers from GoPro's GPMF
> Try it 🍎🍎🍎
- 2022-05-13 [gyroflow/gyroflow: Video stabilization using gyroscope data](https://github.com/gyroflow/gyroflow)
> Video stabilization using gyroscope data Homepage • Download • Documentation • Discord • Report bug • Request feature
- 2022-05-13 [KonradIT/goprowifihack: Unofficial GoPro WiFi API Documentation - HTTP GET requests for commands, status, livestreaming and media query.](https://github.com/KonradIT/goprowifihack)
> The unofficial API for GoPro cameras (The WiFi enabled models)
- 2022-05-13 [gopro/gpmf-parser: Parser for GPMF™ formatted telemetry data used within GoPro® cameras.](https://github.com/gopro/gpmf-parser)
> The GPMF structured storage format was originally proposed to store high-frequency periodic sensor data within a video file like an MP4. Action cameras, like that from GoPro, have limited computing resources beyond that needed to store video and audio, so


## Youtube
- 2022-05-08 [Encode/YouTube – FFmpeg](https://trac.ffmpeg.org/wiki/Encode/YouTube)
> Upscaling video for higher peak quality

Due to the encoding ladders that Youtube and other streaming sites utilise to re-encode uploaded videos in different qualities, higher resolution videos receive a higher bitrate. It's possible to use upscaling to exploit this for higher peak viewing quality.

The following will use nearest neighbor scaling to upscale a video by 2x in each direction for 4 times the total resolution and minimal scaling artifacts:

```
ffmpeg -i input.mkv -vf scale=iw*2:ih*2:flags=neighbor -c:v libx264 -preset slow -crf 18 output.mkv
```

To upscale by 4x or 8x, use scale=iw*4:ih*4:flags=neighbor and scale=iw*8:ih*8:flags=neighbor respectively. This can be useful for low-resolution material such as VHS captures, DVD video, and gameplay capture of old video games that would otherwise suffer from excessive loss of detail if uploaded in 480p or lower resolution.


## Tools / Other

- (2021-09-26) [jely2002/youtube-dl-gui: A cross-platform GUI for youtube-dl made in Electron and node.js - open video downloader](https://github.com/jely2002/youtube-dl-gui)





