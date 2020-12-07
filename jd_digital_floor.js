var request = require('request');
request('https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_digital_floor.js', function (error, response, body) {
    var str=response.body;
  eval(str.split("inviteCodes = [`40cd108f-9eed-4897-b795-45a5b221cd6b`,'9d4262a5-1a02-4ae7-8a86-8d070d531464']").join("inviteCodes = [`f8b1db55-9019-4852-962b-26306e941006`, '5cdf550e-a961-40ad-a0ae-d3d24fe4bdff', '1076301c-507b-4ab8-8d35-408c92c27445', '84d9e2da-8b48-4a58-9cab-016785d79178', '348bfde2-cf0b-4ec6-b3f6-fd7adf2fcdfc', '61b7c609-8ce7-48f6-ad5e-f9894cb3042d', 'e3e5cc2b-5559-4932-8d24-91608aae2131', '18bd9e51-034c-42e4-96e9-87f73ecbb4e4','17308b49-94cc-4ff3-bb24-9e8dd7e80f13']"))
  
  //eval(response.body)
})
