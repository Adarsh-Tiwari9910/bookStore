import User from "../model/user.model.js";
export const signup=async (req,res)=>{
    try{
          const {name,email,password}=req.body;
           
          const user= await User.findOne({email})
          if(user){
            return res.status(400).json({message:"user already exists"})
          }
           const createdUser=new User({
            name:`${req.body.name}`,
            email:`${req.body.email}`,
            password:`${req.body.password}S`
          })
          
          await createdUser.save()
          res.status(201).json({message:"user created successfully",user:createdUser})
    }catch(error){
          console.log("Error: ", error.message)
          res.status(500).json({message:"internal server error"})
          
    }
};
export const login=async (req,res)=>{
      try{
          const {email,password}=req.body;
          const user=await User.findOne({email});
          if(!user||(password!=user.password)){
            return res.status(400).json({message:"Invalid Credentials"});
          }else{
            res.status(200).json({message:"login successfully",user:{
                  _id:user._id,
                  name:user.name,
                  email:user.email
            }})
          }
      }catch(error){
         console.log("Error: ",error.message)
         res.status(500).json({message:"Internal server error"})
      }
}