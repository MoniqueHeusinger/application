import User from "../models/User.js";

export async function verifyAccess({ lastname, accessCode }) {
    const foundUser = await User.findOne({ lastname, accessCode });
    return foundUser;
}