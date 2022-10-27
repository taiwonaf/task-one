const express = require('express');

const app = express();

app.get('/', (req, res) => (
    res.json({
        "slackUsername": "taiwonaf",
        "backend": true,
        "age": 22,
        "bio": "I am a microbiologist and a web developer"
    })
))

app.listen(8000, function() {
    console.log("Server running at 8000")
});