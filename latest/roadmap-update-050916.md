---
date: 2016-09-05
title: Roadmap Update
handle: roadmap-update-050916
author: James Lambie
preface: Product development continues unabated. 
category: roadmap
---

### DADI API

#### Completed

* Refactor of entire codebase to follow StandardJS formatting
* Switch to extracted log module @dadi/logger

#### In progress

* Switch to new extracted cache module @dadi/cache
* Investigation into alternative datastores and the abstraction of the connection module
* API Autodata module in development, to allow generating fake test data based on
an API's collections

### DADI CDN

#### Completed

* Configurable option to return a "missing" image when a request results in 404, along with
a customised status code (e.g. HTTP 410 Gone)

#### In progress

* Investigation into functionality for "asset delivery by revision"
* Switch to new extracted cache module @dadi/cache

### DADI Web

#### Completed

* Refactor of the router module to allow the app to select the correct route more efficiently
* Refactor of test suite to improve stability and make writing new tests easier
* Refactor of entire codebase to follow StandardJS formatting
* Add support for client-side template rendering (https://github.com/dadi/web/pull/50)
* Switched log module to use NPM module @dadi/logger
* SSL Support (https://github.com/dadi/web/pulls/79)

#### In progress

* Better Redis connection handling, also addressed in new module DADI Cache
* Switch to new extracted cache module @dadi/cache

### DADI Cache

#### Completed

* Switch to ioredis package, which the original node_redis package has been merged into

#### In progress

* Support for Redis Cluster
* Publish to NPM possible after cluster support is resolved

### DADI Track

There is still some work to be done on the platform specification for Track - the investigation
work currently underway reflects the development team's current understanding of the requirements, which
are subject to change.

#### In progress

* Extraction of the dashboard component into a separate module
* Investigation of alternative datastores to better facilitate real-time data visualisation
* Refactor of entire codebase to follow StandardJS formatting

### DADI Track Dashboard

#### In progress

* Investigation of frontend approaches for providing real-time data visualisation

### DADI Identity

#### In progress

* Refactor of entire codebase to follow StandardJS formatting
* Refactoring to bring in line with other products
* Test suite refactor
