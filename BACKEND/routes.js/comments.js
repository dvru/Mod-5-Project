const express = require('express');
const comments = express.Router();
const Comment = require('../models/Comment');

Comment.belongsTo('issue');
Comment.belongsTo('user');


comments.get('/', async (req, res) => {
    res.json(await Comment.all());
})

comments.get('/:id', async (req, res) => {
    const c = await Comment.find(req.params.id);
    const issue = await q.issue();
    res.json({...c, issue})
})

comments.post('/', async (req, res) => {
    res.json(await Comment.create(req.body));
})

comments.patch('/:id', async (req, res) => {
    const c = await Comment.find(req.params.id);
    res.json(await c.update(req.body));
})

comments.delete('/:id', (req, res) => {
    res.json('not deleted');
})

module.exports = comments;