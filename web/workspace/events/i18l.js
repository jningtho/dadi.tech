var path = require('path')
var langParser = require('accept-language-parser')
var lang

// Set the primary language
var primaryLang = 'en'

var Event = function (req, res, data, callback) {
  // If there's a lang variable passed from pages
  if (data.params && data.params.lang) {
    lang = data.params.lang
  }

  // Otherwise redirect to the browser default (fallback to primaryLang)
  else {
    lang = req.headers['accept-language'] ? langParser.parse(req.headers['accept-language'])[0].code : primaryLang
    res.writeHead(302, { Location: '/' + lang })
    return res.end()
  }

  // Load the language file (ignore english)
  try {
    data.i18l = lang && lang != primaryLang ? require(path.join(__dirname, '/../lang/', lang + '.json')) : null
  } catch(e) {
    res.writeHead(302, { Location: '/' + primaryLang })
    return res.end()
  }

  // Fin
  callback()
}

module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
}