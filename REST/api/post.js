const express = require("express");
const postModel = require('../model/post');

const router = express.Router();


router.get('/', async function (req, res, next) {
    let posts = await postModel.getPosts();
    res.status(200).json(posts);
});

router.post('/', async function (req, res, next) {
    res.send("create list");
});

module.exports = router;