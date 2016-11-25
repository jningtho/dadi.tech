---
date: 2016-11-21
title: Roadmap Update (No.33)
author: James Lambie
preface: CDN Version 1.7.0 is almost ready for release.
---

## DADI API

### In progress

* Switch to new extracted cache module @dadi/cache
* Investigation into alternative datastores and the abstraction of the connection module

## DADI CDN

CDN Version 1.7.0 is almost ready for release, and should be available by the end of this week. A lot of development effort was put into the product last week to ensure the image upload and layout processor were stable.

### Completed

* Additional fixes for the layout processor

### In progress

* external image requests https://github.com/dadi/cdn/issues/151
* full documentation of new URL parameters, to be available at http://docs.dadi.tech/cdn/ (heavily WIP)
* Test suite extension to cover image upload & layouts
* Testing of new extracted cache module @dadi/cache

## DADI Web

Investigation was begun last week into an intermittent error in Web which displayed 401 errors when requesting data from API. Our core engineers have tracked the issue down to a small piece of code in the API Wrapper module which would continue to reuse it's cached access token after API's tokenStore indexes were refreshed. API Wrapper is currently being updated to refresh it's token in the event of an 'invalid_token' response from API.

### Completed

* Version 1.7.0 released, release notes can be found here: https://github.com/dadi/web/releases/tag/v1.7.1

### In progress

* Event error trapping & logging, as per https://github.com/dadi/web/issues/98. This might be extended to cover
process isolation.
* Cache flush crash bug https://github.com/dadi/web/issues/51

## DADI Track

### In progress

* Data consumers framework in development
* Data aggregation
* Pipeline age configuration
