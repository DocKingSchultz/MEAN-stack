import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let User = new Schema({
    username: String,
    password: String,
    passwordConfirmed: String,
    type:String,
    name:String,
    lastname:String,
    address:String,
    email:String,
    phone:Number,
    picture:String,
    mnumber:Number,
    description:String,
    status:String,
})

export default mongoose.model('User', User, 'user');