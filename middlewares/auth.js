const jwt = require("jsonwebtoken");
const {config}=require("../config/secret")


exports.auth= async(req,res,next) => {
    let token = req.header("x-api-key");
    if(!token){
        return res.status(401).json({msg:"You need to send token to this endpoint url 2222"});
    }
    try{
        let decodeToken = jwt.verify(token,config.tokenSecret);
        req.tokenData = decodeToken;
        next();
    
    }
    catch(err){
        return res.status(401).json({msg:"Token not valid or expired log in again or you're hacker 2222"});
    }
}