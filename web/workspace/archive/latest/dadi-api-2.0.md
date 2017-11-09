---
date: 2017-06-07
title: Introducing API Version 2.0
handle: introducing-api-version-2-0
author: Joseph Denne
preface: The first major release of DADI API since the first full release 1,000 days ago.
category: releases
---

## API Version 2.0

The first major release of DADI API since the first full release 1,000 days ago.

The focus for this release has been on performance improvements. More and more developers are using the REST API as a backend for their web  and mobile apps to insert and retrieve large amounts of data, and sometimes they're using it in ways we never envisaged. While performance has always been more than acceptable, we knew we could do better...

Tagged release: [https://github.com/dadi/api/releases/tag/v2.0.0](https://github.com/dadi/api/releases/tag/v2.0.0)

### Document Composition

One particular feature we've paid attention to in API Version 2.0 is Document Composition. Document Composition lets you store data related to a JSON document in separate collections, rather than as subdocuments of the main document. This acts in a similar way to joining tables by foreign key in a relational database system.

For example, imagine we have two collections, `person` and `car`. The collection `car` is declared as a `Reference` field within the `person` collection schema. A simplified view of the collection schema looks like:

```
{
  "fields": {
    "name": {
      "type": "String"
    },
    "cars": {
      "type": "Reference",
      "settings": {
        "collection": "car"
      }
    }
  }
}
```


A `car` document might look like this:

```
{
  "_id": "587cb6aa80222c9e7266cec0",
  "model": "Lamborghini Diablo",
  "year": 1991
}
```

A `person` document that references the `car` document would look like this:

```
{
  "name": "Joe",
  "cars": [
    "587cb6aa80222c9e7266cec0"
  ]
}
``` 

With Document Composition turned on, when the above `person` document is requested via API the result is:

```
{
  "name": "Joe",
  "cars": [
    {
      "_id": "587cb6aa80222c9e7266cec0",
      "model": "Lamborghini Diablo",
      "year": 1991
    }
  ]
}
``` 

There are two main benefits to this approach over storing the related data as subdocuments within a document.

Firstly, the main `person` document (or all `person` documents), can be requested without performing the composition step, reducing the amount of data that is sent over the network. In some situations you may only need to return the name and number of cars for each document, in which case the extra properties contained in the `car` documents are superfluous.

The second benefit is that all documents can be modified independently, and any changes to the related documents are automatically available to any document that references them.

### Boosting Composition Performance

To perform composition, API looks up referenced documents by the identifier value stored in the primary document.

In the first iteration of Document Composition, this was done on a document-by-document basis, which worked very well for documents containing one or two Reference fields. As more developers discovered the benefits of Reference fields and composition, we realised that it could develop into a performance issue if a large number of documents were requested. Imagine, for example, a request for 200 documents, each containing 5 Reference fields. To satisfy the fully composed response, API must perform 1,001 database lookups. And if any of the Reference fields themselves contain Reference fields...

API Version 2.0 solves this problem by requesting the referenced documents in bulk and performing the composition in memory. Each Reference field encountered will cause a database lookup for a set of identifiers, rather than looking each one up individually. With the above example this means that to satisfy the request for the 200 documents, only 6 database lookups need be performed.

### Load testing

The modified Document Composition feature was load tested using a sample collection containing 46 fields, 10 of them Reference fields.

Each request to the API consisted of two sub requests, one to retrieve an access token and the other to request 20 documents.

Tests were run against API versions 1.16.6 and 2.0.0.

Each load test performed two phases, one 60 seconds long and one 120 seconds long. In both phases 5 new users made requests to the API every second. In each test 900 requests were made to API over the three minutes of the test.

The tests were run on a 12-inch MacBook with a 1.1 GHz processor and 8 GB of RAM. API was configured to run in `cluster` mode, utilising all 4 CPU cores.

#### Results

The results below show that API 2.0 is around four times faster than the previous version.

|| API 1.16.6 | API 2.0.0
|:--|:--|:--
|min|3.2|3.5
|max|915.1|162.7
|median|143.7|30.9
|p95|206.2| 48.7
|p99|263.4| 67.6

> The values are in milliseconds. "p95" and "p99" refer to the time that 95% and 99% of the responses were satisfied within.
