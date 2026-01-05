# 📌🔢 bookmarklets-chatgpt
Date: 2026-01-04

## 🏵️2025 GPT Transcript no fluff no cliches
2026-01-04
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

## 2026 🍔 GPT Quick Prompt UI Enhanced
2026-01-04

- Shows a draggable popup; running the bookmarklet again closes it.
- Provides a prompt dropdown built from base prompts and auto-adds a "temporary chat" variant for each.
- Takes input in a textarea, continuously generates the corresponding ChatGPT URL, displays it, and lets you open it in a new tab or clear the text.
- Supports inline keyboard commands in the textarea to switch prompts (for example `!g`, `!search`) and to toggle the temporary variant (`!temp`), removing the command from the text.
- On open, pulls the current page selection into the textarea, trimming it and collapsing whitespace, with the caret placed at the end.


```js
javascript:(function () {
  "use strict";

  const EXT_ID = "dgpt_duo_popup_v1";

  const existing = document.getElementById(EXT_ID);
  if (existing) {
    existing.remove();
    return;
  }

  const trashEmoji = "\u{1F5D1}\uFE0F";

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function normalizeSelectionText(raw) {
    const s = String(raw || "");
    return s.replace(/\s+/g, " ").trim();
  }

  function getPageSelectionText() {
    try {
      const sel = window.getSelection ? window.getSelection() : null;
      if (!sel) return "";
      const text = sel.toString ? sel.toString() : "";
      return normalizeSelectionText(text);
    } catch (_) {
      return "";
    }
  }

  function createPromptCatalog(basePrompts, opts) {
    const trash = (opts && opts.trashEmoji) || "";
    const prompts = [];
    const indexById = new Map();
    const tempIdByBaseId = new Map();
    const baseIdByTempId = new Map();
    const aliasToBaseId = new Map();

    function normalizeToken(s) {
      return String(s || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "");
    }

    function coreTitleFromBaseTitle(title, shortTitle) {
      const t = String(shortTitle || title || "").trim();
      const withoutDefault = t.replace(/\s*\(default\)\s*$/i, "").trim();
      const firstClause = withoutDefault.split(",")[0].trim();
      return firstClause || withoutDefault || t;
    }

    function makeTempTitle(base) {
      const core = coreTitleFromBaseTitle(base.title, base.shortTitle);
      return `${trash} ${core} (temporary chat)`.trim();
    }

    function addPrompt(p) {
      const idx = prompts.length;
      prompts.push(p);
      indexById.set(p.id, idx);
    }

    for (const bp of basePrompts) {
      if (!bp || !bp.id) continue;

      const base = {
        id: String(bp.id),
        title: String(bp.title || bp.id),
        shortTitle: bp.shortTitle,
        prepend: String(bp.prepend || ""),
        append: String(bp.append || ""),
        params: Object.assign({}, bp.params || {}),
        aliases: Array.isArray(bp.aliases) ? bp.aliases.slice() : [],
        tempable: bp.tempable !== false,
      };

      addPrompt(base);

      const baseAliases = new Set([base.id, ...base.aliases].map(normalizeToken).filter(Boolean));
      for (const a of baseAliases) aliasToBaseId.set(a, base.id);

      if (base.tempable) {
        const alreadyTemp = Object.prototype.hasOwnProperty.call(base.params, "temporary-chat");
        const tempId = `${base.id}:temp`;

        const temp = {
          id: tempId,
          title: makeTempTitle(base),
          prepend: base.prepend,
          append: base.append,
          params: Object.assign({}, base.params, alreadyTemp ? {} : { "temporary-chat": "true" }),
          aliases: [],
          tempable: false,
          baseId: base.id,
        };

        addPrompt(temp);
        tempIdByBaseId.set(base.id, tempId);
        baseIdByTempId.set(tempId, base.id);
      }
    }

    return {
      prompts,
      indexById,
      tempIdByBaseId,
      baseIdByTempId,
      aliasToBaseId,
    };
  }

  function createInlineCommandExpander(opts) {
    const el = opts && opts.element;
    if (!el) throw new Error("createInlineCommandExpander: missing element");

    const prefixes = new Set((opts.prefixes || ["!"]).map(String));
    const commitKeys = new Set((opts.commitKeys || [" ", "Enter"]).map(String));
    const maxCommandLen = Number.isFinite(opts.maxCommandLen) ? opts.maxCommandLen : 24;
    const tokenChars = opts.tokenChars || /^[a-z0-9_-]+$/i;

    function findCommandAtCursor(value, cursor) {
      const startScan = Math.max(0, cursor - (maxCommandLen + 1) - 32);
      for (let i = cursor - 1; i >= startScan; i--) {
        const ch = value[i];
        if (!prefixes.has(ch)) continue;

        const cmd = value.slice(i + 1, cursor);
        if (!cmd) return null;
        if (cmd.length > maxCommandLen) return null;
        if (/\s/.test(cmd)) return null;
        if (!tokenChars.test(cmd)) return null;

        return { start: i, end: cursor, raw: ch + cmd, cmdLower: cmd.toLowerCase(), prefix: ch };
      }
      return null;
    }

    function replaceRangeKeepCaret(value, start, end, insert, newCaret) {
      const next = value.slice(0, start) + insert + value.slice(end);
      return { next, newCaret: typeof newCaret === "number" ? newCaret : start + insert.length };
    }

    function setValueAndCaret(nextValue, caretPos) {
      el.value = nextValue;
      el.setSelectionRange(caretPos, caretPos);
      el.dispatchEvent(new Event("input", { bubbles: true }));
    }

    function onKeyDown(e) {
      if (e.isComposing) return;
      if (!commitKeys.has(e.key)) return;

      const selStart = el.selectionStart;
      const selEnd = el.selectionEnd;
      if (selStart !== selEnd) return;

      const value = el.value || "";
      const token = findCommandAtCursor(value, selStart);
      if (!token) return;

      const state = typeof opts.getState === "function" ? opts.getState() : {};
      const action = typeof opts.resolveAction === "function" ? opts.resolveAction(token.cmdLower, state) : null;
      if (!action) return;

      e.preventDefault();

      const keepDelimiter = opts.keepDelimiter !== false;
      const delimiter = keepDelimiter ? (e.key === "Enter" ? "\n" : " ") : "";
      const r = replaceRangeKeepCaret(value, token.start, token.end, delimiter, token.start + delimiter.length);

      setValueAndCaret(r.next, r.newCaret);

      if (typeof opts.onAction === "function") {
        opts.onAction(action, state);
      }
    }

    el.addEventListener("keydown", onKeyDown);

    return {
      destroy() {
        el.removeEventListener("keydown", onKeyDown);
      },
    };
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
      text: "x",
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
      doc.createTextNode(" to open")
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

    const basePrompts = [
      { id: "search", title: "Search (default)", prepend: "", append: "", params: { hints: "search" }, aliases: ["s", "search"] },
      {
        id: "grammar",
        title: "Correct grammar, keep my style",
        prepend: "Correct the grammar of the text below, but keep my style and tone. Only output the corrected text.\n\nText:\n",
        append: "",
        params: {},
        aliases: ["g", "gram", "grammar"],
      },
      {
        id: "summarize",
        title: "Summarize for engineers",
        prepend: "Summarize the following for a software engineer. Be precise. Include key points and any assumptions.\n\nContent:\n",
        append: "",
        params: {},
        aliases: ["sum", "summarize"],
      },
      {
        id: "email",
        title: "Rewrite as concise professional email",
        prepend: "Rewrite the following as a concise, strictly professional email. Keep it direct and clear.\n\nDraft:\n",
        append: "",
        params: {},
        aliases: ["mail", "email"],
      },
    ];

    const catalog = createPromptCatalog(basePrompts, { trashEmoji });

    for (let i = 0; i < catalog.prompts.length; i++) {
      const p = catalog.prompts[i];
      const opt = document.createElement("option");
      opt.value = String(i);
      opt.textContent = p.title;
      ui.select.appendChild(opt);
    }
    ui.select.value = "0";

    function getSelectedPrompt() {
      const idxRaw = parseInt(ui.select.value, 10);
      const idx = Number.isFinite(idxRaw) ? idxRaw : 0;
      return catalog.prompts[clamp(idx, 0, catalog.prompts.length - 1)];
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

    function selectPromptById(id) {
      const idx = catalog.indexById.get(id);
      if (typeof idx !== "number") return false;
      ui.select.value = String(idx);
      buildUrl();
      return true;
    }

    function resolveAliasOrUniquePrefix(cmdLower) {
      const exact = catalog.aliasToBaseId.get(cmdLower);
      if (exact) return exact;

      let found = null;
      let count = 0;
      for (const [alias, baseId] of catalog.aliasToBaseId.entries()) {
        if (!alias.startsWith(cmdLower)) continue;
        found = baseId;
        count++;
        if (count > 1) return null;
      }
      return count === 1 ? found : null;
    }

    function currentIds() {
      const p = getSelectedPrompt();
      const currentId = p.id;
      const baseId = catalog.baseIdByTempId.get(currentId) || currentId;
      const tempId = catalog.tempIdByBaseId.get(baseId) || null;
      const isTemp = catalog.baseIdByTempId.has(currentId);
      return { currentId, baseId, tempId, isTemp };
    }

    createInlineCommandExpander({
      element: ui.textarea,
      prefixes: ["!", "/", "@"],
      commitKeys: [" ", "Enter"],
      maxCommandLen: 24,
      keepDelimiter: true,
      getState: () => currentIds(),
      resolveAction: (cmdLower, state) => {
        if (cmdLower === "temp" || cmdLower === "t" || cmdLower === "tmp") {
          if (!state || !state.tempId) return null;
          return { type: "select", id: state.tempId };
        }

        const baseId = resolveAliasOrUniquePrefix(cmdLower);
        if (!baseId) return null;

        return { type: "select", id: baseId };
      },
      onAction: (action) => {
        if (!action || action.type !== "select") return;
        selectPromptById(action.id);
      },
    });

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

    const initial = getPageSelectionText();
    if (initial) {
      ui.textarea.value = initial;
      ui.textarea.setSelectionRange(initial.length, initial.length);
      ui.textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }

    buildUrl();
    ui.textarea.focus();
  }

  main();
})();

```

