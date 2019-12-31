const express = require('express');
const issues = express.Router();
const Issue = require('../models/Issue');
const {through} = require('express')

// Relationships
Issue.hasMany('comments');
Issue.hasMany ('users', { through: 'comments' })
// Issue.belongsTo('user')

// const Issue = issue.model('Issue', {
//     users() {
//       return this.belongsToMany('User').through('Comment')
//     }
//   })


issues.get('/', async (req, res) => {
    // let issues = await Issue.all()
    // let newIssues = await issues.map(async (i) => {
    //     let comments = await i.comments();
    //     return {
    //         ...i,
    //         comments
    //     }
    // })
    res.json(await Issue.all());
})

issues.get('/:id', async (req, res) => {
    const issue = await Issue.find(req.params.id);
    const comments = await issue.comments();
    res.json({...issue, comments})
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