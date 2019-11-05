---
layout: maincat
title:  "Discord"
redirect_from: ../{{ page.title }}
---

<style>
#{{ page.title }} {
display:none;
}
</style>

<ul>
{% for page in site.discord %}
<li id="{{ page.title }}"><a href="https://gitnisyl.github.io/wysc/docs{{ page.url }}">{{ page.title }}</a></li>
{% endfor %}
</ul>