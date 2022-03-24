const express = require("express");
const res = require("express/lib/response");
const postModel = require('../model/post');

const router = express.Router();


router.get('/', async function (req, res, next) {
    let posts = await postModel.getPosts();
    res.status(200).json(posts);
});

router.post('/', async function (req, res, next) {
    let post = await postModel.createPost("Tomorrow is another day", "ethan"); //replace the value with value passed in by user
    res.status(201).json(post.status);
});

router.patch('/', async function (req, res, next) {
    let update = await postModel.updatePost("Today we possible will have freezing rain", 4); //replace the value with value passed in by user
    res.status(201).json(update.status);
});

router.delete('/', async function (req, res, next) {
    let del = await postModel.deletePost(5); //replace the vvalue with value passed in by user
    res.status(200).json(del.status);
})

module.exports = router;