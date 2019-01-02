const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { body, validationResult } = require('express-validator/check');
const router = express.Router();
const Upload = mongoose.model('Upload');
const path = require('path');
const auth = require('http-auth');
const basic = auth.basic({
    file: path.join(__dirname, '../users.htpasswd')
});

router.get('/Login', (req, res) => {
    res.render('login', { title: 'Login form', pageHeader: 'Login Page' });

});


router.get('/Logout', (req, res) => {
    res.render('logout', { title: 'Logout form', pageHeader: 'Your logged out' });

});


router.post('/Welcome', (req, res) => {
    let logIn = req.body;

    Upload.find({ "$query": { name: logIn.nameLogin } })
        
        .then((registrations) => {

            let registered = registrations[0];
            
            if (registered === undefined) {
                res.render('login', { title: 'Login form', pageHeader: 'Login Page', thankYou: 'Please check login' });
            }
            if (registered.name === logIn.nameLogin) {

                // Load hash DB.
                bcrypt.compare(logIn.passwordLogin, registered.password, function (err , response) {
                   
                    if (response === true) {

                        res.render('welcome', { title: 'Login form', registered });

                    } else {

                        res.render('login', { title: 'Login form', pageHeader: 'Login Page', thankYou: 'Please check login' });
                        
                    }
                });
                
            }
        
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); });


});

router.get('/', (req, res) => {
    res.render('layout', { title: 'Hello', pageHeader: 'Welcome to our site' });
});

router.get('/form', (req, res) => {
    res.render('form', { title: 'registration', pageHeader: 'Registration' });
});

router.post('/',
    
    [
        body('name')
            .isLength({ min: 1 })
            .withMessage('Please enter a name'),
        body('email')
            .isLength({ min: 1 })
            .withMessage('Please enter an email'),
        body('password')
            .isLength({ min: 7 })
            .withMessage('Please enter an password'),
        body('passwordConf')
            .isLength({ min: 7 })
            .withMessage('Please enter an passwordConf')
    ],

    (req, res) => {
        let signUp = req.body;
        
        Registration.find({ "$query": { name: signUp.name } })
            .then((registrations) => {
                let test = registrations[0].name;
                

                if (test === signUp.name) {
                    
                    res.render('form', {
                        title: 'registration',
                        pageHeader: 'Registration',
                        alertUserNameUsed: 'User Name already used',

                        data: req.body
                    });
                }
            })
            .catch(() => {
                
                if (req.body.password === req.body.passwordConf) {
                   
                    // Create a password salt
                    var salt = bcrypt.genSaltSync(10);

                    // Salt and hash password
                    var newPassword = bcrypt.hashSync(req.body.password, salt);

                    const errors = validationResult(req);

                    req.body.password = newPassword;

                    if (errors.isEmpty()) {

                        let registration = new Registration(req.body);

                        registration.save()
                            .then(() => {
                                res.render('login', { title: 'Login form', pageHeader: 'Login Page', thankYou: 'Thank you for your registration!' });

                            })
                            .catch(() => { res.send('Sorry! Something went wrong.'); });
                    }
                    else {
                        res.render('form', {
                            title: 'Registration form',
                            errors: errors.array(),
                            data: req.body
                        });
                    }
                } else {

                    res.render('form', {
                        title: 'registration',
                        pageHeader: 'Registration',
                        alertPasswordsDontMatch: 'Password missmatch please re-enter',

                        data: req.body
                    });


                }
            });

            }

);



router.get('/registrations', auth.connect(basic), (req, res) => {
    Registration.find()
        .then((registrations) => {
            res.render('index', { title: 'Listing registrations', registrations });
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
});

router.get('/:id/delete', (req, res) => {
   
    Registration.findByIdAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.render('delete');
    });
});



module.exports = router;




