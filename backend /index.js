const pry = require('pryjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routes/users')
const issues = require('./routes/issues')
const comments = require('./routes/comments')
const express = require('express');
const port = 8000;
const app = express();
const Base = require('knex-base');

const databaseSettings = require('./knexfile').development;
const knex = require('knex')(databaseSettings);

Base.establishConnection(knex);
// const dotenv = require('dotenv');

app.use(bodyParser());
app.use(cors());
app.use('/users', users);
app.use('/issues', issues);
app.use('/comments', comments);

app.get('/home', (req, res) => {
    res.json('Hi!');
});




//Import sqlit3 
const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});
 
// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});



// Import Routes for auth
const authRoute = require('./routes/auth');
//Middleware
app.use(express.json());
//Route Middlewares
app.use('/api/user', authRoute);







app.listen(port, () => console.log('listening at ', port));
