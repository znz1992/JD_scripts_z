var request = require('request');
request('https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_split.js', function (error, response, body) {
    var str=response.body;
  eval(str.split("newShareCodes = [`P04z54XCjVUnIaW5nJcXCCyoR8C6p8txXBH`, 'P04z54XCjVUnIaW5m9cZ2T6jChKki0Hfndla5k', 'P04z54XCjVUnIaW5u2ak7ZCdan1BT0NlbBGZ1-rnMYj', 'P04z54XCjVUnIaW5m9cZ2ariXVJwI64DaVTNXQ']").join("newShareCodes = [`P04z54XCjVUnIaW5n9WQrR0TanfIg`, 'P04z54XCjVUnIaW5m9cZxyMnQUSwSQWy6zgOQ', 'P04z54XCjVUnIaW5mtZVjEgf_6fIMc9OUA', 'P04z54XCjVUnIaW5m9cZ2et1HtDw91u7x5Cbdc']"))
  //eval(response.body)
})
