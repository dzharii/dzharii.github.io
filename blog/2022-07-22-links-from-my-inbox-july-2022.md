---
layout: post
title:  "Links from my inbox July 22 2022"
date:   2022-07-22T10:41:17.0199183-07:00
categories: links
---

## Good Reads
- 2022-07-20 [Being on-call sucks — Bobbie Chen](https://bobbiechen.com/blog/2022/7/20/being-on-call-sucks)
> At tech companies, it is fairly common for developers to be "on-call". As Increment magazine (published by Stripe, a leading payment-processing software company) explains...
> ... A bit of on-call wisdom

## How the things work
- 2022-07-20 [What happens when you press a key in your terminal?](https://jvns.ca/blog/2022/07/20/pseudoterminals/)
> I’ve been confused about what’s going on with terminals for a long time.
> But this past week I was using xterm.js to display an interactive terminal in a browser and I finally thought to ask a pretty basic question: when you press a key on your keyboard in a terminal (like Delete, or Escape, or a), which bytes get sent?
> As usual we’ll answer that question by doing some experiments and seeing what happens :)
- 2022-07-20 [Beej's Guides](https://beej.us/guide/)
> These guides look nice and clean
- [Beej's Guide to C](https://beej.us/guide/bgc/) [WIP]\
> This is a rather comprehensive guide to C for folks who already know how to program in another language. The first half of the book is written in a tutorial style, while the second half is a reference section complete with examples (inspired by the incomparable *Turbo C Bible*). The goal is to keep this up-to-date with the latest C standards.

## Fun
- 2022-07-20 [A Little Story About the `yes` Unix Command Matthias Endler](https://endler.dev/2017/yes/)
> What's the simplest Unix command you know?
> There's echo, which prints a string to stdout and true, which always terminates with an exit code of 0.
>
> Among the series of simple Unix commands, there's also yes. If you execute it without arguments, you get an infinite stream of y's, separated by a newline:
- 2022-07-20 [MegaPortraits: One-shot Megapixel Neural Head Avatars](https://samsunglabs.github.io/MegaPortraits/)
![](_img/20220722093613.png)


## Games

### Emacs Games abd fun stuff
- 2022-07-10 [Fun and Games in Emacs - Mastering Emacs](https://www.masteringemacs.org/article/fun-games-in-emacs)
> It’s yet another Monday and you’re hard at work on those TPS reports for your boss, Lumbergh. Why not play Emacs’s Zork-like text adventure game to take your mind off the tedium of work?
- `M-x hanoi-unix`
- `5x5`
- `M-x animate-birthday-present`
- `C-h f blackbox`
- `M-x bubbles-set-game-...`: (easy, medium, difficult, hard)
- `M-x doctor`
- `M-x dunnet` Emacs’s very own Zork-like text adventure game.
- `M-x gomoku`
- `M-x life`
- `M-x pong`
- `M-x snake`
- `M-x tetris`
- `M-x morse-region` and `M-x unmorse-region` -  translate a region into morse code
- `M-x dissociated-press` The Dissociated Press is a very simple command that applies something like a random walk markov-chain generator to a body of text in a buffer and generates nonsensical text from the source body.
- `M-x spook` - command inserts random words (usually into emails) designed to confuse/overload
- 2022-07-10 [EmacsWiki: Category Games](https://www.emacswiki.org/emacs/CategoryGames)

## The X-Files
:::danger
Disclaimer: unverified controversy.
:::

- 2022-07-20 [Microsoft investigates Teams outage as services drop for thousands of users Reuters](https://www.reuters.com/article/microsoft-outages-idCAKBN2OW03G)
> on a recent deployment that contained a broken connection to an internal storage service
> - really bad outage, but my Teams worked fine on that day
- 2022-07-11 [Did People Used To Look Older? - YouTube](https://www.youtube.com/watch?v=vjqt8T3tJIE)


## TTY Linux

## Algorithms

## Security/Cryptography

## Job hunt/interviews

## Projects
- 2022-07-20 ✏️ [Ok! So...](https://okso.app/)
> Just a drawing app!
- 2022-07-20 [StereoKit/StereoKit: An easy-to-use mixed reality library for building HoloLens and VR applications with C# and OpenXR!](https://github.com/StereoKit/StereoKit)
> StereoKit is an easy-to-use open source mixed reality library for building HoloLens and VR applications with C# and OpenXR! Inspired by libraries like XNA and Processing, StereoKit is meant to be fun to use and easy to develop with, yet still quite capable of creating professional and business ready software.
- 2022-07-18 [marktext/marktext: 📝A simple and elegant markdown editor, available for Linux, macOS and Windows.](https://github.com/marktext/marktext)
> MarkText is an MIT licensed open source project, and the latest version will always be downloadable for free from the GitHub release page.

### C# and PowerShell OCR with IronTesseract and Windows.Media.Ocr
- 2022-07-10 [C# OCR Image to Text Generator 125 Languages Pack IronOCR](https://ironsoftware.com/csharp/ocr/tutorials/how-to-read-text-from-an-image-in-csharp-net/)
```
using IronOcr;
var Result = new IronTesseract().Read(@"img\Screenshot.png");
Console.WriteLine(Result.Text);
```
- 2022-07-10 [OCR sample - Code Samples Microsoft Docs](https://docs.microsoft.com/en-us/samples/microsoft/windows-universal-samples/ocr/)
> Shows how to use Windows.Media.Ocr API. Optical character recognition (OCR) API allows for application developer to extract text in the specific language from an image.

- 2022-07-10 📌 [PowerShell-Misc/Get-Win10OcrTextFromImage.ps1 at master · HumanEquivalentUnit/PowerShell-Misc](https://github.com/HumanEquivalentUnit/PowerShell-Misc/blob/master/Get-Win10OcrTextFromImage.ps1)
> ! It worked!
- 2022-07-10 [ocr - call external powershell script using variables for script location and parameters - Stack Overflow](https://stackoverflow.com/questions/67129906/call-external-powershell-script-using-variables-for-script-location-and-paramete)
- 2022-07-10 [PowerShell Gallery root.psm1 1.1.0](https://www.powershellgallery.com/packages/PsOcr/1.1.0/Content/root.psm1)
```
 Add-Type -AssemblyName System.Runtime.WindowsRuntime
    
  # WinRT assemblies are loaded indirectly:
  $null = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
  $null = [Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime]
  $null = [Windows.Foundation.IAsyncOperation`1, Windows.Foundation, ContentType = WindowsRuntime]
  $null = [Windows.Graphics.Imaging.SoftwareBitmap, Windows.Foundation, ContentType = WindowsRuntime]
  $null = [Windows.Storage.Streams.RandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
  $null = [WindowsRuntimeSystemExtensions]
```

## Typescript/JavaScript

## Identity Management

## Security / Cryptography

## Retro
### Random Retro Neko!
- 2022-07-11 [*NEKO* Welcome to the Web Neko Server!](https://webneko.net/?rose)
> It's Neko! (3.0)
> Hi, I'm Neko. If you want to play chase the mouse, just click on me..
> To stop playing, click me again.
- 2022-07-11 [Linux / Unix Desktop Fun: Cat And Mouse Chase All Over Your Screen - nixCraft](https://www.cyberciti.biz/open-source/oneko-app-creates-cute-cat-chasing-around-your-mouse/)
> Oneko is a little fun app. It will change your cursor into mouse and creates a little cute cat and the cat start chasing around your mouse cursor. The word “neko” means “cat” in Japanese and it was originally written by a Japanese author as a Macintosh desktop accessory.
- 2022-07-11 [leiqunni/Neko98: Neko for Windows is a little white cat who runs around on the desktop and chases the mouse cursor.](https://github.com/leiqunni/Neko98)
> Neko for Windows is a little white cat who runs around on the desktop and chases the mouse cursor. You can customize how Neko appears in many ways, and can even make him run on top of all other windows. Neko was ported by me from the original X-Windows source code that was written by Masayuki Koba.
- 2022-07-11 [crgimenes/neko: Neko is a cross-platform open-source animated cursor-chasing cat. This is the reimplementation write in Go.](https://github.com/crgimenes/neko)

## PowerShell

## Watch me ;)
