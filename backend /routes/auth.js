const router = require('express').Router();
const User = require('../models/User')

router.post('/register', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});

// router.post('./login')
// /api/user/login

module.exports = router;