---
date: 2016-07-25
title: Roadmap Update
handle: roadmap-update-250716
author: James Lambie
preface: Work on Publish is continuing unabated with Milestone 15 currently in development.
category: roadmap
---

Work on Publish is continuing unabated with Milestone 15 currently in development. The development approach has been tightened up a little, with a clearer focus on immediate requirements.

CDN has had a few changes implemented this week, with new parameters available
via the new URL syntax and the content-aware cropping feature being improved slightly. Documentation for CDN is being improved and a new documentation site being pulled together for the product stack, with a better focus on showing readers how to use the products rather than expecting them to decipher it.

### DADI Publish

#### Completed

* Image field search
* Collection recipes

#### In progress

* Collaborative editing user messaging
* Collaborative editing: apply document deltas for new users
* History revisions UX
* Gallery field UX

### DADI API

#### Completed

* Addition of a DateTime subtype, allowing ISO and UNIX dates to be stored

#### In progress

* API Autodata module in development, to allow generating fake test data based on an API's collections

### DADI CDN

#### Completed

* Some tweaks and bug fixes to support Empire's usage, odd pieces that existed in version 0.11.1-Beta
but were unknown to be in use in client applications.
* Addition of abbreviated parameter names, allowing shorter URLs: e.g. `/test.jpg?q=80&w=640&h=480`

#### In progress

* Documentation update to make it more readable to the lay user
* Support for Routes (https://github.com/dadi/cdn/issues/8)
* Investigation into functionality for "asset delivery by revision"

### DADI Web

#### Completed

* External datasource support, e.g. Twitter, Instagram (https://github.com/dadi/web/issues/52): Complete but under review and testing

#### In progress

* SSL Support (https://github.com/dadi/web/issues/76)
* Introduce parameter for handling pagination requests (https://github.com/dadi/web/issues/62)
* Client-side template rendering (https://github.com/dadi/web/pull/50)
