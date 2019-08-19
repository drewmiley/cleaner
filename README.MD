# Declarative to Imperative in 5 Simple Steps

```
let results = [];

function fetchEmails(minimumAge) {
    return fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(response => response.results)
        .then(users => {
            const minimumAgeForFilter = minimumAge || 30;
            let emails = [];
            for (let i = 0; i < users.length; i++) {
                if (users[i].dob.age > minimumAgeForFilter) {
                    emails.push(users[i].email);
                }
            }
            return emails;
        })
        .then(emails => results = results.concat(emails));
}

function fetchEmailsMultipleTimes(timesToCall, minimumAge) {
    return timesToCall > 0 ?
        fetchEmails(minimumAge).then(() => fetchEmailsMultipleTimes(timesToCall - 1, minimumAge)) :
        Promise.resolve();
}

fetchEmailsMultipleTimes(5, 65)
    .then(() => console.log(results));
```

## Step 1

## Step 2

## Step 3

## Step 4

## Step 5

## Conclusion
