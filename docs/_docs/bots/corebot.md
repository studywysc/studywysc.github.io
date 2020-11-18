---
layout: jtdocs
title:  "Simulator (CoreBot)"
summary: "Cafe Simulator, WSC Simulator"
redirect_from:
  - docs/bots/simulator
---

![CoreBot Logo](https://images.discordapp.net/avatars/421245481859940363/2efb67b328eb5c6ef66de5b33fabaa84.png?size=512){: .w-1/2 .sm:w-1/4}

[CoreBot - Top.gg](https://top.gg/bot/421245481859940363){: .jtbutton}

### Basics

Prefix: `.`

* \#bots

### Commands

Italics are phrases you can replace with your own input.



#### Start Game

Anyone can get started by typing `.work` to start earning in-game money.

| Command | Description |
| :--- | :--- |
| .career | Displays user profile and progress |
| .work | Earns in-game money. The most essential command of the game. Maxes out at 60 minutes.|
| .deposit | Deposits in-game money into bank. Prevents people from stealing your money.|



#### Careers and Study

To progress, the game includes a career ladder the player can climb. You can work your way up to earning over €150/hour.

| Command | Description |
| :--- | :--- |
| .jobs | Lists jobs you can apply for to earn more in-game money. Some have XP requirements \(determined by how many minutes you `.work`\).|
| .careerpath | Find career paths that let you earn more money. As of this documentation's writing, the highest paid is the Physician path.|
| .courses | Moving up the career paths sometimes require you to study and "graduate" a course. |
| .education | Lists the education you've earned.|
| .study | Lets you study. Maxes out at 60 minutes.|


#### Items

Buying items will help drastically enhance gameplay, providing ease-of-life and monetary improvements.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Command</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">.giftshop</td>
      <td style="text-align:left">
        <p>Buy items using in-game money to make your life easier.
          <br />
        </p>
        <ul>
          <li>Headphones: doing <code>.work</code> also does <code>.study</code> automatically
            <br
            />
          </li>
          <li>Debit Card: doing <code>.work</code> also does <code>.deposit</code> automatically
            <br
            />
          </li>
          <li>Bitcoin Machine: doing <code>.work</code> also does <code>.mine</code> automatically</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">.home</td>
      <td style="text-align:left">Buy a place to live. No more &quot;You were robbed by a homeless person
        on the street&quot;.
        <br />
      </td>
    </tr>
    <tr>
      <td style="text-align:left">.vehicle</td>
      <td style="text-align:left">Buy a vehicle. Some jobs require a car.
        <br />
      </td>
    </tr>
  </tbody>
</table>

#### Side Quests

These side quests may enhance your gameplay, though are not required to succeed.

##### Bitcoins
Bitcoins are a secondary currency in Corebot that can be sold for in-game money.

| Command | Description |
| :--- | :--- |
| .mine | Mine bitcoins |
| .bitcoins | Lists your bitcoins |
| .sellbitcoin | Sell a bitcoin |

##### Gems
Gems are a secondary currency in Corebot that is completely separate and is for cosmetic purposes only.

| Command | Description |
| :--- | :--- |
| .timely, .claim | Mine gems. Maxes out at 24 hours.
 |
| .itemshop | Buy items using gems. These items do nothing. |
| .itemlist | List your gem items |

##### Stealing
Stealing is unethical and you may occasionally be punished with community service \(earn only €1 for 60 minutes\).

<table>
  <thead>
    <tr>
      <th style="text-align:left">Command</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">.crime</td>
      <td style="text-align:left">Free in-game money... sometimes.</td>
    </tr>
    <tr>
      <td style="text-align:left">.steal <em>@user</em>
      </td>
      <td style="text-align:left">
        <p>Steals in-game money from <em>@user</em>.</p>
        <p>Doesn&apos;t work if they deposited their money.
          <br />
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Full Commands

Type `.help` in \#bots

<style>
h4 {padding-top:6rem;}
h5 {padding-top:5rem;}
</style>