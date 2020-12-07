var path = require('path');
var filename = path.basename(__filename);
var request = require('request');
request('https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_nc.js', function (error, response, body) {
  eval(response.body)
})
