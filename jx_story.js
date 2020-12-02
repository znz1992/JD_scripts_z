var request = require('request');
request('https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_story.js', function (error, response, body) {
  eval(response.body)
})
