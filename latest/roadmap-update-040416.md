---
date: 2016-04-04
title: Roadmap Update
handle: roadmap-update-040416
author: James Lambie
preface: DADI Passport has been integrated with DADI Web, one of the first steps to reducing code duplication in the DADI products.
category: roadmap
---

DADI Passport has been integrated with DADI Web, one of the first steps to reducing code duplication in the DADI products.

DADI CDN will be ready for publishing to NPM this week as version 1.0.0. Rolled into the new release will be a new URL syntax for requesting media from the server, which will make it easier to make changes to the underlying code without fear of breaking any client code which consumes the service.

### DADI API

#### Completed

* A new [Contributors Guide](https://github.com/dadi/api/blob/master/CONTRIBUTING.md) written to help keep the codebase tidy and readable.

#### In progress

* Batch updating of documents, allowing a user to send a query and an update, instead of updating documents one by one. https://github.com/dadi/api/pull/48

### DADI Web

#### Completed

* Now integrated with the DADI Passport module, replacing the authentication module.
* A couple of bugs quickly resolved this week following the WhatCar? release to live.
* A new [Contributors Guide](https://github.com/dadi/web/blob/master/CONTRIBUTING.md) written to help keep the codebase tidy and readable.

#### In progress

* New branch created to investigate the addition of HTTP/2 support
* New branch for testing a refactored middleware has been added. This supports the idea of extracting the common router into it's own module. https://github.com/dadi/web/tree/refactor/middleware-engine
* Docs rewrite still ongoing. The more functionality requested, the more docs that must be written!

### DADI Status

#### In progress

* The addition of MongoDB server status information to the returned along with the OS and process information. Output will be similar to https://docs.mongodb.org/manual/reference/command/serverStatus/#output

### DADI CDN

#### Complete

* Current master branch has been tagged as v0.1.11-beta in preparation for the first 1.0.0 release which will be published to NPM.

#### In progress

* The refactoring of the codebase to bring CDN into line with API and Web is awaiting merge to master: https://github.com/dadi/cdn/pull/28. This PR includes a test suite and also the new URL syntax proposed by Derrick. Merging this PR will close:
 * https://github.com/dadi/cdn/issues/7
 * https://github.com/dadi/cdn/issues/12
 * https://github.com/dadi/cdn/issues/25
* Discussion is ongoing about the image manipulation library within CDN. In an effort to reduce dependencies we are still looking at options beyond the current ImageMagick implementation.

### DADI Publish

* Slightly slower progress this week while we await a completed brief including the remainder of the wireframes.

### DADI Passport

#### Completed

* Published to NPM (https://www.npmjs.com/package/@dadi/passport)
* Integrated with DADI Web (1.3.0)

### DADI Generator

This is a command line tool that allows users to easily create API and Web applications. Currently being brought up to date with recent changes in API and Web packages and will require the addition of more detailed documentation in the API and Web packages.

### DADI Identity

#### In progress

* Addition of an OTP for touch
	* https://github.com/dadi/identity/issues/3
* Add authentication to the lookup endpoint
	* https://github.com/dadi/identity/issues/4
* Data cleansing
	* https://github.com/dadi/identity/issues/5

### DADI Track

#### Complete

* Refactored code to bring it inline with our other Products
	* https://github.com/dadi/track/commit/cdcdb20da07b9bf52cea675b654dbcf80d2205a6
* Increased test coverage
* Redis support for real time data stream

#### In progress

* Automated front end tracking code in progress
	* Modular and opt-in
* Automated tracking SDK for mobile (iOS, others planned)
* Removal of dependancy on Express

### DADI Visualise

* Brief being written
	* Focus is on multi-data dashboard support and the ability to load in any data

### DADI Recommend

* First full build with Redis support in testing

### Taxonomic-framework

* First set of node level descriptions complete
* Lifestyle branch reduced in scope by 50% to remvoe named entities, which are now being extracted seperately and automatically
* Men's lifestyle pushed back by a month to accommodate additional ethnographic research

### DADI Match

* Training data is ongoing
	* New interfaces for this complete
	* https://github.com/dadi/mechanical-turk
* Base-level performance testing in progress (however largely training data dependant)
