---
date: 2016-05-30
title: Roadmap Update
handle: roadmap-update-300516
author: James Lambie
preface: DADI Publish – Currently working on serialisation of the content from the rich article editor to enable publish to the API instance.
category: roadmap
---

DADI Publish: Currently working on serialisation of the content from the rich article editor to enable publish to the API instance.

Big push this week to add user permissions functionality required by the Radio
implementation.

DADI CDN still being tested on WC? test server.

### DADI Publish

#### Completed

* Pagination of document index
* Addition of Media Library

#### In progress

* Advanced user permissions
* includes document view filtering based on permissions
* Client Access Key admin
* External data source field, e.g. Fact Mint API
* Collaborative editing interface

### DADI API

#### Completed

* a small modification to allow API to run under Node 6.x.x
* @dadi/toolbelt published to NPM, cuurently only supports removing API history documents (https://github.com/dadi/api/issues/65)
  https://www.npmjs.com/package/@dadi/toolbelt
* add "lastModifiedAt" to a schema's settings block on create and update so Publish knows when/if to fetch schema changes (https://github.com/dadi/api/issues/73)

#### In progress

* add fields for the Publish workflow (https://github.com/dadi/api/issues/55)
* add endpoint to return hooks info (https://github.com/dadi/api/issues/78)

### DADI Web

#### Completed

* Fix: datasource cache files saved using HTML extension (https://github.com/dadi/web/issues/63)

#### In progress

* CSRF protection (https://github.com/dadi/web/issues/59)
* Support for external datasources, such as Twitter API (https://github.com/dadi/web/issues/52)
* Client-side template rendering support (https://github.com/dadi/web/pull/50)
* Error page template (https://github.com/dadi/web/issues/46)

### DADI CDN

#### Completed

* fix: if using version 2 url syntax and no storage adapter is specified, get it from config
* fix: ensure correct key is derived from the url when no storage adapter is specified
* fix: test for /api at the beginning of the url previous test was for 'api' anywhere within the url, meaning images containing 'api' somewhere in the filename would force CDN to request an authorization header
* refactor: simplify error message returning
* fix: remove config file with AWS keys

#### In progress

* documentation of new URL syntax
* documentation of setup instructions using NPM package

### Taxonomic-framework

* Training data ongoing, ~3,000 documents have been processed
* Men's lifestyle slightly behind, possibly ready for next week
