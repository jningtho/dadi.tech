const Event = function (req, res, data, callback) {
  // Check for cookie
  const promoCookie = getCookies(req)['hidepromo']

  if (promoCookie && promoCookie === 'true') {
    data.hidePromo = true
  } else {
    data.hidePromo = false
    res.setHeader('Set-Cookie', 'hidepromo=true');
  }

  // Check for query param ?hidepromo
  if (data.query && data.query.hidepromo) data.hidePromo = true
 
  // Fin
  callback()
}

const getCookies = request => {
  var cookies = {}

  request.headers && request.headers.cookie && request.headers.cookie.split(';').forEach(function(cookie) {
    var parts = cookie.match(/(.*?)=(.*)$/)
    cookies[parts[1].trim()] = (parts[2] || '').trim()
  })

  return cookies;
};


module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
}