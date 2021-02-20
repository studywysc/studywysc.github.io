---
layout: jtdocs
title:  "Discord Two-Factor Authentication (2FA) How-To Guide"
title-sub: "Contributing"
summary: "Discord requires 2FA for moderation permissions. You may need 2FA before you can take moderation actions as a Tree user."
redirect_from:
  - 2fa
  - docs/2fa
  - docs/dev/2fa
---

* TOC
{:toc}


### What is 2FA?

Two-Factor Authentication is a second way to prove that you are who you really are.

- **Your First Device:** Username and Password on your computer
  - Anyone can steal your password, log in, and pretend to be you
- **Your Second Device:** A 6-digit code generated on your phone
  - The 6-digit code is a "second password" that you have physically
  - The 6-digit code changes automatically every 30 seconds
  - If someone else has your password, they still can't log in without the code from your phone

By requiring two devices instead of one, Discord will know that anyone who logs into your account must have both your password **and** your phone. That means it is probably you trying to sign in and not a hacker.



### Getting Started

> ⚠️&ensp;**DO NOT USE GOOGLE AUTHENTICATOR.** Google doesn't back up your codes. If your phone breaks, you will lose all your codes forever. No codes = can't log in.
{:.border-red-600 .mb-4}

#### 1. Download a 2FA App on your Phone

We recommend **Microsoft Authenticator**:  
[App Store (iPhone/iOS)](https://apps.apple.com/app/microsoft-authenticator/id983156458){: .jtbutton target="_blank" rel="noopener"} 
[Google Play Store (Android)](https://play.google.com/store/apps/details?id=com.azure.authenticator){: .jtbutton target="_blank" rel="noopener"}


#### 2. Open Discord on your PC

*Source: [Discord - Setting up Two-Factor Authentication](https://support.discord.com/hc/en-us/articles/219576828-Setting-up-Two-Factor-Authentication)*  
![Open Settings from the bottom left corner](https://support.discord.com/hc/article_attachments/115000642651/Setting_up_2FA_first_step.png){:.mb-2}
![Scroll down and click "Enable Two-Factor Auth"](https://support.discord.com/hc/article_attachments/360058182311/Capture13.jpg){:.mb-2}
![A QR code should now be showing on the screen](https://support.discord.com/hc/en-us/article_attachments/207611868/QRTime.png){: .w-full .sm:w-3/4 .md:w-1/2}


#### 3. Scan the QR code into your 2FA App

- Open Microsoft Authenticator on your phone
- Click "Scan a QR code"
- Aim the camera at the Discord QR code on PC
- It'll save the code and "Discord" will appear on the list

Click Discord, and a 6-digit code will show up. Type that into Discord.

You're ready!


### What if I lose or break my phone?

For Discord, you're in luck :) It's okay if you didn't backup your codes.

Give this a try from a computer you're signed in on:

[Discord: Lost Two-Factor Codes](https://support.discord.com/hc/en-us/articles/115001221072-Lost-Two-Factor-Codes){: .jtbutton target="_blank" rel="noopener"}

**For your other accounts, you will need to have set up backup first.** Microsoft Authenticator lets you backup your codes using iCloud (on iPhone/iPad) or OneDrive (on Android). Once it is set up, you are done! The next time you install the app, restore from your backup and all your codes will be there waiting for you :)

[Microsoft: Back up and recover account credentials using the Microsoft Authenticator app](https://docs.microsoft.com/en-us/azure/active-directory/user-help/user-help-auth-app-backup-recovery){: .jtbutton target="_blank" rel="noopener"}
