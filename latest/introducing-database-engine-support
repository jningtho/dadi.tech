---
date: 2017-05-08
title: Introducing database engine support for DADI API
handle: introducing-database-engine-support
author: Joseph Denne
preface: API 2.0.0 Edge is now ready to test with MongoDB driver support.
category: releases
---

DADI API "Edge" is now ready to test with MongoDB driver support.

This "Edge" release is the first public preview of API version 2.0.0 which introduces configurable database engine support, enabling the use of mulitple different storage engines for your APIs. The API roadmap includes driver support for Oracle NoSQL, CouchDB and a JSON file store.

## Release notes:

### API Version 2.0.0

To install the next beta release of DADI API, use the following command:

```bash
$ npm install @dadi/api@edge --save
```

### Install a data store

`@dadi/api-mongodb` is installed as a development dependency for running the test suite. In your API
project, you must choose and install a data store, including the MongoDB store.

```
$ npm install @dadi/api-mongodb --save
```

### Add a configuration file

Add a data store configuration file in the `config` directory of your project. The
file should be named using the format `<datastore-name>.<environment>.json`

#### Example configuration file for `@dadi/api-mongodb`

**File `config/mongodb.development.json`**

```json
{
  "hosts": [
    {
      "host": "127.0.0.1",
      "port": 27017
    }
  ],
  "username": "",
  "password": "",
  "database": "testdb",
  "ssl": false,
  "replicaSet": "",
  "enableCollectionDatabases": false
}
```

### Modify API configuration

In previous versions we used a `database` block in the API configuration file to
tell API how to connect to the default MongoDB installation.

In API 2.0 and above, we specify a `datastore` as follows:

```json
{
  "server": {
    "host": "127.0.0.1",
    "port": 3001
  },
  "datastore": "@dadi/api-mongodb",
  "auth": {
    "datastore": "@dadi/api-mongodb",
    "database": "testdb"
  }
}
```

Note the possibility of using a different data store for the authentication layer, as
well as the ability to specify a database.
