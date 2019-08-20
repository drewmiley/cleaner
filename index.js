const fetch = require('node-fetch');

let results = [];

function fetchEmails(minimumAge = 30) {
    return fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(response => response.results)
        .then(users => users
          .filter(user => user.dob.age > minimumAge)
          .map(user => user.email)
        )
        .then(emails => results = results.concat(emails));
}

function fetchEmailsMultipleTimes(timesToCall, minimumAge) {
    return timesToCall > 0 ?
        fetchEmails(minimumAge).then(() => fetchEmailsMultipleTimes(timesToCall - 1, minimumAge)) :
        Promise.resolve();
}

fetchEmailsMultipleTimes(5, 65)
    .then(() => console.log(results));
