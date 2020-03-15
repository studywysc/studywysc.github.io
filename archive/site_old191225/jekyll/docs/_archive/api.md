---
layout: post
title:  "APIs"
category: about
summary: "Wysc's documentation page for the latest information and APIs."
toc: true
---

## Wysc Status API

```
https://gitnisyl.github.io/wysc/api/status.json
```

Wysc independently hosts a status page at <a href="../../blog">Wysc Blog</a> for the convenience of users to see whether any of our services are under maintenance.

We plan to eventually incorporate a Discord status API as well to show to users whether Discord may be experiencing issues, independent of Wysc.

The JSON is formatted as follows:
```
{
  "wysc":[
    {
      "title": "Wysc Discord",
      "isup": boolean,
      "isupnotes": "Alert emoji",
      "notes": "Notes for when Wysc Discord is not operating normally"
    },
    {
      "title": "Wysc Website",
      "isup": boolean,
      "isupnotes": "Alert emoji",
      "notes": "Notes for when Wysc Website is not operating normally"
    }
  ]
}
```

## Wysc Blog RSS Feed

```
https://gitnisyl.github.io/wysc/blog/feed.xml
```

Wysc's RSS feed for blog posts is generated using Jekyll. With our custom blog infrastructure built on top of an open-source alternative, Wysc does not include any bloatware on our blog system and strives for ease of conveying information and page load performance above all else.

## Creating a Wysc Start Module

Wysc Start is our premier productivity new tab page that bridges the gap between browser work and using Discord with minimal distractions.

If you own a website and would like to be a part of Wysc Start, we'd love to have you on board!

More information will be coming soon.