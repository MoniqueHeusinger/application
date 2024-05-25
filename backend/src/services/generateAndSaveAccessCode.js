import User from "../models/User.js";

export async function generateAndSaveAccessCode({ lastname, email }) {
    // wenn es den lastname in der db gibt, dann erzeuge einen randomAccessCode und speichere ihn im jeweiligen User ab

    const user = await User.findOne({ $or: [{ lastname }, { email }] });

    if (!user) {
        throw new Error("User not found");
    }

    const accessCode = Math.random().toString().slice(2, 8);

    user.accessCode = accessCode;
    await user.save();

    return { user, accessCode };
}