## 2026 🍔 GPT Quick Prompt UI Enhanced

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

## 2026 Copilot UI Alternative -- Enhanced

```js
javascript:(function () {
  "use strict";

  const EXT_ID = "dcopilot_popup_v1";

  const existing = document.getElementById(EXT_ID);
  if (existing) {
    existing.remove();
    return;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function normalizeSelectionText(raw) {
    const s = String(raw || "");
    return s.replace(/\s+/g, " ").trim();
  }

  function getPageSelectionText() {
    try {
      const sel = window.getSelection ? window.getSelection() : null;
      if (!sel) return "";
      const text = sel.toString ? sel.toString() : "";
      return normalizeSelectionText(text);
    } catch (_) {
      return "";
    }
  }

  function createPromptCatalog(basePrompts) {
    const prompts = [];
    const indexById = new Map();
    const aliasToId = new Map();

    function normalizeToken(s) {
      return String(s || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "");
    }

    function addPrompt(p) {
      const idx = prompts.length;
      prompts.push(p);
      indexById.set(p.id, idx);

      const aliases = new Set([p.id, ...(p.aliases || [])].map(normalizeToken).filter(Boolean));
      for (const a of aliases) aliasToId.set(a, p.id);
    }

    for (const bp of basePrompts) {
      if (!bp || !bp.id) continue;

      addPrompt({
        id: String(bp.id),
        title: String(bp.title || bp.id),
        shortTitle: bp.shortTitle,
        prepend: String(bp.prepend || ""),
        append: String(bp.append || ""),
        params: Object.assign({}, bp.params || {}),
        aliases: Array.isArray(bp.aliases) ? bp.aliases.slice() : [],
      });
    }

    return { prompts, indexById, aliasToId };
  }

  function createInlineCommandExpander(opts) {
    const el = opts && opts.element;
    if (!el) throw new Error("createInlineCommandExpander: missing element");

    const prefixes = new Set((opts.prefixes || ["!"]).map(String));
    const commitKeys = new Set((opts.commitKeys || [" ", "Enter"]).map(String));
    const maxCommandLen = Number.isFinite(opts.maxCommandLen) ? opts.maxCommandLen : 24;
    const tokenChars = opts.tokenChars || /^[a-z0-9_-]+$/i;

    function findCommandAtCursor(value, cursor) {
      const startScan = Math.max(0, cursor - (maxCommandLen + 1) - 32);
      for (let i = cursor - 1; i >= startScan; i--) {
        const ch = value[i];
        if (!prefixes.has(ch)) continue;

        const cmd = value.slice(i + 1, cursor);
        if (!cmd) return null;
        if (cmd.length > maxCommandLen) return null;
        if (/\s/.test(cmd)) return null;
        if (!tokenChars.test(cmd)) return null;

        return { start: i, end: cursor, raw: ch + cmd, cmdLower: cmd.toLowerCase(), prefix: ch };
      }
      return null;
    }

    function replaceRangeKeepCaret(value, start, end, insert, newCaret) {
      const next = value.slice(0, start) + insert + value.slice(end);
      return { next, newCaret: typeof newCaret === "number" ? newCaret : start + insert.length };
    }

    function setValueAndCaret(nextValue, caretPos) {
      el.value = nextValue;
      el.setSelectionRange(caretPos, caretPos);
      el.dispatchEvent(new Event("input", { bubbles: true }));
    }

    function onKeyDown(e) {
      if (e.isComposing) return;
      if (!commitKeys.has(e.key)) return;

      const selStart = el.selectionStart;
      const selEnd = el.selectionEnd;
      if (selStart !== selEnd) return;

      const value = el.value || "";
      const token = findCommandAtCursor(value, selStart);
      if (!token) return;

      const action = typeof opts.resolveAction === "function" ? opts.resolveAction(token.cmdLower) : null;
      if (!action) return;

      e.preventDefault();

      const keepDelimiter = opts.keepDelimiter !== false;
      const delimiter = keepDelimiter ? (e.key === "Enter" ? "\n" : " ") : "";
      const r = replaceRangeKeepCaret(value, token.start, token.end, delimiter, token.start + delimiter.length);

      setValueAndCaret(r.next, r.newCaret);

      if (typeof opts.onAction === "function") {
        opts.onAction(action);
      }
    }

    el.addEventListener("keydown", onKeyDown);

    return {
      destroy() {
        el.removeEventListener("keydown", onKeyDown);
      },
    };
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

    const win = el("div", "dcop-win", { role: "dialog", "aria-label": "Copilot launcher" });

    const titlebar = el("div", "dcop-titlebar", { "data-drag": "1" });
    const title = el("div", "dcop-title", { text: "Copilot Quick Prompt" });
    const btnClose = el("button", "dcop-close", {
      type: "button",
      "aria-label": "Close",
      title: "Close",
      text: "x",
    });
    titlebar.append(title, btnClose);

    const body = el("div", "dcop-body");

    const row = el("div", "dcop-row");
    const label = el("div", "dcop-label", { text: "Mode" });
    const select = el("select", "dcop-select", { "aria-label": "Prompt selector" });
    row.append(label, select);

    const textarea = el("textarea", "dcop-textarea", {
      "aria-label": "Your text",
      placeholder: "Ask Copilot or paste context here...",
    });

    const footer = el("div", "dcop-footer");

    const hint = el("div", "dcop-hint");
    hint.append(
      el("span", "dcop-kbd", { text: "Ctrl" }),
      doc.createTextNode("+"),
      el("span", "dcop-kbd", { text: "Enter" }),
      doc.createTextNode(" to open")
    );

    const actions = el("div", "dcop-actions");
    const btnClear = el("button", "dcop-btn dcop-secondary", { type: "button", text: "Clear" });
    const linkOpen = el("a", "dcop-btn dcop-primary", {
      target: "_blank",
      rel: "noopener noreferrer",
      text: "Open in Copilot",
    });
    actions.append(btnClear, linkOpen);

    footer.append(hint, actions);

    const urlBox = el("div", "dcop-url", { "aria-label": "Generated URL" });
    const note = el("div", "dcop-note", { text: "Tip: run the bookmarklet again to close." });

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

.dcop-wrap {
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  font-size: 14px;
  color: #0b1220;
}

.dcop-win {
  width: 432px;
  max-width: min(92vw, 540px);
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  border: 2px solid rgba(11, 18, 32, 0.08);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.16),
    0 2px 8px rgba(0, 0, 0, 0.08);
}

.dcop-titlebar {
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 12px;
  background: linear-gradient(135deg, #0a63a8, #10b981);
  color: #ffffff;
  cursor: grab;
  user-select: none;
}

.dcop-titlebar::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.18);
}

.dcop-title {
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

.dcop-close {
  margin-left: auto;
  width: 34px;
  height: 34px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.30);
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-weight: 900;
  font-size: 18px;
  line-height: 1;
}

.dcop-close:hover { background: rgba(255, 255, 255, 0.20); }
.dcop-close:active { transform: translateY(1px); }

.dcop-body {
  padding: 14px;
  background: #ffffff;
}

.dcop-row {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

.dcop-label {
  font-weight: normal;
  color: #334155;
  font-size: 12px;
  letter-spacing: 0.2px;
}

.dcop-select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 14px;
  border: 2px solid rgba(11, 18, 32, 0.10);
  background: #f3f7fb;
  color: #0b1220;
  font-weight: normal;
  outline: none;
}

.dcop-select:focus {
  border-color: rgba(16, 185, 129, 0.55);
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.16);
  background: #ffffff;
}

.dcop-textarea {
  width: 100%;
  min-height: 170px;
  resize: vertical;
  padding: 12px;
  border-radius: 16px;
  border: 2px solid rgba(11, 18, 32, 0.10);
  background: #ffffff;
  outline: none;
  line-height: 1.4;
}

.dcop-textarea:focus {
  border-color: rgba(10, 99, 168, 0.55);
  box-shadow: 0 0 0 4px rgba(10, 99, 168, 0.16);
}

.dcop-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 12px;
}

.dcop-hint {
  font-size: 12px;
  color: #64748b;
  font-weight: normal;
  letter-spacing: 0.1px;
}

.dcop-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.dcop-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 14px;
  font-weight: normal;
  cursor: pointer;
  user-select: none;

  border: 2px solid rgba(11, 18, 32, 0.12);
  box-shadow: 0 2px 0 rgba(11, 18, 32, 0.10);
}

.dcop-btn:active { transform: translateY(1px); box-shadow: 0 1px 0 rgba(11, 18, 32, 0.10); }

.dcop-secondary {
  background: #ffffff;
  color: #0b1220;
}

.dcop-secondary:hover { background: #f3f7fb; }

.dcop-primary {
  background: linear-gradient(180deg, #e6fffb, #c7f9e9);
  border-color: rgba(11, 18, 32, 0.10);
  color: #0b1220;
}

.dcop-primary:hover { filter: brightness(1.02); }

.dcop-kbd {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 8px;
  background: #f1f5f9;
  border: 1px solid rgba(0, 0, 0, 0.10);
  color: #0b1220;
  font-weight: normal;
}

.dcop-url {
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  background: #f3f7fb;
  border: 1px solid rgba(11, 18, 32, 0.08);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  color: #334155;
  overflow: auto;
  max-height: 170px;
  word-wrap: break-word;
}

.dcop-note {
  margin-top: 8px;
  font-size: 12px;
  color: #64748b;
  font-weight: normal;
}
    `.trim();

    const wrap = document.createElement("div");
    wrap.className = "dcop-wrap";

    shadow.appendChild(style);
    shadow.appendChild(wrap);

    return createUI(wrap);
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

      host.style.left = String(nextLeft) + "px";
      host.style.top = String(nextTop) + "px";
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

    const COPILOT_SEARCH_BASE = "https://www.bing.com/copilotsearch";
    const COPILOT_CHAT_BASE = "https://copilot.microsoft.com/";

    const basePrompts = [
      {
        id: "search",
        title: "Copilot search (default)",
        prepend: "",
        append: "",
        params: { FORM: "ANWSB6" },
        aliases: ["s", "search"],
      },
      {
        id: "rewrite",
        title: "Rewrite: concise and clear",
        prepend: "Rewrite the text below to be concise, clear, and professional. Preserve meaning and key details.\n\nText:\n",
        append: "",
        params: { sendquery: "1", showconv: "1", bypassredir: "1" },
        aliases: ["r", "rw", "rewrite"],
      },
      {
        id: "summarize",
        title: "Summarize: action items and risks",
        prepend:
          "Summarize the content below for a technical audience. Include action items, risks, and assumptions. Keep it compact.\n\nContent:\n",
        append: "",
        params: { sendquery: "1", showconv: "1", bypassredir: "1" },
        aliases: ["sum", "summarize"],
      },
      {
        id: "review",
        title: "Review: improve structure and logic",
        prepend:
          "Review the text below. Improve structure and logic, fix errors, and point out any ambiguities. Return an improved version plus a short list of issues.\n\nText:\n",
        append: "",
        params: { sendquery: "1", showconv: "1", bypassredir: "1" },
        aliases: ["rev", "review"],
      },
      {
        id: "email",
        title: "Email: direct and professional",
        prepend:
          "Turn the draft below into a direct, strictly professional email. Keep it short. Include a clear subject line.\n\nDraft:\n",
        append: "",
        params: { sendquery: "1", showconv: "1", bypassredir: "1" },
        aliases: ["mail", "email"],
      },
    ];

    const catalog = createPromptCatalog(basePrompts);

    for (let i = 0; i < catalog.prompts.length; i++) {
      const p = catalog.prompts[i];
      const opt = document.createElement("option");
      opt.value = String(i);
      opt.textContent = p.title;
      ui.select.appendChild(opt);
    }
    ui.select.value = "0";

    function getSelectedPrompt() {
      const idxRaw = parseInt(ui.select.value, 10);
      const idx = Number.isFinite(idxRaw) ? idxRaw : 0;
      return catalog.prompts[clamp(idx, 0, catalog.prompts.length - 1)];
    }

    function buildUrl() {
      const p = getSelectedPrompt();
      const userText = ui.textarea.value || "";
      const joined = (p.prepend || "") + userText + (p.append || "");

      const qs = new URLSearchParams();

      for (const [k, v] of Object.entries(p.params || {})) {
        if (v === undefined || v === null) continue;
        const s = String(v);
        if (!s.length) continue;
        qs.set(k, s);
      }

      let url = "";

      if (p.id === "search") {
        qs.set("q", joined);
        qs.set("pq", joined);
        url = COPILOT_SEARCH_BASE + "?" + qs.toString();
      } else {
        qs.set("prompt", joined);
        url = COPILOT_CHAT_BASE + "?" + qs.toString();
      }

      ui.linkOpen.href = url;
      ui.urlBox.textContent = url;
    }

    function openInNewTab() {
      buildUrl();
      const url = ui.linkOpen.href;
      const w = window.open(url, "_blank");
      if (w) w.opener = null;
    }

    function selectPromptById(id) {
      const idx = catalog.indexById.get(id);
      if (typeof idx !== "number") return false;
      ui.select.value = String(idx);
      buildUrl();
      return true;
    }

    function resolveAliasOrUniquePrefix(cmdLower) {
      const exact = catalog.aliasToId.get(cmdLower);
      if (exact) return exact;

      let found = null;
      let count = 0;
      for (const [alias, id] of catalog.aliasToId.entries()) {
        if (!alias.startsWith(cmdLower)) continue;
        found = id;
        count++;
        if (count > 1) return null;
      }
      return count === 1 ? found : null;
    }

    createInlineCommandExpander({
      element: ui.textarea,
      prefixes: ["!", "/", "@"],
      commitKeys: [" ", "Enter"],
      maxCommandLen: 24,
      keepDelimiter: true,
      resolveAction: (cmdLower) => {
        const id = resolveAliasOrUniquePrefix(cmdLower);
        return id ? { type: "select", id } : null;
      },
      onAction: (action) => {
        if (!action || action.type !== "select") return;
        selectPromptById(action.id);
      },
    });

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

    const initial = getPageSelectionText();
    if (initial) {
      ui.textarea.value = initial;
      ui.textarea.setSelectionRange(initial.length, initial.length);
      ui.textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }

    buildUrl();
    ui.textarea.focus();
  }

  main();
})();

```