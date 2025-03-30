function signUp(username, email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User signed up:", username);
            resolve(email);
        }, 1000);
    });
}

function validateEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes("@")) {
                console.log("Email validated:", email);
                resolve(email);
            } else {
                reject("Invalid email");
            }
        }, 1000);
    });
}

function saveToDatabase(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User saved to database:", email);
            resolve(email);
        }, 1000);
    });
}

function sendWelcomeEmail(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Welcome email sent to:", email);
            resolve("Email sent successfully");
        }, 1000);
    });
}

// Using Promises (Chained)
signUp("JohnDoe", "john@example.com")
    .then(validateEmail)
    .then(saveToDatabase)
    .then(sendWelcomeEmail)
    .then((status) => console.log(status))
    .catch((error) => console.error("Error:", error));
