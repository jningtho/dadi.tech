---
date: 2016-08-01
title: Roadmap Update
handle: roadmap-update-010816
author: James Lambie
preface: API, Web and CDN will all be updated this week with the new Cache module, see below for more detail.
category: roadmap
---

Publish has a deadline for galleries and inline variables of 15/08/2016. Data imports and API changes are being handled on the fly as part of the Radio build.

API, Web and CDN will all be updated this week with the new Cache module, see below for more detail. This is part of an ongoing drive to modularise the codebase, removing duplication within the core products and making sections available for use in external projects.

### DADI Publish

#### Completed

* Introduced `workers` to handle background tasks
* Introduced collection recipes to handle predefined collection schemas
* Gallery static build finished
* New socket method and peer-to-peer message protocol
* Collaborative editing: apply document deltas for new users
* Image search results template

#### In progress

* Inline variables
* History revisions UX + backend
* Gallery field backend

### DADI API

#### Completed

* Fixed an issue with nested reference field queries https://github.com/dadi/api/pull/120

#### In progress

* API Autodata module in development, to allow generating fake test data based on an API's collections

### DADI CDN

#### Completed

* Addition of `saturate` and `sharpen` parameters

#### In progress

* Option to return a "missing" image when a request results in 404
* Documentation update to make it more readable to the lay user
* Support for Routes (https://github.com/dadi/cdn/issues/8)
* Investigation into functionality for "asset delivery by revision"

### DADI Web

#### Completed

* Bug in rewrite loading fixed, affects versions 1.6.2-1.6.8
* Version 1.6.9 published and announced

#### In progress

* Bettr Redis connection handling, also addressed in new module DADI Cache
* [Under review] SSL Support (https://github.com/dadi/web/pulls/79)
* [Under review] Introduce parameter for handling pagination requests (https://github.com/dadi/web/pulls/74)
* Client-side template rendering (https://github.com/dadi/web/pull/50)

### DADI Logger

#### Completed

* Test suite added (72% coverage)
* The first module to fully adopt the [Standard coding style](http://standardjs.com/rules.html)
* Documentation updated
* File rotation options removed and logrotate suggested in its place

### Additional Components

Various pieces of the core products have been extracted into standalone modules over the past few months. [DADI Logger](https://github.com/dadi/logger) handles the core logging requirements, [DADI Status](https://github.com/dadi/status) adds a `/status` endpoint for performance monitoring and [DADI Passport](https://github.com/dadi/passport) handles token generation and validation for
API connections.

The latest to join this group of components is [DADI Cache](https://github.com/dadi/cache). Each of API, CDN and Web currently have their own cache implementation with common requirements such as file and Redis caching. DADI Cache abstracts away the server connections and filesystem interaction, requiring a consuming application to simply call `.get()` or `.set()` in order to interact with the underlying cache store.

DADI Cache will be open sourced and published to NPM shortly, with each of the core products being updated to use it rather than it's own implementation shortly thereafter.
