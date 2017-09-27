var Event = function (req, res, data, callback) {

  // Remove params if blank
  // function noParams() { 
  //  for (var x in data.params) { return false }
  //  return true
  // }
 
  // if (noParams()) delete data.params

  // Date and time to play with
  data.global.timestamp = new Date().getTime()

  // Override page meta description
  // Latest section
  if (data.params && data.params.article && data.latest && data.latest.results) {
    data.page.description = data.latest.results[0].attributes.meta
  }

  // Microservices
  if (data.params && data.params.product && data.products && data.products.results) {
    console.log('hello')
    data.page.description = data.products.results[0].overview
  }
 
  // Fin
  callback()
}

module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
}