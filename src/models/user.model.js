import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    FullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,
        required: true,
        //Cloudinary url
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {//encryption problem
        type: String,
        required: [true, 'Password is required'],
        select: false // Do not return password in queries
    },
    refereshToken: {
        type: String,
        select: false // Do not return refresh token in queries
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
