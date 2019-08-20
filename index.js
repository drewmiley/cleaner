const fetch = require('node-fetch');

async function fetchEmails(minimumAge = 30) {
  const response = await fetch('https://randomuser.me/api/?results=10');
  const jsonResponse = await response.json();
  return jsonResponse.results
      .filter(user => user.dob.age > minimumAge)
      .map(user => user.email);
}

async function fetchEmailsMultipleTimes(timesToCall, minimumAge) {
    return await Promise.all(Array.from(Array(timesToCall).keys())
        .map(async () => {
            return await fetchEmails(minimumAge);
        }));
}

async function run() {
    const results = await fetchEmailsMultipleTimes(5, 65);
    console.log(results.flat());
}

run();
