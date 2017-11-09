---
date: 2016-10-10
title: Roadmap Update
handle: roadmap-update-101016
author: James Lambie
preface: Last week development effort returned to DADI Track in the form of further investigation of a new real time data store.  
category: roadmap
---

Last week development effort returned to DADI Track in the form of further investigation of a new real time data store. With a little instability in the marketplace last week with RethinkDB's parent company being dissolved, we are now looking into other options to form part of the core DADI product suite. See the section below on DADI Store/Core/DB.

### DADI API

#### Completed

* Unique indexes can be added via a collection schema https://github.com/dadi/api/issues/142
* API Autodata module published to NPM. This module makes it possible to generate fake test data based on an API's collection schema. See https://www.npmjs.com/package/@dadi/autodata
* Feature: extension of the index creation functionality, allowing unique indexes to be created. Closes issues https://github.com/dadi/api/issues/142 and https://github.com/dadi/api/issues/136.

#### In progress

* Switch to new extracted cache module @dadi/cache
* Investigation into alternative datastores and the abstraction of the connection module

### DADI CDN

#### In progress

* Image upload functionality: https://github.com/dadi/cdn/issues/130
* Testing of new extracted cache module @dadi/cache
* Investigation into functionality for "asset delivery by revision"

### DADI Format Error

#### Completed

* Module published to NPM. This module makes it easy to generate consistent error messages from DADI applications. Each error type should have a page or section dedicated to it on the DADI Documentation site. See https://www.npmjs.com/package/@dadi/format-error.

### DADI Web

#### Completed

* A fix for static datasources, to make them filterable via request parameters
* Complete extraction of the built in Dust helpers. These must now be loaded separately, see https://www.npmjs.com/package/@dadi/dustjs-helpers
for usage information.

#### In progress

* 1.7.0 Release Candidate 1 being tested against existing projects
* Switch to new extracted cache module @dadi/cache
* Better Redis connection handling, addressed in new module DADI Cache

### DADI Cache

#### In progress

* Publish to NPM possible after cluster support is resolved

### DADI Track

#### Completed

* Extraction of the dashboard component into a separate module, see [DADI Visualise](#dadi-visualise)

#### In progress

* Translation of specification into tasks, viewable here https://github.com/dadi/track/issues
* Investigation of real-time database solutions

### DADI Visualise

#### In progress

* Investigation of frontend approaches for providing real-time data visualisation
* Selection of graphing library

### DADI Identity

#### Complete

* Refactor of entire codebase to follow StandardJS formatting
* Refactoring to bring in line with other products

#### In progress

* Test suite refactor

### DADI Core (working title)

DADI Core is a new product currently in the investigation phase. It's purpose will be to serve as the database layer in the DADI stack, replacing MongoDB. MongoDB is an excellent product but we have no immediate use for the extended
functionality set that it provides. Finding an alternative should enable us to reduce infrastructure cost and complexity.

Some key requirements:

- Performance (low load and at scale)
- The ability to cluster
- The ability to query individual and multiple collections
- A low memory footprint
- A low CPU footprint
- A standard data format (ideally JSON)

We are currently collecting API performance data against one of our larger datasets to provide a benchmark for comparison.