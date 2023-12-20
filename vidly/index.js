const express = require('express');
const mongoose = require('mongoose');
const main = require('./routes/main');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');

const app = express();

mongoose
    .connect('mongodb+srv://dabl01:Abyl2001@cluster0.4oqyp.mongodb.net/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/vidly.com', main);
app.use('/vidly.com/api/genres', genres);
app.use('/vidly.com/api/customers', customers);
app.use('/vidly.com/api/movies', movies);
app.use('/vidly.com/api/rentals', rentals);
app.use('/vidly.com/api/users', users);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
