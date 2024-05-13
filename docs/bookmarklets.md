# 📜 BookmarkLETS



This is a collection of JavaScript bookmarklets to assist in everyday life copy pasting.



## Copy markdown link to this page

Copies link to the current page in clipboard in Markdown format:

```
2023-03-12 [Hello from Dmytro Zharii | Dmytro Zharii](https://blog.zharii.com/)
```

2023-03-12 [Hello from Dmytro Zharii | Dmytro Zharii](https://blog.zharii.com/)

Name:

`🥧 Copy as MD Link`

Revision:

2023-03-12

<details>

<summary> Code:  </summary>

```js
javascript:(function() {
  function showToast(message, textColor, backgroundColor) {
    var toast = document.createElement("div");
    toast.style.cssText = "position: fixed; top: 0; left: 0; background-color: " + backgroundColor + "; color: " + textColor + "; padding: 10px; font-family: Arial, Verdana; font-size: 16px; font-weight: bold;  z-index: 9999; opacity: 0; transition: opacity 0.3s ease-in-out;";
    toast.innerHTML = message;
    document.body.appendChild(toast);
    setTimeout(function() {
      toast.style.opacity = 1;
    }, 100);
    setTimeout(function() {
      toast.style.opacity = 0;
    }, 3000);
  }

  document.body.focus();
  var title = document.title;
  /* remove [ and ] from title */
  title = title.replace(/[\[\]]/g, ' ');

  var url = window.location.href;
  /* remove utm parameters from url */
  url = url.replace(/utm_[^&]+&?/g, '');
  /* remove final /? from url */
  url = url.replace(/\/\?$/g, '/');
  url = url.replace(/\?$/g, '/');

  var date = new Date().toISOString().slice(0, 10);
  var markdownLink = date + " [" + title + "](" + url + ")";
  setTimeout(function() {
    navigator.clipboard.writeText(markdownLink).then(function() {
      showToast("Copied to clipboard", "lime", "#333");
    }, function() {
      showToast("Failed to copy to clipboard", "white", "darkred");
    });
  }, 100);
})();
```

</details>


## Copy Org-mode link

Name:

`🥧 Copy as ORG Link`

Revision:

2024-05-13

<details>

<summary> Code:  </summary>

```
javascript:(function() {
    function showToast(message, textColor, backgroundColor) {
        var toast = document.createElement("div");
        toast.style.cssText = "position: fixed; top: 0; left: 0; background-color: " + backgroundColor + "; color: " + textColor + "; padding: 10px; font-family: Arial, Verdana; font-size: 16px; font-weight: bold;  z-index: 9999; opacity: 0; transition: opacity 0.3s ease-in-out;";
        toast.innerHTML = message;
        document.body.appendChild(toast);
        setTimeout(function() {
            toast.style.opacity = 1;
        }, 100);
        setTimeout(function() {
            toast.style.opacity = 0;
            document.body.removeChild(toast);
        }, 3000);
    }
    
    document.body.focus();
    var title = document.title;
    /* remove [ and ] from title */
    title = title.replace(/[\[\]]/g, ' ');

    var url = window.location.href;
    /* remove utm parameters from url */
    url = url.replace(/utm_[^&]+&?/g, '');
    /* clean up unnecessary trailing characters */
    url = url.replace(/\/?\?$/g, '');
    url = url.replace(/\?$/g, '/');

    var date = new Date().toISOString().slice(0, 10);
    var orgModeLink = "[[" + url + "][" + date + " " + title + "]]";
    setTimeout(function() {
        navigator.clipboard.writeText(orgModeLink).then(function() {
            showToast("Copied to clipboard", "lime", "#333");
        }, function() {
            showToast("Failed to copy to clipboard", "white", "darkred");
        });
    }, 100);
})();

```


## RSS Feed Finder

Name:

`📶 Find RSS`

Revision:

2024-01-01

<details>

<summary> Code:  </summary>

```js
javascript:(async () => {
    const pageUrl = document.location.href;

    try {
        const resp = await fetch(pageUrl);
        const body = await resp.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(body, 'text/html');
        const rssLinks = doc.querySelectorAll('link[type="application/rss+xml"]');
        createDialog(Array.from(rssLinks).map(link => link.getAttribute('href')));
    } catch (error) {
        console.error('Error fetching page source:', error);
        createDialog([]);
    }

    function createDialog(feedUrls) {
        const dialog = document.createElement('div');
        styleDialog(dialog, feedUrls.length > 0);
        document.body.appendChild(dialog);

        if (feedUrls.length > 0) {
            const ul = document.createElement('ul');
            feedUrls.forEach(url => {
                const li = document.createElement('li');
                li.textContent = url;
                const copyBtn = createCopyButton(url);
                li.appendChild(copyBtn);
                ul.appendChild(li);
            });
            dialog.appendChild(ul);
        } else {
            dialog.textContent = 'No RSS Feed found';
            setTimeout(() => fadeAndRemove(dialog), 3000);
        }

        const closeBtn = createCloseButton(dialog);
        dialog.appendChild(closeBtn);
    }

    function styleDialog(dialog, hasFeeds) {
        dialog.style.position = 'fixed';
        dialog.style.top = '20px';
        dialog.style.left = '50%';
        dialog.style.transform = 'translateX(-50%)';
        dialog.style.backgroundColor = hasFeeds ? 'green' : 'red';
        dialog.style.padding = '20px';
        dialog.style.zIndex = '10000';
        dialog.style.color = 'white';
        dialog.style.borderRadius = '5px';
        dialog.style.fontSize = '16px';
    }

    function createCopyButton(text) {
        const button = document.createElement('button');
        button.textContent = 'Copy to Clipboard';
        button.style.marginLeft = '10px';
        button.onclick = () => {
            navigator.clipboard.writeText(text).then(() => fadeAndRemove(button.parentElement.parentElement.parentElement));
        };
        return button;
    }

    function createCloseButton(dialog) {
        const button = document.createElement('button');
        button.textContent = 'Close';
        button.style.display = 'block';
        button.style.marginTop = '10px';
        button.onclick = () => dialog.remove();
        return button;
    }

    function fadeAndRemove(element) {
        element.style.transition = 'opacity 0.5s';
        element.style.opacity = '0';
        setTimeout(() => element.remove(), 500);
    }
})();
```

</details>



## Leetcode copy submission



Name:

`✨ Leetcode get submission url`

Revision:

2024-05-07

Code:

<details>

<summary>Code snippet for ✨ Leetcode get submission url </summary>


```js
javascript:(function(){
    function transformURL(url) {
        const regex = /https:\/\/leetcode\.com\/problems\/.+?\/submissions\/(\d+)/;
        const match = url.match(regex);
        if (match && match[1]) {
            return `https://leetcode.com/submissions/detail/${match[1]}/`;
        }
        return null;
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = 'black';
        toast.style.color = 'white';
        toast.style.padding = '10px 20px';
        toast.style.borderRadius = '5px';
        toast.style.zIndex = '10000';
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.transition = 'opacity 0.5s ease';
            toast.style.opacity = '0';
            setTimeout(() => document.body.removeChild(toast), 500);
        }, 2000);
    }

    function triggerFireworks() {
        const emojis = ['🎉', '🎊', '✨', '🌟'];
        const maxParticles = 20;
        for (let i = 0; i < maxParticles; i++) {
            const particle = document.createElement('div');
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.position = 'fixed';
            particle.style.fontSize = '24px';
            particle.style.animation = 'firework 2s linear forwards';
            particle.style.left = `${Math.random() * window.innerWidth}px`;
            particle.style.bottom = '0px';
            document.body.appendChild(particle);
            particle.addEventListener('animationend', () => document.body.removeChild(particle));
        }
    }

    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule(`@keyframes firework {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-300px); opacity: 0; }
    }`, 0);

    const newUrl = transformURL(window.location.href);
    if (newUrl) {
        copyToClipboard(newUrl);
        showToast('URL copied to clipboard!');
        triggerFireworks();
    } else {
        showToast('No matching URL found!');
    }
})();
```

</details>





## Content editable

Flips contentEditable on body to make copy-paste on laptop from keyboard easier.

Name:

`🔛 Content Editable`

Revision:

2023-03-12

Code:

```js
javascript: document.body.contentEditable = (document.body.contentEditable === 'true') ? false : true;
```



## Force visited links to be "silver"

Helpful for podcast sites

Name:

`🧓 Silver Links`

Revision:

2023-05-31

Code:

```js
javascript:(function() {
    var newStylesheet = document.createElement('style');
    document.head.appendChild(newStylesheet);
    newStylesheet.sheet.insertRule('a:visited { color: silver !important }', 0);
})();
```



## Wake lock

Through the browser api, and while the current browser page is active, forces the screen to never lock or go sleep.

Name:

`👀 Wake Lock`

Revision:

2023-06-28

Code:

```javascript
javascript:(async function() {
  let statusElem = document.createElement('div');
  statusElem.style.position = 'fixed';
  statusElem.style.bottom = '0';
  statusElem.style.right = '0';
  statusElem.style.background = 'lightgray';
  statusElem.style.padding = '10px';
  document.body.appendChild(statusElem);

  let wakeLock = null;
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    statusElem.textContent = 'Wake Lock is active!';
  } catch (err) {
    statusElem.textContent = `${err.name}, ${err.message}`;
  }
})();

