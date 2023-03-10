const { where } = require('sequelize');
const db =  require('../../database/models');

const getContentType = async(contentTypeId)=>{
    const contentTypeData = await db.ContentType.findOne({
        where:{
            id: contentTypeId
        }
    })
    // const details = [];
    // await foundUser.cartDetails.reduce(async(products,productId)=>{
    //     const product = await db.Product.findOne({
    //         where:{
    //             id:productId
    //         }
    //     })
    //     return details.push(product.name);
    // },details)
    
    // return details;
    return contentTypeData
};

const createContentType = async(contentTypeData)=>{
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