---
date: 2016-11-10
title: DADI API 1.14.0 available now
author: James Lambie
preface: Release notes
---

## Tagged release

https://github.com/dadi/api/releases/tag/v1.14.0

### Downloads

- [Source code (zip)](https://github.com/dadi/api/archive/v1.14.0.zip)
- [Source code (tar.gz)](https://github.com/dadi/api/archive/v1.14.0.tar.gz)

## Release notes

### Added: matchType property

`matchType` property added to fields in collection schemas. Determines the type of match allowed when querying using this field. 

#### Example
```
"fields": {
  "title": {
    "type": "String",
    "required": true,
    "matchType": "exact"
  },
  "author": {
    "type": "Reference",
    "settings": {
      "collection": "person"
    }
  },
  "booksInSeries": {
    "type": "Reference"
  }
}
```

#### Possible values

|Value | Behaviour
|:---|:-----
| "exact" | query will be performed using the exact value specified, e.g. { "publishedState": "published" }
| "ignoreCase" | query will be performed using a case insensitive regex of the value specified, e.g. { "publishedState": /^published$/i }
| "anything else" | query will be performed using a regex of the value specified, e.g. { "publishedState": /^published$/ }

> **Note:** If `matchType` is not specified, the default (for legacy reasons) is _a case insensitive regex of the value specified_, e.g. { "publishedState": /^published$/i }

### Added: error handling for hooks

Currently only applies to errors encountered while executing a `beforeCreate` hook, an error is returned in the response:

```json
{
  "success": false,
  "errors": [
    {
      "code": "API-0002",
      "title": "Hook Error",
      "details": "The hook 'myHook' failed: 'ReferenceError: title is not defined'",
      "docLink": "http://docs.dadi.tech/api/errors/API-0002"
    }
  ]
}
```

### Added: environment variables

Environment variables added for database configuration properties.

|Property | Environment variable
|:---|:-----
|Database username| "DB_USERNAME"
|Database password| "DB_PASSWORD"
|Database name| "DB_NAME"
|Auth database username| "DB_AUTH_USERNAME"
|Auth database password| "DB_AUTH_PASSWORD"
|Auth database name| "DB_AUTH_NAME"

### Changed: model instantiation

Modified the model instantiation to wait a second if the database hasn't been connected yet. This avoids the error about maximum event listeners being added in the `createIndex` method.
