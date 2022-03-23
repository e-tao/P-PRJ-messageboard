const dbPool = require('./db');

let Post = {};

// post model includes full CRUD operations

Post.getPosts = async () => {
    try {
        let dbConn = await dbPool.getConnection();
        let results = await dbConn.query("SELECT postId, postContent, addBy, addAt FROM post ORDER BY addAt DESC;");
        dbConn.end();
        return results;
    } catch (err) {
        console.log(err);
        dbConn.end();
    }
};

Post.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'Post created successfully!',
        post: { id: new Date().toISOString(), title: title, content: content }
    });
};

Post.updatePost;

Post.deletePost;

module.exports = Post;