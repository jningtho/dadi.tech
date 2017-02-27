---
date: 2016-04-11
title: Roadmap Update
handle: roadmap-update-110416
author: James Lambie
preface: DADI Generator has been brought up to date with the API and Web requirements and published to NPM.
category: roadmap
---

DADI Generator has been brought up to date with the API and Web requirements and published to NPM. It is now possible to globally install the DADI Generator and create new API and Web apps from the command line.

```sh
$ npm install -g @dadi/generator
$ dadi-generator api /path/to/api
```

DADI CDN was due to be published to NPM last week as Version 1.0.0. A major refactor is almost complete which improves performance and maintainability. Version 1.0.0 therefore pegged for release this week after thorough testing.

### DADI API

#### Completed

* ##### Batch updates
Allows a data consumer to update multiple documents matching a query, for example to change the `publishState` of a set of documents (https://github.com/dadi/api/commit/22950a2ddd62649aca02e948a3696e83fcc5d1f5)

* ##### Endpoint documentation
A small change to read in JS comments from an endpoint file for use when auto-generating the API documentation. (https://github.com/dadi/api/commit/914ac9a3fe619e82d75a0d0994828063124b8462)

* ##### Status endpoint
Replaced the existing `/api/status` endpoint with the extracted module `@dadi/status`. (https://github.com/dadi/api/commit/0619a0257de3d13103e7fb5157a844bedda73f36)

* ##### Redis server connection failure
Now falls back to directory cache if the connection to the configured Redis server times out and the server is considered unreachable. The default maximum number of retry attempts is 3, with a retry delay of 60 seconds. (https://github.com/dadi/api/commit/0efcc0f148e3e2f7ecb91e51cd1bc2e62279c446)

#### In progress

* Investigation of extreme number of open connections; have narrowed this down to a (too short?) time delay when instantiating connections for data collections as they are loaded.
* Version 1.5.0 to be published today (2016-04-11)

### DADI Web

#### Completed

* A fix for redirects driven by datasource which was causing a redirect loop in some installations
(https://github.com/dadi/web/commit/7d77bb9e584cf85dbd3ef410e9d599306ce9cb6e)
* Add a configuration option to force a domain redirect. This allows a setting in config which will force redirecting to the specified domain, e.g. useful to redirect a root domain to www

  ```
  "rewrites": {
    "forceDomain": "www.example.com"
  }
  ```
  (https://github.com/dadi/web/commit/8f55d764d7ca95ce22c061ddde720b32f9cf6d4c)

#### In progress

* New branch created to investigate the addition of HTTP/2 support
* New branch for testing a refactored middleware has been added. This supports the idea of extracting the common router into it's own module. https://github.com/dadi/web/tree/refactor/middleware-engine
* Client-side template rendering support (https://github.com/dadi/web/pull/50)
* Add full page metadata to the returned data object, not just `title` (https://github.com/dadi/web/pull/49)
* Support for custom error pages by sending a JSON object as error data (https://github.com/dadi/web/issues/46)

### DADI CDN

#### Complete

* Current master branch has been tagged as v0.1.11-beta in preparation for the first 1.0.0 release which will be published to NPM

#### In progress

* The refactoring of the codebase has gone a little further than initially anticipated. A new branch with a full refactor can be viewed [here](https://github.com/dadi/cdn/tree/feature/refactor_handlers)

* Main features of the refactor:
 * No reliance on ImageMagick
 * Faster under load, almost twice as fast as the existing codebase
 * Code easier to read and maintain
 * Supports new URL syntax proposed by @dark12222000

### DADI Publish

* Excellent progress on developing the brief. Involving more (of the right) people in this was a sound idea

### DADI Generator

#### Complete

* GitHub repository Open Sourced
* Updated with new requirements for API and Web
* v1.0.0 published to NPM

#### In progress
* Detailed installation instructions in the API and Web packages

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
