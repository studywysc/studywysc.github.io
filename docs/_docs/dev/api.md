---
layout: kbdocs
title:  "&#8203;Wysc APIs"
category: "Contributor Hub"
catsub: "APIs"
last_updated: 24 Nov 2019
summary: "Our documentation and API center for the technology that makes Wysc possible. Integrate Wysc into your product!"
toc: true
redirect_from:
  - dev
  - docs/about/dev/1
  - api
  - docs/about/api
  - docs/about/dev/api
  - docs/dev/blog
  - docs/dev/search
---

### Introduction

As we continue to improve the Wysc website experience, APIs will slowly be released to the public.

```
https://wysc.us.to
```

Our API endpoint for content we host is the domain we're using.

Wysc also relies on many third parties to offer our services. [Wysc Blog](/blog) hosts a status page for the most critical services we rely on.

Wysc also relies on many third parties for API access. You can see the other APIs we have on the left sidebar (PC) or from the Table of Contents above (mobile).


### Blog API

```
/api/feed.xml
```

The Wysc Blog API links to a blog feed that make pulling in data about recent Blog updates quick and easy.

Wysc’s RSS feed for blog posts is generated using Jekyll. With our custom blog infrastructure built on top of an open-source alternative, Wysc does not include any bloatware on our blog system and strives for ease of conveying information and page load performance above all else.

Wysc no longer uses Medium for blog content.


### Status API

```
/api/status.json
```

The Status API informs you of how Wysc is doing, whether anything is down for maintenance, or if there is important information that should be disseminnated.

Wysc independently hosts a status page at [Wysc Blog](/blog) for the convenience of users to see whether any of our services are under maintenance.

We plan to eventually incorporate a Discord and GitHub Status API to show users whether Discord or GitHub may be experiencing issues, independent of Wysc.

Notices will also appear across [Wysc Docs](/docs) when a severe notification happens.

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
