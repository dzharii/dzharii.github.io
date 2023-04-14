## ffmpeg snippets
Date: 2023-03-15

A collection of ffmpeg snippets.



## Extract a frames as images from 

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



## Reencode and concatenate GOPRO 9 videos



Example:

```shell
gopro.ps1
gopro.cmd
gopro.cmd -DryRun
```



- Reencodes GOPRO videos to significantly reduce the file size. 

- Concatenates the  partial GoPro video files



Companion `gopro.cmd`:

Magic file to launch .ps1 file with same file name (and extension .ps1)

```shell
@rem Example Usage:
@rem runs powershell (v5) script with same name as this .cmd file
@powershell -executionpolicy unrestricted -File %~dp0%~n0.ps1 %*

```



File `gopro.ps1`:

```powershell
param (
    [string]$Path = ".",
    [switch]$DryRun = $false
)

# Get the files in the specified directory with the filter "GX*.MP4" and sort them
$files = Get-ChildItem -Path $Path -Filter "GX*.MP4" | Sort-Object Name

# Group the files by their video id number
$groupedFiles = $files | Group-Object { $_.Name.Substring(4, 4) }

foreach ($group in $groupedFiles) {
    $videoId = $group.Name
    $outputFile = Join-Path -Path $Path -ChildPath "Video_libx265_$($videoId).MP4"

    # If there's only one file in the group, process it directly
    if ($group.Count -eq 1) {
        $inputFile = $($group.Group[0].FullName)
        $ffmpegArgs = "-i `"$($inputFile)`" -vcodec libx265 -preset faster -crf 28 `"$($outputFile)`""
    } else {
        # If there are multiple parts, concatenate them
        $concatList = ""
        foreach ($part in $group.Group) {
            $concatList += "file '" + $($part.FullName) + "'" + [Environment]::NewLine
        }
        $concatFile = Join-Path -Path $Path -ChildPath "concat_$($videoId).txt"
        Set-Content -Path $concatFile -Value $concatList

        $ffmpegArgs = "-f concat -safe 0 -i `"$($concatFile)`" -vcodec libx265 -preset faster -crf 28 `"$($outputFile)`""
    }

    $ffmpegCmd = "ffmpeg.exe $($ffmpegArgs)"

    if ($DryRun) {
        Write-Host "Dry Run: $($ffmpegCmd)"
    } else {
        Write-Host "Executing: $($ffmpegCmd)"
        try {
            # Execute the ffmpeg command
            Invoke-Expression -Command $ffmpegCmd -ErrorAction Stop
        } catch {
            # Log the error and exit the script if an error occurs
            Write-Host "Error processing video $($videoId): $_"
            exit 1
        }
    }
}
```



