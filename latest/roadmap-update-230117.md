---
date: 2017-01-23
title: Roadmap Update
handle: roadmap-update-230117
author: James Lambie
preface: Most of the DADI modules have had Semantic Release added to them, making new versions automatically available via NPM.
category: roadmap
---

Most of the DADI modules have had Semantic Release added to them, making new versions automatically available via NPM. Proper use of Semantic Release requires special attention to commit messages (which we have been following for the best part of twelve months).

Contributors to core product development should read the following guidelines: http://docs.dadi.tech/contributing/#-git-commit-guidelines

### DADI API

#### Completed

* [Version 1.15.0](https://github.com/dadi/api/releases/tag/v1.15.0) published to NPM
* Improved SSL handling
* Integrated @dadi/cache module in place of custom caching
* Add media upload functionality
* Fully tested against Node versions 4.7.0, 5.12.0, 6.9.2

#### In progress

* [#171](https://github.com/dadi/api/issues/171): Upgrade of MongoDB driver to 2.2.x (currently 1.4.x)
* [#156](https://github.com/dadi/api/issues/156): Add configurable MongoDB readPreferece
* Investigation into alternative datastores and the abstraction of the connection module, including RethinkDB and new contender ReasonDB
* Plugin/extension architecture for all DADI products at investigation stage, document created to collate ideas from wider development team

### DADI CDN

#### Completed

* [#165](https://github.com/dadi/cdn/issues/165): SSL improvements, thanks @adamkdean
* [#187](https://github.com/dadi/cdn/issues/187): Fix colour handler after move to Vibrant over Color Thief
* [#189](https://github.com/dadi/cdn/issues/189): Decode querystrings before parsing to extract image options
* [#190](https://github.com/dadi/cdn/issues/190): Not a bug, but moved temporary file creation to a new location

#### In progress

* Plugin/extension architecture for all DADI products at investigation stage, document created to collate ideas from wider development team

### DADI Web

#### Completed

* [#99](https://github.com/dadi/web/issues/99): SSL improvements, thanks @adamkdean

#### In progress

* [#96](https://github.com/dadi/web/issues/96): Datasource type: Files
* [#111](https://github.com/dadi/web/issues/111): Inconsistent datasource params
* Plugin/extension architecture for all DADI products at investigation stage, document created to collate ideas from wider development team

### DADI Track

#### Completed

* [#3](https://github.com/dadi/track/issues/3): Refactor code to bring it inline with DADI API and DADI Web
* [#4](https://github.com/dadi/track/issues/4): Separate out the visualisation layer (/public)
* [#10](https://github.com/dadi/track/issues/10): Replace datastore with Rethink
