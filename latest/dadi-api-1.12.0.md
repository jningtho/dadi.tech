---
date: 2016-10-12
title: DADI API 1.12.0 available now
handle: dadi-api-1.12.0
author: James Lambie
preface: Release notes
---

## Tagged release

https://github.com/dadi/api/releases/tag/v1.12.0

### Downloads

- [Source code (zip)](https://github.com/dadi/api/archive/v1.12.0.zip)
- [Source code (tar.gz)](https://github.com/dadi/api/archive/v1.12.0.tar.gz)

## Release notes

* fix: ensure composed array values match original order
* feat: add name to endpoints [#129](https://github.com/dadi/api/issues/129)
* fix: values being overridden in partial document update [#127](https://github.com/dadi/api/issues/127)
* feat: add SSL support [#119](https://github.com/dadi/api/issues/119)
* fix: remove log rotation options [#123](https://github.com/dadi/api/issues/123)
* fix: modify nested query to compare strings
* fix: get compose val from schema or model
* fix: stringify objects within err obj
* fix: reduce wait time on db ops, speeds up tests
* fix: empty reference field results [#118](https://github.com/dadi/api/issues/118)

* fix: allow DateTime conversion to unix if value is in a different format. Introduces a field formatting param to compose according to type. Currently only `unix` with fallback to `ISO`.

  ```
  fieldName: {
    type: "DateTime",
    format: "unix",
    ...
  }
  ```

* fix: allow Mixed fields with ids for legacy CMS
* fix: remove options from count endpoint
