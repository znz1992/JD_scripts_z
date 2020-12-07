const message=$prefs.valueForKey('jd_gitactions')
console.log(message)

async function browserForTurntableFarm2(type) {
console.log(type);
const myRequest = {
    url: type,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
}, reason => {
    console.log(reason.error);
});
}
