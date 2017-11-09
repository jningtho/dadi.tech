---
date: 2016-04-18
title: Roadmap Update
handle: roadmap-update-180416
author: James Lambie
preface:  DADI Publish has been pushed along by Arthur. We have an automatic test runner and deployment process implemented, with successful builds on the master branch being deployed to a test server
category: roadmap
---

DADI Publish has been pushed along by Arthur. We have an automatic test runner and deployment process implemented, with successful builds on the master branch being deployed to a test server at http://52.51.2.38.

### DADI API

#### Completed

* Version 1.5.2 published, to attempt to resolve the open/closing of connections


### DADI Web

#### Completed

* Add support for requests to a SSL-enabled API layer (https://github.com/dadi/web/issues/54)
* A fix for static datasource loading (https://github.com/dadi/web/issues/53)
* Add full page metadata to the returned data object, not just `title` (https://github.com/dadi/web/pull/49)

#### In progress

* Error page template (https://github.com/dadi/web/issues/46)
* New branch created to investigate the addition of HTTP/2 support
* New branch for testing a refactored middleware has been added. This supports the idea of extracting the common router into it's own module. https://github.com/dadi/web/tree/refactor/middleware-engine
* Client-side template rendering support (https://github.com/dadi/web/pull/50)

### DADI CDN

#### In progress

* Add more control to the cropping feature
* Thorough testing against existing projects

### DADI Publish

#### Completed

* Arthur wrangled a MVP brief together to give the project better focus
* Creation and implementation of User auth screens, API Connector and Collection Creator

#### In progress

* Refactor of the single central controller to somethng more manageable (https://github.com/dadi/publish/tree/feature/controller_refactor)


### DADI Middleware/Router

#### In progress

* Decisions on how to include the module in existing packages

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
* Lifestyle branch reduced in scope by 50% to remove named entities, which are now being extracted separately and automatically
* Men's lifestyle pushed back by a month to accommodate additional ethnographic research

### DADI Match

* Training data is ongoing
	* New interfaces for this complete
	* https://github.com/dadi/classify
* Base-level performance testing in progress (however largely training data dependant)
