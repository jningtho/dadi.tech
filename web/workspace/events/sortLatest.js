// Our forum software (NodeBB) returns posts in a random order in the RSS Feed
// This is a simple sort script to fix that

const Event = function (req, res, data, callback) {
  if (data.forum && Array.isArray(data.forum)) {
    data.forum.sort((a,b) => {
      return new Date(b.pubDate) - new Date(a.pubDate);
    })
  }
  
  callback()
}

module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
}