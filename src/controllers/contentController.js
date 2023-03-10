const {getContent, createContent, getAllContent, deleteContent, updateContent} = require('../services/contentService');

const getContentController = async(req, res, next)=>{
    try{
        const contentData = await getContent(req.params.contentId);
        res.status(200).json({
            success: true,
            result: contentData
        });
    }
    catch(err){
        res.status(500);
        next(err)
    }
}

const createContentController = async(req, res, next)=>{
    try{
        const result = await createContent(req.body);
        res.status(200).json({
            result,
            success: true
        });
    }
    catch(err){
        res.status(500);
        next(err)
    }
}

const getAllContentController = async(req, res, next)=>{
    try{
        const contentData = await getAllContent(req.params.contentId);
        res.status(200).json({
            success: true,
            result: contentData
        });
    }
    catch(err){
        res.status(500);
        next(err)
    }
}

const deleteContentController = async(req, res, next)=>{
    try{
        const result = await deleteContent(req.params.contentId);
        res.status(200).json({
            result,
            success: true
        });
    }
    catch(err){
        res.status(500);
        next(err)
    }
}

const updateContentController = async(req, res, next)=>{
    try{
        const result = await updateContent(req.params.contentId, req.body);
        res.status(200).json({
            result,
            success: true
        });
    }
    catch(err){
        res.status(500);
        next(err)
    }
}

module.exports = {
    getContentController,
    createContentController,
    getAllContentController,
    deleteContentController,
    updateContentController
}