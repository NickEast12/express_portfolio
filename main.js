// require
    const express = require('express');
    const ejs = require('ejs');
    const port = process.env.PORT || 8080;
    




//initialisation
    const app = express();

// ejs rendering
    app.set('view engine', 'ejs');

// setting static folder route
    app.use(express.static('public'));
    app.use(express.static('public/images'));
// rendering pages with ejs
    app.get('/', (req, res) => {
        res.render('index');
    });
    app.get('/portfolio', (req, res) => {
        res.render('portfolio');
    });
    app.get('/index', (req, res) => {
        res.render('index');
    });
    app.get('/contact', (req, res) => {
        res.render('contact');
    });
    app.get('/my-portfolio', (req, res) => {
        res.render('my-portfolio');
    });
    app.get('/just-it', (req, res) => {
        res.render('just-it');
    });
    app.get('/creative-agency', (req, res) => {
        res.render('creative-agency');
    });
    app.get('/ocean-capital', (req, res) => {
        res.render('ocean-capital');
    });
    app.get('/weather-app', (req, res) => {
        res.render('weather-app');
    });
    app.get('/restaurant', (req, res) => {
        res.render('restaurant');
    });
    app.get('/blog-site', (req, res) => {
        res.render('blog-site');
    });
    app.get('/treehouse-api', (req, res) => {
        res.render('treehouse-api');
    });
    app.get('/flickr', (req, res) => {
        res.render('flickr');
    });
    app.get('/rps', (req, res) => {
        res.render('rps');
    });
    app.get('/tip-calculator', (req, res) => {
        res.render('tip-calculator');
    });
    app.get('/under-constuction', (req, res) => {
        res.render('under-constuction');
    });






    
    











// app listen on port 
    app.listen(port, () => {
    console.log(`server started on port: ${port}`);
    });

    