---
date: 2016-04-25
title: Roadmap Update
handle: roadmap-update-250416
author: James Lambie
preface:  DADI Publish has taken a great leap forward and the team is having more in depth discussions about required functionality. 
category: roadmap
---

DADI Publish has taken a great leap forward and the team is having more in depth discussions about required functionality. Issues are being opened and closed regularly. Successful builds on the master branch are being deployed to a [test server](http://52.51.2.38).

With the focus on Publish in the last week the new feature development on Web, API and CDN has slowed a little but we've been able to continue to provide support fixes or advice  where needed.

### DADI Publish

#### Completed

* Skinning of the API + Collection index screens
* Refactor of the central controller to a series of smaller MVC models + controllers
* ~40 issues closed in the last week (https://github.com/dadi/publish/issues?q=is%3Aissue+is%3Aclosed)

#### In progress

* Access Control List support (https://github.com/dadi/publish/pull/103)
* Refactor of the bloated frontend JS script (https://github.com/dadi/publish/issues/101)

### DADI Web

#### Completed

* App now at v1.3.12, v1.4.0 due for release end of April
* Fix: incorrectly inserting a querystring ID value into datasource filters (https://github.com/dadi/web/commit/dbda96fd71929366348376044991fd3551c4a979)
* Fix: handle routing before attempting to cache (https://github.com/dadi/web/commit/f74cb2a3df21e6d6d8f8423886ba857df57921ea)

#### In progress

* Support for external datasources, such as Twitter API (https://github.com/dadi/web/issues/52)
* Client-side template rendering support (https://github.com/dadi/web/pull/50)
* Error page template (https://github.com/dadi/web/issues/46)
* Addition of HTTP/2 support paused whilst @dadi/passport has the same support added

### DADI Logger

* A new module extracted from the Web project, this is to install via NPM (https://github.com/dadi/logger)
* Requires a better introductory README
* Will be used in place of the existing loggers in Web, API and also added to CDN which
doesn't currently log


### DADI CDN

#### In progress

* Add more control to the cropping feature
* Thorough testing against existing projects

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
