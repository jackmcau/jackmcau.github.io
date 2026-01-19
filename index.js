// SETUP
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path')

const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'src/style')));
hbs.registerPartials(path.join(__dirname, 'src/views/partials'));

const PORT = process.env.PORT || 3000;

// ROUTES
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('home', {
        home: 1
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        projects: 1
    });
});

app.get('/work', (req, res) => {
    res.render('work', {
        work: 1
    });
});

app.get('/fourteeners', (req, res) => {
    res.render('fourteeners', {
        fourteeners: 1
    });
});

// LISTENING
const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const shutdown = () => {
    console.log('terminating...');
    server.close(() => process.exit(0));
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);