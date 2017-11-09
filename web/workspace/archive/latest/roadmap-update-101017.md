---
date: 2017-10-10
title: Roadmap Update
handle: roadmap-update-101017
author: James Lambie
preface: API 3.0 will be released this week, while Publish 1.0.0 Beta is now available for install from NPM. 
category: roadmap
---
# 10th October 2017

## DADI API

DADI API 3.0 will be released this week, following some final testing against existing datasets. It will be released with the MongoDB data connector bundled by default, however you are free to choose which underlying database you use by installing a different data connector and configuring API appropriately. Data connectors currently in development include one for CouchDB and a JSON file store. We'll make a sample data connector repository available along with a tutorial on how to build your own.

## DADI Web

Development on Web is currently focused on providing an extension framework for Data Providers and Post Processors. In the same way as Web can be extended with template engines, we're now working on making it possible to get your data from anywhere (e.g. load content from Dropbox) and perform custom actions on the rendered HTML before it is sent to the browser. Follow the progress in the Web [issues log](https://github.com/dadi/web/issues) and in this latest [pull request](https://github.com/dadi/web/pull/253). 

## DADI Publish

DADI Publish Version 1.0.0 Beta has been released and is available for install from [NPM](https://www.npmjs.com/package/@dadi/publish). 

In the coming weeks we'll be providing some tutorials to step you through the setup process, but for now you can check out the [work-in-progress documentation](https://docs.dadi.tech/#publish).

The system is due to undergo a full UI review shortly, the results of which will determine how much more development effort is required before MVP (Public Version 1.0.0), as well as when that release will be scheduled. 

## DADI CLI

DADI CLI 2.0 is almost ready for a release. This is a major step forward from the previous version, as it now includes the ability to update itself as new versions of the DADI products are released.

It also includes better cross-platform support, with pre-packaged binaries being generated for Mac OS, Linux, Linux Alpine and Windows.
