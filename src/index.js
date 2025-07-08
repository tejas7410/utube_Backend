// require("dotenv").config({ path: './env' });

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
connectDB();







/*import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
const app = express();
; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error connecting to MongoDB", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        throw error;
    }
})()*/