```







## Export ChatGPT

Exports ChatGPT chat as HTML content into clipboard.

Name:

`📤 Export ChatGPT`

Revision:

2023-03-30


<details>

<summary> Code:  </summary>

```js
javascript: (() => {
    const allItemsSelector = '.items-start';
    const allItems = Array.from(document.querySelectorAll(allItemsSelector));

    if (allItems.length === 0) {
        console.error('Bookmarklet: No items found');
        return;
    }

    console.log(allItems);

    resultHtml = [];
    let i = 0;
    for (const element of allItems) {
        i++;
        if (i % 2 === 1) {
            resultHtml.push(`<div class="bookmarklet-my-prompt"><pre>${element.textContent}</pre></div>`);
        } else if (i % 2 === 0) {
            resultHtml.push(`<div class="bookmarklet-chat-response">${element.innerHTML}</div>`);
        } else {
            console.error('Bookmarklet: Unknown element type:');
            console.error(element);
        }
    }

    const resultHtmlString = wrapHtml(resultHtml.join('\n'));

    console.log('Bookmarklet: Result:');
    console.log(resultHtmlString);

    navigator.clipboard.writeText(resultHtmlString).then(() => {
        console.log('Bookmarklet: Copied to clipboard');
        showToast('Copied to clipboard', 'black', 'lightgreen');
    }, (err) => {
        console.error('Bookmarklet: Failed to copy to clipboard');
        console.error(err);
        showToast('Failed to copy to clipboard', 'white', 'brown');
    });

    function wrapHtml(html) {
        const header = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>I am too lazy to set the title</title>
            <style>

        body {
          font-family: Arial, sans-serif;
          font-size: 20px;
          line-height: 1.5;
          color: #333;
        }

        article {
          margin-left: 10%;
          margin-right: 10%
        }

        h1, h2, h3 {
          font-weight: bold;
        }

        h1 {
          font-size: 2em;
        }

        h2 {
          font-size: 1.5em;
        }

        h3 {
          font-size: 1.17em;
        }

        p, ul, ol {
          margin-bottom: 1.5em;
        }

        pre {
            white-space: pre-wrap;
        }

        pre code {
          display: block;
          padding: .5em;
          background-color: #f5f5f5;
          border-radius: .3em;
        }
        .bookmarklet-my-prompt::first-letter {
            font-size: 1.5rem;
            font-weight: bold;
            color: brown;
            font-family: Georgia, 'Times New Roman', Times, serif
        }

        .bookmarklet-chat-response::first-letter {
            font-size: 1.5rem;
            font-weight: bold;
            color: blue;
            font-family: Georgia, 'Times New Roman', Times, serif
        }

            </style>
        </head>
        <body>
            <article>
            <h1>I am too lazy to set the title</h1>
        `;

        const footer = `
                    </article>
            </body>
        </html>`;
        return header + "\n" +  html + "\n" + footer;
    }

    function showToast(message, textColor, backgroundColor) {
        var toast = document.createElement("div");
        toast.style.cssText = "position: fixed; top: 0; left: 0; background-color: " + backgroundColor + "; color: " + textColor + "; padding: 10px; font-family: Arial, Verdana; font-size: 16px; font-weight: bold;  z-index: 9999; opacity: 0; transition: opacity 0.3s ease-in-out;";
        toast.innerHTML = message;
        document.body.appendChild(toast);
        setTimeout(function() {
          toast.style.opacity = 1;
        }, 100);
        setTimeout(function() {
          toast.style.opacity = 0;
        }, 3000);
      }
})();
```

</details>





## Next, please!

Placeholder.
