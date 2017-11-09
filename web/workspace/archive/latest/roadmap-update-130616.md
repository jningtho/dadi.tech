---
date: 2016-04-13
title: Roadmap Update
handle: roadmap-update-130416
author: James Lambie
preface: DADI Publish has again been the main focus this week with Release Version 1.0.0 due next week.
category: roadmap
---

DADI Publish has again been the main focus this week with Release Version 1.0.0 due next week. Revision history and reference field filtering are two of the big issues being ironed out this week.

DADI API, CDN and Web have all had clustering support added. NPM versions of the packages with this support are as follows:

* API: [v1.8.0](https://www.npmjs.com/package/@dadi/api)
* CDN: [v1.1.0](https://www.npmjs.com/package/@dadi/cdn)
* Web: [v1.6.0](https://www.npmjs.com/package/@dadi/web)

### DADI Publish

#### Completed

* External data source field, e.g. Fact Mint API

#### In progress

* Reference field filters
* Extended Client Access Key admin
* Collaborative editing interface

### DADI API

#### Completed

* Add cluster support for greater performance on multiple CPU machines

#### In progress

* add fields for the Publish workflow (https://github.com/dadi/api/issues/55)
* add endpoint to return hooks info (https://github.com/dadi/api/issues/78)

### DADI Web

#### Completed

* Add cluster support for greater performance on multiple CPU machines
* Add support for loading a datasource as the complete set of 
rewrite rules

#### In progress

* CSRF protection (https://github.com/dadi/web/issues/59)
* Support for external datasources, such as Twitter API (https://github.com/dadi/web/issues/52)
* Client-side template rendering support (https://github.com/dadi/web/pull/50)
* Error page template (https://github.com/dadi/web/issues/46)

### DADI CDN

#### Completed

* Add cluster support for greater performance on multiple CPU machines

#### In progress

* documentation of new URL syntax

### Taxonomic-framework

* Training data ongoing, ~3,000 documents have been processed
* Men's lifestyle slightly behind, possibly ready for next week
