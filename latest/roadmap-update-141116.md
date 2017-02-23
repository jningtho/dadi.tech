---
date: 2016-11-14
title: Roadmap Update (No.32)
handle: roadmap-update-141116
author: James Lambie
preface: The focus returns to DADI Track and Visualise this week (week commencing 14th November 2016). The existing core apps are largely static and isolated; Track chnges this by providing data points around user behaviour, enabling the rest of the stack to receive and act on actions, objects and individuals.
category: roadmap
---

## DADI API

### Completed

* **Version 1.14.0** published and announced (https://github.com/dadi/api/releases/tag/v1.14.0)
* Modification to field types in the schema to allow specifying whether a field should be queried using
exact match or case insensitive matching. Raised by Viktor due to a slower-than-expected query response in some instances (https://github.com/dadi/api/issues/147)
* Add error handling to hooks. Done for `beforeCreate` hooks (https://github.com/dadi/api/issues/146)
* Add envirnment variables for database credentials (https://github.com/dadi/api/issues/145)

### In progress

* Switch to new extracted cache module @dadi/cache
* Investigation into alternative datastores and the abstraction of the connection module

## DADI CDN

### Completed

* Enhancements to the upload feature to extract colours from an uploaded image
* Fixes for the layout processor

### In progress

* full documentation of new URL parameters, to be available at http://docs.dadi.tech/cdn/ (heavily WIP)
* Test suite extension to cover image upload
* Testing of new extracted cache module @dadi/cache

## DADI Web

### Completed

* Configurable cache control header for redirects (https://github.com/dadi/web/issues/95)

### In progress

* Version 1.7.0 to be released **today**. It is essential that anyone not yet ready to upgrade their workspace files should modify their project's package.json file to load the specific version of Web that they need, for example:

`"@dadi/web": "1.6.12"`

Release notes for Version 1.7.0 RC 1 can be found here: https://github.com/dadi/web/releases/tag/v1.7.0-rc.1.

## DADI Track

### In progress

* Data consumers framework in development
* Data aggregation
* Pipeline age configuration
