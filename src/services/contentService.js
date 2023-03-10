const db =  require('../../database/models');

const getContent = async(contentId)=>{
    const contentData = await db.Content.findOne({
        where:{
            id: contentId
        },
        include: [{
                model: db.ContentType,
            }]
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
    return contentData
};

const createContent = async(contentData)=>{
    const result = await db.Content.create(contentData)
    return result
};

const getAllContent = async()=>{
    const contentData = await db.Content.findAll()
    return contentData
};

const deleteContent = async(contentId)=>{
    const contentData = await db.Content.destroy({
        where:{
            id: contentId
        }
    })
    return contentData
};

const updateContent = async(contentId, updateMap)=>{
    const contentData = await db.Content.update(updateMap,{
            where: {id: contentId}
        })
    return contentData
};

module.exports = {
    getContent,
    createContent,
    getAllContent,
    deleteContent,
    updateContent
}