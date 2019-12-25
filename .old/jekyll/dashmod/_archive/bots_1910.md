---
layout: post
title:  "Bots"
category: discord
summary: "A list of Wysc's primary bots and their most used bot commands."
toc: true
---

<style>
code.highlighter-rouge {
    padding: .2rem .4rem !important;
    font-size: 87.5% !important;
    color: #fff !important;
    background-color: #212529 !important;
    border-radius: .2rem !important;
}
</style>


## Study Bots

- [TeXit](#texit)

<hr style="width:25%;margin-top:3em;">

##### TeXit

- Prefix: `,`
- Channels:
    - All Wysc Library channels
    - #voice
    - #whiteboard
    - #bots-spam
- Basic Commands:
    - `$some math latex here$` - LaTeX generator
    - `$2x^2$` - 2x²
    - `$x_1$` - x₁
    - `$\frac{1}{2}$` - ½
    - `$\sqrt{41}$` - √41
    - `,wolf anythinghere` - Search WolframAlpha
    - `,calc anythinghere` - Calculate simple math problems

<a href="https://top.gg/bot/510789298321096704" target="_blank"><button type="button" class="btn btn-outline-dark m-4">Full commands&ensp;&#9656;</button></a>
<a href="https://www.overleaf.com/learn/latex/Mathematical_expressions" target="_blank"><button type="button" class="btn btn-outline-dark m-4">Intro to LaTeX by Overleaf&ensp;&#9656;</button></a>


## Music Bots

- [Groovy](#groovy)
- [Wysc Radio](#wysc-radio-watora)
- [Yui](#yui)

<hr style="width:25%;margin-top:3em;">

##### Groovy

- Prefix: `==`
- Channels:
    - #voice
    - #bots-spam 
- Basic Commands:
    - `==play youtubeurlhere`
    - `==disconnect`

<a href="https://groovy.bot/commands" target="_blank"><button type="button" class="btn btn-outline-dark m-4">Full commands&ensp;&#9656;</button></a>

##### Wysc Radio (Watora)

- Prefix: `wysc`
- Channels:
    - #voice
    - #bots-spam 
- Basic Commands:
    - `wyscradio play relaxbeats`
    - `wyscradio list`
    - `wyscplay youtubeurlhere`
    - `wyscstop`

<a href="https://docs.watora.xyz/" target="_blank"><button type="button" class="btn btn-outline-dark m-4">Full commands&ensp;&#9656;</button></a>

##### Yui

- Prefix: `y!`
- Channels:
    - #voice
    - #bots-spam 
- Basic Commands:
    - `y!play youtubeurlhere`
    - `y!disconnect`

<a href="https://discordyui.net/commands" target="_blank"><button type="button" class="btn btn-outline-dark m-4">Full commands&ensp;&#9656;</button></a>

## Entertainment Bots

- [Pokecord](#pokecord)
- [WSC Simulator](#wsc-simulator-corebot)

<hr style="width:25%;margin-top:3em;">

##### Pokecord

- Prefix: `p!`
- Channels:
    - #bots-spam 
- Basic Commands:
    - `p!start` - All new users must run this command first
    - `p!catch nameofpokemonhere` - Catch a pokemon that appears
    - `p!hint` - Get a hint for pokemon name
    - `p!info` - Your current main pokemon
    - `p!pokemon` - All the pokemon you caught
    - `p!switch numberhere` - Switch your main pokemon to \[number\], listed from p!pokemon
    - `p!moves` - See what moves your pokemon can learn
    - `p!learn nameofmovehere` - Learn that move for your pokemon
    - `p!duel @user` - Duel a user

<a href="https://www.pokecord.com/commands" target="_blank"><button type="button" class="btn btn-outline-dark m-4">Full commands&ensp;&#9656;</button></a>

##### WSC Simulator (CoreBot)

###### Start Game

<table class="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Info</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row"><kbd>.career</kbd></th>
<td>Displays user profile and progress</td>
</tr>
<tr>
<th scope="row"><kbd>.work</kbd></th>
<td>Earns in-game money. The most essential command of the game. Maxes out at 60 minutes.</td>
</tr>
<tr>
<th scope="row"><kbd>.deposit</kbd></th>
<td>Deposits in-game money into bank. Prevents people from stealing your money.</td>
</tr>
<tr>
<th scope="row"><kbd>.jobs</kbd></th>
<td>Lists jobs you can apply for to earn more in-game money. Some have XP requirements (determined by how many minutes you've <kbd>.work</kbd>ed).</td>
</tr>
</tbody>
</table>


###### Careers and Study

<table class="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Info</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row"><kbd>.careerpath</kbd></th>
<td>Find career paths that let you earn more money. As of this documentation's writing, the highest paid is the Physician path.</td>
</tr>
<tr>
<th scope="row"><kbd>.courses</kbd> <kbd>.education</kbd></th>
<td>Moving up the career paths sometimes require you to study and "graduate" a course. Education command lists the education you've earned.</td>
</tr>
<tr>
<th scope="row"><kbd>.study</kbd></th>
<td>Lets you study. Maxes out at 60 minutes.</td>
</tr>
</tbody>
</table>


###### Side Quests

<table class="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Info</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row"><kbd>.mine</kbd></th>
<td>Mine "bitcoins". Can be sold for in-game money.</td>
</tr>
<tr>
<th scope="row"><kbd>.timely</kbd> <kbd>.claim</kbd></th>
<td>Mine "gems". A second in-game currency that's mostly useless. The two commands do the same thing. Maxes out at 24 hours.</td>
</tr>
</tbody>
</table>

###### Items

<table class="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Info</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row"><kbd>.giftshop</kbd></th>
<td>Buy items using in-game money to make your life easier.
<ul>
<li>Headphones: doing <kbd>.work</kbd> also does <kbd>.study</kbd> automatically</li>
<li>Debit Card: doing <kbd>.work</kbd> also does <kbd>.deposit</kbd> automatically</li>
<li>Bitcoin Machine: doing <kbd>.work</kbd> also does <kbd>.mine</kbd> automatically</li>
</ul>
</td>
</tr>
<tr>
<th scope="row"><kbd>.home</kbd></th>
<td>Buy a place to live. No more "You were robbed by a homeless person on the street".</td>
</tr>
<tr>
<th scope="row"><kbd>.transport</kbd></th>
<td>Buy a vehicle. Some jobs require a car.</td>
</tr>
<tr>
<th scope="row"><kbd>.itemshop</kbd> <kbd>.itemlist</kbd></th>
<td>Buy items using gems. These items do nothing. Itemlist command shows your gem items.</td>
</tr>
</tbody>
</table>

###### Unethical Behavior

<table class="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Info</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row"><kbd>.crime</kbd></th>
<td>Free in-game money... sometimes.</td>
</tr>
<tr>
<th scope="row"><kbd>.steal</kbd></th>
<td>Steals in-game money from [@user]. Doesn't work if they deposited their money.</td>
</tr>
</tbody>
</table>
