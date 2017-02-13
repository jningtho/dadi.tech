---
date: 2017-02-13
title: Roadmap Update (No.36)
author: James Lambie
preface: Version 2.0 of API is the focus this week, introducing the ability to specify the datastore to use for both authentication and content. Version 1.0 uses MongoDB exclusively and the view is that perhaps not all projects require the power and expense of a MongoDB installation.
---

## High level notes

Version 2.0 of API is the focus this week, introducing the ability to specify the datastore to use for both authentication and content. Version 1.0 uses MongoDB exclusively and the view is that perhaps not all projects require the power and expense of a MongoDB installation.

Datastore adapters for API will exist as NPM packages and the full name of the package should be specified in the main configuration file. Each datastore adapter will require it's own environment-specific configuration file in the `config` directory of the API installation:

```
my-api/
  config/            # contains environment-specific
                     # configuration properties
    config.development.json
    config.test.json
    config.production.json
    mongodb.development.json
    mongodb.test.json
    mongodb.production.json

  main.js            # the entry point of the app

  package.json

  workspace/
    collections/     # collection schema files
    endpoints/       # custom Javascript endpoints
```

## DADI API

### Completed

* [#179](https://github.com/dadi/api/issues/179): null fields caused reference field composition to fail
* [Version 1.15.2 published](https://github.com/dadi/api/releases/tag/v1.15.2)

### In progress

* [#188](https://github.com/dadi/api/issues/188): Enable cluster mode by default
* [#177](https://github.com/dadi/api/issues/177): Add Promise support to model layer
* [#152](https://github.com/dadi/api/issues/152): Add Cache support to model layer
* [#171](https://github.com/dadi/api/issues/171): Upgrade of MongoDB driver to 2.2.x (currently 1.4.x)
* [#156](https://github.com/dadi/api/issues/156): Add configurable MongoDB readPreference
* Support for multiple datastores being developed in a [new branch](https://github.com/dadi/api/tree/feature/multiple-data-stores), with datastores loaded from separate work-in-progress packages:
* MongoDB connection and database interaction moved to a new package: https://www.npmjs.com/package/@dadi/api-mongodb
* New CouchDB package created: https://www.npmjs.com/package/@dadi/api-couchdb

### Completed

* [#184](https://github.com/dadi/cdn/issues/184): Fix bug where the first part of the path was interpreted as a recipe/route/processor

## DADI CDN

### In progress

* [#203](https://github.com/dadi/cdn/issues/203): Enable cluster mode by default
* Plugin/extension architecture for all DADI products at investigation stage, document created to collate ideas from wider development team

## DADI Web

### Completed

* [#113](https://github.com/dadi/web/issues/113): Datasource-specific authentication block ignored
* [Version 1.8.1 published](https://github.com/dadi/web/releases/tag/v1.8.1)

### In progress

* [#117](https://github.com/dadi/web/issues/117): allow an array of paths when loading partials. Complete and awaiting review.
* [#115](https://github.com/dadi/api/issues/115): Enable cluster mode by default
* [#108](https://github.com/dadi/api/issues/108): Upgrade MongoDB driver (used for session storage)
* [#96](https://github.com/dadi/web/issues/96): Datasource type: Files
* [#111](https://github.com/dadi/web/issues/111): Inconsistent datasource params
* Plugin/extension architecture for all DADI products at investigation stage, document created to collate ideas from wider development team
