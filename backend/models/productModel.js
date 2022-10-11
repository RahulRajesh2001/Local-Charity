const mongoose=require("mongoose")

const productSchema=mongoose.Schema({

    name:{
        type:String,
        required:[true,"please enter product Name"]
    },
    description:{
        type:String,
        required:[true,"please enter product Description"]
    },
    rating:{
        type:Number,
        defualt:0

    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
    
        }
    ],
 
    category:{
        type:String,
        required:[true,"please enter product Description"]
        

    },
    stock:{
        type:Number,
        required:[true,"please enter product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true

            }

        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,

    },
    createdAt:{
        type:Date,
        default:Date.now
    }

    

})

module.exports=mongoose.model('Product',productSchema)