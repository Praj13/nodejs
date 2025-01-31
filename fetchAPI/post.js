//sample code just to learn

fetch("https://example.com/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "john", password: "1234" }),
})
.then(response => response.json())
.then(data => console.log("Token:", data.token));
