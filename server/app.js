const express = require('express');

const app = express();

require('./config/database');

const auth = require('./routes/auth');
const list = require('./routes/list');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, world!!");
});

// setting up a middleware function for the authentication.
app.use('/api/v1', auth);

// setting up a middleware function for the todo list
app.use('/api/v2', list);

app.listen(8000, () => {
    console.log("Server Started!!!");
});