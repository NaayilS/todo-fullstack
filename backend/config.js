import mongoose from "mongoose";

async function connectDB() {
    try{
        //establish connection using the mongodb connection string 
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB Connected')
    }catch(e) {
        console.log(e)
         }
    }

    export default connectDB