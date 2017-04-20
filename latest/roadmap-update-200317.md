---
date: 2017-03-04
title: Roadmap Update
handle: roadmap-update-030417
author: James Lambie
preface: Some time was spent this week updating dependencies in API and Web to ensure we are using the latest versions.
category: roadmap
---

This week we took the descision to remove Semantic Release from our core products. The automatic release of software to NPM is perfect for our smaller dependencies but doesn't give us enough control over core product releases, especially when taking our planned roadmaps into account.

## DADI API

A lot of the development work in API has gone in to the `upgrade-mongo-driver` branch. We are moving from
the 1.4 branch of the MongoDB native driver, to the 2.2 branch.

### Completed

* [Extended query operator support](https://github.com/dadi/api/pull/206): added to API to partially solve [#175](https://github.com/dadi/api/issues/175)

### In progress

* [#182](https://github.com/dadi/api/issues/182): API Async Reference document manipulation
* [#188](https://github.com/dadi/api/issues/188): Enable cluster mode by default
* [#177](https://github.com/dadi/api/issues/177): Add Promise support to model layer
* [#152](https://github.com/dadi/api/issues/152): Add Cache support to model layer
* [#175](https://github.com/dadi/api/issues/175): Extended query functionality
* [#156](https://github.com/dadi/api/issues/156): Add configurable MongoDB readPreference
* Support for multiple datastores being developed in a [new branch](https://github.com/dadi/api/tree/feature/multiple-data-stores), with datastores loaded from separate

## DADI CDN

### Completed

* [#216](https://github.com/dadi/cdn/issues/216): Fix compression for PNG files when no value is passed
* [#218](https://github.com/dadi/cdn/issues/218): Fix external images requests with no extension - default to "jpg"
* [#223](https://github.com/dadi/cdn/issues/223): Pass URL parameters to external image requests

### In progress

* Plugin/extension architecture for all DADI products at investigation stage, document created to collate ideas from wider development team

## DADI Web

### Completed

* [#128](https://github.com/dadi/web/issues/128): Ensure static content is compressed before send
* [#130](https://github.com/dadi/web/issues/130): Don't modify case of URL parameters
* [#135](https://github.com/dadi/web/issues/135): New feature allowing request parameters to be injected into a datasource endpoint

### In progress

* [#108](https://github.com/dadi/api/issues/108): Upgrade MongoDB driver (used for session storage)
* [#96](https://github.com/dadi/web/issues/96): Datasource type: Markdown/Files