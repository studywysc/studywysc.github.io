---
layout: kbdocs
title:  "Blog/Status API"
category: "APIs"
summary: "The Wysc Blog API series provides API access to the data that populates Wysc Blog."
last_updated: 17 Jan 2020
redirect_from:
  - docs/dev/api/status
---

### Status API

```
https://wysc.netlify.com/api/status.json
```

Wysc independently hosts a status page at <a href="/blog">Wysc Blog</a> for the convenience of users to see whether any of our services are under maintenance.

We plan to eventually incorporate a Discord status API as well to show to users whether Discord may be experiencing issues, independent of Wysc.

<br>
Sample code:
```
{
  "wysc":[
    {
      "title": "Wysc Discord",
      "isup": boolean,
      "isupemoji": "Alert emoji",
      "howsevere": "low // medium // high",
      "notes": "Notes for when Wysc Discord is not operating normally"
      "readmore": "Link to webpage with more info"
    },
    {
      "title": "Wysc Website",
      "isup": boolean,
      "isupemoji": "Alert emoji",
      "howsevere": "low // medium // high",
      "notes": "Notes for when Wysc Discord is not operating normally"
      "readmore": "Link to webpage with more info"
    }
  ]
}
```
<br>


### RSS Feed

```
https://wysc.netlify.com/blog/feed.xml
```

Wysc’s RSS feed for blog posts is generated using Jekyll. With our custom blog infrastructure built on top of an open-source alternative, Wysc does not include any bloatware on our blog system and strives for ease of conveying information and page load performance above all else.

Wysc no longer uses Medium for blog content.
