const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Hellow Users..get"
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