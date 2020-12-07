var path = require('path');
var filename = path.basename(__filename);
var request = require('request');
request('https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_ms_redrain.js', function (error, response, body) {
  eval(response.body)
})
