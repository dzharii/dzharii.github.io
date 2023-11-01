$ErrorActionPreference = "Stop"

# $host.ui.RawUI.WindowTitle = "My Title"
$ThisScriptFolderPath = Split-Path -Parent $MyInvocation.MyCommand.Definition
$rootDir = Resolve-Path (Join-Path $ThisScriptFolderPath "..")

$blogDir = Join-Path $rootDir "blog"
$wikiDir = Join-Path $rootDir "docs"

Write-Host "blogDir = $($blogDir)"
Write-Host "wikiDir = $($wikiDir)"

Start-Process -FilePath "typora" -ArgumentList $blogDir
sleep 1

Start-Process  -FilePath "typora" -ArgumentList $wikiDir

Write-Host "Hello World"

