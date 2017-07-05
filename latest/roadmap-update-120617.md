---
date: 2017-06-12
title: Roadmap Update
handle: roadmap-update-120617
author: James Lambie
preface: New features for DADI API, plus testing for DADI WEB ahead of v3.0 release
category: roadmap
---

## DADI API

### API Data Connectors and Version 3.0

With decoupled data storage functionality shifted to the next release, version 3.0, we're taking the opportunity to add a few more features into API. Some of the GitHub issues identified to become part of version 3.0 can be seen on the [API Project board](https://github.com/dadi/api/issues?q=is%3Aopen+is%3Aissue+project%3Adadi%2Fapi%2F3). 

### Issues resolved

* [#298](https://github.com/dadi/api/issues/298): write current document state to revision history on delete

## DADI Web

Over the past week we've been testing the new template engine functionality against existing projects. The primary focus for the tests so far has been to ensure that existing projects still render identically when running with a version of Web that uses the template engine `@dadi/web-dustjs`. The results should be the same as when using a previous version of Web, where Dust.js was built into the core of the application. 

Web v3.0 will be released very shortly with support for using different template engines, along with documentation for building your own template engine adapter. 

### Issues resolved

* [#169](https://github.com/dadi/web/issues/169): Upgrade "Purest" dependency
* [#175](https://github.com/dadi/web/issues/175): Remove server name response header
* Under heavy load, the datasource cache instance could intermittently write data to the cache under a different key than anticipated. This has been resolved in a currently open [pull request](https://github.com/dadi/web/pull/181), which gives each data provider it's own cache instance.

### Issues in progress

* [#155](https://github.com/dadi/web/issues/155): support for HTTP/2 and asset push
* [#165](https://github.com/dadi/web/issues/165): find matching routes after all middleware functions pass
* [#163](https://github.com/dadi/web/issues/163): allow pages and partials to exist in subdirectories
* [#103](https://github.com/dadi/web/issues/103): support multiple for template engines

