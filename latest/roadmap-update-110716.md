---
date: 2016-07-11
title: Roadmap Update
handle: roadmap-update-110716
author: James Lambie
preface: Publish has been reviewed a couple of times now and some UX changes have been suggested.
category: roadmap
---

Publish has been reviewed a couple of times now and some UX changes have been suggested. Getting feedback from people who will be using the interface on a daily basis is essential and the coming week will see many of these suggestions implemented.

In API, CDN and Web we have more developers becoming familiar with the codebase and either providing new features/fixes or actively commenting on the issues boards.

### DADI Publish

#### Completed

* new drag and drop behaviour complete
* pagination fix (incremental instead of logarithmic)
* finished data serialisation
* various UX bug fixes
* scheduling improved
* image upload field

#### In progress

* Image Galleries
* Revision history
* Batch-apply permissions


### DADI API

#### Completed

* Add support for environment variables in config for all sensitive properties
* Support for querying Reference fields using dot notation, allowing up to 2 nested levels:

```
http://api.example.com/1.0/library/book?filter={"genre.name":"Horror"}
http://api.example.com/1.0/library/book?filter={"author.spouse.name":"Zelda Sayre Fitzgerald"}
```

#### In progress

* API Autodata module in development, to allow generating fake test data based on
an API's collections
* Add fields for the Publish workflow (https://github.com/dadi/api/issues/55)

### DADI CDN

#### Completed

* Content-aware crop mode added, allowing image crops to automatically account for the
most interesting parts of an image (https://github.com/dadi/cdn/commit/9ca29c4e4045271accc0bebcea2c5909740f2caf)
* Add support for environment variables in config for all sensitive properties (https://github.com/dadi/cdn/issues/38)
* Removal of built-in filesystem monitor in favour of https://www.npmjs.com/package/chokidar
* Respect cache control headers, allowing to fetch a fresh copy of an asset
* Add Etag and Last-Modified headers
* Version 1.4.0 published

#### In progress

* Investigation into functionality for "asset delivery by revision"

