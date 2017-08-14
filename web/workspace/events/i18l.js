var url = require('url')
var path = require('path')

// Set the primary language
var primaryLang = 'en'

var Event = function (req, res, data, callback) {
  // Path without trailing slash & default lang
  var toPath = url.parse(req.url, true).pathname.replace(/\/+$/, '')

  // Remove data.params.lang
  if (data.params && data.params.lang && data.params.lang) {
    var rmvLang = new RegExp('^\/' + data.params.lang, 'gmi')
    toPath = toPath.replace(rmvLang, '')
    data.pathNoLang = toPath
  }

  // Do nothing if default language
  if (data.params && data.params.lang && data.params.lang === primaryLang) {
    callback()
  }

  // See if this is a language we speak
  else {
    try {
      data.i18l = require(path.join(__dirname,'/../lang/', data.params.lang + '.json'))
    } catch (err) {
      // Redirect to default language
      res.writeHead(302, { Location: '/' + primaryLang + toPath })
      return res.end()
    }

    callback()
  }
}

module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
}