var dust = require('dustjs-linkedin')
var _ = require('underscore')

dust.helpers.pagination = function(chunk, context, bodies, params) {
  var err
  if(!('page' in params && 'totalPages' in params && 'path' in params)) {
    err = new Error('Insufficient information provided to @paginate helper')
  }
  var current = parseInt(params.page, 10)
  var totalPages = parseInt(params.totalPages, 10)

  if(!(isFinite(current) && isFinite(totalPages))) {
    err = new Error('Parameters provided to @paginate helper are not integers')
  }

  var path = params.path

  var paginateContext = {
    n: current,
    path: ''
  }

  if (err) {
    console.log(err)
    return chunk
  }

  var context = context.push(paginateContext)
  var decreaseSteps = Math.min(current, 5)
  var increaseSteps = Math.min(totalPages - current, 5)
  var balance = increaseSteps - decreaseSteps

  console.log('current: ', current)
  console.log('decreaseSteps: ', decreaseSteps)
  console.log('increaseSteps: ', increaseSteps)
  console.log('balance: ', balance)

  if (balance > 0) {
    increaseSteps += balance
  } else {
    decreaseSteps += Math.abs(balance)
  }

  increaseSteps = Math.min(increaseSteps, totalPages)
  decreaseSteps = Math.min(decreaseSteps, totalPages)

  console.log('decreaseSteps: ', decreaseSteps)
  console.log('increaseSteps: ', increaseSteps)

  function getStep(count, direction, current) {
    var steps = []
    while (steps.length < count) {
      steps.push(direction === 'increase' ? (current + 1) + steps.length : current - steps.length )
    }
    if (direction === 'decrease') {
      steps.reverse()
    }

    console.log(steps)
    return steps
  }
  function printStep(body, n) {
    paginateContext.n = n
    paginateContext.path = context.resolve(params.path)
    if(n === 1) {
      // this is to make the path just the base path, without the number
      paginateContext.path = (paginateContext.path || '').replace(/1\/?$/, '')
    }
    chunk.render(body, context)
  }

  function printStepBlock(step) {
    if (step === current) {
      return printStep(bodies.current, step)
    }
    return printStep(bodies.block, step)
  }

  if(current > 1) {
    if(bodies.first) {
      printStep(bodies.first, 1)
    }
    if(bodies.prev) {
      printStep(bodies.prev, current - 1)
    }
  }


  _.each(getStep(decreaseSteps, 'decrease', current), printStepBlock)
  _.each(getStep(increaseSteps, 'increase', current), printStepBlock)

 if(current < totalPages) {
   if(bodies.next) {
     printStep(bodies.next, current + 1)
   }
   if(bodies.last) {
     printStep(bodies.last, totalPages)
   }
 }

  return chunk
}