var url = require('url')
var path = require('path')

// Set the primary language
var primaryLang = 'en'

// Set what we support
var supportedLangs = ['en','de','jp','fr','es','ru','pt','zh_hant','zh_hans']
var bypassUrls = []

var Event = function (req, res, data, callback) {
  // Path without trailing slash & default lang
  var toPath = url.parse(req.url, true).pathname.replace(/\/+$/, '')
  var firstFolder = toPath.replace(/^\/([^\/]*).*$/, '$1')

  // Remove firstFolder
  if (~(supportedLangs.indexOf(firstFolder))) {
    var rmvLang = new RegExp('^\/' + firstFolder, 'gmi')
    toPath = toPath.replace(rmvLang, '')
  }

  data.pathNoLang = toPath  

  // Do nothing if default language
  if (!~(supportedLangs.indexOf(firstFolder)) && !~(bypassUrls.indexOf(toPath))) { 
    res.writeHead(302, { Location: '/' + primaryLang + toPath })
    return res.end()
  }
  
  callback()
}

module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
}