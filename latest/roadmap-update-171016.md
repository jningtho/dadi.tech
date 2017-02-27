---
date: 2016-10-17
title: Roadmap Update
handle: roadmap-update-171016
author: James Lambie
preface: DADI Web 1.7.0 RC1 is currently being tested as part of the WIP LooksGreat project, Along with the new image upload functionality in DADI CDN.
category: roadmap
---

DADI Web 1.7.0 RC1 is currently being tested as part of the WIP LooksGreat project, Along with the new image upload functionality in DADI CDN.

Investigation is underway for a suitable datastore to back the new DADI Store/Core/DB project, with [RTDB](https://github.com/chicagozer/rtdb) and [Gun.JS](gun.js.org) both being scrutinised this week. 

### DADI API

#### In progress

* Switch to new extracted cache module @dadi/cache
* Investigation into alternative datastores and the abstraction of the connection module

### DADI CDN

#### Completed

* Image upload functionality: https://github.com/dadi/cdn/issues/130

#### In progress

* Test suite extension to cover image upload
* Testing of new extracted cache module @dadi/cache
* Investigation into functionality for "asset delivery by revision"

### DADI Web

#### Completed

* New cache module @dadi/cache integrated

#### In progress

* Version 1.7.0 Release Candidate 1 being tested against existing projects: https://github.com/dadi/web/releases/tag/v1.7.0-rc.1

### DADI Cache

#### Completed

* Published to NPM, version 1.1.1 now available
* Includes support for Redis Cluster
* Includes support for failover to file caching when Redis connection fails

### DADI Track

#### In progress

* Translation of specification into tasks, viewable here https://github.com/dadi/track/issues
* Investigation of real-time database solutions

### DADI Visualise

#### In progress

* Investigation of frontend approaches for providing real-time data visualisation
* Selection of graphing library

### DADI Core (working title)

DADI Core is a new product currently in the investigation phase. It's purpose will be to serve as the database layer
in the DADI stack, replacing MongoDB. MongoDB is an excellent product but we have no immediate use for the extended
functionality set that it provides. Finding an alternative should enable us to reduce infrastructure cost and complexity.

Some key requirements:

- Performance (low load and at scale)
- The ability to cluster
- The ability to query individual and multiple collections
- A low memory footprint
- A low CPU footprint
- A standard data format (ideally JSON)

We are currently collecting API performance data against one of our larger datasets to provide a benchmark
for comparison.