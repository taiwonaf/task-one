const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}))


app.get('/user', (req, res) => (
    res.json({
        "slackUsername": "taiwonaf",
        "backend": true,
        "age": 22,
        "bio": "I am a microbiologist and a web developer"
    })
))

app.listen(process.env.PORT || 3000, () => console.log('Server is running'));