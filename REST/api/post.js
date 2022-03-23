const express = require("express");
const postModel = require('../model/post');

const router = express.Router();


router.get('/', async function (req, res, next) {
    let posts = await postModel.getPosts();
    res.status(200).json(posts);
});

router.post('/', async function (req, res, next) {
    let post = await postModel.createPost("Tomorrow is another day", "ethan");
    res.status(201).json(post.status);
    
});

module.exports = router;