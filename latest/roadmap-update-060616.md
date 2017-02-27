---
date: 2016-06-06
title: Roadmap Update
handle: roadmap-update-060616
author: James Lambie
preface:  
category: roadmap
---

DADI Publish has been the main focus this week and will continue to be so for the next one. Content serialisation from the rich article editor has been added, to enable publishing to the connected API instance.

Advanced user permissions functionality has been added and is being tested. This gives an admin user the ability to restrict viewing/editing documents on a per-role basis.

DADI CDN still being tested on WC? test server. It will be the first product to
have the cluster module installed later this week, in an attempt to improve
performance.

### DADI Publish

#### Completed

* Serialisation of article document types, for saving to API
* Advanced user permissions, includes document view filtering based on role permissions

#### In progress

* Extended Client Access Key admin
* External data source field, e.g. Fact Mint API
* Collaborative editing interface

### DADI API

#### Completed

* Extend the collection "layout" module

#### In progress

* add fields for the Publish workflow (https://github.com/dadi/api/issues/55)
* add endpoint to return hooks info (https://github.com/dadi/api/issues/78)

### DADI Web

#### In progress

* CSRF protection (https://github.com/dadi/web/issues/59)
* Support for external datasources, such as Twitter API (https://github.com/dadi/web/issues/52)
* Client-side template rendering support (https://github.com/dadi/web/pull/50)
* Error page template (https://github.com/dadi/web/issues/46)

### DADI CDN

#### Completed

* documentation of setup instructions using NPM package

#### In progress

* documentation of new URL syntax

### Taxonomic-framework

* Training data ongoing, ~3,000 documents have been processed
* Men's lifestyle slightly behind, possibly ready for next week
