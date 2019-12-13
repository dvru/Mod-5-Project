const pry = require('pryjs');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const issues = require('./routes/issues')
const comments = require('./routes/comments')
const express = require('express');
const port = 8000;
const app = express();

app.use(bodyParser());

app.use('/users', users);
app.use('/issues', issues);
app.use('/comments', comments);

app.get('/home', (req, res) => {
    res.json('Hi!');
});

app.listen(port, () => console.log('listening at ', port));