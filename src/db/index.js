import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constant.js";
const DBConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`);
        console.log(`\n MongoDB connected: !! DB HOST !! ${connectionInstance.connection.host}`) // Log the host of the connected database to know where it's connected sometimes it helps in debugging which db is connected
    }
    catch (error) {
        console.log("Error connecting to MongoDB:", error);
        throw error;
        process.exit(1); // Exit the process with failure
    }

}
export default DBConnect;
// This is the main entry point for the application, where we connect to the database and start