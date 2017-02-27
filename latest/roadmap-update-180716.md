---
date: 2016-07-18
title: Roadmap Update
handle: roadmap-update-180716
author: James Lambie
preface: Feedback around the user interface for Publish resulted in a push this week to resolve some of the identified problems.
category: roadmap
---

Feedback around the user interface for Publish resulted in a push this week
to resolve some of the identified problems. We have less resource from the UX team due to requirements from other projects but so far this hasn't blocked development too much.

This week API, CDN and Web all had some big pieces of work picked up by developers, and in some cases, completed. Web has the most open issues currently, but is a stable product and it's development status is not a blocker to any projects.

### DADI Publish

#### Completed

* Batch-apply permissions
* Image field
* Config builder
* UX for menus, document list

#### In progress

* history revisions
* collaborative editing user messaging
* gallery field UX

### DADI API

#### Completed

* Add support for environment variables for sensitive config properties (https://github.com/dadi/api/pull/110)
* Standardise data being passed to hooks (https://github.com/dadi/api/pull/113)

They now receive:
  * The options object specified in the collection schema (`data.options`)
  * The collection name (`data.collection`)
  * The fields schema (`data.schema`)
  * On before hooks, the request (`data.req`)

* Add support for batch delete (https://github.com/dadi/api/pull/114)
* Add fields param support to history and introduce historyFilters (https://github.com/dadi/api/pull/115)

#### In progress

* API Autodata module in development, to allow generating fake test data based on
an API's collections

### DADI CDN

#### In progress

* Support for Routes (https://github.com/dadi/cdn/issues/8)
* Investigation into functionality for "asset delivery by revision"

### DADI Web

#### In progress

* Introduce parameter for handling pagination requests (https://github.com/dadi/web/issues/62)
* External datasource support, e.g. Twitter, Instagram (https://github.com/dadi/web/issues/52)
* Client-side template rendering (https://github.com/dadi/web/pull/50)
