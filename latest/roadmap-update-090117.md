---
date: 2017-01-09
title: Roadmap Update (No.34)
handle: roadmap-update-090117
author: James Lambie
preface: Focus is on DADI Track this week, and has been for the much of the past week. The codebase has been simplified and brought into line with the same approach used by the other products. The current test coverage is around 85%.
category: roadmap
---

## DADI API

### In progress

* File upload added to API, [pull request awaiting review](https://github.com/dadi/api/pull/160) by @josephdenne & @eduardoboucas
* [#152](https://github.com/dadi/api/issues/152): Cache direct calls via the Model layer
* Investigation into alternative datastores and the abstraction of the connection module, including RethinkDB and new contender ReasonDB
* SSL improvements @adamkdean

## DADI CDN

### Completed

* [#184](https://github.com/dadi/cdn/issues/184): Fix bug where the first part of the path was interpreted as a recipe/route/processor

### In progress

* SSL improvements @adamkdean

## DADI Web

### In progress

* [#98](https://github.com/dadi/web/issues/98): Event error trapping & logging. This might be extended to cover process isolation.
* [#51](https://github.com/dadi/web/issues/51): Cache flush crash bug
* SSL improvements @adamkdean

## DADI Track

### Completed

* [#3](https://github.com/dadi/track/issues/3): Refactor code to bring it inline with DADI API and DADI Web
* [#4](https://github.com/dadi/track/issues/4): Separate out the visualisation layer (/public)
* [#10](https://github.com/dadi/track/issues/10): Replace datastore with Rethink
