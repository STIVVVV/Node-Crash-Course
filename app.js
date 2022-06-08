const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs')

//listen for requests
app.listen(3000);

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