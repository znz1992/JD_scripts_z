var request = require('request');
request('https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_health.js', function (error, response, body) {
    var str=response.body;
  eval(str.split("inviteCodes = [`P04z54XCjVUnoaW5nJcXCCyoR8C6i9QR16e`, 'P04z54XCjVUnoaW5m9cZ2T6jChKkh8FWbFAplQ', `P04z54XCjVUnoaW5u2ak7ZCdan1Bdbpik_F9ud7lznm`, `P04z54XCjVUnoaW5m9cZ2ariXVJwFN5uKHNqnc`]").join("inviteCodes = [`P04z54XCjVUnIaW5n9WQrR0TanfIg`, 'P04z54XCjVUnoaW5m9cZxyMnQUSwfV0MJQtGw', 'P04z54XCjVUnoaW5jQACmD62H9Dl-GocIo', 'P04z54XCjVUnoaW5m9cZ2Wq2ypNlpDIruibgdk', 'P04z54XCjVUnoaW5m9cZ2b82X8YwUzOeI8JKXo', 'P04z54XCjVUnoaW5j0BDWD63HlDlDUG', 'P04z54XCjVUnoaW5m9cZz6Cvgc97JchcbPiSg', 'P04z54XCjVUnoaW5m9cZ2et1HtDwxszYOLNn5k','P04z54XCjVUnoaW5mtZVjEgf_6fIGAbrLQ']"))
 // eval(response.body)
})
