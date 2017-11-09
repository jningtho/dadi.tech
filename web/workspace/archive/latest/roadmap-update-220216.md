---
date: 2016-02-22
title: Roadmap Update
handle: roadmap-update-220216
author: James Lambie
preface: Our focus is currently on DADI Publish, meaning that pace on other products will intentionally drop over the next handful of weeks.
category: roadmap
---

Our focus is currently on DADI Publish, meaning that pace on other products will intentionally drop over the next handful of weeks.

We are moving to standardise support for Node by track Node's release and version schedule directly. In practice this means that we will move to Node v.4 support across the board over the coming month.

### DADI API

Version 1.3.0 due in the next week or so.

#### Completed

* Authentication updates (https://github.com/dadi/api/pull/20)
	* Finer control over authentication
	* CORS support to allow for cross-domain AJAX in browser
	* Misc. bug fixes
* Auto documenter bug resolution
	* /dadi/api/workspace/docs being created without api-docs being enabled
	* https://github.com/dadi/api/issues/13

#### In progress

* Status endpoint
	* https://github.com/dadi/api/issues/4
* Redis support
	* https://github.com/dadi/api/issues/6
* Convert string IDs to ObjectID when passing query to model
	* https://github.com/dadi/api/issues/3

### DADI Web

#### Completed

* 404 handling
	* https://github.com/dadi/web/issues/15
* Pre-DS events
	* When a request comes in any pre-configured events will run first
	* Then DS's, incl. passed variables are run ahead of the page generation itself
	* https://github.com/dadi/web/issues/10

#### In progress

* Cache invalidation API
	* https://github.com/dadi/web/issues/8
* Status endpoint
	* https://github.com/dadi/web/issues/7
* Full docs rewrite nearing completion (in line with API)

### DADI CDN

* Auth flow updates done
	* https://github.com/dadi/cdn/commit/2bbd92f383c480cf370fdc3a5a8b843af9a3908b
* Exploration of alternative to ImageMagick
	* ImageMagick support for latest LTS Node is not available, forcing a step down (less than ideal)
	* GD works well and is being tested
	* https://github.com/dadi/cdn/tree/feature/gd_conversion

### DADI Publish

* Ability to create and manage an API (document structure) added
* User interface design for the next version starts this week

_Note: time lines for delivery TBC, but this is our highest priority_

### DADI Passport

* Error handling added
	* https://github.com/dadi/passport/commit/efeb5473d9cba1667dd9839a2508fc9fa20e3720
* Documentation completed
	* https://github.com/dadi/passport/pull/6
* Multi language support in progress
	* PHP complete: https://github.com/dadi/passport/tree/master-php
	* Java, .Net, C, Python and Go planned

### DADI Identity

#### Completed

* Production-scale testing
* Confidence metrics captured and documented
* Documentation complete
	* https://github.com/dadi/identity/tree/docs

#### In progress

* Addition of an OTP for touch
	* https://github.com/dadi/identity/issues/3
* Add authentication to the lookup endpoint
	* https://github.com/dadi/identity/issues/4
* Data cleansing
	* https://github.com/dadi/identity/issues/5

### DADI Track

* Front end layer separated out

### DADI Visualise

* Brief being written at the moment
	* Focus is on multi-data dashboard support and the ability to load in any data
* Redis support for real time data stream added
	* Currently in performance testing

### DADI Cleanse

* V1 complete
* Multilingual support in progress
* Multiple bugs closed:
https://github.com/dadi/cleanse/issues?q=is%3Aissue+is%3Aclosed

### DADI Recommend

* First full build with Redis support now in testing

### Taxonomic-framework

* Node level descriptions being added at the moment
* Men's lifestyle due in the next two weeks

### DADI Match

* Training data is ongoing
* APIs complete
* Base-level performance testing in progress (however largely training data dependant)
