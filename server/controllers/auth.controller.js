import bcrypt from "bcrypt";

export const register= async (req,res)=>{
    const {username, email, password}=req.body;

    //Hashing the password
    const hashedPassword= await bcrypt.hash("4343",10);
    console.log(hashedPassword);
    //create a new user and save it to the database
    //db operations:
    console.log("register endpoints")

}
export const login= (req,res)=>{
    //db operations:

}
export const logout= (req,res)=>{
    //db operations:

}