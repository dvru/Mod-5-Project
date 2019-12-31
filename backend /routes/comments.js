const express = require('express');
const comments = express.Router();
const Comment = require('../models/Comment');
// const Issue = require('../models/Issue')

// Relationships
Comment.belongsTo('issue');
Comment.belongsTo('user');


// const Comment = comment.model('Comment', {
//     issue() {
//       return this.belongsTo('Issue')
//     },
//     user() {
//       return this.belongsTo('User')
//     }
//   })



comments.get('/', async (req, res) => {
    res.json(await Comment.all());
})

comments.get('/:id', async (req, res) => {
    console.log(Comment.tableName);
    const c = await Comment.find(req.params.id);
    const issue = await c.issue();
    res.json({...c, issue})
})

comments.post('/', async (req, res) => {
    res.json(await Comment.create(req.body));
})

comments.patch('/:id', async (req, res) => {
    const c = await Comment.find(req.params.id);
    res.json(await c.update(req.body));
})

// comments.delete('/:id', (req, res) => {
//     res.json('not deleted');
// })

comments.delete('/:id', async (req, res) => {
    const comment = await Comment.find(req.params.id);
    comment.delete();
    res.json('deleted');
})



module.exports = comments;