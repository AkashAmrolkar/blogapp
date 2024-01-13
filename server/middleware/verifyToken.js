import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
export const verifyToken = async(req, res, next) => {
    const token = req.headers.authorization;
    if(!token || !token.startsWith('Bearer ')){
        return res.status(404).json(
            {
                message: "Token Missing..!"
            }
        )
    }
    const tokenValue = token.split(' ')[1];
    jwt.verify(tokenValue, process.env.SECRET_KEY, (err, decoded)=>{
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token.' });
        }

        req.user = decoded;
        next();
    })
}