const fetch = require('node-fetch');

let results = [];

async function fetchEmails(minimumAge) {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const jsonResponse = await response.json();
    const users = jsonResponse.results;
    const emails = users
        .filter(user => user.dob.age > minimumAge)
        .map(user => user.email);
    results = results.concat(emails);
    return;
}

async function fetchEmailsMultipleTimes(timesToCall, minimumAge) {
    await Promise.all(Array.from(Array(timesToCall).keys())
        .map(async () => {
            await fetchEmails(minimumAge)
            return;
        }));
    return;
}

async function run() {
  await fetchEmailsMultipleTimes(5, 65);
  console.log(results);
}

run();
