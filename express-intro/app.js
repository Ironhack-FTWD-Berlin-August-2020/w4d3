// app.js

const express = require('express');
const app = express();

// this is needed to make the public folder available in the html files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/dog', (req, res) => {
    res.sendFile(__dirname + '/views/dog.html');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});