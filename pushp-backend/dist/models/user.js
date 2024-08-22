import mongoose from "mongoose";
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Please Enter ID"]
    },
    name: {
        type: String,
        required: [true, "Please Enter Name"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Please Enter Email"],
        validate: validator
    },
    photo: {
        type: String,
        required: [true, "Please add Photo URL"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: [true, "Please select Gender"]
    },
    dob: {
        type: Date,
        required: [true, "Please enter Date of Birth"]
    }
}, {
    timestamps: true
});
export const User = mongoose.model("User", schema);
