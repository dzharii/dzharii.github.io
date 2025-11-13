# ffmpeg-windows-screen-recording
Date: 2025-11-12

Notes: compressing Windows 11 screen recording with ffmpeg

Recorded a short Windows 11 screen capture using the built-in recorder.
Source file: `Screen Recording 2025-11-12 203102.mp4`, about 4 MB.
Goal: get a much smaller file for sharing, while keeping UI text readable.

Below are the experiments and their approximate size results.

**GPT-4: OUTPUT 1, balanced quality, fast encoding**

4 MB -> 400 KB
 Keeps audio, reasonable quality, good default.

```bash
ffmpeg -i "Screen Recording 2025-11-12 203102.mp4" -c:v libvpx-vp9 -b:v 0 -crf 32 -cpu-used 4 -row-mt 1 -c:a libopus -b:a 96k "output1.webm"
```

**GPT-4: OUTPUT 2, higher compression**

4 MB -> 300 KB
 Smaller file, lower video and audio quality, slower encode.

```bash
ffmpeg -i "Screen Recording 2025-11-12 203102.mp4" -c:v libvpx-vp9 -b:v 0 -crf 38 -cpu-used 2 -row-mt 1 -c:a libopus -b:a 64k "output2.webm"
```

**GPT-4: OUTPUT 3, prioritize text clarity**

4 MB -> 400 KB
 Upscales slightly with Lanczos and uses lower crf for sharper text.

```bash
ffmpeg -i "Screen Recording 2025-11-12 203102.mp4" -vf "scale=1002:-1:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 30 -cpu-used 3 -row-mt 1 -c:a libopus -b:a 96k "output3.webm"
```

**GPT-4: OUTPUT 5, aggressive compression, no audio**

4 MB -> 200 KB
 Very small file, video only, visible quality loss.

```bash
ffmpeg -i "Screen Recording 2025-11-12 203102.mp4" -c:v libvpx-vp9 -b:v 0 -crf 45 -cpu-used 5 -row-mt 1 -an "output5.webm"
```

**GPT 5.1 Thinking: OUTPUT1, full width, 15 fps, balanced**

4 MB -> 250 KB
 Keeps original width, reduces frame rate, focuses on text clarity.

```bash
ffmpeg -i "Screen Recording 2025-11-12 203102.mp4" -vf "fps=15,scale=1002:-1:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 30 -row-mt 1 -c:a libopus -b:a 64k -ac 2 "Screen Recording 2025-11-12 203102_v1_15fps_1002w_crf30.webm"
```

**GPT 5.1 Thinking: OUTPUT2, 800 px width, 15 fps, smaller size**

4 MB -> 200 KB
 Downscales width to 800, still 15 fps, trades some sharpness for size.

```bash
ffmpeg -i "Screen Recording 2025-11-12 203102.mp4" -vf "fps=15,scale=800:-1:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 32 -row-mt 1 -c:a libopus -b:a 64k -ac 2 "Screen Recording 2025-11-12 203102_v2_15fps_800w_crf32.webm"
```

**GPT 5.1 Thinking: OUTPUT4, full width, 10 fps, higher quality text**

4 MB -> 250 KB
 Lowers frame rate to 10 fps, improves crf for cleaner UI text.

```bash
ffmpeg -i "Screen Recording 2025-11-12 203102.mp4" -vf "fps=10,scale=1002:-1:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 28 -row-mt 1 -c:a libopus -b:a 64k -ac 2 "Screen Recording 2025-11-12 203102_v4_10fps_1002w_crf28.webm"
```

**GPT 5.1 Thinking: OUTPUT_MERGED, 800 px, 10 fps, no audio**

Target: compromise between OUTPUT2 and OUTPUT4, no audio.

```bash
ffmpeg -i "Screen Recording 2025-11-12 203102.mp4" -vf "fps=10,scale=800:-1:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 30 -row-mt 1 -an "Screen Recording 2025-11-12 203102_merged_10fps_800w_crf30_noaudio.webm"
```

**GPT 5.1 Instant: simple vp9 with bitrate**

4 MB -> 160 KB
 Uses target bitrate instead of crf, keeps audio at 96 kbps.

```bash
ffmpeg -i "Screen Recording 2025-11-12 203102.mp4" -c:v libvpx-vp9 -b:v 1.5M -pix_fmt yuv420p -row-mt 1 -threads 4 -c:a libopus -b:a 96k output1.webm
```



