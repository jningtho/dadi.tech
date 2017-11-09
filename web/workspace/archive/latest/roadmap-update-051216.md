---
date: 2016-12-05
title: Roadmap Update
handle: roadmap-update-051216
author: James Lambie
preface: API and Web have been stable in the last few weeks, with only one or two issues identified.
category: roadmap
---

API and Web have been stable in the last few weeks, with only one or two issues identified. This week should see some improvements in the SSL module in all products, with resource available to revisit the SSL setup beginning Tuesday 6th December.

The release of CDN Version 1.7.0 was delayed until this week, to allow the bundling in of more resolved issues. With image upload, external image support and the integration of @dadi/cache, Version 1.7.0 is a significant upgrade.

### DADI API Wrapper & Passport

An issue was reported with DADI Web whereby requests to an API instance were returning 401 errors. A piece of code in API Wrapper was continuing to reuse it's cached access token after API's tokenStore indexes were refreshed. API Wrapper has been updated to refresh it's token in the event of an 'invalid_token' response from API. API Wrapper and Passport have both been republished to NPM, the latest version numbers are:

* API Wrapper: 1.3.0
* Passport: 1.2.0

### DADI API

#### In progress

* [#153](https://github.com/dadi/api/issues/153): Switch to new extracted cache module @dadi/cache
* Investigation into alternative datastores and the abstraction of the connection module, including RethinkDB and new contender ReasonDB
* [#152](https://github.com/dadi/api/issues/152): Cache direct calls via the Model layer
* SSL improvements

### DADI CDN

#### Completed

* [#130](https://github.com/dadi/cdn/issues/130): Add image upload support, allowing configuration of CDN to accept image uploads. See documentation at http://docs.dadi.tech/cdn/concepts/upload
* [#151](https://github.com/dadi/cdn/issues/151): Add external image support.
* [#153](https://github.com/dadi/cdn/issues/153): Respond to the route `/robots.txt`. The path to a robots.txt file can be specified in the configuration file as follows `"robots": "path/to/robots.txt"`
* [#155](https://github.com/dadi/cdn/issues/155): [@dadi/cache](http://www.npmjs.org/@dadi/cache) module now used in place of custom caching
* [#160](https://github.com/dadi/cdn/issues/160): Fix: image is now returned even if no query is specified
* validation added to route and recipe names, to ensure they are 5 or more characters and only a mix of letters, dashes and underscores
* creating a Recipe by sending a POST request must now be sent to `/api/recipes`, not `/api/recipes/new`
* replaced Bluebird Promises with native Promises
* removed Redis dependencies, as these are now handled in @dadi/cache

#### In progress

* full documentation of new URL parameters, to be available at http://docs.dadi.tech/cdn/ (heavily WIP)
* Test suite extension to cover image upload & layouts
* SSL improvements

### DADI Web

#### Completed

* [#101](https://github.com/dadi/web/issues/101): 404 page not rendered
* Version 1.7.2 published to release the 404 fix

#### In progress

* Event error trapping & logging, as per https://github.com/dadi/web/issues/98. This might be extended to cover
process isolation.
* Cache flush crash bug https://github.com/dadi/web/issues/51
* SSL improvements

### DADI Track

#### In progress

* Data consumers framework in development
* Data aggregation
* Pipeline age configuration