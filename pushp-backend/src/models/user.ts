import mongoose, { Mongoose } from "mongoose";
import validator from "validator";

interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    photo: string;
    role: "admin" | "user";
    gender: "male" | "female" | "Other";
    dob: Date;
    createdAt: Date;
    updatedAt: Date;
    age: number;
}

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
        validate: validator.default.isEmail,
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
}, 
{
    timestamps: true
});

schema.virtual("age").get(function() {
    const currDay = new Date();
    const dob = this.dob;
    let age = currDay.getFullYear() - dob.getFullYear();

    if(currDay.getMonth() < dob.getMonth() || currDay.getMonth() === dob.getMonth() && currDay.getDate() < dob.getDate()) {
        age--;
    }

    return age;
})

export const User = mongoose.model<IUser>("User", schema);