var request = require('request');
request('https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_split.js', function (error, response, body) {
    var str=response.body;
  eval(str.split("newShareCodes = [`P04z54XCjVUnIaW5nJcXCCyoR8C6p8txXBH`, 'P04z54XCjVUnIaW5m9cZ2T6jChKki0Hfndla5k', 'P04z54XCjVUnIaW5u2ak7ZCdan1BT0NlbBGZ1-rnMYj', 'P04z54XCjVUnIaW5m9cZ2ariXVJwI64DaVTNXQ']").join("newShareCodes = [`P04z54XCjVUnIaW5n9WQrR0TanfIg`, 'P04z54XCjVUnIaW5m9cZxyMnQUSwSQWy6zgOQ', 'P04z54XCjVUnIaW5mtZVjEgf_6fIMc9OUA', 'P04z54XCjVUnIaW5m9cZ2et1HtDw91u7x5Cbdc', 'P04z54XCjVUnIaW5m9cZz6Cvgc97BmVktXS_Q', 'P04z54XCjVUnIaW5j0BDWD63HlDlKB0', 'P04z54XCjVUnIaW5m9cZ2b82X8Ywcgd1eapWD8', 'P04z54XCjVUnIaW5m9cZ2Wq2ypNlsIaxg9N3Mo','P04z54XCjVUnIaW5jQACmD62H9Dl7hnZxo']"))
  //eval(response.body)
})
