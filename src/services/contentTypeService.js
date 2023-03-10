const { where } = require('sequelize');
const db =  require('../../database/models');

const getContentType = async(contentTypeId)=>{
    const contentTypeData = await db.ContentType.findOne({
        where:{
            id: contentTypeId
        }
    })
    
    return contentTypeData
};

const createContentType = async(contentTypeData)=>{
    console.log(contentTypeData)
    const result = await db.ContentType.create(contentTypeData)
    return result
};

const getAllContentType = async()=>{
    const contentTypeData = await db.ContentType.findAll()
    return contentTypeData
};

const updateContentType = async(contentTypeId, updateMap)=>{
    const contentTypeData = await db.ContentType.update(updateMap,{
            where: {id: contentTypeId}
        })
    return contentTypeData
};

module.exports = {
    getContentType,
    createContentType,
    getAllContentType,
    updateContentType
}