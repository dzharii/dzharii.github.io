# 📜 BookmarkLETS



This is a collection of JavaScript bookmarklets to assist in everyday life copy pasting.


## Download YouTube Subtitles

Opens a new tab to download subtitles for the current YouTube video.

Name:

`📥 Download YouTube Subtitles`

Revision:

- 2024-09-29 - initial

<details>

<summary> Code:  </summary>

```js
javascript:(function(){
    /* Check if the current site is YouTube and has a video ID */
    if (window.location.hostname.includes('youtube.com') && new URLSearchParams(window.location.search).has('v')) {
        /* Get the current page URL */
        var currentUrl = window.location.href;
        /* Encode the URL */
        var encodedUrl = encodeURIComponent(currentUrl);
        /*  Construct the target URL */
        var targetUrl = 'https://www.downloadyoutubesubtitles.com/?u=' + encodedUrl;
        /* Open the target URL in a new tab */
        window.open(targetUrl, '_blank');
    } else {
        /* Alert the user if not on a YouTube video page */
        alert('This bookmarklet works only on YouTube video pages.');
    }
})();

```


```js

javascript:(function(){if(window.location.hostname.includes('youtube.com')&&new URLSearchParams(window.location.search).has('v')){var currentUrl=window.location.href;var encodedUrl=encodeURIComponent(currentUrl);var targetUrl='https://www.downloadyoutubesubtitles.com/?u='+encodedUrl;window.open(targetUrl,'_blank');}else{alert('This bookmarklet works only on YouTube video pages.');}})();

```
</details> 


## Copy markdown link to this page

Copies link to the current page in clipboard in Markdown format:

```
2023-03-12 [Hello from Dmytro Zharii | Dmytro Zharii](https://blog.zharii.com/)
```

2023-03-12 [Hello from Dmytro Zharii | Dmytro Zharii](https://blog.zharii.com/)

Name:

`🥧 Copy as MD Link`

Revision:

- 2023-03-12 - initial
- 2024-08-17 - add domain as in "{ domain.com }"


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
  
  try {
    var urlObject = new URL(url);
    var domain = urlObject.hostname;
    markdownLink += " { " + domain + " }";
  } catch (e) {
    console.error("Failed to parse domain name: ", e);
  }

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

    try {
      var urlObject = new URL(url);
      var domain = urlObject.hostname;
      orgModeLink += " =" + domain + "=";
    } catch (e) {
      console.error("Failed to parse domain name: ", e);
    }
  
    setTimeout(function() {
        navigator.clipboard.writeText(orgModeLink).then(function() {
            showToast("Copied to clipboard", "lime", "#333");
        }, function() {
            showToast("Failed to copy to clipboard", "white", "darkred");
        });
    }, 100);
})();

```
</details>


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




## Next, please!

Placeholder.
