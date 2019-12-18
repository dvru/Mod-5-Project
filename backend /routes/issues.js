const express = require('express');
const issues = express.Router();
const Issue = require('../models/Issue');
const {through} = require('express')

// Relationships
Issue.hasMany('comments');
Issue.hasMany ('users'), through, ('comments')

// const Issue = issue.model('Issue', {
//     users() {
//       return this.belongsToMany('User').through('Comment')
//     }
//   })





issues.get('/', async (req, res) => {
    res.json(await Issue.all());
})

issues.get('/:id', async (req, res) => {
    const issue = await Issue.find(req.params.id);
    const user = await issue.user()
    const comments = await issue.comments();
    res.json({...issue, user, comments})
})

issues.post('/', async (req, res) => {
    res.json(await Issue.create(req.body));
})

issues.patch('/:id', async (req, res) => {
    const issue = await Issue.find(req.params.id);
    res.json(await issue.update(req.body));
})

issues.delete('/:id', (req, res) => {
    res.json("not deleted")
})



// issues.delete('/:id', async (req, res) => {
//     const issue = await Issue.find(req.params.id);
//     issue.delete();
//     res.json('deleted');
// })


module.exports = issues;