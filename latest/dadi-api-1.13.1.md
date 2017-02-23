---
date: 2016-11-10
title: DADI API 1.13.1 available now
handle: dadi-api-1.13.1
author: James Lambie
preface: Release notes
category: releases
---

## Tagged release

https://github.com/dadi/api/releases/tag/v1.13.1

### Downloads

- [Source code (zip)](https://github.com/dadi/api/archive/v1.13.1.zip)
- [Source code (tar.gz)](https://github.com/dadi/api/archive/v1.13.1.tar.gz)

## Release notes

### Collection schema indexes

Version 1.13.1 introduces an extension to the index creation for collections. Indexes can be specified one of two ways. The existing config is still compatible:

```
"index": {
  "enabled": true,
  "keys": { "title": 1 }
}
```

The new config allows specifying more than one index for a collection, and giving a set of options to each one. This approach allows the creation of a unique index alongside a compound index, for example:

**Note:** the `enabled` property is now ignored. If you have a configuration block for indexes, it is assumed you intend them to be enabled...

```
"index": [
  {
    "keys": {
      "username": 1
    },
    "options": {
      "unique": true
    }
  },
  {
    "keys": {
      "platform": 1,
      "platformUserId: 1
    }
  }
]
```

### Collection schema validation

This version also adds validation to collection schemas so that if a sort field is specified but no index is specified for that field, an error is returned.

```
{
      "code": "API-0001",
      "title": "Missing Index Key",
      "details": "'title' is specified as the primary sort field, but is missing from the index key collection."
    }
```

### Removal of log module

Client applications should use `var log = require(‘@dadi/logger’)` inside custom endpoints instead.

### Interactive tool for creating client records

This version changes the `create-client` util to work as a small, interactive CLI tool, allowing users to choose the clientId/secret pair instead of using the default ones. It can be used when bootstrapping a DADI API application, or any time afterwards, to create a new client.

#### Usage

When using DADI API from source (e.g. cloning the repository):

```shell
node utils/create-client.js
```

When using DADI API as a NPM module:

```shell
npm explore @dadi/api -- npm run create-client
```

#### Example

```
==================================
 DADI API Client Record Generator 
==================================

-> Client identifier: (testClient) myClient
-> Secret access key: (secretSquirrel) mySecret
-> Access type (admin, user): (user) admin
(!) Is this ok?: (y/n) y

(*) Client created successfully:

{ clientId: 'myClient',
  secret: 'mySecret',
  type: 'admin',
  _id: 57d4116c8aa4ab9d83bc6401 }
```
