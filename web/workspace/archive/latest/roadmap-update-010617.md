---
date: 2017-06-01
title: Roadmap Update
handle: roadmap-update-010617
author: James Lambie
preface: API Version 2.0 is close to release, plus we're working on an "Edge" version of DADI Web.
category: roadmap
---

## DADI API

### API Data Connectors - Release Shifted

Due to the requirement to release some changes to how media collections are handled by API, the decoupled data storage functionality has been shifted to the next release, version 3.0. It was hoped that these two pieces of work would be released together in 2.0 but the codebases were drifting apart too much so the decision has been taken to release one before the other.

### API Version 2.0

API Version 2.0 is being tested against existing projects this week, ready for release to NPM at the end of the week. The following changes will be released with 2.0:

#### Upgraded MongoDB driver
The MongoDB driver has been upgraded to 2.2.x, from the existing 1.4.x version.

#### Media collections
The new version introduces a few changes to how media is handled by API.

The concept of media collections has been abstracted from the public API. It removes the requirement for a collection schema, instead using a schema kept internally in API. At the moment it's hardcoded to store images (containing dimensions, size, mime type, etc.), but in the future we will look into making the schema adapt to the type of file being uploaded.

#### Hook configuration endpoints

The hooks config endpoint (`/api/hooks/:hookName/config`) has been extended to accept POST, PUT and DELETE requests to create, update and delete hooks, respectively.

#### API baseUrl

We've introduced a `server.baseUrl` configuration parameter, which will be used to determine the URL of media assets when using the disk storage option.

```json
"baseUrl": {
  "protocol": "http",
  "port": 80,
  "host": "mydomain.com"
}
```

#### Postinstall script

Added a post install script which runs following an install of API from NPM. A development configuration file is created along with a basic workspace directory containing two collections, an endpoint and a hook. No files are overwritten if the config and workspace directories already exist.

#### Issues resolved

* [#245](https://github.com/dadi/api/issues/245): fix media path formatting
* [#260](https://github.com/dadi/api/issues/260): modify property value that indicates a media collection to "mediaCollection"
* [#265](https://github.com/dadi/api/issues/265): array not validated against schemas in POST requests
* [#284](https://github.com/dadi/api/issues/284): indexes not checked correctly when given a sort key
* [#156](https://github.com/dadi/api/issues/156): add readPreference configuration option
* [#289](https://github.com/dadi/api/issues/289): improve hooks error reporting
* [#257](https://github.com/dadi/api/issues/257): improve performance of the document composition module
* [#182](https://github.com/dadi/api/issues/182): add ability to create and update documents from a pre-composed document


## DADI Web

As with DADI API, we’re close to releasing an “Edge” version of Web. This version (which will become ultimately v3.0) will have support for multiple template engines which can be installed independently of the core Web application. Initial template engines under development include Dust.js and Pug; Web v3.0 will be released with documentation for building your own template engine adapter. 

Along with the template engine support, Web v3.0 will support HTTP/2. The focus of HTTP/2 is on performance, specifically "end-user perceived latency, network and server resource usage". A major goal is to allow the use of a single connection from browsers to a Web site.


### Issues in progress

* [#155](https://github.com/dadi/web/issues/155): support for HTTP/2 and asset push
* [#165](https://github.com/dadi/web/issues/165): find matching routes after all middleware functions pass
* [#163](https://github.com/dadi/web/issues/163): allow pages and partials to exist in subdirectories
* [#103](https://github.com/dadi/web/issues/103): support multiple for template engines


