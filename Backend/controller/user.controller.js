import User from "../model/usermodel.js";

export const signup=(req,res)=>{
    try{
        const {fullname,email,password}=req.body;
        const user=User.findOne({email})
        if(user){
            return res.status(400).json({mesage:"User already exists"})

        }
        const createdUser=new User({
            fullname,
            email,
            password
        })
        createdUser.save()
        res.status(201).json({messgae:"User created succesfully"})
    
    }catch(error){
        console.log("Error"+ error.message);
        res.status(500).json({message: "Internal server error. "})
    }
}