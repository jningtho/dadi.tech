---
date: 2017-07-04
title: Roadmap Update
handle: roadmap-update-050717
author: James Lambie
preface: DADI Web 3.0 released with support for multiple template engines, plus new features for DADI API
category: roadmap
---

# 4th July 2017

## DADI Web

[Version 3.0.0](https://github.com/dadi/web/releases/tag/v3.0.0) was released today with support for multiple template engines. The result is a much leaner core, with templating functionality delegated to plugins that must be installed along with Web. We've included a [DustJS engine](https://github.com/dadi/web-dustjs) by default and will shortly be publishing a guide to writing a template engine plugin to support your own favourite template language.

### Issues resolved

* [#165](https://github.com/dadi/web/issues/165): find matching routes after all middleware functions pass
* [#163](https://github.com/dadi/web/issues/163): allow pages and partials to exist in subdirectories
* [#103](https://github.com/dadi/web/issues/103): support multiple for template engines

### Issues in progress

* [#155](https://github.com/dadi/web/issues/155): support for HTTP/2 and asset push


## DADI API

### Version 3.0 - API Data Connectors

With decoupled data storage functionality shifted to the release of Version 3.0 in a couple of weeks, we're taking the opportunity to add a few more features into API. Some of the GitHub issues identified to become part of version 3.0 can be seen on the [API Project board](https://github.com/dadi/api/issues?q=is%3Aopen+is%3Aissue+project%3Adadi%2Fapi%2F3). 

### Issues in progress

* [PR #310](https://github.com/dadi/api/pull/310): better errors from hooks
