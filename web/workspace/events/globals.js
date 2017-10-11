var Event = function (req, res, data, callback) {
  // Date and time to play with
  data.global.timestamp = new Date().getTime()

  // Override page meta description
  // Latest section
  if (data.params && data.params.article && data.latest && data.latest.results) {
    data.page.description = data.latest.results[0].attributes.meta || data.latest.results[0].attributes.preface
  }

  // Success stories
  if (data.params && data.params.client && data.successes && data.successes.results) {
    data.page.description = data.successes.results[0].summary
  }

  // Concepts
  if (data.params && data.params.concept && data.concepts && data.concepts.results) {
    data.page.description = data.concepts.results[0].overview
  }

  // Microservices
  if (data.params && data.params.product && data.products && data.products.results) {
    data.page.description = data.products.results[0].overview
    data.page.og_image = `dadi-${data.products.results[0].product}-og.jpg`
  }
 
  // Fin
  callback()
}

module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
}