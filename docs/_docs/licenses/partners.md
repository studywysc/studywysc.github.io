---
layout: jtdocs
title:  "Partners"
title-sub: "Licenses"
summary: "All third party content used in Wysc operated spaces, including partnered content, are subject to either mutual agreements or the creator's respective licenses."
redirect_from:
  - partners
  - partnership
  - docs/about/brand/partnerships
---

* TOC
{:toc}

### License to Use

Due to Wysc's approaches, including but not limited to the use of partnered content, implementation of code, and setup of infrastructure, it is currently against license agreements for others to make an exact duplicate of Wysc as-is. We assume [no legal liability](/docs/licenses) for your actions.

The content that users share in Wysc operated spaces belong to the user who created the material. See copyright laws in your jurisdiction to determine whether you can legally use copyrighted public user data.


### Summary

Here's a human-readable summary (that is not legally binding) of what we look for when we partner with others:

- Everything is free. No royalties, no payments.
  - You keep ownership rights, we get a license to use it
  - We can modify your property as necessary to integrate and feature it on Wysc
- Ending the Contract
  - The agreement lasts until one of us requests to cancel it
  - Anyone who wants to cancel should give 6 months advance notice
  - We have 6 months after the agreement actually cancels to remove your property from active use
  - People involved can keep using your property or any derivations in personal portfolios
  - We might hold archives of your property (ie. we archive a channel where someone sent your property in a message)
- Technicalities
  - We won't hold you liable for damages your property causes us
  - We negotiate over any disagreements
  - You sign by sending your Discord User ID via a Discord message with this form:

```
**Intellectual Property License Agreement**

Client: Wysc Services
Holder of Rights: [your username here]

Intellectual Property: "INTELLECTUAL PROPERTY"

Holder's Discord User ID: [your Discord user ID here]
Holder's Date: [today's date in YYYY-MM-DD format]
```

[See Intellectual Property License Agreement](partners-template){: .jtbutton}


### Partnership Agreements

{% assign agreements = site.documents | where:"partnerlicense",true | reverse %}
<ul>
    {% for agreem in agreements %}
        <li>
            <a href="{{ agreem.url | relative_url }}">{{ agreem.title }} with {{ agreem.holder-of-rights-name }}, effective {{ agreem.signature-date }}{% if agreem.cancellation-date != false %} <b>(cancelled {{ agreem.cancellation-date }})</b>{% endif%}</a>
        </li>
    {% endfor %}
</ul>