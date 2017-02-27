---
date: 2016-02-29
title: Roadmap Update
handle: roadmap-update-290216
author: James Lambie
preface: Our focus remains on DADI Publish, meaning that pace on other products has intentionally dropped off, and will remain slower over the next handful of weeks.
category: roadmap
---

Our focus remains on DADI Publish, meaning that pace on other products has intentionally dropped off, and will remain slower over the next handful of weeks.

### DADI API

#### Completed

* Version 1.3.0 merged into master
	* Anyone running off of master has this version
* Redis support completed and in 1.3.0
* Convert string IDs to ObjectID when passing query to model
* The Git repository is now fully public

#### In progress

* Proposal for the introduction of hooks
	* Pieces of logic that are executed at specific points when documents are created, updated or deleted
	* https://github.com/dadi/api/pull/27
* Method specific authentication
	* Allows finer control over authentication
	* https://github.com/dadi/api/pull/20
* Cache invalidation route created
	* Tests being added
	* Under review
	* https://github.com/dadi/api/pull/26
* Status endpoint route created
	* Tests being added
	* Under review
	* Formatted version of results being added
	* https://github.com/dadi/api/pull/25
* Correct www headers
	* Failed requests and requests without authorisation
	* Brings this into line with our other products

### DADI Web

#### Completed

* Pre load events
	* Events triggered ahead of page load
	* Enables dynamic content creation based on known user data (Identity)
	* https://github.com/dadi/web/commit/a654814c9b6d43bfe6be38cfc0019c5b2f46ce33
* Data source filter events
	* A DS can specify an event that will process any data that has already loader and pass the result in as a filter
	* https://github.com/dadi/web/commit/08a27ce2376b09ba4d36d5066837701ce62a9c3b
* The Git repository is now fully public

#### In progress

* 1.0.0 to be merged back to Master
	* https://github.com/dadi/web/milestones/1.0.0
* Cache invalidation API
	* https://github.com/dadi/web/issues/8
* Status endpoint
	* https://github.com/dadi/web/issues/7
	* Approach is to standardise this function as a package across all products
* Global events loader
	* https://github.com/dadi/web/issues/1
* Full docs rewrite nearing completion (in line with API)

### DADI Generator

* Instant-setup tool
* Installs a basic app skeleton for API and Web on demand
* Feature complete to v1.0.0

### DADI CDN

* ImageMagick as a core processor in testing
	* ImageMagick support for latest LTS Node is not available, forcing a step down (less than ideal)
	* GD works well and is being tested
	* https://github.com/dadi/cdn/tree/feature/gd_conversion
* Refactor code to bring it inline with DADI API and DADI Web
* Provision of a test suite (currently no coverage)

### DADI Publish

* Role management added
* Ability to add fields to a collection defined

_Note: time lines for delivery remain TBC, but this is our highest priority_

### DADI Passport

* PHP support completed
	* https://github.com/dadi/passport/tree/master-php

### DADI Identity

#### In progress

* Addition of an OTP for touch
	* https://github.com/dadi/identity/issues/3
* Add authentication to the lookup endpoint
	* https://github.com/dadi/identity/issues/4
* Data cleansing
	* https://github.com/dadi/identity/issues/5

### DADI Track

* Refactoring code to bring it inline with our other Product
	* https://github.com/dadi/track/tree/refactor
* Increasing test coverage
* Redis support for real time data stream in testing
* Automated front end tracking code in progress
	* Modular
* Automated tracking SDK for mobile (iOS, others planned)

### DADI Visualise

* Brief being written
	* Focus is on multi-data dashboard support and the ability to load in any data

### DADI Recommend

* First full build with Redis support in testing

### Taxonomic-framework

* Node level descriptions ongoing
* Men's lifestyle due in the next week

### DADI Match

* Training data is ongoing
* Base-level performance testing in progress (however largely training data dependant)
