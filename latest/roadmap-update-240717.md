---
date: 2017-07-24
title: Roadmap Update
handle: roadmap-update-240717
author: Jim Lambie
preface: Updates to DADI CDN (including replacement of lwip with Sharp), plus changes to API and Web
category: roadmap
---

## DADI CDN

We are currently pinned to Node.js 6.9.2 for most CDN installations, as [lwip](https://github.com/EyalAr/lwip/) will not build on more recent versions of Node.js. For this reason, and to try to improve image processing performance, we have been investigating a number of image manipulation modules to find one that could replace the existing use of lwip in CDN.

We've decided to go with [Sharp](http://sharp.dimens.io/en/stable/) for the replacement. You can see from the performance [test results](http://sharp.dimens.io/en/stable/performance/) on the Sharp website that it's much faster than lwip and also many times faster than another of our other replacement options, dependency-free [jimp](https://github.com/oliver-moran/jimp): running a test using a Buffer as both input and output, Sharp averages 29.08 operations per second, while lwip manages just 1.87 operations per second. This shows Sharp to be around 15 times faster than lwip.

Other than improved performance, Sharp offers us a smoother transition into adding plugin support to CDN and being able to offer features such as dynamic text and image compositing.

The first version of CDN to ship with Sharp as the image processor will be available within the next month.

## DADI Web

[Version 3.0.0](https://github.com/dadi/web/releases/tag/v3.0.0) was released three weeks ago, with support for multiple template engines. A [DustJS engine](https://github.com/dadi/web-dustjs) is included by default but we also have engines for Pug.js (already being used in production!) and Handlebars.js. Writing a template engine for your favourite templating language is relatively easy - a [sample engine](https://github.com/dadi/web-sample-engine) is available on GitHub for those interested.

## DADI API

### Version 3.0 - API Data Connectors

We're taking our time with the API Version 3.0 release, as it has a number of breaking changes that need to be tested thoroughly and communicated to all existing users.

Along with decoupled data storage functionality via new DADI Api Data Connector modules, we're tackling some of the issues we've wanted to get to for some time. The issues can be seen on the [API Project board](https://github.com/dadi/api/issues?q=is%3Aopen+is%3Aissue+project%3Adadi%2Fapi%2F3). 

### Version 2.2.1

Last week API Version 2.2.1 was released to NPM. The major feature of this release is the ability to use custom errors. Some more details regarding custom errors in the [pull request](https://github.com/dadi/api/pull/310).

### Issues resolved

* [PR #315](https://github.com/dadi/api/pull/315): delete doesn't work when passed nested _id query
* [PR #311](https://github.com/dadi/api/pull/311): failure to insert large Reference documents
* [PR #306](https://github.com/dadi/api/pull/306): API hangs when empty arrays inserted into reference field
* [PR #289](https://github.com/dadi/api/pull/289): better errors from hooks

