---
date: 2016-05-02
title: Roadmap Update
handle: roadmap-update-020516
author: James Lambie
preface: DADI Publish development in the middle of milestone MVP-4.
category: roadmap
---

DADI Publish development in the middle of milestone MVP-4.

Several minor things have changed in the core products recently that require documentation updates. As DADI Publish progresses more issues are being added to the DADI API issue queue, as the team discovers functionality that would support the Publish platform.

### DADI Publish

#### Completed

* Document List and Create
* Access Control List support (https://github.com/dadi/publish/pull/103)

#### In progress

* Collection settings view and edit
* Refactor of the bloated frontend JS script (https://github.com/dadi/publish/issues/101)

### DADI API

#### Completed

* Config schema allows environment variable to be used for PORT, allowing deployment on
cloud platforms such as Heroku
* Addition of a DateTime data type for collection schemas, parsing and storing dates in
ISO 8601 format (https://github.com/dadi/api/issues/66)

#### In progress

* Addition of standard set of fields for the Publish system (https://github.com/dadi/api/issues/55)
* Provision of a tool to assist in removing history documents (https://github.com/dadi/api/issues/65)

### DADI Web

#### In progress

* CSRF protection (https://github.com/dadi/web/issues/59)
* Support for external datasources, such as Twitter API (https://github.com/dadi/web/issues/52)
* Client-side template rendering support (https://github.com/dadi/web/pull/50)
* Error page template (https://github.com/dadi/web/issues/46)
* Addition of HTTP/2 support can now continue following support added to @dadi/passport

### DADI API Documentation Generator

* A new module published to NPM which when included in an API install can
generate and serve documentation via the browser based on the API's collections and endpoints
* Available to install via NPM (https://www.npmjs.com/package/@dadi/apidoc)

### DADI CDN

#### In progress

* Still working in a separate branch for refactoring
* Cropping functionality extended to include new resizeStyle=crop and allowing specification of
all four corners of the crop rectangle
* Francesco is going to help set up a parallel test of the new version against a Bauer test next week

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
