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
        let post = await dbConn.query("INSERT INTO `todo`.`post` (`postContent`, `addBy`) VALUES (?, ?);", [content, user])
        dbConn.end();
        postResult.status = "success";
    } catch (err) {
        console.log(err);
        postResult.status = "failed";
        dbConn.end();
    }
    return postResult;
};


Post.updatePost = async (content, postId) => {
    let updateResult = {};

    try {
        let dbConn = await dbPool.getConnection();
        let update = await dbConn.query("UPDATE `todo`.`post` SET `postContent`= ? WHERE  `postId`= ?;", [content, postId]);
        dbConn.end();
        updateResult.status = "success";
    } catch (err) {
        console.log(err);
        updateResult.status = "failed";
        dbConn.end();
    }
    return updateResult;
};


//need check existance of the post
Post.deletePost = async (postId) => {
    let deleteResult = {};

    try {
        let dbConn = await dbPool.getConnection();
        let del = await dbConn.query("DELETE FROM `todo`.`post` WHERE  `postId`= ?;", [postId]);
        dbConn.end();
        deleteResult.status = "success";
    } catch (err) {
        console.log(err);
        deleteResult.status = "failed";
        dbConn.end();
    }
    return deleteResult;
};

module.exports = Post;