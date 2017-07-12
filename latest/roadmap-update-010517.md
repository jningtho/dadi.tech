---
date: 2017-05-01
title: Roadmap Update
handle: roadmap-update-010517
author: James Lambie
preface: Our developers have been working on a couple of changes to API and Web over the last few weeks to enable an extensible plugin architecture. API is being decoupled from it's database storage engine, while Web is preparing to support multiple templating engines.
category: roadmap
---

### DADI API

Recent changes to API include some performance updates and some changes to the way media uploads work. The performance updates are currently available in Version 1.16.3, while the media upload changes will be released shortly as 1.16.4.

#### Issues resolved
* [#234](https://github.com/dadi/api/issues/234): perform composition after PUT requests, not just GET
* [#229](https://github.com/dadi/api/issues/229): allow signing URLs for uploading media
 
#### Issues in progress

* [PR #247](https://github.com/dadi/api/pull/247): media endpoint structure
* [#211](https://github.com/dadi/api/issues/211): remove apiVersion from composition queries
* [#257](https://github.com/dadi/api/issues/257): improve composition performance
* [#260](https://github.com/dadi/api/issues/260): allow PUT request for media collections

### DADI Web

Version 2.0 of DADI Web was released today. This version brings some long-awaited changes to the application and makes initial setup easier and friendlier for new developers.

#### Get started faster
Web now starts with a default "blog" style configuration immediately after install. The "posts" in the blog give some suggestions of next steps for configuring the application. It uses the new Markdown provider datasource to serve content from the workspace/posts folder.

#### Access more data
We've added a new datasource provider for connecting to miscellaneous APIs. In earlier versions we used a "remote" provider for datasources but this was mostly constrained to connecting to DADI APIs.

Provider changes in Version 2.0 mean that:

* to connect to a DADI API, use the "dadiapi" type in datasource specifictions
* to connect to another API, for example Instagram, use the "remote" type in datasource specifications

##### Example: DADI API
```json
"source": {
  "type": "dadiapi",
  "endpoint": "1.0/articles"
}
```
##### Example: Instagram
```json
"source": {
  "type": "remote",
  "protocol": "http",
  "host": "instagram.com",
  "endpoint": "bikepackingcom/?__a=1"
}
```

#### Read more

Full release notes can be viewed [here](https://github.com/dadi/web/releases/tag/v2.0.0).

#### Issues resolved

* [#128](https://github/com/dadi/web/issues/128): attach compression middleware prior to static middleware
* [#130](https://github/com/dadi/web/issues/130): leave url params unmodified when lowercasing urls
* [#139](https://github/com/dadi/web/issues/139): remove datasource path from attributes
* [#144](https://github/com/dadi/web/issues/144): check host header against specified hosts before serving static files
* fix: don’t modify original schema endpoint ([4901ecc](https://github.com/dadi/web/commit/4901ecc))
* chore: rename sample-workspace to workspace ([c307b8e](https://github.com/dadi/web/commit/c307b8e))
