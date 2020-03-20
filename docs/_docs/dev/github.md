---
layout: kbdocs
title:  "Wysc GitHub"
category: "Contributor Hub"
catsub: "GitHub"
last_updated: 19 Mar 2020
---


### Introduction
- The official Wysc repository lives at [https://github.com/coffeebank/wysc](https://github.com/coffeebank/wysc)
- Wysc uses [Jekyll](https://jekyllrb.com/), which is built into GitHub *(or more specifically, GitHub Pages)*
- All changes should be made to the `dev` Branch
    - ![GitHub screenshot - Branch listed is "dev"](/docs/assets/2020-03-19 051009.jpg)
- The Wysc Docs files live at [https://github.com/coffeebank/wysc/tree/dev/docs/_docs](https://github.com/coffeebank/wysc/tree/dev/docs/_docs)
    - There are three folders for each section of the Wysc Docs:
        - `about` - About Wysc
        - `discord` - Wysc Discord
        - `dev` - Contributor Hub
- All assets (files, images, videos, etc.) should be stored under the `assets` folder
- All documentation headings should use Heading 3 (`### Heading 3`) or Heading 4 (`#### Heading 4`)
- To test how the website looks, a dev/staging website is available at [https://wyscdev.netlify.app](https://wyscdev.netlify.app).


### Page Content

At the top of each page, there is content that lets Jekyll know how the page should be processed.

```
---
layout: kbdocs
title:  "Licenses"
category: "About Wysc"
catsub: "Legal"
last_updated: 17 Jan 2020
summary: "Wysc's stance on licensing of its property ranges from open to restricted based on your use case. Explore your options below."
redirect_from:
  - licenses
  - docs/about/brand/licenses
  - docs/about/legal/licenses
---
```

- layout
    - The Wysc Docs page layout is called `kbdocs`. Don't change this.
- title
    - This shows up as the name of the page on the browser tab, the sidebar, and in link embeds
- category
    - One of three categories - About Wysc, Wysc Discord, or Contributor Hub
    - [See here for a list of current categories and sub-categories](https://github.com/coffeebank/wysc/blob/dev/docs/_data/docscat.yml)
- catsub
    - A sub-category that appears on the Wysc Docs sidebar
    - [See here for a list of current categories and sub-categories](https://github.com/coffeebank/wysc/blob/dev/docs/_data/docscat.yml)
- last_updated
    - Please bump this up to the most recent date when you make substantial edits (typos don't need this to be updated)
- summary
    - Adds text at the top of the page underneath the "Wysc Contributors" section
    - Overrides the link embed description for the page
- redirect_from
    - Redirects for short url's such as setting "wysc.us.to/licenses"
    - DO NOT INCLUDE THE "wysc.us.to/" PART OF THE URL HERE