import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    accessCode: { type: Number },
    company: { type: String },
    jobTitle: { type: String },
    accessPurpose: { type: String }
},
    { collection: "users", timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;