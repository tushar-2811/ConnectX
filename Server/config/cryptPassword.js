import bcrypt, { hash } from "bcrypt"

export const hashPassword = async (normalPassword) => {
    try {
        const newHashedPassword = await bcrypt.hash(normalPassword , 10);
        return newHashedPassword;

    } catch (error) {
        console.log(`Error in hashing password : ${error}`);
    }
}

 export const comparePassword = async (normalPasswordFromUser , hashedPasswordFromDataBase)=> {
    try {
        const isPasswordSame = await bcrypt.compare(normalPasswordFromUser , hashedPasswordFromDataBase);
        
        return isPasswordSame;
        
    } catch (error) {
        console.log(`Error in comparing passwords : ${error}`);
    }
}

