---
date: 2017-11-01
title: Roadmap Update
handle: roadmap-update-011117
author: James Lambie
preface: After 10 months of hard work, DADI API 3.0.0 beta is now available for testing. Plus, new releases for DADI Publish, DADI CLI and DADI Queue.
category: roadmap
---

## DADI API

DADI API 3.0 is going through the final round of testing before release. It can be installed using the following command:

```
npm install @dadi/api@3.0.0-beta
```

API 3.0 will be released with the MongoDB data connector bundled by default, so it should work out of the box in the same way as previous versions. However, you are free to choose which underlying database you use by installing a different data connector and configuring API appropriately. 

Data connectors currently in development include one for CouchDB and a JSON file store. We have a [sample data connector repository](https://github.com/dadi/api-connector-template) available, so you can see what is required to create your own. We'll produce a tutorial to help you build your own shortly after the 3.0 release.

## DADI Publish

DADI Publish Version 1.0.2-beta has been released and is available for install from NPM with the following command:

```
npm install @dadi/publish
```

The latest stable beta version includes some minor UI improvements such as improved menu rendering and friendlier error handling on API connection failure.

A recent user experience review produced a few goals for the next iteration of development:

- rich text input and markdown rendering
- introduce a modular component concept
- expand the editor layout options
- introduce collaborative editing
- introduce version control

In the coming weeks we'll be providing some tutorials to step you through the setup process and configuration, but for now you can check out the [work-in-progress documentation](https://docs.dadi.tech/#publish).

## DADI CLI

DADI CLI 2.0 has been released. It includes an auto-update feature, which makes it possible for you to use the latest versions of our products, as we roll them out, without having to manually update the CLI module.

It also includes better cross-platform support, with pre-packaged binaries being generated for Mac OS, Linux, Linux Alpine and Windows.

## DADI Queue

DADI Queue 2.1.0 is now available, with a modification that allows you to send object data to the workers rather than only strings. 

The `queue-wrapper` package has also been updated to perform automatic encoding of object data. Upgrade to version 1.1.0 to make use of this functionality.

* [Queue on NPM](http://npmjs.com/package/@dadi/queue)
* [Queue Wrapper on NPM](http://npmjs.com/package/@dadi/queue-wrapper)
