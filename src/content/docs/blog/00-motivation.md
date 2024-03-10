---
title: Motivation
description: The background on why Chainflow was created.
layout: "/src/layouts/DocsLayout.astro"
slug: "blog/motivation"
sidebar:
  order: 0
---

## What inspired Chainflow?

In my development work, I often come across situations that require me to set up test data to demonstrate features to users or check if implementations are working properly. Due to the complexity of business requirements in these apps, setting up that test data can be troublesome. There are also times where I have to do a lot of repeated manual clicking and typing just to get past certain stages of the app when moving between the things that I want to test.

This prompted me to write scripts to quickly automate these mundane tasks that were irrelevant to the features I was focused on. I wanted those scripts to masquerade as an actual user doing all that clicking and typing for me - using the app's actual service endpoints, not SQL/DB scripts, so that important side effects are triggered and I don't brute force my way through the app which can risk missing out bugs or introducing unusual data into the app. While searching for tools that could help me, I came across [Postman Flows](https://www.postman.com/product/flows/) which involved creating a series of API endpoint calls and seemed suited for what I wanted to do. However, I wanted more control over the process in order to better validate and manipulate the data that was moving around in between endpoint calls. Plus, I wanted something that I could easily run from the CLI without needing to open and configure a full GUI application.

## Building an open source library

I'm incredibly passionate about building software, so I've been interested in open source for a while but found it tricky to get into. I didn't think it made sense for me to shove my way into a random OSS project I'm unfamiliar with and start throwing out contributions. Instead, now that I have found pain points in my own dev work, it made a lot of sense to create my own open source project to explore solutions and solve those pains while also using it as an opportunity to sharpen my engineering skills.

Thus, I began writing a library in my free time that helps create and organize sets of API endpoint calls, which I refer to as API call workflows. I focus on composability so that the common building blocks (e.g., login APIs) of each workflow can be reused and more complex processes can be flexibly built up from simpler ones. I try to keep Chainflow as ergonomic as developer tools should be. Importantly, Chainflow is a library and not a framework, so us engineers have the freedom to use it as much as we see fit. If you see better ways to use Chainflow, I'm all for it.

## The future of Chainflow

I'm still writing my own helper scripts with Chainflow, so I'm learning and making adjustments as I go. If you try it out and find things that don't make sense or could be better, I'd love to hear it.

I'm exploring potentially useful features for the library, such as API performance measurement, a CLI tool to make it even easier to trigger chainflows from the terminal, or even an IDE extension to manage and gain an overview of your chainflows.

This project is still very young, and thoughts are very welcome!
