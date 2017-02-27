---
date: 2016-03-07
title: Roadmap Update
handle: roadmap-update-070316
author: James Lambie
preface:  We are now fully live in the NPM universe having picked up the @dadi organisation.
category: roadmap
---

We are now fully live in the NPM universe having picked up the @dadi organisation:

* [https://www.npmjs.com/package/@dadi/api](https://www.npmjs.com/package/@dadi/api)
* [https://www.npmjs.com/package/@dadi/web](https://www.npmjs.com/package/@dadi/web)

Removes duplication of effort (legacy Bantam usage is being replaced).

Common modules are being broken out of our core packages and will be maintained in separate public repositories under Git (routing, middleware, logging and status endpoint).

Our focus remains on DADI Publish, meaning that pace on other products has intentionally dropped off, and will remain slower over the next handful of weeks.

### DADI API

#### Completed

* Status endpoint
* Cache invalidation route created
	* Merged into master
	* In live build under NPM
* Correct www headers
	* Failed requests and requests without authorisation
	* Brings this into line with our other products
* Live on NPMJS
	* [https://www.npmjs.com/package/@dadi/api](https://www.npmjs.com/package/@dadi/api)
* 1.4 in a week and bit

#### In progress

* Method specific authentication
	* Allows finer control over authentication
	* In testing pre merge
	* https://github.com/dadi/api/pull/20
* Status endpoint
	* Tests added
	* Human readable output added
	* In testing pre merge
	* https://github.com/dadi/api/pull/25
* Hooks
	* In testing pre merge
	* https://github.com/dadi/api/pull/27

### DADI Web

#### Completed

* Pre load events & filter events
	* Events triggered ahead of page load
	* Enables dynamic content creation based on known user data (Identity)
  * 1.0.0 passed testing, merged back to Master
	* https://github.com/dadi/web/milestones/1.0.0
  * Version 1.0.2 now live on NPMJS
	* [https://www.npmjs.com/package/@dadi/web](https://www.npmjs.com/package/@dadi/web)

#### In progress

* Cache invalidation API
	* Can flush everything (*) (complete)
 	* Need to be able to flush a specific path
	* Complexity in DS lookup for invalidation
	* https://github.com/dadi/web/pull/22
* Status endpoint
	* https://github.com/dadi/web/issues/7
	* Waiting on API status endpoint (will be used as a module for all packages)
* Global events loader
	* https://github.com/dadi/web/issues/1
* Full docs rewrite nearing completion (in line with API)

### DADI CDN

#### Complete

* CDN fix for GIF support complete

#### In progress

* ImageMagick as a core processor in testing
	* ImageMagick support for latest LTS Node is not available, forcing a step down (less than ideal)
	* GD works well and is being tested
	* https://github.com/dadi/cdn/tree/feature/gd_conversion
* Refactor code to bring it inline with DADI API and DADI Web
* 1.0.0 to be finalised before we Open Source and push to NPMJS

### DADI Generator

* Updated to respect new NPM scope (@dadi/)

### DADI Publish

* Role pages complete
* ACL complete

_Note: time lines for delivery remain TBC, but this is our highest priority_

### DADI Passport

* New folder structure
	* Puts all language support in the same repo
	* https://github.com/dadi/passport/pull/11
* Issuer field added
* React native support completed
* Will be using Passport in Web for token generation, pegged for next release (1.4.0)

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
