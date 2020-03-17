const mongoose = require('mongoose')

const assetSchema = new mongoose.Schema({
    mainCategory:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true,
        validate(value){
            if(value<=0){
                throw Error("amount should be greater than zero")
            }
        }
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'user'
    }
},{
    timestamps:true
})

const Asset = mongoose.model('Asset',assetSchema)

module.exports = Asset