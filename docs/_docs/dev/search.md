---
layout: kbdocs
title:  "Search API"
category: "Contributor Hub"
catsub: "APIs"
summary: "The Search API helps make discovering information across Wysc easier, from blog posts to documentation."
toc: true
---

### Wysc Discord
```
https://discordapp.com/api/channels/{channel.id}/messages
```

Wysc Discord Search API is supported by Discord. [See Discord Developer Portal for more information on how to use the Discord API.](https://discordapp.com/developers/docs/resources/channel#get-channel-messages)

Channel IDs can be obtained by visiting Wysc [and following these directions](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).


### Wysc Website


```
https://hra929iban-dsn.algolia.net/1/indexes/Wysc
```

Wysc Website Search API is supported by Algolia Search. [See Algolia Docs for more information on how to use the Algolia API.](https://www.algolia.com/doc/rest-api/search/)

Here are the authentication HTTP headers:
- X-Algolia-Application-Id
```
HRA929IBAN
```
- X-Algolia-API-Key
```
47962dcf70705d6573033e09f6d70ebe
```

All pages on Wysc Website are indexed by Algolia. Some content may be out of date.