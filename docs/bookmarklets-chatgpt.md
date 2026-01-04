# 📌🔢 bookmarklets-chatgpt
Date: 2026-01-04

## 🏵️2025 GPT Transcript no fluff no cliches
2026-01-04

```js
javascript:(function() { 
  var currentUrl = window.location.href; 
  var prompt = [
    "You are given a transcript of a YouTube video at:\n",
    currentUrl, "\n\n",
    "Analyze it and extract all the main ideas.\n\n",
    "Write a series of short paragraphs, each paragraph expressing one main idea in clear, simple language.\n",
    "Do not add fluff, filler, cliches, or commentary.\n",
    "Do not summarize loosely; capture all essential concepts and arguments from the transcript.\n\n",
    "Avoid repeating key labels and names too often; when possible, use pronouns or rephrase instead of repeating the same term.\n\n",
    "When you introduce an important abstract word or key concept, you may add a single Markdown block quote right after the paragraph that defines that word in one very simple sentence.\n\n",
    "Do not use titles, headings, numbered lists, or bullet lists.\n",
    "Output only the paragraphs and occasional block quotes, as plain text.\n\n",
    "Wait for transcript content."
  ].join(''); 
  var newUrl = "https://chatgpt.com/?q=" + encodeURIComponent(prompt); 
  window.open(newUrl, "_blank"); 
})();

```

## 2026 🍔 GPT Quick Prompt UI

