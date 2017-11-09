---
date: 2016-06-27
title: Roadmap Update
handle: roadmap-update-270616
author: James Lambie
preface:  DADI Publish reached it's first full milestone and has recieved some excellent feedback.
category: roadmap
---

DADI Publish reached it's first full milestone and has recieved some excellent feedback. There are many things still to be resolved this week but the core pieces of the app are all close to being finalised.

### DADI Publish

#### Completed

* External data source field, e.g. Fact Mint API
* Extended Client Access Key admin

#### In progress

* Reference field filters still in progress; currently adding ability to filter
 on nested Reference fields
* Collaborative editing interface

### DADI API

#### Completed

* Add support for asynchronous hooks (https://github.com/dadi/api/issues/103)
* Support for multiple operations performed on the dataset returned by `model.find()` (https://github.com/dadi/api/commit/67a52c0148f09e2cf69f20f5d46702a72f40df89)

#### In progress

* API Autodata module in development, to allow generating fake test data based on
an API's collections
* Add fields for the Publish workflow (https://github.com/dadi/api/issues/55)

### DADI Web

A quiet week, there is some investigation on-going into the regeneration of tokens
when a 401 is received from the API layer

### DADI CDN

#### Completed

* Ability to POST a recipe (https://github.com/dadi/cdn/issues/37)

#### In progress

* Investigation into functionality for "asset delivery by revision"
* Addition of `/status` endpoint to match API & Web
* Respect cache control headers, allowing to fetch a fresh copy of an asset
