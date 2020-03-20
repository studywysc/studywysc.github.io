---
layout: kbdocs
title:  "Getting Started"
category: "Contributor Hub"
catsub: "GitHub"
last_updated: 19 Mar 2020
---

The following are prerequisites:

- [A GitHub account (free)](https://github.com/)
- [A web browser (free)](https://www.mozilla.org/en-US/firefox/new/)

### Directory

This guide is split into three parts. Navigate them from the sidebar to the left (PC) or from the Table of Contents dropdown at the top (mobile).

- [**Getting Started**](#terms) starts from the basics to let you know what GitHub is and what some of the words being used mean
- [**Wysc GitHub**](github) introduces you to how the Wysc repository is set up, so that you know how to navigate it
- [**Wysc Website**](website) introduces you to how editing a file on the Wysc Website works

### Terms

- Repo/Repository
    - A git repository, or "repo", is the home of a project.
    - Git is a technology that lets developers keep track of changes to their project easily, and GitHub makes Git nice and easy to use.
- Branches
    - The way git repositories work is that you have different paths forward. You never change the main project directly. The goal is to always split apart everything.
    - There's a `master` branch that shows the current website website everyone sees, and a `dev` branch that you make edits to.
    - All changes go in the `dev` branch, and then they get *merged* into `master` when you're ready, so that the website only updates when everything is finalized.
- Fork a project
    - You can't directly make changes to someone else's repo/project. What you do is make a copy of, or "fork", the repo and then start making changes in your personal copy.
- Commit changes
    - Every time you make a change to a file, "Commit changes" is your save button.
    - When you're done making all the changes you want, you'll now have a list of "commits" that show what changes you've made and to which file.
- Pull request
    - When you're done making all the changes you want to your own copy, you want your changes to go back to the main repo/project.
    - To do that, you start a "pull request", which lets the other person know you made changes!
    - You set the options to point from your repo to the main repo, write a short explanation for what you changed, then click Submit
    - When your pull request is approved, your changes will now show up in their code!
- Markdown
    - Markdown is a way to add formatting to text files, including **bolding**, __underlines__, and [links](#introduction). [See here for a guide on how to use Markdown!](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
