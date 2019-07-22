// require
    const express = require('express');
    const ejs = require('ejs');
    const port = process.env.PORT || 8080;
    const nodemailer = require('nodemailer');
    const bodyParser = require('body-parser');
    require('dotenv').config();
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
    app.get('/error-page', (req, res) => {
        res.render('error-page');
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
                user: 'nickportfolio24@gmail.com',
                pass: 'zowoesmwhvbcucdc'
            //   user: process.env.GMAIL_ADDRESS,
            //   pass: process.env.GMAIL_PASSWORD 
            }
        });
        mailOpts = {
            from: req.body.name + '  ' + req.body.email + ' ',
            to: 'nickeast1998@gmail.com',
            subject:`New Website Enquiry from ${req.body.name}`,
            html: '<h3>You have a new message from: </h3>' + req.body.name + '<br>' + ' <h4>Their email is:</h4> ' + req.body.email + '<br>' + '<h4>Message:</h4>' + '<br>' + req.body.message
          };
        smtpTrans.sendMail(mailOpts, function (error, response) {
            if (error) {
              res.render('error-page');
              console.log(` ${error}  :  ${response}`);
            }
            else {
              res.render('contact');
              console.log(`success this message has sent`);
            }
          });
    });

// app listen on port 
    app.listen(port, () => {
    console.log(`server started on port: ${port}`);
    });

    