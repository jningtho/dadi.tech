---
date: 2017-05-15
title: Roadmap Update
handle: roadmap-update-150517
author: James Lambie
preface: We're close to finishing the first release candidate of API Version 2.0 and have started publishing versions to NPM tagged with "edge".
category: articles
---

## DADI API

### API "Edge"

We're close to finishing the first release candidate of API Version 2.0 and have started publishing versions to NPM tagged with "edge". API "Edge" can be installed from NPM using the following command:

```sh
$ npm install --save @dadi/api@edge
```

> Note: API Edge should be considered an alpha release and should not be used in a production environment. We make no guarantees that functionality in one release of Edge will be consistent with that in subsequent Edge releases.  

The biggest change in Edge to date is the decoupling of database storage from the core. To use Edge, you must install and configure a data connector. 

Following install of API Edge, install one of the two current connectors, with the command:

```sh
$ npm install @dadi/api-mongodb --save
$ npm install @dadi/api-filestore --save
```

A configuration file will be copied to your application's `config` folder.

#### Currently available data connectors

* [MongoDB](https://github.com/dadi/api-mongodb)
* [JSON file store](https://github.com/dadi/api-filestore)

#### Future data connectors
* CouchDB
* Oracle noSQL
* Apache Cassandra


### Issues resolved

* [#211](https://github.com/dadi/api/issues/211￼ ): fix composition, not all fields composed for multi-refetene field schemas
* [#260](https://github.com/dadi/api/issues/260): rename media collection type “mediaCollection” to avoid clash with another product

### Issues in progress

* [#251](https://github.com/dadi/api/issues/251): respond with HTTP 200 at application root 
* [#257](https://github.com/dadi/api/issues/257): improve composition performance 
* [#265](https://github.com/dadi/api/issues/265): validate arrays against collection schemas


## DADI Web
As with DADI API, we’re close to releasing an “Edge” version of Web. This version (which will become ultimately v3.0) will have support for multiple template engines which can be installed independently of the core Web application. Initial template engines under development include Dust.js and Pug; Web v3.0 will be released with documentation for building your own template engine adapter. 


### Issues in progress

* [#165](https://github.com/dadi/web/issues/165): find matching roots after all middleware functions pass
* [#163](https://github.com/dadi/web/issues/163): allow pages and partials to exist in subdirectories
* [#103](https://github.com/dadi/web/issues/103): support multiple for template engines

#roadmap-updates
