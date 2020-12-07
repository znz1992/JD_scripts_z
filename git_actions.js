var JD_gitactions_ck=$prefs.valueForKey("JD_gitactions_ck");
var JD_gitactions_jb=$prefs.valueForKey("JD_gitactions_jb");
var git_token=$prefs.valueForKey("git_token");

var ck_arr=JD_gitactions_ck.split(',');
var jb_arr=JD_gitactions_jb.split(',');

if (jb_arr[1]=='sync-scripts') {
    for(var n = 0; n < ck_arr.length; n++) {
			browserForTurntableFarm2(ck_arr[n],jb_arr[1])
	}
} else { 
	   for(var i = 0; i < ck_arr.length; i++) {
		for(var j = 0; j < jb_arr.length; j++) {
			browserForTurntableFarm2(ck_arr[i],jb_arr[j])
		}
	}
}


async function browserForTurntableFarm2(type,type2) {
const method = 'POST';
const headers = {
  'Accept' : 'application/vnd.github.v3+json',
  'Authorization' : 'token '+git_token
};

var bodys={
	"event_type": type2
}
const myRequest = {
    url: 'https://api.github.com/repos/znz1992/'+type+'/dispatches',
    method: method,
    headers: headers,
    body: JSON.stringify(bodys)
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
}, reason => {
    console.log(reason.error);
});
}

 $done()
