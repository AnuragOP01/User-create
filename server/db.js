import mongoose from "mongoose";

const  connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(
            'mongodb+srv://ranurag404:Luffy>>2*Kaido@cluster0.fjmbuyx.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0',
            {
                useNewUrlParser:true
            }
           );
            console.log(`Mongo DB Connected: `);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;