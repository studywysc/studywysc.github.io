---
layout: jtdocs
title:  "Bots"
summary: "The Wysc experience is powered by public bots that help provide services with a simple command!"
redirect_from:
  - docs/discord/bots
  - bots
  - docs/bots/groovy
  - docs/bots/music
  - music

stlists: 10
stoptions:
  - "paging: false"
  - "sortable: false"
#   - "searchable: false"

---

To help streamline the Wysc experience, **all bots with a ☕ use the `,` prefix.**


> ⚠️&ensp;**Any services featured is not an indication of the service's endorsement of Wysc.** Bots may collect information about your user account, usage data, and all messages you send. Wysc cannot control this. See our [Privacy Policy](/privacy) and links above for more info.
{:.border-yellow-400 .mb-8}


{% for i1 in site.data.credits %}{% if i1.cat == 'Discord Server' %}
<div class="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1 pb-4">
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


* TOC
{:toc}


### Wysc Social

|Command|Description|Bot|
|---|---|---|
|,rank|See your Wysc activity level|Tatsu|
|,ti \-\-set|Set your timezone|Paradox|
|,ti *@user*|See a user's timezone|Paradox|
{:#stlist1}


### Wysc Library

|Command|Description|Bot|
|---|---|---|
|$3x^{2+3x}$|Render LaTeX&ensp;&ndash;&ensp;[Learn more &#9656;](/docs/bots/paradox)|Paradox|
|,ask|Ask WolframAlpha (`,ask 4x^2`)|Paradox|
|,calc|Calculator (`,calc 1+2`)|Paradox|
|,rotate|Rotate most recent image in the channel|Paradox|
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
| ,play *linkhere*| Play a YouTube, Spotify, Soundcloud, or Bandcamp link | Groovy |
| ,search| Search YouTube|Groovy|
| ,queue| Show queue (`,q`) |Groovy|
| ,np | Show now playing |Groovy|
| ,skip| Skip to next song (`,next`) |Groovy|
{:#stlist3}


### Tatsu

![Tatsu.gg Logo](https://tatsu.gg/static/Logo.png){: .bg-stable-wysc-dark .p-8 .w-48}
[Tatsu Website](https://tatsu.gg/){: .jtbutton target="_blank" rel="noopener"}
[Tatsu Bot Commands](https://tatsu.fandom.com/){: .jtbutton target="_blank" rel="noopener"}
[Tatsu: Tatsugotchi](https://tatsu.fandom.com/wiki/Tatsugotchi){: .jtbutton target="_blank" rel="noopener"}

|Command|Description|Example|
|---|---|---|
|,profile|See your profile|
|,user|See info about yourself (or a @user)|`,user @Tatsu`|
|,top|See Wysc activity leaderboard|
|,daily|Get your daily Tatsu credits|
|,quest|See your Tatsu quests (for more Tatsu credits)|
|,pet|See your pet/home|[More info&ensp;&#9656;](https://tatsu.fandom.com/wiki/Tatsugotchi){: target="_blank" rel="noopener"}|
|,avatar| Get the link to your profile picture (or a @user's)|`,avatar @Tatsu`|
|,choose|Choose one out of a list of things|`,choose 1 | 2 | 3`|
|,coin |Flip a coin|
|,dice|Roll a [6 sided] dice [1] time|`,dice 1d6`
|,remind|Have the bot send a reminder in DM|`,remind eat in 20m`|
|,rps|Rock Paper Scissors|`,rps rock`|
|,wiki|Search Wikipedia|`,wiki dragon`|
{:#stlist4}

> One of Tatsu's most notable features, Tatsugotchi, lets you raise your own virtual pet!  
> In Wysc, **`t!tg`** is identical to **`,pet`**.  
> [See Tatsu: Tatsugotchi for more info&ensp;&#9656;](https://tatsu.fandom.com/wiki/Tatsugotchi){: target="_blank" rel="noopener"}
{:.border-purple-400}

### Groovy

![Groovy Logo](https://groovy.bot/img/logos/rounded.svg){: .p-2 .w-24}
[Groovy Website](https://groovy.bot/){: .jtbutton target="_blank" rel="noopener"}
[Groovy Bot Commands](https://groovy.bot/commands){: .jtbutton target="_blank" rel="noopener"}


| Command | Description | Example |
| --- | --- | --- |
| ,play | Play a YouTube, Spotify, Soundcloud, or Bandcamp link | `,play https://youtu.be/dQw4w9WgXcQ` |
| ,search| Search YouTube|`,search rick roll`|
| ,queue| Show queue |`,q`|
| ,np | Show now playing |
| ,skip| Skip to next song |`,next`|
| ,back | Go back to last song |`,prev`|
| ,disconnect | Force disconnect bot from voice call |`,dc`|
| ,fastforward| Fast forward a track by x seconds |`,ff 25`|
| ,loop | Cycle through repeat options |
| ,lyrics | Show lyrics for current song, or search for lyrics | `,lyrics Stayin Alive` |
| ,pause | Pause music |
| ,resume | Resume music |
| ,seek | Jump to a time in the track |
| ,shuffle | Shuffles queue |
{:#stlist5}

{% include jttables.html %}
