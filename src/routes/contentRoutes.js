const express  =  require('express');
const cController = require('../controllers/contentController');
const userAuth = require('../middleware/userAuth');
const userRouter = express.Router();


userRouter.get('/:contentId',userAuth,cController.getContentController);
userRouter.post('/',userAuth,cController.createContentController);
userRouter.get('/',userAuth,cController.getAllContentController);
userRouter.delete('/:contentId',userAuth,cController.deleteContentController);
userRouter.put('/:contentId',userAuth,cController.updateContentController);
// userRouter.put('/:id',userAuth,updatecontent);

module.exports  = userRouter;