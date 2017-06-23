var url = require('url')
var path = require('path')

// Set the primary language
var primaryLang = 'en'

var Event = function (req, res, data, callback) {
  var toPath = url.parse(req.url, true).pathname.replace(/\/+$/, '')

  // Redirect if no lang
  if (data.params && data.params.lang && data.params.lang == primaryLang || ~(toPath.indexOf('assets')) || ~(toPath.indexOf('en'))) {
    // Nothing
  }
  else {
    res.writeHead(302, { Location: '/' + primaryLang + toPath })
    return res.end()
  }

  // Fin
  callback()
}

module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
}