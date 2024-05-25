import User from "../models/User.js";

export async function requestAccessCode({
    firstname,
    lastname,
    email
}) {
    const accessCode = generateRandomCode();

    const user = new User({
        firstname,
        lastname,
        email,
        accessCode
    });

    await user.save();

    return userToProfileInfo(user);
}

function userToProfileInfo({
    _id,
    firstname,
    lastname,
    email,
    accessCode
}) {
    return { _id, firstname, lastname, email, accessCode };
}

function generateRandomCode() {
    return Math.random().toString().slice(2, 8)
}