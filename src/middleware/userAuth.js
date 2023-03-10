// const {NotFoundError} =  require('../../error');
const makeRequest = require('../utils/makeRequest');

const userAuth = async(req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    if(!token) {
        // throw new NotFoundError('unauthorized access is restricted');
        return new Error("Token missing")
    }
    const userId = await makeRequest({ url: 'http://localhost:4000/validate', method: "POST" },{},token);
    if(!userId){
        //    throw new NotFoundError('unauthorized access is restricted');
        return new Error("User not found")
    }
    req.userId = userId;
    // console.log(req.userId);
    next();
}

module.exports = userAuth;