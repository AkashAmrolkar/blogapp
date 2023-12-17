
import jwt from 'jsonwebtoken'
export const verifyToken = (req, res, next)=>{
    const authHeader = req.header('Authorization');
    if(authHeader){
        const token = authHeader;
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(err){
                return res.status(403).json('Token is not valid')
            }

            req.userId = decoded.userId;
            req.userName = decoded.userName;
            req.email = decoded.email;
            next()
        })
    } else{
        res.status(401).json("you are not authenticated")
    }
}