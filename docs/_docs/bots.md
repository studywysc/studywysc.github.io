---
layout: jtdocs
title:  "Bots"
summary: "Discord bots are powerful automation friends that can provide information back to you after entering a command."
redirect_from:
  - docs/discord/bots
  - bots
  - docs/bots/tatsu
  - docs/bots/groovy
  - docs/bots/music
  - music

stlists: 10
stoptions:
  - "paging: false"
  - "sortable: false"
#   - "searchable: false"

---

> ⚠️&ensp;**Any services featured is not an indication of the service's endorsement of Wysc.** The documentation on this website has been made by and for Wysc members and may not be applicable to other servers with the bots below.
{:.border-yellow-400 .mb-2}

> ⚠️&ensp;**Bots may collect information about you.** This may include account info, usage data, and all messages you send. Wysc cannot control this. [See our Privacy Policy for more info.](/privacy)
{:.border-yellow-400 .mb-2}

Wysc uses public bots to provide services in chat. To make remembering bot commands easier, we've set some bots to have the same prefix.
{:.pt-6}

{% for i1 in site.data.credits %}{% if i1.cat == 'Discord Server' %}
<div class="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1 pb-8">
<h5 class="mt-0 pt-1 pb-1 leading-5 font-bold">
  <a href="https://github.com/Intery/PomoBot" target="_blank" rel="noopener" class="text-decoration-none break-all">☕ PomoBot</a>
</h5>
{% for itemobj in i1.catobj %}{% if itemobj.admin != true %}
<h5 class="mt-0 pt-1 pb-1 leading-5 font-bold">
  <a href="{{ itemobj.courl }}" target="_blank" rel="noopener" class="text-decoration-none break-all">{% if itemobj.cafe == true %}☕ {% endif %}{{ itemobj.coname }}</a>
</h5>
{% endif %}{% endfor %}
{% for itemobjsm in i1.catobjsm[0].coslist %}{% if itemobjsm.admin != true %}
<a href="{{ itemobjsm.cosurl }}" target="_blank" rel="noopener" class="text-decoration-none break-all p-0 m-0">{% if itemobj.cafe == true %}☕ {% endif %}{{ itemobjsm.cosname }}</a>
{% endif %}{% endfor %}
</div>
{% endif %}{% endfor %}

***All bots with a ☕ use the prefix&ensp;`,` (comma)***


* TOC
{:toc}


### Wysc Social

|Command|Description|Bot|
|---|---|---|
|,rank|See your Wysc activity level|Tatsu|
|,ti \-\-set|Set your timezone|Paradox|
|,ti *@user*|See a user's timezone|Paradox|
|,choose|Choose one out of a list of things (`,choose 1 | 2 | 3`)|Tatsu|
|,coin |Flip a coin|Tatsu|
|,remind|Have the bot send a reminder in DM (`,remind eat in 20m`)|Tatsu|
{:#stlist1}


### Wysc Library

|Command|Description|Bot|
|---|---|---|
|$3x^{2+3x}$|Render LaTeX&ensp;&ndash;&ensp;[Learn more &#9656;](/docs/bots/paradox)|Paradox|
|,ask|Ask WolframAlpha (`,ask 4x^2`)|Paradox|
|,calc|Calculator (`,calc 1+2`)|Paradox|
|,rotate|Rotate most recent image in the channel|Paradox|
|,wiki|Search Wikipedia (`,wiki dragon`)|Tatsu|
|,pfocus|Hide distracting channels and only show Study channels|PomoBot|
|,pgroups|See a list of current Study Groups (`,ptimers`)|PomoBot|
|,psub<br>,punsub|Join/leave a Study Group (`,pjoin` `,pleave`)|PomoBot|
|,2p *linkhere*|(Studyradio) Play a YouTube, Spotify, or Soundcloud link|Rythm|
|,2q|(Studyradio) Queue|Rythm|
|,2skip|(Studyradio) Skip to next song in queue|Rythm|
{:#stlist2}


### Wysc Cafe

| Command | Description | Bot |
| --- | --- | --- |
|,profile|See your profile|Tatsu|
|,user|See info about yourself (or a @user) (`,user @Tatsu`)|Tatsu|
|,top|See Wysc activity leaderboard|Tatsu|
|,daily|Get your daily Tatsu credits|Tatsu|
|,quest|See your Tatsu quests (for more Tatsu credits)|Tatsu|
|,rps|Rock Paper Scissors (`,rps rock`)|Tatsu|
| ,play | Play a YouTube, Spotify, Soundcloud, or Bandcamp link (`,play https://youtu.be/dQw4w9WgXcQ`)|Groovy|
| ,search| Search YouTube (`,search rick roll`)|Groovy|
| ,queue| Show queue (`,q`)|Groovy|
| ,np | Show now playing |
| ,skip| Skip to next song (`,next`)|Groovy|
| ,back | Go back to last song (`,prev`)|Groovy|
| ,disconnect | Force disconnect bot from voice call (`,dc`)|Groovy|
| ,fastforward| Fast forward a track by x seconds (`,ff 25`)|Groovy|
| ,loop | Cycle through repeat options |
| ,lyrics | Show lyrics for current song, or search for lyrics (`,lyrics Stayin Alive`)|Groovy|
| ,pause | Pause music |Groovy|
| ,resume | Resume music |Groovy|
| ,seek | Jump to a time in the track |Groovy|
| ,shuffle | Shuffles queue |Groovy|
{:#stlist3}

> For a guide on Cafe Simulator, see CoreBot<br>
> [See CoreBot](/docs/bots/corebot){:.jtbutton}
{:.border-purple-400 .mb-2}

> For a guide on raising your own virtual pet, see Tatsugotchi  
> In Wysc, **`t!tg`** is identical to **`,pet`**.<br>
> [See Tatsu: Tatsugotchi](https://tatsu.fandom.com/wiki/Tatsugotchi){: target="_blank" rel="noopener" .jtbutton}
{:.border-purple-400 .mb-2}

{% include jttables.html %}
