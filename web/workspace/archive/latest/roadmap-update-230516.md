---
date: 2016-05-23
title: Roadmap Update
handle: roadmap-update-230516
author: James Lambie
preface: Currently working on the rich article editor functionality whilst refactoring the UI of the standard document edit for Publish.
category: roadmap
---

DADI Publish: Currently working on the rich article editor functionality whilst
refactoring the UI of the standard document edit. In addition, all of the field models required for the Bauer catalogue are being introduced.

DADI CDN has been refactored and released as Version 1.0.0, published to NPM.
Currently running on WC? Test and new documentation for installation has been
completed.

### DADI Publish

#### Completed

* Collection type differentiation, between tabulated data and "article" rich view
* System status check
* Image crop field

#### In progress

* Collaborative editing interface
* Advanced user permissions
* Client Access Key admin
* External data source field, e.g. Fact Mint API

### DADI API

#### Completed

* Support added for layout maps, to be utilised in the Publish interface
* Introduced validation to fields of String which contain an array of Strings
* Support added for advanced regex and DateTime queries (https://github.com/dadi/api/commit/1f3972c)
* A fix for changed TTL values - drop auth token indexes at startup and recreat, to ensure any change to
configured TTL values is picked up and reflected in the token expiry database index
* Addition of an endpoint to return the API instance's custom endpoints (i.e. /api/endpoints)
* Version 1.7.1 now published to NPM
* https://github.com/dadi/api/releases/tag/v1.7.0

#### In progress

* A small modification to allow API to run under Node 6.x.x
* Provision of a tool to assist in removing history documents (https://github.com/dadi/api/issues/65)
* A series of issues currently open to support the Publish workflow:
 * https://github.com/dadi/api/issues/55
 * https://github.com/dadi/api/issues/73
 * https://github.com/dadi/api/issues/78

### DADI Web

#### Completed

* Version 1.4.0 now published to NPM

#### In progress

* CSRF protection (https://github.com/dadi/web/issues/59)
* Support for external datasources, such as Twitter API (https://github.com/dadi/web/issues/52)
* Client-side template rendering support (https://github.com/dadi/web/pull/50)
* Error page template (https://github.com/dadi/web/issues/46)

### DADI CDN

#### Completed

* v1.0.0 published to [NPM](https://www.npmjs.com/package/@dadi/cdn)
 * Includes new URL syntax using querystring parameters
 * Backward-compatible, no existing consumers need updating

### Taxonomic-framework

* Training data ongoing, ~3,000 documents have been processed
* Men's lifestyle slightly behind, possibly ready for next week