```js
javascript:(function () {
  "use strict";

  const EXT_ID = "dgpt_duo_popup_v1";

  const existing = document.getElementById(EXT_ID);
  if (existing) {
    console.log("no op!");
    return;
  }

  const trashEmoji = "\u{1F5D1}\uFE0F";

  const prompts = [
    { title: "Search (default)", prepend: "", append: "", params: { hints: "search" } },
    { title: `${trashEmoji} Search (temporary chat)`, prepend: "", append: "", params: { hints: "search", "temporary-chat": "true" } },
    {
      title: "Correct grammar, keep my style",
      prepend: "Correct the grammar of the text below, but keep my style and tone. Only output the corrected text.\n\nText:\n",
      append: "",
      params: {},
    },
    {
      title: `${trashEmoji}Correct grammar (temporary chat)`,
      prepend: "Correct the grammar of the text below, but keep my style and tone. Only output the corrected text.\n\nText:\n",
      append: "",
      params: { "temporary-chat": "true" },
    },
    {
      title: "Summarize for engineers",
      prepend: "Summarize the following for a software engineer. Be precise. Include key points and any assumptions.\n\nContent:\n",
      append: "",
      params: {},
    },
    {
      title: "Rewrite as concise professional email",
      prepend: "Rewrite the following as a concise, strictly professional email. Keep it direct and clear.\n\nDraft:\n",
      append: "",
      params: {},
    },
  ];

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function createHost() {
    const host = document.createElement("div");
    host.id = EXT_ID;

    host.style.position = "fixed";
    host.style.left = "24px";
    host.style.top = "24px";
    host.style.zIndex = "2147483647";

    document.documentElement.appendChild(host);
    return host;
  }

  function createUI(wrap) {
    const doc = wrap.ownerDocument || document;

    const el = (tag, className, attrs, children) => {
      const n = doc.createElement(tag);

      if (className) n.className = className;

      if (attrs) {
        for (const [k, v] of Object.entries(attrs)) {
          if (v === undefined || v === null) continue;
          if (k === "text") n.textContent = String(v);
          else if (k === "html") n.innerHTML = String(v);
          else n.setAttribute(k, String(v));
        }
      }

      if (children) {
        for (const c of children) {
          if (c === undefined || c === null) continue;
          n.appendChild(typeof c === "string" ? doc.createTextNode(c) : c);
        }
      }

      return n;
    };

    const win = el("div", "dgpt-win", { role: "dialog", "aria-label": "ChatGPT launcher" });

    const titlebar = el("div", "dgpt-titlebar", { "data-drag": "1" });
    const title = el("div", "dgpt-title", { text: "ChatGPT Quick Prompt" });
    const btnClose = el("button", "dgpt-close", {
      type: "button",
      "aria-label": "Close",
      title: "Close",
      text: "×",
    });
    titlebar.append(title, btnClose);

    const body = el("div", "dgpt-body");

    const row = el("div", "dgpt-row");
    const label = el("div", "dgpt-label", { text: "Prompt" });
    const select = el("select", "dgpt-select", { "aria-label": "Prompt selector" });
    row.append(label, select);

    const textarea = el("textarea", "dgpt-textarea", {
      "aria-label": "Your text",
      placeholder: "Type here...",
    });

    const footer = el("div", "dgpt-footer");

    const hint = el("div", "dgpt-hint");
    hint.append(
      el("span", "dgpt-kbd", { text: "Ctrl" }),
      doc.createTextNode("+"),
      el("span", "dgpt-kbd", { text: "Enter" }),
      doc.createTextNode(" to open"),
    );

    const actions = el("div", "dgpt-actions");
    const btnClear = el("button", "dgpt-btn dgpt-secondary", { type: "button", text: "Clear" });
    const linkOpen = el("a", "dgpt-btn dgpt-primary", {
      target: "_blank",
      rel: "noopener noreferrer",
      text: "Open in ChatGPT",
    });
    actions.append(btnClear, linkOpen);

    footer.append(hint, actions);

    const urlBox = el("div", "dgpt-url", { "aria-label": "Generated URL" });
    const note = el("div", "dgpt-note", { text: "Tip: run the bookmarklet again to close." });

    body.append(row, textarea, footer, urlBox, note);
    win.append(titlebar, body);
    wrap.appendChild(win);

    return { win, titlebar, btnClose, select, textarea, btnClear, linkOpen, urlBox };
  }

  function createShadowUI(host) {
    const shadow = host.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
:host { all: initial; }
* { box-sizing: border-box; }

.dgpt-wrap {
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  font-size: 14px;
  color: #111827;
}

.dgpt-win {
  width: 420px;
  max-width: min(92vw, 520px);
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  border: 2px solid rgba(17, 24, 39, 0.08);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.16),
    0 2px 8px rgba(0, 0, 0, 0.08);
}

.dgpt-titlebar {
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 12px;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  color: #ffffff;
  cursor: grab;
  user-select: none;
}

.dgpt-titlebar::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.18);
}

.dgpt-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 900;
  letter-spacing: 0.2px;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
}

.dgpt-close {
  margin-left: auto;
  width: 34px;
  height: 34px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.30);
  background: rgba(255, 255, 255, 0.16);
  color: #ffffff;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-weight: 900;
  font-size: 18px;
  line-height: 1;
}

.dgpt-close:hover { background: rgba(255, 255, 255, 0.22); }
.dgpt-close:active { transform: translateY(1px); }

.dgpt-body {
  padding: 14px;
  background: #ffffff;
}

.dgpt-row {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

.dgpt-label {
  font-weight: normal;
  color: #374151;
  font-size: 12px;
  letter-spacing: 0.2px;
}

.dgpt-select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 14px;
  border: 2px solid rgba(17, 24, 39, 0.10);
  background: #f6f7fb;
  color: #111827;
  font-weight: normal;
  outline: none;
}

.dgpt-select:focus {
  border-color: rgba(124, 58, 237, 0.55);
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.16);
  background: #ffffff;
}

.dgpt-textarea {
  width: 100%;
  min-height: 170px;
  resize: vertical;
  padding: 12px;
  border-radius: 16px;
  border: 2px solid rgba(17, 24, 39, 0.10);
  background: #ffffff;
  outline: none;
  line-height: 1.4;
}

.dgpt-textarea:focus {
  border-color: rgba(124, 58, 237, 0.55);
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.16);
}

.dgpt-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 12px;
}

.dgpt-hint {
  font-size: 12px;
  color: #6b7280;
  font-weight: normal;
  letter-spacing: 0.1px;
}

.dgpt-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.dgpt-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 14px;
  font-weight: normal;
  cursor: pointer;
  user-select: none;

  border: 2px solid rgba(17, 24, 39, 0.12);
  box-shadow: 0 2px 0 rgba(17, 24, 39, 0.10);
}

.dgpt-btn:active { transform: translateY(1px); box-shadow: 0 1px 0 rgba(17, 24, 39, 0.10); }

.dgpt-secondary {
  background: #ffffff;
  color: #111827;
}

.dgpt-secondary:hover { background: #f6f7fb; }

.dgpt-primary {
  background: linear-gradient(180deg, #FFEE91, #F5C857);
  border-color: rgba(17, 24, 39, 0.10);
  color: black;
}

.dgpt-primary:hover { filter: brightness(1.02); }

.dgpt-kbd {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 8px;
  background: #f3f4f6;
  border: 1px solid rgba(0, 0, 0, 0.10);
  color: #111827;
  font-weight: normal;
}

.dgpt-url {
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  background: #f6f7fb;
  border: 1px solid rgba(17, 24, 39, 0.08);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  color: #374151;
  overflow: auto;
  max-height: 170px;
  word-wrap: break-word;
}

.dgpt-note {
  margin-top: 8px;
  font-size: 12px;
  color: #6b7280;
  font-weight: normal;
}
    `.trim();

    const wrap = document.createElement("div");
    wrap.className = "dgpt-wrap";

    shadow.appendChild(style);
    shadow.appendChild(wrap);

    const ui = createUI(wrap);
    return ui;
  }

  function attachDragBehavior(host, win, titlebar) {
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;

    function onMove(e) {
      if (!dragging) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      const rect = win.getBoundingClientRect();
      const maxLeft = window.innerWidth - rect.width;
      const maxTop = window.innerHeight - rect.height;

      const nextLeft = clamp(startLeft + dx, 0, Math.max(0, maxLeft));
      const nextTop = clamp(startTop + dy, 0, Math.max(0, maxTop));

      host.style.left = `${nextLeft}px`;
      host.style.top = `${nextTop}px`;
    }

    function onUp() {
      if (!dragging) return;
      dragging = false;
      titlebar.style.cursor = "grab";
      window.removeEventListener("mousemove", onMove, true);
      window.removeEventListener("mouseup", onUp, true);
    }

    titlebar.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;

      dragging = true;
      titlebar.style.cursor = "grabbing";

      const hostRect = host.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      startLeft = hostRect.left;
      startTop = hostRect.top;

      window.addEventListener("mousemove", onMove, true);
      window.addEventListener("mouseup", onUp, true);
    });
  }

  function main() {
    const host = createHost();
    const ui = createShadowUI(host);

    prompts.forEach((p, i) => {
      const opt = document.createElement("option");
      opt.value = String(i);
      opt.textContent = p.title;
      ui.select.appendChild(opt);
    });

    ui.select.value = "0";

    function getSelectedPrompt() {
      const idxRaw = parseInt(ui.select.value, 10);
      const idx = Number.isFinite(idxRaw) ? idxRaw : 0;
      return prompts[clamp(idx, 0, prompts.length - 1)];
    }

    function buildUrl() {
      const p = getSelectedPrompt();
      const userText = ui.textarea.value || "";
      const joined = (p.prepend || "") + userText + (p.append || "");

      const base = "https://chatgpt.com/";
      const qs = new URLSearchParams();

      for (const [k, v] of Object.entries(p.params || {})) {
        if (v === undefined || v === null) continue;
        const s = String(v);
        if (!s.length) continue;
        qs.set(k, s);
      }

      qs.set("q", joined);

      const url = `${base}?${qs.toString()}`;
      ui.linkOpen.href = url;
      ui.urlBox.textContent = url;
    }

    function openInNewTab() {
      buildUrl();
      const url = ui.linkOpen.href;
      const w = window.open(url, "_blank");
      if (w) w.opener = null;
    }

    ui.select.addEventListener("change", buildUrl);
    ui.textarea.addEventListener("input", buildUrl);

    ui.btnClear.addEventListener("click", () => {
      ui.textarea.value = "";
      ui.textarea.focus();
      buildUrl();
    });

    ui.btnClose.addEventListener("click", () => {
      host.remove();
    });

    ui.textarea.addEventListener("keydown", (e) => {
      const isOpenCombo = (e.ctrlKey || e.metaKey) && e.key === "Enter";
      if (!isOpenCombo) return;

      e.preventDefault();
      openInNewTab();
    });

    attachDragBehavior(host, ui.win, ui.titlebar);

    buildUrl();
    ui.textarea.focus();
  }

  main();
})();

```

