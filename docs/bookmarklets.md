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



## Rubber Duck

Adds rubber duck to chatGPT chats. Made by GPT4.

![image-20230410201808149](./bookmarklets.assets/image-20230410201808149.png)

Name:

`🔛 Rubber Duck GPT5`

Revision:

2023-04-10

Code:

```js
javascript:(function() {
  const duckId = 'duckContainer-55555';
  if (document.getElementById(duckId)) {
      return;
  }
  const duckSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><circle cx="30" cy="60" r="30" fill="yellow" /><circle cx="70" cy="60" r="30" fill="yellow" /><circle cx="50" cy="40" r="30" fill="yellow" /><ellipse cx="40" cy="40" rx="6" ry="10" fill="white" /><ellipse cx="60" cy="40" rx="6" ry="10" fill="white" /><circle cx="40" cy="40" r="4" fill="black" /><circle cx="60" cy="40" r="4" fill="black" /><path d="M 35 65 Q 50 75, 65 65" stroke="orange" stroke-width="5" fill="none" /></svg>`;
  const mainElement = document.querySelector('main') || document.querySelector('body');
  const duckContainer = document.createElement('div');
  duckContainer.innerHTML = duckSVG;
  duckContainer.id = duckId;
  mainElement.insertBefore(duckContainer, mainElement.firstChild);
})();

```



## ChatGPT Typing indicator

Adds `"typing ||| "` to the window title (browser tab) while chatGPT is typing

Name:

`⌛ Chat GPT Typing...`

Revision:

2023-04-12

Code:

```js
(function () {
    setInterval(() => {
        const el = document.querySelector('.text-2xl');
    
        const typingMessage = "typing ||| ";
        if (el) {
          console.log(el.textContent);
          if (!(document.title.startsWith(typingMessage))) {
              document.title =typingMessage + document.title;
          }
        } else {
          if (document.title.startsWith(typingMessage)) {
              document.title = document.title.substr(typingMessage.length)
          }
        }
    }, 1000)
    
})();
```





## Next, please!

Placeholder.
