//var path = require('path');
//var filename = path.basename(__filename);
var request = require('request');
request('https://raw.githubusercontent.com/MoPoQAQ/Script/main/Me/jx_cfd.js', function (error, response, body) {
  eval(response.body)
})
