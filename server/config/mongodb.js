import mongoose from "mongoose";


const connectDB = async() =>{
    
    try {
        mongoose.connection.on('connected', ()=>{
            console.log("DB connected");
        })
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);

    } catch (error) {

        console.log(" while connecting DB ",error.message);
    }

}


export default connectDB