const {getContentType, createContentType, getAllContentType, updateContentType} = require('../services/contentTypeService');

const getContentTypeController = async(req, res, next)=>{
    try{
        const contentTypeData = await getContentType(req.params.contentTypeId);
        res.status(200).json({
            success: true,
            result: contentTypeData
        });
    }
    catch(err){
        res.status(500);
        next(err)
    }
}

const createContentTypeController = async(req, res, next)=>{
    try{
        const result = await createContentType(req.body);
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

const getAllContentTypeController = async(req, res, next)=>{
    try{
        const contentTypeData = await getAllContentType(req.params.contentTypeId);
        res.status(200).json({
            success: true,
            result: contentTypeData
        });
    }
    catch(err){
        res.status(500);
        next(err)
    }
}

const updateContentTypeController = async(req, res, next)=>{
    try{
        const contentTypeData = await updateContentType(req.params.contentTypeId, req.body);
        res.status(200).json({
            success: true,
            result: contentTypeData
        });
    }
    catch(err){
        res.status(500);
        next(err)
    }
}

module.exports = {
    getContentTypeController,
    createContentTypeController,
    getAllContentTypeController,
    updateContentTypeController
}