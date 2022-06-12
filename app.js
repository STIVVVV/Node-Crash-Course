const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//express app
const app = express();

// connection to mongodb
const dbURI = 'mongodb+srv://netninja:h2a6N8WTyTqqn3eO@nodetuts.l5qd5.mongodb.net/nodetuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewURLParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

//register view engine
app.set('view engine', 'ejs')

//middle ware aand static files
app.use(express.static('public'))
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'how to get away with murder', snippet: 'its as easy as 1 2 slice'},
        {title: 'how to commit tax fraud', snippet: 'the irs is actually not that bad'},
        {title: 'how to make kool-aid', snippet: 'very simple koolaide recipe'}
    ];
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new Blog'});
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});