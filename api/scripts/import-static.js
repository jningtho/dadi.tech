const config = require('@dadi/api').Config
const DadiAPI = require('@dadi/api-wrapper')
const fs = require('fs')
const path = require('path')

const api = new DadiAPI({
  uri: config.get('publicUrl.host'),
  port: config.get('server.port'),
  credentials: {
    clientId: 'testClient',
    secret: 'superSecret'
  },
  version: config.get('query.useApiVersion'),
  database: config.get('database.database')
})

const Import = function () {
  this.clear('concepts')
    .then(res => {
      this.inject('concepts')
    })
  this.clear('support')
    .then(res => {
      this.inject('support')
    })
  this.clear('products')
    .then(res => {
      this.inject('products')
    })
  this.clear('successes')
    .then(res => {
      this.inject('successes')
    })
}

Import.prototype.clear = function (collection) {
  return api.in(collection)
      .whereFieldExists('title') // Temporary pending: https://github.com/dadi/api-wrapper-core/issues/12
      .delete()
}

Import.prototype.inject = function (collection) {
  const data = fs.readFileSync(path.join(__dirname, `/static/${collection}.json`), {encoding: 'utf8'})

  if (typeof data !== 'string') throw Error('file data must return string')

  const json = JSON.parse(data)
  if (!json.data) throw Error('Missing data block in static JSON')

  console.log(`Inserting ${json.data.length} documents into ${collection}`)
  json.data.map(node => {
    api.in(collection)
      .create(node)
      .then()
      .catch(e => {
        console.log(e.error)
      })
  })
}

module.exports = new Import()