---
date: 2016-08-15
title: Roadmap Update
handle: roadmap-update-150816
author: James Lambie
preface:  A little more focus on the non-Publish products over the last couple of weeks, with some development requirements being pushed by Publish.
category: roadmap
---

A little more focus on the non-Publish products over the last couple of weeks, with some development requirements being pushed by Publish. With a little extra resource we've managed to pick up some of the long outstanding issues.

All products have now been updated to use the Greenkeeper.io and Snyk services, which send pull requests to the repository when vulnerabilities are detected in dependencies and when new versions of dependencies are available.
Combined, the two services help to keep the core products stable up-to-date.

### DADI Publish

#### Completed

* Gallery field completed
* Inline content variables replacement
* History/Revision page with document deltas
* All Oembeds rendering
* Batch select and update on document list view
* Worker concept (building redirects, robots.txt, sitemap etc)

#### In progress

* Batch text select
* Better filtering
* Editor navigation

### DADI API

#### Completed

* fix: ensure composed array values match original order
* feat: add name to endpoints [#129](https://github.com/dadi/api/issues/129)
* fix: values being overridden in partial document update [#127](https://github.com/dadi/api/issues/127)
* feat: add SSL support [#119](https://github.com/dadi/api/issues/119)
* NPM version 1.12.0 released (https://github.com/dadi/api/releases/tag/v1.12.0)

#### In progress

* API Autodata module in development, to allow generating fake test data based on
an API's collections
* Switch to new extracted cache module @dadi/cache
* Switch to extracted log module @dadi/logger

### DADI CDN

#### Completed

* Support for Delivery Routes (https://github.com/dadi/cdn/issues/8)
* Documentation update to make it more readable to the lay user
* NPM version 1.5.0 published (https://github.com/dadi/cdn/releases/tag/v1.5.0)

#### In progress

* Option to return a "missing" image when a request results in 404
* Investigation into functionality for "asset delivery by revision"
* Switch to new extracted cache module @dadi/cache

### DADI Web

#### Completed

* Introduce parameter for handling pagination requests (https://github.com/dadi/web/pulls/74)
* fix: honour datasource pagination switch and pass page params to chained datasources
* NPM version 1.6.10 published

#### In progress

* Bettr Redis connection handling, also addressed in new module DADI Cache
* [Under review] SSL Support (https://github.com/dadi/web/pulls/79)
* Client-side template rendering (https://github.com/dadi/web/pull/50)
* Switch to new extracted cache module @dadi/cache
* Switch to extracted log module @dadi/logger

### DADI Cache

#### Completed

* Switch to ioredis package, which the original node_redis package has been merged into

#### In progress

* Support for Redis Cluster
* Publish to NPM possible after cluster support is resolved

### DADI Track

* Refactoring to bring in line with other products
* Test suite refactor

### DADI Identity

* Refactoring to bring in line with other products
* Test suite refactor