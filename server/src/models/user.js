const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(value.length<7){
                throw Error('Password must be greater than six characters!')
            }else if(value.toLowerCase().includes('password')){
                throw Error('Password shouldnt contain password word!')
            }
        },
        trim:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id:user._id.toString()},'thisismyapp')
    user.tokens = user.tokens.concat({token})
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email,password) => {
    const user = await User.findOne({email})

    if(!user){
        throw new Error("Unable to login!")
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}

// hash plain text before saving a user
userSchema.pre('save',async function(next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }

    next()
})

const User = mongoose.model('User',userSchema)

module.exports = User