const express = require('express');

const app = express();

require('./config/database');

const auth = require('./routes/auth');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, world!!");
});

app.use('/api/v1', auth);

app.listen(3000, () => {
    console.log("Server Started!!!");
});