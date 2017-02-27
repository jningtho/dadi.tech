---
date: 2016-10-03
title: Roadmap Update
handle: roadmap-update-031016
author: James Lambie
preface:  The focus in the last week has been on adding small pieces of functionality to the existing apps to support urgent client project work.
category: roadmap
---

The focus in the last week has been on adding small pieces of functionality to the existing apps to support urgent client project work.

This week focus returns to the Track and Visualise projects, and the abstraction of API's data layer to enable using different database engines.

DADI Web v1.7.0 Release Candidate 1 is still undergoing testing. It is being used on the LooksGreat project - so far, so good.

### DADI API

#### Completed

* API Autodata module published to NPM. This module makes it possible to generate fake test data based on
an API's collection schema. See https://www.npmjs.com/package/@dadi/autodata
* Feature: extension of the index creation functionality, allowing unique indexes to be created. Closes issues https://github.com/dadi/api/issues/142 and https://github.com/dadi/api/issues/136.

#### In progress

* Switch to new extracted cache module @dadi/cache
* Investigation into alternative datastores and the abstraction of the connection module

### DADI CDN

#### Completed

* New "processors" plugin added, with one processor added by default. The default "layout" processor takes
an array of image URLs and coordinates and constructs a new image.

#### In progress

* Switch to new extracted cache module @dadi/cache
* Investigation into functionality for "asset delivery by revision"

### DADI Format Error

#### Completed

* Module published to NPM. This module makes it easy to generate consistent error messages from DADI applications.
Each error type should have a page or section dedicated to it on the DADI Documentation site. See https://www.npmjs.com/package/@dadi/format-error.

### DADI Web

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
