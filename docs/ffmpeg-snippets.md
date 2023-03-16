## ffmpeg snippets
Date: 2023-03-15

A collection of ffmpeg snippets.





PowerShell script `proccess.ps1` to extract a frames as images from `video_name.avi` to folder `video_name.avi_frames\image-{ n }.jpeg`

Example:

```
proccess.cmd video_name.avi
.\proccess.ps1 video_name.avi
.\proccess.ps1 -FileName video_name.avi
```



```powershell
param(
    [Parameter(Mandatory=$true)]
    [string]$FileName
)

$ErrorActionPreference = "Stop"

$host.ui.RawUI.WindowTitle = "Image Extractor"
$ThisScriptPath = Split-Path -Parent $MyInvocation.MyCommand.Definition

# if does not exists, create the folder $($FileName) without extension
$outputDir = "$($FileName)_frames"

if (-not (Test-Path -Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir
}


$cmd = "ffmpeg -i `"$($FileName)`" -q:v 1 -r 5 -f image2 `"$($outputDir)\image-%2d.jpeg`""
# -q:v 1 - quality of the image (1 is the best)
# -r 5 - frame rate (5 frames per second)
# -f image2 - format of the output (image2 is jpeg)

Write-Host $cmd
Invoke-Expression $cmd -ErrorAction Stop | Out-Host

```



Companion `proccess.cmd`:

Magic file to launch .ps1 file with same file name (and extension .ps1)

```bash
@powershell -executionpolicy unrestricted -File %~dp0%~n0.ps1 %*
```

