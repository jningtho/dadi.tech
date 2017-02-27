---
date: 2016-03-14
title: Roadmap Update
handle: roadmap-update-140316
author: James Lambie
preface:  DADI API and Web are both being thoroughly tested as they begin to be rolled out in production for existing client projects, allowing us to stop supporting the previous versions from the Bantam Framework.
category: roadmap
---

DADI API and Web are both being thoroughly tested as they begin to be rolled out in production for existing client projects, allowing us to stop supporting the previous versions from the Bantam Framework.

A common `/status` endpoint module has been added to the DADI packages, allowing other applications to make use of the
it to return a standard set of platform information.

The focus remains on DADI Publish, meaning that pace on other products has intentionally dropped off, and will remain slower over the next handful of weeks.

### DADI API

#### Completed

* Method specific authentication, allows finer control over authentication
* Status endpoint retrieves data about the running process and overall system health
* 1.4.0 due for release this week

#### In progress

* Hooks
	* In testing pre merge
	* https://github.com/dadi/api/pull/27

### DADI Web

#### Completed

* Cache invalidation API
	* Can flush everything or a specific path
	* Requires correct client credentials to be passed as part of the request
* Pre-Datasource events finalised and rolled into v1.1.0
* Version 1.1.0 now live on NPM.JS

#### In progress

* Status endpoint
	* https://github.com/dadi/web/issues/7
	* Waiting on @dadi/status to pass testing
* Global events loader
	* https://github.com/dadi/web/issues/1
* Full docs rewrite nearing completion (in line with API)

### DADI Status

* The API status endpoint has been extracted from the API code base and now stands alone
 in it's own repository
* Currently in testing before it can be used by other packages

### DADI CDN

#### In progress

* ImageMagick as a core processor in testing
	* ImageMagick support for latest LTS Node is not available, forcing a step down (less than ideal)
	* GD works well and is being tested
	* https://github.com/dadi/cdn/tree/feature/gd_conversion
* Code has been refactored to bring it inline with DADI API and DADI Web, the new
structure exists in the branch https://github.com/dadi/cdn/tree/feature/refactor/ and
will be tested against some of the projects already using the CDN
* A test suite is in development, to be completed for v1.0.0
* v1.0.0 to be finalised before we Open Source and push to NPMJS

### DADI Publish

* ACL extended to only allow admin users to publish collections to the remote API
* Design of further interfaces begun this week

_Note: time lines for delivery remain TBC, but this is our highest priority_

### DADI Passport

* Soon be added to DADI Web (1.2.0) in place of the existing authentication module,
reducing code duplication across the DADI suite

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

* Refactored code to bring it inline with our other Product
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

* Node level descriptions complete
* Men's lifestyle pushed back by a month to accommodate additional ethnographic research

### DADI Match

* Training data is ongoing
	* New interfaces for this complete
	* https://github.com/dadi/mechanical-turk
* Base-level performance testing in progress (however largely training data dependant)
