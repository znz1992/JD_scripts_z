var path = require('path');
var filename = path.basename(__filename);
var request = require('request');
request('https://raw.githubusercontent.com/MoPoQAQ/Script/main/Me/'+filename, function (error, response, body) {
  eval(response.body)
})
