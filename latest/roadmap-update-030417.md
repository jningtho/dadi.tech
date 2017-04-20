---
date: 2017-03-04
title: Roadmap Update
handle: roadmap-update-030417
author: James Lambie
preface: Some time was spent this week updating dependencies in API and Web to ensure we are using the latest versions.
category: roadmap
---

Some time was spent this week updating dependencies in API and Web to ensure we are using the latest versions. Our products all use [Greenkeeper](https://greenkeeper.io/) for automated dependency checking - whenever a new version of a dependency is released Greenkeeper sends a pull request to the affected repository and our Continuous Integration server runs a test suite to give us confidence that the new version works correctly with our product.

## DADI API

Work was begun this week on making it possible to send a pre-composed document to API with Reference fields as objects rather than as simple ID fields. When API receives a pre-composed document, it will create new documents if the Reference
field subdocuments don't already have identity fields, or update existing documents if they do. This is the reverse
process to the `compose` feature that resolves Reference fields (similar to using joins in a relational database)

### In progress

* [#177](https://github.com/dadi/api/issues/177): Add Promise support to model layer

## DADI Web

A number of issues have been resolved recently for the Version 2.0 release of Web.

### Sample blog application

The `sample-workspace` folder has been renamed simply to `workspace`, and the sample files within have been created to form
a blog-like application for new users to browse. After installing @dadi/web from NPM, a post install script
copyies the workspace folder to the root of the new application so that a user can be up and running faster.

### Virtual Hosts

A new feature has been added that allows multiple hostnames to be served from a single instance of Web.

### In progress

* [#108](https://github.com/dadi/api/issues/108): Upgrade MongoDB driver (used for session storage)
* Plugin/extension architecture