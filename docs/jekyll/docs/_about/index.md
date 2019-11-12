---
layout: maincat
title:  "About"
redirect_from: ../{{ page.title }}
---

<style>
#{{ page.title }} {
display:none;
}
</style>

<ul>
{% for page in site.about %}
<li id="{{ page.title }}"><a href="{{ site.url }}{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a></li>
{% endfor %}
</ul>