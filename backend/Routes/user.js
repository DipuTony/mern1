const express = require('express');
const router = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Hellow Users..get"
    })
})

router.post('/', (req, res, next) => {
    const user_1 = new User({
        _id: mongoose.Types.ObjectId(),
        mail: req.body.mail,
        name: req.body.name,
        age: req.body.age
    });

    user_1.save().then(result => {
        console.log("Save Succesfully", result);

        res.status(200).json({
            message: "Data Added", result
        })

    }).catch(err => {
        console.log("Error while Saving. ", err)
    })

})


router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Hellow Users..post",
        "userName": req.body.name,
        "User Age": req.body.age
    })
})

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: "Hellow Users..put"
    })
})
router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: "Hellow Users..patch"
    })
})
router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: "Hellow Users..delete"
    })
})


module.exports = router;