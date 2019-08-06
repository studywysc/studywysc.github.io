---
layout: post
title:  "Bots"
category: discord
summary: "A list of Wysc's primary bots and their most used bot commands [Work in Progress]"
toc: true
---

## WSC Simulator (CoreBot)

#### Start Game

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


#### Careers and Study

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
<td>Find career paths that let you earn more money. As of this documentation's writing, the highest paid is the Medical path.</td>
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


#### Side Quests

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

#### Items

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

#### Unethical Behavior

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
<td>Free in-game money... sometimes. <em>(Exploit: If you get assigned community service, only do <kbd>.work</kbd> after 61 minutes to earn money back at your regular job rate)</em></td>
</tr>
<tr>
<th scope="row"><kbd>.steal</kbd></th>
<td>Steals in-game money from [@user]. Doesn't work if they deposited their money.</td>
</tr>
</tbody>
</table>
