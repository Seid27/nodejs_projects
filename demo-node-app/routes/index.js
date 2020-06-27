const express = require('express');
const {body, validationResult} = require('express-validator/check');

const router = express.Router();

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
        res.send('Thank you for registering to our service!!')

    }

    else{

        res.render('form',{title: "Registration Form", errors:errors.array(), data:req.body})

    }

    
})

module.exports = router;