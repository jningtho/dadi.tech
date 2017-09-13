---
date: 2017-09-13
title: Introducing DADI Web Version 4.0.0
handle: introducing-web-version-4-0-0
author: Joseph Denne
preface: This release of DADI Web focuses on performance improvements and simplifying of the codebase.
category: releases
---

## Web Version 4.0.0

Part of this development stream was to take inventory of the dependencies being loaded and we've removed some that added little benefit to the application.

The result of the changes in this release is an easier to maintain codebase and a faster experience for the end user.

> **Note:** there is a breaking change in this release. See the [Application launch](#application-launch) section for details.

#### Installing the new release

See [Installing](#installing) for details regarding installing or upgrading your Web application.

### Compression and Caching Changes

#### Brotli

Version 4.0 introduces Brotli as an alternative compression engine. Brotli provides, in real world testing, payloads around 20% smaller than GZip. If Brotli isn't supported by the client browser then DADI Web will fallback to GZip.

*Useful reading*

* https://engineering.linkedin.com/blog/2017/05/boosting-site-speed-using-brotli-compression
* https://hacks.mozilla.org/2015/11/better-than-gzip-compression-with-brotli/

#### Static assets
Static assets now obey configured compression settings; previously public folder assets were not subject to compression. Files will only be compressed if doing so will save space.

#### Compression configuration

To support the introduction of the new compression engine, the configuration setting for compression has changed. To enable compression in Version 4.0, use `config.headers.useCompression` rather than `config.headers.useGzipCompression`.  The `config.headers.useGzipCompression` property is deprecated and will be removed in a future release.

#### Caching

Compressed responses and assets are now cached rather than being compressed (a relatively expensive operation) on each request. When using the local filesystem cache, files are given an extension that indicates both the type of file and the compression engine used.

*For example*

```console
0869138a321114c3cfb23f10153e69f1cf810c0f.html.gzip
f869438f53115421c6624ff0568e79c1ff870601.css.br
959b1c900937674835fd97efd2f3bbf30d581ad6.svg.gzip
```

#### Cache configuration

Page caching is now on by default if `caching` is specified in the configuration. Page specification files no longer require `cache: true` for caching to be enabled.

### Route processing

Version 4.0 performs route determination faster. In previous versions a request was tested against all loaded page components at the beginning of the request, and an array of matching routes was added to the middleware stack. In this version matching app-specific routes are loaded only if processing the middleware stack yields no matching handlers.

### Request logging

Requests for static files are now passed through the request logger, giving more detailed access logs for the full request cycle.

*Example*

```
04:09:48.920Z  INFO dadi-web: GET / 200 10ms (module=router)
04:09:48.935Z  INFO dadi-web: GET /styles.css 200 5ms (module=router)
04:09:48.938Z  INFO dadi-web: GET /logo.png 200 8ms (module=router)
04:09:59.077Z  INFO dadi-web: GET /test.txt 200 3ms (module=router)
04:09:59.123Z  INFO dadi-web: GET /favicon.ico 200 2ms (module=router)
```

### Security: CSRF tokens

Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. CSRF attacks specifically target state-changing requests, not theft of data, since the attacker has no way to see the response to the forged request.

DADI Web 4.0 adds CSRF security, giving developers the ability to add a per-request CSRF token into the view context, and ensures that all POST requests supply a correct CSRF token. Without a correct token, and with CSRF enabled, users will be greeted with an HTTP 403 response.

To enable CSRF, set the `security.csrf` configuration option:

```json
"security": {
  "csrf": true
}
```

Once enabled, the property `csrfToken` will be added to the view context. You will need to add this to any forms which perform a POST using the field name _csrf, like so:

```html
<form action="/" method="post">
  <input type="text" name="test_input_safe">
  <input type="hidden" name="_csrf" value="{csrfToken}">
  <input type="submit" value="Submit form">
</form>
```

### Application launch

> BREAKING CHANGE!

Launching the application now returns a Promise which, when resolved, returns an object containing the application instance and the loaded route/page components.

```js
// start the application
require('@dadi/web')({
  "engines":[
    require("@dadi/web-dustjs")
  ]
}).then(loaded => {
  console.log(loaded.App)
  console.log(loaded.Components)
})
```

This change replaces the exported modules in previous versions. To obtain a reference to these modules when the application has already started (for example when loading template helpers), require @dadi/web without passing an engine argument:

```js
require('@dadi/web')().then(loaded => {
  console.log(loaded.App)
  console.log(loaded.Components)
})
```


### Other Changes

* Removed support for event-logging system "Sentry". This feature was untested and unused
* Added new middleware to serve content from the public folder, removing dependency on Express.js modules [serve-static](https://github.com/expressjs/serve-static) and [serve-favicon](https://github.com/expressjs/serve-favicon).
* Moved helper methods `sendBackJSON`, `sendBackHTML` into `view/send.js`
* Removed unused helper `sendBackJSONP`
* Removed outdated/unused `media` path.
* Refactor of cache flush under `api/flush`. Added corresponding error page when method is not `POST`.
* Added `npm run format` to run for [standard](https://www.npmjs.com/package/standard) & [prettier](https://www.npmjs.com/package/prettier)
* Hide the err.stack from default error pages when the `NODE_ENV` environment variable is `production` (`NODE_ENV=production`)
* An improved developer experience: changes to event files & template partials/includes reinitialises the application without requiring a restart.

### Resolved issues

* [#51](http://github.com/dadi/web/issues/51): cache flush command fails when no matching page is found
* [#59](http://github.com/dadi/web/issues/59): add CSRF token
* [#158](http://github.com/dadi/web/issues/158): compress response before caching
* [#168](http://github.com/dadi/web/issues/168): process routes after middleware
* [#173](http://github.com/dadi/web/issues/173): listener should trigger a 302 redirect
* [#174](http://github.com/dadi/web/issues/174): introduce Brotli compression
* [#175](http://github.com/dadi/web/issues/175): remove 'server' response header
* [#193](http://github.com/dadi/web/issues/193): reload templates and event files when changed on disk (without restarting app)
* [#212](http://github.com/dadi/web/issues/212): fix default workspace config error

## Installing

In conjunction with this release of DADI Web we're also pleased to announce a new CLI tool for installing and interacting with DADI applications. Although CLI will evolve over time, it currently only supports installing new API, CDN and Web applications. If you already have an installed API, CDN or Web application and only wish to upgrade the product, see the next section "Installing/Upgrading from NPM".

### Installing Web via CLI:

1. Install DADI CLI

```
$ npm install @dadi/cli -g
```

2. Change the directory to the location where you'd like your Web installation to be:

```
$ cd /Users/JohnDoe/Sites
```

3. Create a new Web installation. The following will automatically create a `my-web` directory and install Web within that.

```
$ dadi web new my-web
```

**Note:** This command will launch an interactive prompt asking you which template engines you'd like to install. If you know that beforehand, you can skip that step by providing the names of the template engine modules as parameters.

#### Installing Web with Dust and Pug template engines

```
$ dadi web new my-web --engine=@dadi/web-dustjs --engine=@dadi/web-pugjs
```

4. Enter the `my-web` directory and start the new application:

```
$ cd my-web
$ npm start
```

### Installing/Upgrading from NPM

1. Navigate to an existing directory

```
$ cd /Users/JaneDoe/Sites/my-web
```

2. Install or update @dadi/web directly. 

```
$ npm install/update @dadi/web
```
