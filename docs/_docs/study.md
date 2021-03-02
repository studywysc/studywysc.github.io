---
layout: jtdocs
title:  "Group Study"
summary: "Group Study is one of Wysc's primary features. Uniting students from across borders, timezones, and subjects, Wysc's Group Study services help create a warm, comfortable environment for everyone to study together."
redirect_from:
  - docs/discord/library/groupstudy
  - docs/discord/library/pomodoro
  - docs/groupstudy
  - docs/discord/study
  - pomodoro
  - docs/pomodoro

stlists: 20
stoptions:
  - "paging: false"
  - "sortable: false"
  - "searchable: false"
---

Pomodoro is a popular study technique where you study and take breaks in a designated cycle, most traditionally in 25-minute studying, 5-minute resting increments (stylized as 25/5). [Read more](https://en.wikipedia.org/wiki/Pomodoro_Technique){: target="_blank" rel="noopener"}

Wysc integrates [PomoBot](https://github.com/Intery/PomoBot){: target="_blank" rel="noopener"} to provide group study functionality for our members. Hosting is generously provided by [Puerøsøla](/docs/credits#PomoBot).


* TOC
{:toc}


### Get Started

The pomo bot was created to help you work progressively and focused on your studies and other productive activity. All credits go to Conatum, thank you very much for your efforts in programming this masterpiece!

Let’s have a look at the commands: they all start with the prefix **`,p`**

You want to study in a group, at the same time as other people are studying? The pomodoro timer is one of our core tools.

First, go to **`#study-groups`**. Type the following:

|Command|Description|
|---|---|
|,pgroups<br>,ptimers|shows you all group timers and their current status (both commands do the same thing)|
{:#stlist2}

Typing the command above shows you the three options to choose from. You then type 1 for Bubble Tea, 2 for Latte or 3 for Espresso.

There are several ways to join a timer. You can also directly join a timer by typing:

|Command|Description|
|---|---|
|,pjoin Bubble Tea|   to join the timer Bubble Tea|
|,pjoin Latte|        to join the timer Latte|
|,pjoin Espresso|     to join the timer Espresso|
{:#stlist3}

Another way to subscribe to a timer is by reacting with a green check mark (✅) on a message from the Bot that mentions a particular pomo timer. You can see that it is addressed to @Bubble Tea @Latte or @Espresso.

With you joining a timer, you will see a vc-channel that is dedicated for your pomo timer on the left. You can go there and study together with others on the same timer, and then enjoy a nice chat during your break.

If you want to hide distracting channels, you can enter Focus Mode. Type the command again to leave Focus Mode.

```
,pfocus
```

When you are done studying, you can leave the timer by typing:

```
,pleave
```

Now, have some fun out there and whenever a question or suggestion arises, don’t hesitate to put it in **`#support`** or to directly ask members in our channels – they will all gladly help you 😊 


### Notifications

If you want to set your notification level (DMs sent by the bot) use the command

|Command|Description|
|---|---|
|,pnotify|          all / warnings / kick / none|
{:#stlist13}


Have a look at the different notification levels:

|---|---|
|All|               all stage changes and status updates will be sent by DM|
|Warnings|          (default) DMs for inactivity warnings|
|Kick|              only receive a DM after being kicked for inactivity|
|None|              you won’t get any status updates via DM|
{:#stlist12}


### Statistics

After all your hard work, you probably want to know for how long you have been on the timer. 

|Command|Description|
|---|---|
|,phistory|                 displays a list of past sessions, showing your times per day (use the arrows for earlier days)|
|,plb (day/week/month)|     see all the member’s leaderboard in the last day / week / month (or all-time with just ,plb)|
{:#stlist15}


### Customization (Advanced)


If you want to edit a pomo, first join the timer that has to be edited. Please be sure that the others on it are okay with it. Two ideas of how to set up the pomo:

```
,pset Study, 25, Good luck!; Break, 10, Have a rest.
```

This will create 25 minutes to study with 10 minutes breaks, looping forever. Feeling more fancy? Try other patterns like: [35 mins study / 5 break / 40 study / 10 break]

```
,pset Work, 35, Do your best;
Break, 5, Have a drink;
Work, 40, Good luck;
Break, 10, Have a rest;
```


After setting your pomo, don’t forget to start your timer:

```
,pstart
```

Not enough of the pomo awesomeness? You might see that the second timer mentioned above runs in total with 90 minutes! Espresso does as well! When you arrange a pomo that’s duration is 90 minutes in total, you can


```
,psyncwith Espresso
```

And both pomodoro timers will have the big break at the same time! Isn’t that awesome! (note: your timer will jump to the position where the Espresso timer is running at that moment. You could as well synchronize the two later, when it fits best for you.)



Are you craving for a beer today? If you want to join the Pub, you can rename the timer you’re on:

```
,prename Pub
```

After your renaming of the pomo, everyone’s going to join the Pub!  
Feel the freedom of your creativity and change it to any other fun names 😊


You can edit any of the three timers to an original pomodoro session by

|Command|Description|
|---|---|
|,preset|           this will reset to 25/5/25/5/25/10|
{:#stlist10}



You can ask the bot to list all possible commands with:

```
,phelp
```

|Command|Description|
|---|---|
|,pstop|            this will stop the pomo for everyone, so be careful!|
|,pstatus|          shows the status of the pomo you’re in|
|,pgroups|          shows all the pomos together|
|,pfocus|           gives/removes the Focus role, which removes channels that would distract you from your study session|
{:#stlist11}



{% include jttables.html %}
