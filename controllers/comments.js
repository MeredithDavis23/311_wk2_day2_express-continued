const comments = require('../data/comments');

const commentsCount = comments.length;

const list =  (req,res) => {
    return res.json(comments)
};

const show = (req, res) => {
    const id = req.params.commentId
    const foundComment = comments.find(comment => comment._id === Number(id));
    
    res.json(foundComment);
};

const create = (req, res) => {
    console.log(req.body);

    const newComment = {
        _postId: commentsCount + 1,
        ...req.body
    };

    comments.push(newComment);
    res.json(newComment)
};

module.exports = {
    list, 
    show, 
    create
}