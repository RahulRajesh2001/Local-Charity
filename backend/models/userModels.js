const mongoose=require('mongoose')
const validator=require('validator')
const bcryptjs=require('bcryptjs')
const jwt=require("jsonwebtoken")

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        requried:[true,"Please Enter your Name"],
        maxlength:[30,"Cannot exceed 30 charactors"],
        minlength:[4,"Name should have more than 5 charactor"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter your valid email"]
    },
password:{
    type:String,
        required:[true,"Please enter your password"],
        minlength:[8,"Password should be greater than 8 charactors"],
        select:false
},
avatar:{
    
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }

    
},
role:{
    type:String,
    default:"user"
},

resetPasswordToken:String,
resetPasswordExpire:Date,


});

//password hashing
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password= await bcryptjs.hash(this.password,10);
})
//jwt token

userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},
        process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
        
    })

}
//compare password
userSchema.methods.comparePassword=async function(enteredPassword){
    return  await bcryptjs.compare(enteredPassword,this.password);
}

//regenerating password 
//forgot password



module.exports=mongoose.model("User",userSchema);