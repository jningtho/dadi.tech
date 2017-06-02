var url = require('url')
var path = require('path')
var langParser = require('accept-language-parser')
var lang

// Set the primary language
var primaryLang = 'en'

var Event = function (req, res, data, callback) {
  var toPath = url.parse(req.url, true).pathname.replace(/\/+$/, '')

  // If there's a lang variable passed from pages
  if (data.params && data.params.lang) {
    lang = data.params.lang
  }

  // Otherwise redirect to the browser default (fallback to primaryLang)
  else {
    lang = req.headers['accept-language'] ? langParser.parse(req.headers['accept-language'])[0].code : primaryLang

    if (lang.length > 0){
      res.writeHead(302, { Location: '/' + lang + toPath })
    } else {
      res.writeHead(302, { Location: '/' + primaryLang + toPath })
    }
    
    return res.end()
  }

  // Load the language file (ignore english)
  try {
    data.i18l = lang && lang != primaryLang ? require(path.join(__dirname, '/../lang/', lang + '.json')) : null
  } catch(e) {
    res.writeHead(302, { Location: '/' + primaryLang + toPath })
    return res.end()
  }

  // Fin
  callback()
}

module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
}