import JWT from 'jsonwebtoken'

export const isAuthenticated = async(req , res , next) => {
    try {
       const token = req.headers.authorization;

       if(!token) {
         return res.status(401).json({
            ok : false,
            message : "please login"
         })
       }

       const decode = await JWT.verify(token , process.env.JWT_KEY );

       req.userId = decode.id;
       next();
        
    } catch (error) {
        return res.status(500).json({
            message : "error in authentication",
            error
        })
    }
}