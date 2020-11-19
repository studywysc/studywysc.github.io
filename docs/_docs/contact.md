---
layout: jtdocs
title:  "Contact Us"
summary: "Find out how you can reach us if you have questions or administrative inquiries."
redirect_from:
  - contact
  - support
  - docs/about/contact
  - docs/about/brand/contact
  - docs/about/org/contact
  - docs/org/contact
---

Please check the status checklist below before reporting outages ([see Wysc Blog if it doesn't work](/blog)):
{: .mb-2}

<ul id="statuslist" class="list-group list-group-flush">
<li id="wservice" class="list-group-item rounded"><b>Wysc Service:</b>&emsp;<a href="/api/status.json">See Wysc Status</a></li>
<li id="wdiscord" class="list-group-item rounded"><b>Wysc Discord:</b>&emsp;<a href="https://status.discordapp.com/" rel="noopener noreferrer" target="_blank">See Discord Status</a></li>
<li id="wgithub" class="list-group-item rounded"><b>Wysc GitHub:</b>&emsp;<a href="https://www.githubstatus.com/" rel="noopener noreferrer" target="_blank">See GitHub Status</a></li>
</ul>


### Wysc Services

**Questions about the service we provide?**
{: .mb-2}

- Reach out to us in the `#support` channel on Wysc Discord
- Community members can usually respond within 24-48 hours
- When an official Wysc Staff response is necessary, please allow 5-10 business days

**Reporting a broken link, feature, or service?**
{: .mb-2}

- Reach out to us in the `#support` channel on Wysc Discord
- If you are [Sapling rank or above](/docs/discord/ranks), consider joining [Contributor Hub](/docs/dev) to help report bugs and improve Wysc!

**Do Not Sell My Personal Information/GDPR Requests**
{: .mb-2}

- We do not store personal information, [see our Privacy Policy for details](/docs/privacy)
- The data processors we use are listed [on our Credits page](/docs/credits)
- You have rights to your data under the [GDPR (EU)](https://gdpr.eu/tag/chapter-3/){:target="_blank" rel="noopener"} and [California Consumer Privacy Act (USA)](https://oag.ca.gov/privacy/ccpa){:target="_blank" rel="noopener"}
- To exercise these rights, [see our Privacy Policy](/docs/privacy#your-rights-with-respect-to-your-information)


<div id="official-inquiries"></div>
<div id="partnerships"></div>

### Administrative Inquiries

**Reaching out to Wysc Staff for partnerships/non-legal administrative inquiries?**
{: .mb-2}

- Reach out to us in the `#support` channel on Wysc Discord
- Please provide a short summary of the situation and to request a private audience if necessary
- Due to the unique structure of our Discord, all correspondence will be shared as necessary with our community leaders
- When an official Wysc Staff response is necessary, please allow 5-10 business days

**Business-level inquiries, legal requests, and other administrative level contact?**
{: .mb-2}

- Reach us by email at [`wyscofficial@icloud.com`](mailto:wyscofficial@icloud.com)
- Please be sure to view our [Credits](/docs/about/credits), [Licenses](/docs/about/licenses), and [Privacy Policy](/docs/about/privacy) pages before contacting us regarding attribution and sources
- We may take a while to compile a response to your inquiry due to the way our community works. We'll let you know if we need more than 45 days to respond.

<!-- Fetch status -->
<script>
fetch('{{ site.baseurl }}/api/status.json')
.then(resp => resp.json())
.then(data => {
let wserviceData = data.wysc[0];
let wserviceElem = document.getElementById("wservice");
wserviceElem.innerHTML = "Loading...";
if (wserviceData.isup == true){
wserviceElem.innerHTML = `<b>${wserviceData.title}:</b>&ensp;<text class="text-success">✅</text>`;
} else {
wserviceElem.innerHTML = `<b>${wserviceData.title}:</b>&ensp;<text class="text-danger">${wserviceData.isupemoji}</text><br><div class="text-danger pt-1" style="font-size:0.9em">${wserviceData.notes}</div>`;
}
console.log(wserviceData);
});
fetch('https://srhpyqt94yxb.statuspage.io/api/v2/status.json')
.then(resp2 => resp2.json())
.then(data2 => {
let wdiscordData = data2;
let wdiscordElem = document.getElementById("wdiscord");
wdiscordElem.innerHTML = "Loading...";
if (wdiscordData.status.indicator == "none"){
wdiscordElem.innerHTML = `<b>Wysc Discord:</b>&ensp;<text class="text-success">✅</text>`;
} else {
wdiscordElem.innerHTML = `<b>Wysc Discord:</b>&ensp;<text class="text-danger">⚠️</text><br><a href="https://discordstatus.com" target="_blank" rel="noopener noreferrer" class="text-danger pt-1" style="font-size:0.9em">${wdiscordData.status.description}</a>`;
}
console.log(wdiscordData);
});
fetch('https://kctbh9vrtdwd.statuspage.io/api/v2/status.json')
.then(resp3 => resp3.json())
.then(data3 => {
let wgithubData = data3;
let wgithubElem = document.getElementById("wgithub");
wgithubElem.innerHTML = "Loading...";
if (wgithubData.status.indicator == "none"){
wgithubElem.innerHTML = `<b>Wysc GitHub:</b>&ensp;<text class="text-success">✅</text>`;
} else {
wgithubElem.innerHTML = `<b>Wysc GitHub:</b>&ensp;<text class="text-danger">⚠️</text><br><a href="https://githubstatus.com" target="_blank" rel="noopener noreferrer" class="text-danger pt-1" style="font-size:0.9em">${wgithubData.status.description}</a>`;
}
console.log(wgithubData);
});
</script>