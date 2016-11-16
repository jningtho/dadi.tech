// You need a Sendgrid.com API key for this
var sg = require('sendgrid')(process.env['SENDGRID_API']);

var Event = function (req, res, data, callback) {

  // On form post
  switch (req.method.toLowerCase()) {
    case 'post':

      // Validate out inputs
      if (req.body.email && isEmail(req.body.email) && req.body.message) {

        var message = "Name: "+req.body.name+"\n\nEmail: "+req.body.email+"\n\nPhone: "+req.body.phone+"\n\nMessage:\n\n"+req.body.message

        var request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: {
            personalizations: [{
              to: [{
                email: 'dl@dadi.co',
              }],
              subject: '[dadi.tech] Contact form message',
            }],
            from: {
              email: 'hello@dadi.tech',
            },
            content: [{
              type: 'text/plain',
              value: message,
            }],
          }
        })

        sg.API(request, function(error, response) {
          console.log(error)
          console.log(response)

          if (error) {
            data.mailResult = 'There was a problem sending the email.'
          } else {
            data.mailResult = 'Thank you for your message, you will hear back from us soon.'
          }

          callback()
        })

      } else {
        data.mailResult = 'All fields are required.'
        callback()
      }

    break
  default:
      return callback()
  }
  
}

// Taken from: http://stackoverflow.com/a/46181/306059
function isEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  return re.test(email)
}

module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
};
