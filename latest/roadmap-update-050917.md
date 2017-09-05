---
date: 2017-09-05
title: Roadmap Update
handle: roadmap-update-040917
author: James Lambie
preface: DADI releases are coming thick and fast, with milestone releases of both API and Web due immanently, hot on the heals of CDN version 1.12.0, released last week.
category: roadmap
---

## DADI API

We're still working hard on some of the new features that make up the next release of DADI API 3.0.0.

One of these is the data connectors feature, allowing you to choose which underlying database you use (given availability of an appropriate data connector).

Another is the addition of a stable search interface. Search has been part of API for some time but it has never quite ticked all the right boxes - we're busy ticking some more of them.

Both pieces of functionality aren't far from completion - when they're ready, so is Version 3.0.0! 

## DADI CDN

Version 1.12.0 has been released with Sharp as the image processor under the hood. It can be installed with the following command:

`npm install @dadi/cdn@latest`

## DADI Web

A new release of DADI Web is imminent, due within the next week. This release will be a major version release, bumping DADI Web to 4.0.0.

The new release focuses heavily on performance improvements and simplifying of the codebase, along with removal of some dependencies that added little benefit.

Version 4.0.0 brings _us_ an easier to maintain codebase and brings _you_ a faster experience for the end user browsing your DADI Web-backed application. Big thanks to [@abovebored](https://github.com/abovebored) for the solid development effort that has resulted in  Version 4.0.0.

## DADI Web - Template Engines

### Pug.js
A new version of the Pug.js template engine is avaiable, with the ability to load helper functions which will be added to template locals.

### ES6 Template Literals

Not content with making DADI Web snappier, [@abovebored](https://github.com/abovebored) has provided a new engine making use of ES6 template literals. See [the repo](https://github.com/dadi/web-es6-templates) for details on installing.

### How about your favourite templating language as a Web engine?

Writing a template engine for your favourite templating language is child's play! Get started with the [sample engine on GitHub](https://github.com/dadi/web-sample-engine).
