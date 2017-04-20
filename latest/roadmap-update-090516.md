---
date: 2016-05-09
title: Roadmap Update
handle: roadmap-update-090516
author: James Lambie
preface: DADI Publish development in the middle of milestone MVP-5, focussing on the document editor interface and advanced user/role permissions.
category: roadmap
---

DADI Publish development in the middle of milestone MVP-5, focussing on the document editor interface and advanced user/role permissions.

DADI CDN refactoring complete and the new version is ready for testing against
an existing set of assets, which must be done before being able to open source
the repo and publish to NPM.

## DADI Publish

### Completed

* Design/UI concept for Cells field
* Reference field lookup
* Monitor of collection changes

### In progress

* Multi-language support
* Advanced user permissions

## DADI API

### Completed

* Addition of an endpoint to return the API instance's custom endpoints (i.e. /api/endpoints)
* Version 1.6.3 now published to NPM

### In progress

* Addition of standard set of fields for the Publish system (https://github.com/dadi/api/issues/55)
* Provision of a tool to assist in removing history documents (https://github.com/dadi/api/issues/65)

## DADI Web

### Completed

* Config schema change to allow environment variable to be used for PORT, allowing deployment on
cloud platforms such as Heroku
* Version 1.4.0 now published to NPM

### In progress

* CSRF protection (https://github.com/dadi/web/issues/59)
* Support for external datasources, such as Twitter API (https://github.com/dadi/web/issues/52)
* Client-side template rendering support (https://github.com/dadi/web/pull/50)
* Error page template (https://github.com/dadi/web/issues/46)
* Addition of HTTP/2 support can now continue following support added to @dadi/passport

## DADI CDN

### Completed

* Refactored branch has improvements for Redis cache performance and recovery from error

### In progress

* Additional logging to allow better monitoring of the CDN service

## DADI Identity

### In progress

* Addition of an OTP for touch
	* https://github.com/dadi/identity/issues/3
* Add authentication to the lookup endpoint
	* https://github.com/dadi/identity/issues/4
* Data cleansing
	* https://github.com/dadi/identity/issues/5

## DADI Track

### Complete

* Refactored code to bring it inline with our other Products
	* https://github.com/dadi/track/commit/cdcdb20da07b9bf52cea675b654dbcf80d2205a6
* Increased test coverage
* Redis support for real time data stream

### In progress

* Automated front end tracking code in progress
* Modular and opt-in
* Automated tracking SDK for mobile (iOS, others planned)
* Removal of dependancy on Express

## DADI Visualise

* Brief being written
	* Focus is on multi-data dashboard support and the ability to load in any data

### DADI Recommend

* First full build with Redis support in testing

### Taxonomic-framework

* First set of node level descriptions complete
* Lifestyle branch reduced in scope by 50% to remove named entities, which are now being extracted separately and automatically
* Men's lifestyle pushed back by a month to accommodate additional ethnographic research

## DADI Match

* Training data is ongoing
	* New interfaces for this complete
	* https://github.com/dadi/classify
* Base-level performance testing in progress (however largely training data dependant)
