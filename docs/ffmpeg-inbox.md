## 2025-02-16
CUDA sample

```
ffmpeg -hwaccel cuda -i 2024-12-01-at-home.MP4  -vf scale=1920:1080  -c:v h264_nvenc -rc constqp -qp 23 -preset slow  -report 2024-12-01-at-home-h264-cuda-output.mp4
```

## older
- 2022-03-10 [video editing - FFMPEG - Interpolate frames or add motion blur - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/178503/ffmpeg-interpolate-frames-or-add-motion-blur)
> I just watched the trailer for the hobbit, and a trailer for the avengers which both feature an increased framerate. A lot of the comments state that this isn't "true" 60fps since it was not shot at 60fps, but actually a lower frame-rate that has been interpolated.
- 2022-03-11 [mifi/lossless-cut: The swiss army knife of lossless video/audio editing](https://github.com/mifi/lossless-cut)
> LosslessCut aims to be the ultimate cross platform FFmpeg GUI for extremely fast and lossless operations on video, audio, subtitle and other related media files. The main feature is lossless trimming and cutting of video and audio files, which is great for saving space by rough-cutting your large video files taken from a video camera.

- 2024-01-19 [Recipes in FFmpeg - OTTVerse](https://ottverse.com/recipes-in-ffmpeg/)

> FFmpeg is the Swiss Army knife of the audio-video editing, processing, compression, and streaming world. You can practically do anything with FFmpeg when it pertains to building an AV pipeline, and in this tutorial, we cover several popular and valuable uses of FFmpeg..
>
> On this page, you will find ready-to-use snippets for specific use cases, complete with command lines and examples of inputs and outputs to help you understand the use case. For example, blurring a video, cropping it, rotating it clockwise, and so much more!
>
> ![image-20240125175007453](./ffmpeg-inbox.assets/image-20240125175007453.png)



# ffmpeg and tools

- 2022-01-20 [FFQueue - Free & comprehensive GUI for FFMpeg](http://ffqueue.bruchhaus.dk/Default.aspx)
> ffmpeg experimentation UI

- 2022-04-18 [FFmpeg Audio Filters Gallery](https://www.vacing.com/ffmpeg_audio_filters/index.html)
> Welcome to add new effects with a Merge Request , or send email to vacingfangATqq.com

# GoPro Video Processing Tools

- 2022-02-08 [Gyroflow](https://gyroflow.xyz/)
> Gyroflow is an application that can stabilize your video by using motion data from a gyroscope and optionally an accelerometer. Modern cameras record that data internally (GoPro, Sony, Insta360 etc), and this application stabilizes the captured footage precisely by using them. It can also use gyro data from an external source (eg. from Betaflight blackbox). Github: [gyroflow/gyroflow: Video stabilization using gyroscope data](https://github.com/gyroflow/gyroflow)

## Guides

- 2022-11-28 [FFmpeg - Ultimate Guide IMG.LY Blog](https://img.ly/blog/ultimate-guide-to-ffmpeg/)

  > In this guide, we'll go through the hot topics of FFmpeg. But before that, we'll cover some base ground to help you understand basic media concepts and FFmpeg. Feel free to skip the parts that are already trivial for you!

