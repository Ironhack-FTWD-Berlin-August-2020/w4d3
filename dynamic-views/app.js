const express = require('express');
const app = express();

const movies = require('./movies.json');

console.log(movies);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // views/index.hbs
    res.render('index', {
        name: 'Rufus',
        html: '<h1>You can write html here</h1>',
        todos: [
            'learn node',
            'learn react',
            'play nintendo'
        ]
    });
});

app.get('/movies', (req, res) => {
    // 
    res.render('moviesView', { moviesArray: movies })
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});