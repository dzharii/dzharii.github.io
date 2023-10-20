$ErrorActionPreference = "Stop"

# $host.ui.RawUI.WindowTitle = "My Title"
$ThisScriptFolderPath = Split-Path -Parent $MyInvocation.MyCommand.Definition
$rootDir = Resolve-Path (Join-Path $ThisScriptFolderPath "..")

$blogDir = Join-Path $rootDir "blog"
$wikiDir = Join-Path $rootDir "docs"

Start-Process -NoNewWindow -FilePath "typora" -ArgumentList $blogDir
Start-Process -NoNewWindow -FilePath "typora" -ArgumentList $wikiDir

Write-Host "Hello World"

