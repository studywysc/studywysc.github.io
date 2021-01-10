---
layout: jtdocs
title:  "CoreBot"
summary: "A user-friendly bot with lots of games and fun utilities inc. Connect4, Hangman, GuessWord, Trivia, Bets, Lottery, RSS, Career, Welcomer"
doctype: bot

redirect_from:
  - docs/bots/simulator

stlists: 10
stoptions:
  - "paging: false"
  - "sortable: false"
  - "searchable: false"
---

![CoreBot Logo](https://images.discordapp.net/avatars/421245481859940363/2efb67b328eb5c6ef66de5b33fabaa84.png?size=512){: .w-24}
[CoreBot - Top.gg](https://top.gg/bot/421245481859940363){: target="_blank" rel="noopener" .jtbutton}

|Prefix|Works in categories|Works in channels|
|---|---|---|
|.|None|#voice<br>#temporary-text<br>#bots-spam|
{:#stlist1}


* TOC
{:toc}


### Cafe Simulator

The Simulator experience is one of the most popular parts of CoreBot in Wysc. Climb your way up the career ladder!


#### Start Game

Anyone can get started by typing `.work` to start earning in-game money.

| Command | Description |
| :--- | :--- |
| .career | Displays user profile and progress |
| .work | Earns in-game money. The most essential command of the game. Maxes out at 60 minutes.|
| .deposit | Deposits in-game money into bank. Prevents people from stealing your money.|
{:#stlist2}



#### Careers and Study

To progress, the game includes a career ladder the player can climb. You can work your way up to earning over €150/hour.

| Command | Description |
| :--- | :--- |
| .jobs | Lists jobs you can apply for to earn more in-game money. Some have XP requirements \(determined by how many minutes you `.work`\).|
| .careerpath | Find career paths that let you earn more money. As of this documentation's writing, the highest paid is the Physician path.|
| .courses | Moving up the career paths sometimes require you to study and "graduate" a course. |
| .education | Lists the education you've earned.|
| .study | Lets you study. Maxes out at 60 minutes.|
{:#stlist3}


#### Items

Buying items will help drastically enhance gameplay, providing ease-of-life and monetary improvements.

| Command | Description |
| :--- | :--- |
| .giftshop |Buy items using in-game money to make your life easier.<br>-&ensp;Headphones: doing <code>.work</code> also does <code>.study</code> automatically<br>-&ensp;Debit Card: doing <code>.work</code> also does <code>.deposit</code> automatically<br>-&ensp;Bitcoin Machine: doing <code>.work</code> also does <code>.mine</code> automatically|
|.home|Buy a place to live. No more "You were robbed by a homeless person on the street".|
|.vehicle|Buy a vehicle. Some jobs require a car.|
{:#stlist4}


#### Side Quests

These side quests may enhance your gameplay, though are not required to succeed:
{:.mb-2}

- **Bitcoins** are a secondary currency in Corebot that can be sold for in-game money.
- **Stealing** is unethical and you may occasionally be punished with community service (earn only €1 for 60 minutes).
- **Gambling** is a luck-based feature that uses gems and in-game money.
{:.pb-4}

|Command|Category|Description|
|---|---|---|
| .mine | Bitcoins | Mine bitcoins |
| .bitcoins | Bitcoins | Lists your bitcoins |
| .sellbitcoin | Bitcoins | Sell a bitcoin |
| .crime | Stealing | Free in-game money... sometimes. |
| .steal *@user* | Stealing | Steals in-game money from *@user.*<br>Doesn't work if they deposited their money.|
| .gamble |Gambling|Gamble using in-game money. Can't choose how much to gamble. |
{:#stlist5}


### Commands

CoreBot has many features outside of Simulator.
{:.mb-2}

- **Games** are interactive single-player games you can play against the bot.
- **Gems** are a secondary currency in Corebot that is completely separate and is for cosmetic purposes only.
- **Utils** Utilities
{:.pb-4}

|Command|Category|Description|
|---|---|---|
|.battleship|Games|Play Battleship|
|.connect4|Games|Play Connect 4|
|.hangman|Games|Play Hangman|
|.claim<br>.timely | Gems | Mine gems. Maxes out at 24 hours.|
|.itemshop|Gems|Buy items using gems. These items do nothing.|
|.itemlist|Gems|List your gem items|
|.facts|Utils|Displays a 'Did you know' fun fact|
{:#stlist6}

<br>

For the full commands, type `.help` or `.commands` in #bots


<style>
h4 {padding-top:4rem;}
h5 {padding-top:4rem;}
</style>


{% include jttables.html %}