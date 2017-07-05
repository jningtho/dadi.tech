---
date: 2017-07-05
title: Introducing template engine support for DADI Web
handle: introducing-template-engine-support
author: Eduardo Bouças
preface: Web 3.0.0 brings multiple template support to the DADI web services stack.
category: articles
---

[Dust.js](http://www.dustjs.com/) is a fast, robust and extensible template engine, with a simple syntax and an unobtrusive way of adding dynamic data to a body of HTML. This made it a natural contender to power [DADI Web](https://github.com/dadi/web), which has been using it to render its pages and partials since day one.

But as we build DADI towards a universal set of web services it's important that we make our products as flexible as possible, and that we remove any barriers to entry. Being asked to learn a new templating engine - or having to train a development team in one - is one of those barriers.

With the release of [version 3.0](https://github.com/dadi/web/releases/tag/v3.0.0) of DADI Web, published yesterday, we removed that barrier, making the tech capable of working with multiple template engines. We've decoupled any interaction with Dust from the core application and built an API for engines, resulting in modular engine implementations like the [Dust.js adapter](https://github.com/dadi/web-dustjs).

We're working on new adapters to provide support for more engines, like [Pug](https://pugjs.org) and [Liquid](https://shopify.github.io/liquid/). But even more exciting than that, we make it possible for developers to create their own adapters, which effectively means that Web can work with virtually **any template engine**. There's a handy [sample engine repository](https://github.com/dadi/web-sample-engine) to help you build your own adapter. If you choose to do so, make sure to let us know, as we love to see all the cool things the community builds with the platform!

When migrating from version 2, there are some breaking changes to look out for. We've put together a [migration guide](https://gist.github.com/eduardoboucas/c0e378c5359827a7f62fb17a5550b5c9) to get you up and running in 5 simple steps.
