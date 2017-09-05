<img src="http://52.209.207.148/assets/img/dadi-colour.svg" width="200">

As a simple demonstration of the **DADI** platform, we're building our new website in the open.

# Web

This site is built using [DADI Web](https://github.com/dadi/web) (requires Node.js v4.6.0 or greater) and is designed to be a simple example project to showcase some of the features of the platform. Please consult the [full documentation](http://docs.dadi.tech/web/) and [website](https://dadi.tech/web/) for more information.

It uses a mix of [static](https://github.com/dadi/dadi.tech/blob/master/web/workspace/datasources/products.json), [external](https://github.com/dadi/dadi.tech/blob/master/web/workspace/datasources/github-api.json), and [Markdown](https://github.com/dadi/dadi.tech/blob/master/web/workspace/events/latest.js) files for datasources ([learn about them here](http://docs.dadi.tech/web/datasources.html)). A more complex case would use [DADI API](https://github.com/dadi/api) as a content store, [DADI CDN](https://github.com/dadi/cdn) for media handling and [DADI Publish](https://dadi.tech/platform/publish) for content management.

## Install

```
cd ./web
npm install
```

## Build JS & CSS

```
npm run build
```

## Run

```
npm start
```
