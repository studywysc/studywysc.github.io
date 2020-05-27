---
layout: jtdocs
title:  "Bots"
redirect_from:
  - docs/discord/bots
  - bots

botslist:
    - bottitle: Basics
      botcats:
        - Command
        - Description
        - Bot
      botcomms:
        - botcomm: ",rank"
          botdesc: See your Wysc activity level
          botname: Tatsumaki

        - botcomm:
            - ",ti"
            - ",ti --set"
            - ",ti @user"
          botdesc:
            - See your timezone (must set your time first)
            - Set your timezone
            - See another user's timezone
          botname: Paradøx
          

---

The Wysc experience relies on the use of public bots. Bots are micro-services that let you send quick commands and receive quick bits of information back, directly in the chat! All bots providing an essential part of the Wysc experience are unified under the `,` prefix.

Wysc adds attribution for the bots we use [under the Discord Server section of our Credits page](/docs/about/credits). If you are a developer and notice your bot is in Wysc but not under our Credits page, [let us know!](/docs/contact)

**Wysc's usage of these bots do not imply endorsement, sponsorship, or partnerships of any sort, in any direction.** They may also collect personally identifiable information, starting as of the time you join Wysc Discord, and lasting up to perpetuity. [Refer to our Privacy Policy for more information about how your data may be collected.](/docs/privacy)


This document is currently a work in progress. Help contribute by pressing the GitHub logo to the top of the website!

<!-- <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" type="text/css"> -->
<script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" type="text/javascript"></script>

{% for bots in page.botslist %}
{% if bots.bottitle %}
<h3>{{ bots.bottitle }}</h3>
{% endif %}
<table id="docspbotslist">
<thead>
<tr>
{% for bcats in bots.botcats %}
<th>{{ bcats }}</th>
{% endfor %}
</tr>
</thead>
<tbody>
{% for bcomms in bots.botcomms %}
<tr>
{% if bcomms.botcomm %}
<td>
{% for botcommand in bcomms.botcomm %}
<code>{{ botcommand }}</code><br>
{% endfor %}
</td>
{% endif %}
{% if bcomms.botdesc %}
<td>
{% for botdescript in bcomms.botdesc %}
{{ botdescript }}<br>
{% endfor %}
</td>
{% endif %}
{% if bcomms.botperms %}
<td>{{ bcomms.botperms }}</td>
{% endif %}
{% if bcomms.botname %}
<td>{{ bcomms.botname }}</td>
{% endif %}
{% if bcomms.botexam %}
<td>
{% for botexample in bcomms.botexam %}
{{ botexample }}<br>
{% endfor %}
</td>
{% endif %}
</tr>
{% endfor %}
</tbody>
</table>
{% endfor %}

<script>
const dataTable = new window.simpleDatatables.DataTable("#docspbotslist");
</script>