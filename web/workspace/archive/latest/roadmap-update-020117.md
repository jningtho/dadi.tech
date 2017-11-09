---
date: 2017-01-02
title: Roadmap Update
handle: roadmap-update-010217
author: James Lambie
preface:  API, CDN and Web are now all running continuous integration builds on and are being tested against each of the latest major Node versions.
category: roadmap
---

API, CDN and Web are now all running continuous integration builds on [Travis CI](http://travis-ci.org/dadi) and are being tested against each of the latest major Node versions. This means that the current recommended Node versions for these products are:

* 4.7.0
* 5.12.0
* 6.9.2


### DADI API

#### Completed

* [#153](https://github.com/dadi/api/issues/153): Switch to new extracted cache module @dadi/cache
* [#164](https://github.com/dadi/api/issues/164): Resolve bug where collection files were not loaded correctly due to differences in the directory path separator on different platforms

#### In progress

* File upload added to API, [pull request awaiting review](https://github.com/dadi/api/pull/160) by @josephdenne & @eduardoboucas
* [#152](https://github.com/dadi/api/issues/152): Cache direct calls via the Model layer
* Investigation into alternative datastores and the abstraction of the connection module, including RethinkDB and new contender ReasonDB
* SSL improvements

### DADI CDN

#### Completed

* [#177](https://github.com/dadi/cdn/issues/177): Fix compression when changing formats from PNG to JPG
* [#181](https://github.com/dadi/cdn/issues/181): Removed node-canvas dependency, which was only used for determining the primary colour of an image. This is now handled by [node-vibrant](https://github.com/akfish/node-vibrant). Removing node-canvas simplifies the install process. If interested, you can compare results from the new module with color-thief's demo page at http://lokeshdhakar.com/projects/color-thief/.
* [#182](https://github.com/dadi/cdn/issues/182): Fix crash when caching is enabled and a JSON response is requested (e.g. `/test.jpg?format=json`).
* Modified package dependencies to include the `lwip` dependency using the same identifying string as used by `smartcrop-lwip`. This fixes the problem where NPM treated the two dependencies as separate and compiled them both when installing, extending the installation process.

### DADI Web

#### In progress

* [#98](https://github.com/dadi/web/issues/98): Event error trapping & logging. This might be extended to cover process isolation.
* [#51](https://github.com/dadi/web/issues/51): Cache flush crash bug
* SSL improvements

