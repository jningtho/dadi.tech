const config = require('@dadi/api').Config
const fs = require('fs')

const Import = function () {
  this.inject('concepts')
  this.inject('support')
  this.inject('products')
}

Import.prototype.inject = function (fileName) {
  
}

module.exports = new Import()