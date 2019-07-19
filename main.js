// require
    const express = require('express');
    const ejs = require('ejs');
    const port = process.env.PORT || 8080;
    const nodemailer = require('nodemailer');
    const bodyParser = require('body-parser');
    require('dotenv').config();
    const { google } = require("googleapis");
    const OAuth2 = google.auth.OAuth2;
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
    app.post('/home-page-contact', function(req, res){
        let mailOpts, smtpTrans;
        smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'oauth2',
                user: process.env.NODE_EMAIL,
                clientId: '315338540456-d0htdueikqlqct5k2gvh2ulnond38fq1.apps.googleusercontent.com',
                clientSecret: 'ARC7R6OZj04NIxan51irV6bx',
                refreshToken: '1/Cu0UhZjtyDOhAkfw4fMD8MhYLBHMqRlxtUvoSHkgE8o',
            //   user: process.env.NODE_EMAIL,
            //   pass: process.env.NODE_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
              }
        });
        mailOpts = {
            from: req.body.name + '  ' + req.body.email + ' ',
            to: 'nickeast1998@gmail.com',
            subject:`New Website Enquiry from ${req.body.name}`,
            // text: `${req.body.name} (${req.body.email}) : ${req.body.message}`,
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

    