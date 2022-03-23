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

Post.createPost = async (content, user) => {
    let postResult = {};

    try {
        let dbConn = await dbPool.getConnection();
        let post = await dbConn.query("INSERT INTO `moodboard`.`post` (`postContent`, `addBy`) VALUES (?, ?);", [content, user])
        dbConn.end();
        postResult.status = "success";    
    } catch (err) {
        console.log(err);
        dbConn.end();
    }

    return postResult;
};

Post.updatePost;

Post.deletePost;

module.exports = Post;