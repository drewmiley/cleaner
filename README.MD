# Declarative to Imperative in 5 Simple Steps

Declarative programming has been the leading paradigm of software development in recent history, through languages such as Java, and ES5. The primary markers of declarative programming are in its reasoning style, being classically algorithmic in nature; often composed largely of for-loops and if-statements.

Nowadays, new approaches have evolved through far greater adoption of newer languages and utility frameworks, ES6 and Python being some of the foremost exponents of these ideas. These languages make it easy to write code that explains what the code achieves, rather than how it achieves it. In my opinion, this is a massive improvement as it makes the code far more readable, and thus far more reasonable.

We, as developers, can often unintentionally obfuscate our work behind the edifice of the languages we write in. Professionally, I find that it is far easier for me to engage with stakeholders, business experts, and QAs, when the code I have produced has a English-like structure - one that tells a story!

Below is a simple routine I have written in the declarative style that hits an external API to retrieve random users a set number of times, filters and maps by age and email, then saves these to a separate variable.  

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

Confusing to follow! I think it would be much improved by being written in the imperative style. But how can we do this? Starting from scratch is an option, but generally a bad one. Instead, let's try to rewrite it one bit at a time, and see where we get to.

## Step 1 - Use of Filter & Map

The best place to start is by cleaning up the largest chunk of code in the snippet, where we filter our users and map them to their emails. Thinking about the language we used there, wouldn't it be good if there were such a thing as map and filter. The excellent news is there is with ES6 array methods, and we can write this using a readable chaining syntax.

```
users => users
  .filter(user => user.dob.age > minimumAgeForFilter)
  .map(user => user.email)
```

## Step 2 - Default Parameters

## Step 3 - Destructuring Assignments

## Step 4 - Async/Await

## Step 5 - Declaration of Constants and Functions

## Conclusion
