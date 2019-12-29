const express = require('express');
const users = express.Router();
const User = require('../models/User');
const {through} = require('express')
const auth = require('../auth/local');

// Relationships
User.hasMany('comments');
User.hasMany('issues'), through, ('comments')

// const User = user.model('User', {
//     comments() {
//       return this.belongsToMany('Comment').through('Issue')
//     }
//   })



users.get('/', async (req, res) => {
    res.json(await User.all());
});

users.get('/:id', User.ensureAuthenticated, async (req, res) => {
    // User.testProto();
    const user = await User.find(req.params.id);
    const comments = await user.comments();
    res.json({...user, comments});
    // res.json(logs)

})

users.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json({user});
    } catch (err) {
        res.status(500).json({status: 'error'});
    }
});

users.post('/register', async (req, res) => {
    try {
        const user = await User.createUser(req.body);
        delete user.password;
        const token = auth.encodeToken(user);
        res.status(200).json({...user, token, status: 'success'});
        // res.json({user});
    } catch(err) {
        res.status(500).json({status: 'error', err})
    }
});

users.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    const {user, bool} = await User.checkUser(username, password);
    // console.log(user,bool);
    if (!bool) {
        res.status(500).json({status: 'invalid', err: user})
        return;
    }
    const token = auth.encodeToken(user);
    res.status(200).json({status: 'success', token, ...user })
});

users.patch('/:id', User.ensureAuthenticated, async (req, res) => {
    const user = await User.find(req.params.id);
    res.status(200).json(await user.update(req.body));
});

users.delete('/:id', (req, res) => {
    res.json("not deleted")
})


// users.delete('/:id', async (req, res) => {
//     const user = await User.find(req.params.id);
//     user.delete();
//     res.json('deleted');
// })

module.exports = users;


