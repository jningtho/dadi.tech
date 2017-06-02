var dust = require('@dadi/web').Dust
var chroma = require('chroma-js')

function colorScheme(primary, secondary, count, mix) {
  var colors = []
  var mixed = chroma.mix(primary, secondary, mix).hex()
  var scale = chroma.scale([primary, mixed]).colors(count)
  for (var i = 0; i < count; i++) {
    colors.push(chroma(scale[i]).hex())
  }
  return colors
}

/*
* Returns a bunch of colours in a nice little list
*/
dust.getEngine().helpers.gradient = function(chunk, context, bodies, params) {
  var scheme = colorScheme(
    'primary' in params && params.primary && params.primary != null ? params.primary : '#fff',
    'secondary' in params ? params.secondary : '#000',
    'count' in params ? parseInt(params.count, 10) : 10,
    'mix' in params ? parseFloat(params.mix) : 1
  )
  chunk.write(scheme.join(','))
  return chunk
}
