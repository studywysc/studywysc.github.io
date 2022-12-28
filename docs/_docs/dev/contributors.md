---
layout: jtdocs
title:  "Contributors"
title-sub: "Contributing"
summary: "This page contains a list of notable users whose contributions have helped make the Wysc experience you know and love possible. The list may not be fully comprehensive."

creditslist:
  - cat: Ecosystem Supporter 🏕
    catobj:
      - coname: Georgedf
      - coname: Brian Walker
      - coname: teru
      - coname: Trevish
      - coname: Conatum
      - coname: Puerøsøla
      - coname: Paco
      - coname: shimutan
      - coname: Mayo

---

If you have a role shown below but are not credited, please reach out to us at our Docs page and we will update the listing!

Username sort order is determined by [Paradøx](../../about/legal/credits#parad%C3%B8x-texit).


<style>/* Bootstrap import */
.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.media{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}img.docucreditlogos{max-width:64px}.media-body{-ms-flex:1;flex:1}@media (min-width:768px){.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}
</style>

{% for item in page.creditslist %}
<h3>{{ item.cat }}</h3>
<div class="container-fluid">
{% if item.catobj %}
<div class="row pt-3">
{% for itemobj in item.catobj %}
<div class="col-12 col-md-6">
<div class="media pt-2">
{% if itemobj.coimg %}<img src="{{ itemobj.coimg }}" class="docucreditlogos{% if itemobj.rounded == 'circle' %} rounded-full{% elsif itemobj.rounded == true %} rounded{% endif %}{% if itemobj.bglight == true %} bg-stable-wysc-gray mr-6 ml-2 my-2{% elsif itemobj.bgdark == true %} bg-stable-wysc-dark mr-6 ml-2 my-2{% else %} mr-4 p-2{% endif %}" alt="{{ itemobj.coname }} logo">{% endif %}
<div class="media-body">
<h4 class="mt-0 py-0"><a href="{{ itemobj.courl }}" target="_blank" rel="noopener"
class="text-decoration-none">{{ itemobj.coname }}</a></h4>
</div>
</div>
</div>
{% endfor %}
</div>
{% endif %}
{% if item.catobjsm %}
{% for itemobjsm in item.catobjsm %}
<div class="row pt-3">
<div class="col">
<h4 class="mt-0 mb-2 py-0">{{ itemobjsm.costitle }}</h4>
{% if itemobjsm.coslist %}
<ul>
{% for itemcos in itemobjsm.coslist %}
<li>{% if itemcos.cosurl %}
<a href="{{ itemcos.cosurl }}" target="_blank" rel="noopener"
class="text-decoration-none">{{ itemcos.cosname }}</a>
{% else %}
{{ itemcos.cosname }}
{% endif %}
{% if itemcos.cosline %} - {{ itemcos.cosline }}{% endif %}</li>
{% endfor %}
</ul>
{% endif %}
</div>
</div>
{% endfor %}
{% endif %}
</div>
{% endfor %}

<div></div>

<h3>GitHub Contributors</h3>
<div class="container-fluid">
<div class="row pt-3" id="githubContributors">
<div class="col-12 col-md-6"><div class="media pt-2"><div class="media-body"><h4 class="mt-0 py-0"><a href="/github" target="_blank" rel="noopener" class="text-decoration-none">Loading...</a></h4></div></div></div>
</div>
</div>

<script>
fetch('https://api.github.com/repos/studywysc/wysc/contributors')
  .then(response => response.json())
  .then(data => {
    let contribHtml = document.getElementById("githubContributors")
    let a = ""
    contribHtml.innerHTML = ""
    for (i = 0; i < data.length; i++) {
      a = data[i].login
      if (a.includes("[bot]") == true) {
        console.log("excluded "+a+" for being a bot")
      } else {
        contribHtml.insertAdjacentHTML('beforeend', `<div class="col-12 col-md-6"><div class="media pt-2"><div class="media-body"><h4 class="mt-0 py-0"><a href="/github" target="_blank" rel="noopener" class="text-decoration-none">${a}</a></h4></div></div></div>`)
      }
    }
  });
</script>
