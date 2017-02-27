---
date: 2016-06-20
title: Roadmap Update
handle: roadmap-update-200616
author: James Lambie
preface: DADI Publish has once again been the main focus, with Release Version 1.0.0 due this coming Thursday.
category: roadmap
---

DADI Publish has once again been the main focus, with Release Version 1.0.0 due this coming Thursday. Image cropping and uploading are a big focus for the early part of this week.

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

* Add `?includeHistory` param to return resolved history documents
* Add { "v": 1 } as a version number to new documents
* Increment version number on update
* Add endpoint to return hooks info (https://github.com/dadi/api/issues/78)

#### In progress

* API Autodata module in development, to allow generating fake test data based on
an API's collections
* Add fields for the Publish workflow (https://github.com/dadi/api/issues/55)

### DADI Web

#### Completed

* Error page template (https://github.com/dadi/web/issues/46)

#### In progress

* CSRF protection (https://github.com/dadi/web/issues/59)
* Support for external datasources, such as Twitter API (https://github.com/dadi/web/issues/52)
* Client-side template rendering support (https://github.com/dadi/web/pull/50)

### DADI CDN

#### In progress

* documentation of new URL syntax

### Taxonomic-framework

* Training data ongoing, ~3,000 documents have been processed
* Men's lifestyle slightly behind, possibly ready for next week
