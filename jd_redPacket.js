var request = require('request');
   request('https://gitee.com/lxk0301/scripts/raw/master/jd_redPacket.js', function (error, response, body) {
  eval(response.body)
  })