---
date: 2016-03-28
title: Roadmap Update
handle: roadmap-update-280316
author: James Lambie
preface: Big news this week is the publishing of DADI Passport to NPM
category: roadmap
---

Big news this week is the publishing of DADI Passport to NPM as [@dadi/passport](https://www.npmjs.com/package/@dadi/passport). It is currently being integrated into DADI Web and API will follow soon after.

Two other releases this week, [@dadi/api@1.4.0](https://www.npmjs.com/package/@dadi/api) and [@dadi/web@1.3.0](https://www.npmjs.com/package/@dadi/web). Both resolve some key issues raised by project developers.

DADI CDN has the beginnings of a test suite which is under review. It needs a mocked Redis server connection to complete it, after which it should almost be ready for publishing to NPM.

Carl is resolving issues in the Publish project while we wait for more interface designs from Dave.

### DADI API

#### Completed

* Connection module improved to significantly reduce number of open database connections
* New hook/trigger functionality added by Eduardo, we're getting some excellent contributions from the
wider team
* Version 1.4.0 published to NPM, release notes here: https://github.com/dadi/api/releases/tag/v1.4.0

#### In progress

* Addition of a status endpoint to return information about the state of the server.

### DADI Web

#### Completed

* Status endpoint complete after open sourcing of DADI Status https://github.com/dadi/web/issues/7
* Version 1.3.0 published to NPM, release notes here: https://github.com/dadi/web/releases/tag/v1.3.0

#### In progress

* Integration with DADI Passport to replace the existing authentication module. Almost complete,
with additional tests being added to the unit test suite.
* New branch created to investigate the addition of HTTP/2 support
* Full docs rewrite nearing completion. Caching and routing are the two remaining
areas that (still) require attention

### DADI Status

* Open sourced and integrated with DADI Web
* https://github.com/dadi/status

### DADI CDN

#### In progress

* ImageMagick as a core processor in testing
	* ImageMagick support for latest LTS Node is not available, forcing a step down (less than ideal)
	* GD works well and is being tested
	* https://github.com/dadi/cdn/tree/feature/gd_conversion
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
