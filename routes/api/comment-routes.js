const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
 } = require('../../controllers/comment-controller');

//set up add a comment to a pizza route -> /api/comments/<pizzaId>
router
   .route('/:pizzaId')
   .post(addComment);
//set up remove a comment from a pizza route -> /api/comments/<pizzaId>/<commentId>
router
   .route('/:pizzaId/:commentId')
   .put(addReply)
   .delete(removeComment);
// set up remove a reply from a comment route -> /api/comments/<pizzaId>/<commentId>/<replyId>
router
   .route('/pizzaId/:commentId/:replyId').delete(removeReply);
 module.exports = router;