---
layout: kbdocs
title:  "Wysc Website"
category: "Contributor Hub"
catsub: "GitHub"
last_updated: 18 Jan 2020
---

### How It Works

In simple terms, you edit words in a text document and the changes will show up on the website!

In more advanced terms, Wysc Website runs on [Jekyll](../../about/legal/credits#website).


### Front Matter

At the top of every file, there's a section that's boxed in.
```
---
layout: kbdocs
title:  "Licenses"
category: "Legal"
last_updated: 17 Jan 2020
summary: "Wysc's stance on licensing of its property ranges from open to restricted based on your use case. Explore your options below."
redirect_from:
  - licenses
  - docs/about/brand/licenses
  - docs/about/legal/licenses
---
```

This is called "front matter". It lets you change information that influences how the page is shown. Let's break down the ones you need to know:
```
---
title:          The name of the page
last_updated:   Date of last major update to the page
summary:        Optional. Shows both in the page and in the Discord link embed.
redirect_from:  Other links you can reach the page from
---
```


### Content

Finally we're at the actual content of the webpage!

From here on, everything's standard based on Markdown. [Here's a basic introduction to Markdown from Github!](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)

Wysc Docs has some quirks though:
- All headings should be `###`, aka. Heading 3
- Blockquotes and numbered lists don't work. Mayo has been lazy so it's not supported in Wysc Docs yet.
- Sometimes images don't show up right. Mayo will fix this eventually...