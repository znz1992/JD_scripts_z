var request = require('request');
request('https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_plantBean.js', function (error, response, body) {
  eval(response.body)
})
