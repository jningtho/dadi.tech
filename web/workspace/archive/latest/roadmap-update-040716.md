---
date: 2016-07-04
title: Roadmap Update
handle: roadmap-update-040716
author: James Lambie
preface: DADI CDN is now operating with similar monitoring capabilities as API and Web.
category: roadmap
---

DADI CDN is now operating with similar monitoring capabilities as API and Web.

### DADI Publish

#### Completed

* Reference field filters and pre-populating Reference fields on load

#### In progress

* Collaborative editing interface; extended in the last week to show coloured text for each connected
user. This is still being tweaked with a view to provide proper change logs for history revisions.
* Image Galleries


### DADI API

#### Completed

* Layout concept removed from core, to be applied as a hook (https://github.com/dadi/api/pull/109)

#### In progress

* Support for querying Reference fields using dot notation e.g. { "category.name": "Books" }
* API Autodata module in development, to allow generating fake test data based on
an API's collections
* Add fields for the Publish workflow (https://github.com/dadi/api/issues/55)

### DADI Web

A quiet week, there is some investigation on-going into the regeneration of tokens
when a 401 is received from the API layer

### DADI CDN

#### Completed

* Status endpoint added for performance monitoring (https://github.com/dadi/cdn/pull/41)
* JSON response extended to return a colour palette for a given image, as well as primary colour (https://github.com/dadi/cdn/commit/0d8bfea836d70817b8b49284df7b04c33348ee98)
* Version 1.3.0 published and announced: https://github.com/dadi/cdn/releases/tag/v1.3.0

#### In progress

* Add ENV variable names for all sensitive properties (https://github.com/dadi/cdn/issues/38)
* Removal of built-in filesystem monitor in favour of https://www.npmjs.com/package/chokidar
* Investigation into functionality for "asset delivery by revision"
* Respect cache control headers, allowing to fetch a fresh copy of an asset

