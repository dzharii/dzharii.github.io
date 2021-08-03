---
layout: post
title:  "Links from my inbox August 2021"
date:   2021-08-03 07:47 -0700
categories: links
---

Links from my inbox August 2021

Once in a while, the time comes to clean all the links I've saved in my email inbox.

## Azure Active Directory
- [Kerberos-based single sign-on  SSO  in Azure Active Directory with Application Proxy ](https://docs.microsoft.com/en-us/azure/active-directory/app-proxy/application-proxy-configure-single-sign-on-with-kcd)
- [Authentication over HTTPS - Azure Data Explorer](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/api/rest/authentication)
- [microsoftgraph/microsoft-graph-explorer-v4: React/Redux version of Graph Explorer used to learn the Microsoft Graph Api](https://github.com/microsoftgraph/microsoft-graph-explorer-v4)
- [Azure AD App via ARM Template Deployment Scripts – Reverse Engineering](https://moimhossain.com/2020/04/03/azure-ad-app-via-arm-template-deployment-scripts/)
- [asp.net - call Microsoft graph using the logged-in user - Stack Overflow](https://stackoverflow.com/questions/61171729/call-microsoft-graph-using-the-logged-in-user)
- [Get access on behalf of a user - Microsoft Graph](https://docs.microsoft.com/en-us/graph/auth-v2-user)
- [Azure AD built-in roles - Azure Active Directory Microsoft Docs](https://docs.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#application-administrator)

### AAD Videos
- [Identity Architecture Series - YouTube](https://www.youtube.com/playlist?list=PL3ZTgFEc7LyvWBvMTRArx5k5hz-wcA4VF)

### Positive Hacking
- [Intercepting Azure CLI HTTP traffic leveraging Fiddler](https://blog.soft-cor.com/intercepting-azure-cli-http-traffic-leveraging-fiddler/)

## Azure
- [javascript - Calling Microsoft Graph API from inside Azure Functions - Stack Overflow](https://stackoverflow.com/questions/44010063/calling-microsoft-graph-api-from-inside-azure-functions)

## Other ;)
- [28 minutes of pure Sadhguru's wisdom -A refresh button for your life - YouTube](https://www.youtube.com/watch?v=5s1i3sazRmg)
- [Deep Work: The Complete Guide Including a Step-by-Step Checklist ](https://blog.doist.com/deep-work/)
- [127 Motivational Workout Quotes & Sayings](https://sloganshub.org/workout-quotes/)
- [101 inspiring moving forward quotes, sayings & images for life](https://www.therandomvibez.com/moving-forward-quotes/)

## Money
- [An Intern's Guide to Trading  Nasdaq](https://www.nasdaq.com/articles/an-interns-guide-to-trading-2021-07-01)

## Snippets
- [FLEX: A simple visual cheatsheet for flexbox](https://flexbox.malven.co/)
- [StyleSheetList - Web APIs MDN](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheetList)

Great trick for chaning CSS rules at runtime

```js
document.styleSheets.item(0).cssRules[0].style.whiteSpace = 'pre-wrap'
```

Browser Speech API

```js
(() => {

  // utterThis.pitch = 2;
  // utterThis.rate = 1.5;
  function speak(text, pitch, rate) {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const voiceEn = voices.find(v => v.lang === 'en-US');
    const voiceRu = voices.find(v => v.lang === 'ru-RU');
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voiceEn;
    utterThis.pitch = pitch;
    utterThis.rate = rate;
    synth.speak(utterThis);  
  }
  
  speak('Hello World', 2, 0.5);

})();
```
