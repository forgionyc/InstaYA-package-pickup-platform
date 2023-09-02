import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token)
    if(!token){ //si no hay token
        return res.status(401).json({message:"There is no token...."})
    }
    jwt.verify(token, process.env.JWT_KEY, (error,userId)=>{
        if(error){ //si el token no es el real
            return res.status(401).json({message: "Invalid token..."})
        }
        req.user={ id:userId};
        next();
    })
} ;