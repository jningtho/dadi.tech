---
date: 2016-09-26
title: Roadmap Update
handle: roadmap-update-260916
author: James Lambie
preface:  The focus this week has been on expanding on the requirements for DADI Track so that development can begin as soon as possible.
category: roadmap
---

The focus this week has been on expanding on the requirements for DADI Track so that development can begin as soon as possible.

DADI Web v1.7.0 Release Candidate 1 is ready for testing. There are some major changes to the routing within Web that should serve to simplify some of the custom code that is being written in client apps. 

### DADI API

#### Completed

* A new version of API Doc, the automatic documentation generator, has been published. It is now
easier to add to an existing project. See the [README](https://github.com/dadi/apidoc/blob/master/README.md) for more information.

#### In progress

* Switch to new extracted cache module @dadi/cache
* Investigation into alternative datastores and the abstraction of the connection module
* API Autodata module in development, to allow generating fake test data based on an API's collections

### DADI CDN

#### Completed

Last week the first project to use CDN's remote server storage adapter exposed a bottleneck in retrieving source images from the remote server. To fix, the internal request method has been replaced with a library that uses a process similar to that used by wget.

#### In progress

* Switch to new extracted cache module @dadi/cache
* Investigation into a `hook` system, similar to that present in API, allowing scripts to run before
or after the main asset request
* Investigation into functionality for "asset delivery by revision"

### DADI Web

#### In progress

* 1.7.0 Release Candidate 1 being tested against existing projects
* Switch to new extracted cache module @dadi/cache
* Better Redis connection handling, addressed in new module DADI Cache

### DADI Cache

#### In progress

* Publish to NPM possible after cluster support is resolved

### DADI Track

More detail has been provided for the specification of Track

#### Completed

* Extraction of the dashboard component into a separate module, see [DADI Visualise](#dadi-visualise)

#### In progress

* Translation of specification into tasks, viewable here https://github.com/dadi/track/issues

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
