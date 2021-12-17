const mongoose=require("mongoose");
const Joi=require("joi")
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:7,
        maxlength:245
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        maxlength:255
    }
})
const User=mongoose.model("User",userSchema)
function validateUser(user){
    const schema={
        email:Joi.string().min(3).max(50).required().email(),
        password:Joi.string().min(5).max(50).required()}
        return Joi.validate(user,schema)
}
exports.User=User;
exports.validate=validateUser

