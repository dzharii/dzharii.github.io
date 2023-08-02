## Check if current foled has folder "blog"
if (!(Test-Path -Path "blog")) {
    Write-Host " 'blog' does not exist here"
    exit
}

# Create new file like "blog/2022-11-20-links-from-my-inbox.md" if not exists
$today = Get-Date -Format "yyyy-MM-dd"
$filename = "blog/$($today)-links-from-my-inbox.md"

# if file exists -- exit
if (Test-Path -Path $filename) {
    Write-Host "File '$filename' already exists"
    exit
}

$currentLocalTimeWithTimezone = Get-Date -Format "yyyy-MM-ddTHH:mm:00zzz"
# Create file with
$content = @"
---
layout: post
title:  "Links from my inbox $($today)"
date:   $($currentLocalTimeWithTimezone)
categories: links
---
"@

$content | Out-File -FilePath $filename -Encoding UTF8

Write-Host "File '$filename' created"