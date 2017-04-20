---
date: 2017-06-03
title: Roadmap Update
handle: roadmap-update-060317
author: James Lambie
preface: Development of version 2.0 of API has advanced a long way since the last update.
category: roadmap
---

Development of version 2.0 of API has advanced a long way since the last update. The Datastore Plugin interface is almost solidified and a template for Datatore Plugin development will soon be available from DADI's GitHub.

A JSON file store joins the selection of datastores under development, in addition to the MongoDB and CouchDB datastores. The API test suite has been modified to remove references to MongoDB and currently has all tests passing against the file store datastore.

## DADI API

### Completed

* [#179](https://github.com/dadi/api/issues/179): null fields caused reference field composition to fail
* [Version 1.15.2 published](https://github.com/dadi/api/releases/tag/v1.15.2)

### In progress

* [#188](https://github.com/dadi/api/issues/188): Enable cluster mode by default
* [#177](https://github.com/dadi/api/issues/177): Add Promise support to model layer
* [#152](https://github.com/dadi/api/issues/152): Add Cache support to model layer
* [#171](https://github.com/dadi/api/issues/171): Upgrade of MongoDB driver to 2.2.x (currently 1.4.x)
* [#175](https://github.com/dadi/api/issues/175): Extended query functionality
* [#156](https://github.com/dadi/api/issues/156): Add configurable MongoDB readPreference
* Support for multiple datastores being developed in a [new branch](https://github.com/dadi/api/tree/feature/multiple-data-stores), with datastores loaded from separate work-in-progress packages:
 * MongoDB: https://www.npmjs.com/package/@dadi/api-mongodb
 * CouchDB: https://www.npmjs.com/package/@dadi/api-couchdb
 * File store: https://www.npmjs.com/package/@dadi/api-filestore

## DADI CDN

### In progress

* [#203](https://github.com/dadi/cdn/issues/203): Enable cluster mode by default
* Plugin/extension architecture for all DADI products at investigation stage, document created to collate ideas from wider development team

## DADI Web

### Completed

* [Version 1.10.1 published](https://github.com/dadi/web/releases/tag/v1.10.1)
* [#117](https://github.com/dadi/web/issues/117): allow an array of paths when loading partials. Complete and awaiting review.
* [#115](https://github.com/dadi/api/issues/115): Enable cluster mode by default

### In progress

* [#108](https://github.com/dadi/api/issues/108): Upgrade MongoDB driver (used for session storage)
* [#96](https://github.com/dadi/web/issues/96): Datasource type: Files
* [#111](https://github.com/dadi/web/issues/111): Inconsistent datasource params
* Plugin/extension architecture for all DADI products at investigation stage, document created to collate ideas from wider development team

## DADI Publish

### In progress

* [#56](https://github.com/dadi/publish/issues/56): Filter list control
* [#55](https://github.com/dadi/publish/issues/55): collections/nav missing

### Completed

* [#31](https://github.com/dadi/publish/issues/31): Improve style util class
* [#17](https://github.com/dadi/publish/issues/17): Frontend config - change to endpoint
* [#16](https://github.com/dadi/publish/issues/16): Move routing to redux
* [#46](https://github.com/dadi/publish/issues/46): Collapse menu on selection
* [#48](https://github.com/dadi/publish/issues/48): Sign in failure error missing
* [#43](https://github.com/dadi/publish/issues/43): script: create component template