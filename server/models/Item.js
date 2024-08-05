import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
    name: String,
    lastname:  String,
    email:String,
    password:String,
    phone:Number,
    
})

const itemModel = mongoose.model("Item",itemSchema)
export default itemModel
