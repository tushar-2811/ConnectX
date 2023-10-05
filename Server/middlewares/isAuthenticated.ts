import JWT from 'jsonwebtoken'
import { NextFunction, Request,Response } from 'express';

export const isAuthenticated = async(req:Request , res: Response , next:NextFunction) => {
    try {
      
       const authHeader = req.headers.authorization;
      
       if(authHeader){
        const token = authHeader.split(' ')[1];
        console.log(`token : ${token}`);

        if(!token) {
          return res.status(401).json({
             ok : false,
             message : "please login"
          })
        }
 
        const decode:any = await JWT.verify(token , process.env.JWT_KEY );
        req.headers["userId"] = decode.id;
        
        next();
       }

       
        
    } catch (error) {
        return res.status(500).json({
            message : "error in authentication",
            error
        })
    }
}