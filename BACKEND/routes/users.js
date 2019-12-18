const express = require('express');
const users = express.Router();
const User = require('../models/User');
const {through} = require('express')

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

users.get('/:id', async (req, res) => {
    // User.testProto();
    const user = await User.find(req.params.id);
    const comments = await user.comments();
    res.json({...user, comments});
    // res.json(logs)

})

users.post('/', async (req, res) => {
    res.json(await User.create(req.body));
    // res.json('Hi!')
});

users.patch('/:id', async (req, res) => {
    const user = await User.find(req.params.id);
    res.json(await user.update(req.body));
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