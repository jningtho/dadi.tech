---
date: 2016-11-15
title: DADI Web 1.7.0 available now
author: James Lambie
preface: Release notes
---

## Tagged release

https://github.com/dadi/web/releases/tag/v1.7.1

## Release notes

### Cache-Control headers for redirects

A `cache-control` header can be added to a 301/302 redirect by adding to the `headers` configuration block:

```
"headers": {
  "cacheControl": {
    "301": "no-cache"
  }
}
```

### Dust Helpers

Version 1.7.0 sees the completion of the extraction of the built-in Dust helpers. These are no longer available in the core Web product and must be loaded separately, see https://www.npmjs.com/package/@dadi/dustjs-helpers for usage information.

### Preloaded Data

The Web configuration file now has provision for specifying datasources that should be loaded at startup. Add preload datasources by adding a block to the configuration file:

```js
data: {
  preload: [
    "categories"
  ]
}
```

Accessing preloaded data in Web events is as simple as passing the datasource key to the `Preload` module:

```js
var Preload = require('@dadi/web').Preload
var categories = Preload().get('categories')
```
The preloader stores the contents of the inner results property of the data that is returned, so there is no `metadata` section as you would normally find in data returned from DADI API.

> **Note:** There is no refresh of this preloaded data, yet. Refresh support will be added in a future release.

### Page Route Specification

DADI Web 1.7.0 introduces a more explicit way of specifying multiple routes per page . The `route` property has been replaced with `routes` which should be an Array of route objects.

Each route object must contain, at the very least, a `path` property. At startup, Web adds the value of each `path` property to an internal collection of routes for matching incoming requests.

In this example, the same page (and therefore it's template) will be loaded for requests matching any of the formats specified by the `path` properties:

```js
"routes": [
  {
    "path": "/movies/:title"
  },
  {
    "path": "/movies/news/:title?/"
  },
  {
    "path": "/movies/news/:page?/"
  }
]
```

### Route Validation/Constraints 
DADI Web 1.7.0 introduces several new ways to ensure the correct route is loaded for a particular request, hopefully reducing the hacky workarounds we've implemented for some projects.

See the documentation here: xxx/routing.md.

> For assistance with routing changes, please add an issue to your project and assign it to `jimlambie`.

### Integration of @dadi/cache

The DADI Cache module has replaced the caching code in Web 1.7.0. DADI Cache includes better failover support for when Redis connections fail. Datasources now require a caching configuration similar the main config. See the next section, **Migration to Version 1.7.0**.

### Migrating to Version 1.7.0

To help you migrate your Web installation to v1.7.0, the router will inform you of any changes required to page specifications if the existing `route` property has not yet been modified.

Look out for console messages similar to the following:

```
The `route` property for pages has been extended to provide better routing functionality.
Please modify the route property for page 'movies_news'. The schema should change to the below:

{
  "page": {
    "name": "movies_news",
    "description": "movies news",
    "language": "en"
  },
  "settings": {
    "cache": true
  },
  "datasources": [],
  "events": [],
  "routes": [
    {
      "path": "/movies/news/:furl?/"
    }
  ]
}
```

#### Migrating datasource specifications

> Note that it isn't a requirement to specify caching for datasources, as they will use the main configuration settings if none are specified.

Prior to 1.7.0, caching configuration took the following format:

```
"caching": {
  "enabled": true,
  "ttl": 300,
  "directory": "./cache/web/",
  "extension": "json"
}
```

In 1.7.0 this has changed. If you want your datasources to be cached differently to pages, the caching configuration should now appear similar to the main configuration file:

```
"caching": {
  "ttl": 300,
  "directory": {
    "enabled": true,
    "path": "./cache/web/",
    "extension": "json"
  },
  "redis": {
    "enabled": false
  }
}
```
