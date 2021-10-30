const router = require('express').Router();
const {
    addComment,
    removeComment
 } = require('../../controllers/comment-controller');

 //set up add a comment to a pizza route -> /api/comments/<pizzaId>
 router
    .route('/:pizzaId')
    .post(addComment);
 //set up remove a comment from a pizza route -> /api/comments/<pizzaId>/<commentId>
 router
    .route('/:pizzaId/:commentId')
    .delete(removeComment);

 module.exports = router;