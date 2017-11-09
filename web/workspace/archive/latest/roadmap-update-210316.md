---
date: 2016-03-21
title: Roadmap Update
handle: roadmap-update-210316
author: James Lambie
preface: Development continues on DADI API and Web, and both are following a regular release schedule. 
category: roadmap
---

Development continues on DADI API and Web, and both are following a regular release schedule. Developers using the applications are raising issues through the proper channels and helping to shape the product. New versions for both are due this week.

Dave is pushing the DADI Publish interface design along, with an initial focus of ensuring that our frontend code can be as tidy as our backend code.

Generic developer documentation is underway for the Product suite as a whole, to ensure that contributors can be as helpful as possible without too many hurdles to jump over.

### DADI API

#### Completed

* The addtion of the API version in the database query is now configurable https://github.com/dadi/api/issues/39
* Query validation has been extended to allow querying subproperties when using fields of type `Mixed` https://github.com/dadi/api/issues/38
* Log file rotation has been added, now behaves the same as the access log https://github.com/dadi/api/issues/30
* Version 1.4.0 due for release this week

#### In progress

* Hooks
	* In testing pre merge
	* https://github.com/dadi/api/pull/27

### DADI Web

#### Completed

* Global events loader https://github.com/dadi/web/issues/1
* Several bugs fixed in the project, raised by developers using it for client work:
 * https://github.com/dadi/web/issues/38
 * https://github.com/dadi/web/issues/32
 * https://github.com/dadi/web/issues/31
* Version 1.2.1 published, 1.3.0 due this week.

#### In progress

* Status endpoint
	* https://github.com/dadi/web/issues/7
* Full docs rewrite nearing completion. Caching and routing are the two remaining
areas that require attention.

### DADI Status

* Still in testing before it can be used by other packages, with a couple of minor issues
to overcome:
  * in Web, `/api/status` could potentially match a route added by the project team
  * in API, we need to pass the current authentication token along to health routes

### DADI CDN

#### In progress

* ImageMagick as a core processor in testing
	* ImageMagick support for latest LTS Node is not available, forcing a step down (less than ideal)
	* GD works well and is being tested
	* https://github.com/dadi/cdn/tree/feature/gd_conversion
* Code has been refactored to bring it inline with DADI API and DADI Web, the new
structure exists in the branch https://github.com/dadi/cdn/tree/feature/refactor/ and
will be tested against some of the projects already using the CDN
* A test suite has been added and is being reviewed. It currently needs the addition
of a mocked Redis client.
* v1.0.0 to be finalised before we Open Source and push to NPMJS

### DADI Publish

* Progress is being made in interface design. Dave has started a pattern library
to make future updates to interfaces a simple process. This should also give a
reasonable set of documentation describing how to customise your installation.
If you're interested, the rationale for this is similar to the MailChimp team's library:
http://ux.mailchimp.com/patterns/about
* An early version of one the first screens can be seen here http://cloud.dadi.technology/14Dyd/2BdKG3kV

### DADI Passport

* Soon be added to DADI Web (1.3.0) in place of the existing authentication module,
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

* Node level descriptions complete
* Men's lifestyle pushed back by a month to accommodate additional ethnographic research

### DADI Match

* Training data is ongoing
	* New interfaces for this complete
	* https://github.com/dadi/mechanical-turk
* Base-level performance testing in progress (however largely training data dependant)
