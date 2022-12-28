---
layout: jtdocs
title:  "Wysc APIs"
title-sub: "Contributing"
summary: "Our documentation and API center for the technology that makes Wysc possible. Integrate Wysc into your product!"
redirect_from:
  - api
  - docs/about/api
  - docs/about/dev/api
  - docs/dev/blog
  - docs/dev/search
  - changelog
  - docs/about/changelog
  - docs/about/dev/changelog
  - docs/dev/changelog
---

### Introduction

As we continue to improve the Wysc website experience, APIs will slowly be released to the public.

```
https://wysc.us.to/api/
```

Our API endpoint for content we host is on the same domain, in a subdirectory.

Wysc also relies on many third parties to offer our services. A status page is available at [Wysc Blog](/blog) to show when any of our services or third-party processors are under maintenance. A similar status page is available on our [Contact page](/docs/contact) for the convenience of bug reporters.

Wysc also relies on many third parties for API access. You can see the other APIs we have on the left sidebar (PC) or from the Table of Contents above (mobile).


### Blog API

```
feed.xml
```

The Wysc Blog API links to a blog feed that make pulling in data about recent Blog updates quick and easy.

Wysc’s RSS feed for blog posts is generated using Jekyll. Wysc no longer uses Medium for blog content.

Wysc is considering an API in the future for short-term updates currently being sent only to our Discord's `#announcements` channel.



### Changelog API

```
https://api.github.com/repos/studywysc/wysc/commits
```

Wysc Changelog API is supported by GitHub. [See Github Developer Guide for more information on how to use the GitHub REST API.](https://developer.github.com/v3/repos/commits/)

All Wysc Website update notes are listed under the Git commits log on GitHub. [Click here to see the list of commits on Wysc GitHub visually.](https://github.com/studywysc/wysc/commits/master)


### Search API

```
search.json
```

The Wysc Docs Search API is automatically updated whenever there is an update to the website, and contains all the Wysc Docs contents in a lightweight file.

Wysc no longer uses Algolia for search.


```
https://discordapp.com/api/channels/{channel.id}/messages
```

The Wysc Discord Search API is supported by Discord. [See Discord Developer Portal for more information on how to use the Discord API.](https://discordapp.com/developers/docs/resources/channel#get-channel-messages)

Channel IDs can be obtained by visiting Wysc [and following these directions](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).




### Status API

```
status.json
```

The Status API informs you of how Wysc is doing, whether anything is down for maintenance, or if there is important information that should be disseminnated.

Notices will also appear across [Wysc Docs](/docs) when a severe notification happens.

<br>
Sample code:
```
{
  "wysc":[
    {
      "title": "Wysc Service",
      "isup": true // false,
      "isupemoji": "Alert emoji here",
      "howsevere": "low" // "medium" // "high",
      "notes":"Notes for when Wysc Discord is not operating normally",
      "readmore": "Link to webpage with more info",
    }
  ]
}
```
