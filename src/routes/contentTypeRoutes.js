const express  =  require('express');
const cTController = require('../controllers/contentTypeController');
const userAuth = require('../middleware/userAuth');
const userRouter = express.Router();


userRouter.get('/:contentTypeId',userAuth,cTController.getContentTypeController);
userRouter.post('/',userAuth,cTController.createContentTypeController);
userRouter.get('/',userAuth,cTController.getAllContentTypeController);
userRouter.put('/:contentTypeId',userAuth,cTController.updateContentTypeController);

module.exports  = userRouter;