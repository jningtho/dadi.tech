---
date: 2016-09-19
title: Roadmap Update
handle: roadmap-update-190916
author: James Lambie
preface: The main open sourced applications are currently stable with no major issues reported by users.
category: roadmap
---

The main open sourced applications are currently stable with no major issues reported by users. There have been one or two bugs raised for API and Web - Web bugs are being patched and released as they come in while the API bugs are under investigation and require more information from those
that have raised them.

More work has been done this week around modules to support the products, and make them more consistent. DADI Toolbelt has been refactored and is available to install from NPM - it has a new task addition
allowing a user to migrate to DADI Web 1.7.0 with a little less hassle.

`DADI Error Formatter` is a new package in development, which will enable developers to easily create JSON errors
for returning as part of a response in API, CDN or Web.

### DADI API

#### Completed

* Create client script updated to allow interactive use (https://github.com/dadi/api/pull/137)

#### In progress

* Switch to new extracted cache module @dadi/cache
* Investigation into alternative datastores and the abstraction of the connection module
* API Autodata module in development, to allow generating fake test data based on
an API's collections

### DADI CDN

#### In progress

* Switch to new extracted cache module @dadi/cache
* Investigation into a `hook` system, similar to that present in API, allowing scripts to run before
or after the main asset request
* Investigation into functionality for "asset delivery by revision"

### DADI Web

#### Completed

* fix: allow request headers to be passed from the page request to the datasource request
  * patched in v1.6, published to NPM as 1.6.12
  * added in master branch for release in 1.7.0

#### In progress

* Switch to new extracted cache module @dadi/cache
* Better Redis connection handling, addressed in new module DADI Cache

### DADI Cache

#### Completed

* Support for Redis Cluster

#### In progress

* Publish to NPM possible after cluster support is resolved

### DADI Track

There is still some work to be done on the platform specification for Track - the investigation
work currently underway reflects the development team's current understanding of the requirements, which
are subject to change.

#### Completed

* Refactor of entire codebase to follow StandardJS formatting

#### In progress

* Extraction of the dashboard component into a separate module
* Investigation of alternative datastores to better facilitate real-time data visualisation

### DADI Track Dashboard

#### In progress

* Investigation of frontend approaches for providing real-time data visualisation

### DADI Identity

#### In progress

* Refactor of entire codebase to follow StandardJS formatting
* Refactoring to bring in line with other products
* Test suite refactor

### DADI Toolbelt

[Toolbelt](https://github.com/dadi/toolbelt) is a set of command line tools for performing tasks with DADI products.

#### Completed

* Refactor, moving task-specific code to individual files for each task
* New task added to update Web page specification files for migration to v1.7.0

### DADI Error Formatter

Currently in the early stages of development. Will simplify the creation of errors designed to be
seen by the end-user, as well as provide a much needed level of consistency in messaging.

Each error should have an associated HTML page in the documentation. An example error:

```json
{
  "code": "API-0001",
  "title": "Missing Index Key",
  "details": "'publicationDate' is specified as the primary sort field, but is missing from the index key collection.",
  "docLink": "http://docs.dadi.io/api/errors/API-0001"
}
```

