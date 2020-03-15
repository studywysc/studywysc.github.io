---
layout: kbdocs
title:  "APIs: Status API"
category: "Contributor Hub"
summary: "How's Wysc doing? Find out using the Status API!"
last_updated: 17 Jan 2020
---

### Status API

```
https://wysc.netlify.com/api/status.json
```

Wysc independently hosts a status page at [Wysc Blog](/blog) for the convenience of users to see whether any of our services are under maintenance.

Notices will also appear across [Wysc Docs](/docs) when a severe notification happens.

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