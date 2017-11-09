---
date: 2016-10-31
title: Roadmap Update
handle: roadmap-update-311016
author: James Lambie
preface: The core products haven't moved far in the last two weeks due to pressures from client projects.
category: roadmap
---

The core products haven't moved far in the last two weeks due to pressures from client projects. Some of these projects have recently raised some minor issues with API, Web and CDN, all of which have a patch or two ready to go to support the needs of those projects.

### 🎃 DADI API

#### In progress

* Modification to field types in the schema to allow specifying whether a field should be queried using
exact match or case insensitive matching. Raised by Viktor due to a slower-than-expected query response in some instances
* Switch to new extracted cache module @dadi/cache
* Investigation into alternative datastores and the abstraction of the connection module

### 👻 DADI CDN

#### In progress

* enhancements to the upload feature to extract colours from an uploaded image
* full documentation of new URL parameters, to be available at http://docs.dadi.tech/cdn/apis/url/ (heavily WIP)
* Test suite extension to cover image upload
* Testing of new extracted cache module @dadi/cache

### 🕷 DADI Web

Still being tested against client projects. Results of testing so far are good and Version 1.7.0 will be released this week. It is essential that anyone not yet ready to upgrade their workspace files should modify their project's package.json file to load the specific version of Web that they need, for example:

`"@dadi/web": "1.6.12"`

Release notes for Version 1.7.0 RC 1 can be found here: https://github.com/dadi/web/releases/tag/v1.7.0-rc.1.

### ⚰ DADI Core (working title)

DADI Core, the new database layer, is still in an investigation phase. We are keeping an eye on developments with RethinkDB as well as putting databases such as Gun.JS, RTDB and Google's LevelDB through various tests.

Gun.JS is looking to be a good solution, with Mongo-style querying on the roadmap, requiring less integration with DADI API.
