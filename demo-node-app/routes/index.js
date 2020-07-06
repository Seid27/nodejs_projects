const express = require('express');
const path = require('path');
const auth = require('http-auth');
const {body, validationResult} = require('express-validator');
const router = express.Router();
const mongoose = require('mongoose');

const Registration = mongoose.model('Registration');

const basic = auth.basic({
    file: path.join(__dirname, '../users.htpasswd')
});

router.get('/',(req,res)=>{
    res.render('form', {title:"Registration form"});

})

router.post('/',[
    body('name')
    .isLength({min:1})
    .withMessage('Please enter name'),

    body('email')
    .isLength({min:1})
    .withMessage('Please enter email')

    ],
    
    (req,res)=>{
    const errors = validationResult(req); //check if all the validation is passed using express validator

    if(errors.isEmpty()){
        const registration = new Registration(req.body);
        registration.save()
        .then(()=>{
            res.send('Thank you for registering to our service!!')
        })
        .catch(()=>{
            res.send('Sorry, something went wrong')
        })

    }

    else{

        res.render('form',{title: "Registration Form", errors:errors.array(), data:req.body})

    }

    
})


router.get('/registration',(req,res)=>{

    Registration.find()
    .then((registrations) => {
    res.render('index', { title: 'Listingregistrations', registrations });
    })
    .catch(() => { res.send('Sorry! Something went wrong.')});

})

module.exports = router;