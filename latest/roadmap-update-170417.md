---
date: 2017-03-04
title: Roadmap Update
handle: roadmap-update-030417
author: James Lambie
preface: With media upload and Reference field pre-composition largely complete, focus is returning to the datastore plugins for API.
category: roadmap
---

With media upload and Reference field pre-composition largely complete, focus is returning to the datastore plugins for API. Some changes to one of the plugins has meant that API itself needs a
couple of modifications. It's close to complete, with 95% of the test suite passing, but the changes caused by the new plugin now need to be ported to the other plugins (File Store, MongoDB Store and CouchDB Store).

## DADI API

### Media Collections

We've decided to make it possible to have more than one media collection. The original implementation allowed for one media collection accessed via the endpoint `/api/media`. By making a few tweaks to the collection loading mechanism, we can create and load media collections in the same way as standard collections.

### In progress

* [#234](https://github.com/dadi/api/issues/234): Reference fields not resolved on update
* [#229](https://github.com/dadi/api/issues/229): Signed URL support for media uploads
* [#222](https://github.com/dadi/api/issues/222): Assets endpoint, configuration and reference
* [#177](https://github.com/dadi/api/issues/177): Add Promise support to model layer

## DADI Web

### Completed

* Version 2.0 tested and ready for release on Monday 24th April 2017

### In progress

* [#108](https://github.com/dadi/api/issues/108): Upgrade MongoDB driver (used for session storage)
* Plugin/extension architecture for all DADI products at investigation stage, document created to collate ideas from wider development team