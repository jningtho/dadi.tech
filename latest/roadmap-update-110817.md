---
date: 2017-08-11
title: Roadmap Update
handle: roadmap-update-110817
author: James Lambie
preface: Sharp now implemented in CDN 1.12.0 Beta, plus a new version of the Pug.js template engine for Web is on its way. Want to write a template engine for your favourite template language? You can do that too...
category: roadmap
---
## DADI CDN

We’ve now implemented Sharp in CDN 1.12.0 Beta. It is much faster than lwip: running a test using a Buffer as both input and output, Sharp averages 29.08 operations per second, while lwip manages just 1.87 operations per second - that's around 15 times faster. 

Using Sharp also allows us to upgrade Node.js beyond version 6.9.2, as lwip failed to build on more recent versions.

Version 1.12.0 Beta can be installed with the following command:

`npm install @dadi/cdn@beta`

The 1.12.0 public release will be available in a week, following extensive regression testing.

### Resolved
 
* [#243](https://github.com/dadi/cdn/issues/243): remove restriction on configuration file names
* [#247](https://github.com/dadi/cdn/issues/247): respond with error when loading from a URL returns no image data

## DADI Web - Pug Template Engine

A new version of the Pug.js template engine for Web is soon to be released, with the ability to load helper functions which will be added to template locals. See the [pull request](https://github.com/dadi/web-pugjs/pull/1) for more information.

Writing a template engine for your favourite templating language is as easy as pie! Get started with the [sample engine](https://github.com/dadi/web-sample-engine) on GitHub.
