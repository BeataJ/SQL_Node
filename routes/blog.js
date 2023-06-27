const express = require('express');

const db = require('../data/database');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/posts')
} );

router.get("/posts", (req, res) => {
    res.render('posts-list');
});

router.get('/new-post', (req, res)=> {
    db.query('SELECT * FROM authors');
    res.render('create-post');
})

module.exports = router;