// require
    require('dotenv').config();
    const sslRedirect = require('heroku-ssl-redirect');
    const express = require('express');
    const ejs = require('ejs');
    const port = process.env.PORT || 8080;
    const nodemailer = require('nodemailer');
    const bodyParser = require('body-parser');
    
//initialisation
    const app = express();
    const GMAIL_EMAIL = process.env.GMAIL_ADDRESS;
    const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;
    const GMAIL_TO_EMAIL = process.env.GMAIL_TO_ADDRESS;

// https 
    app.use(sslRedirect());


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
    app.get('/email-sent', (req, res) => {
        res.render('email-sent');
    });
    app.get('/about', (req, res) => {
        res.render('about');
    });
    app.get('/privacy-policy', (req, res) => {
        res.render('privacy-policy');
    });


// nodeMailer 
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(bodyParser.json());
// POST Route
    app.post('/contact-form', function(req, res){
        let mailOpts, smtpTrans;
        smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: GMAIL_EMAIL,
              pass: GMAIL_PASSWORD 
            }
        });
        mailOpts = {
            from: req.body.name + '  ' + req.body.email + ' ',
            to: GMAIL_TO_EMAIL,
            subject:`New Website Enquiry from ${req.body.name}`,
            html: '<h3>You have a new message from: </h3>' + req.body.name + '<br>' + ' <h4>Their email is:</h4> ' + req.body.email + '<br>' + '<h4>Message:</h4>' + '<br>' + req.body.message
          };
        smtpTrans.sendMail(mailOpts, function (error, response) {
            if (error) {
              res.render('index');
              console.log(` ${error}  :  ${response}`);
            }
            else {
              res.render('email-sent');
              console.log(`success this message has sent`);
            }
          });
    });
// app listen on port 
    app.listen(port, () => {
    console.log(`server started on port: ${port}`);
    });

    