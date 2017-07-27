var dust = require('dustjs-linkedin')

/*
* Let's you use grab translations from the `i18l` JSON object on a page
*/
dust.helpers.i18n = function(chunk, context, bodies, params) {
  if (bodies.block) {
    return chunk.capture(bodies.block, context, function(string, chunk) {
      if (
        context.get('i18l') && 
        context.get('i18l')[string]
      ) {
        chunk.end(context.get('i18l')[string])
      } else {
        chunk.end(string)
      }
    });
  }
  return chunk;
};