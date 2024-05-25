import User from "../models/User.js";

export async function signUpUser({ firstname, lastname, email }) {
    const foundUserWithSameEmail = await User.find({ email: email });
    if (foundUserWithSameEmail.length > 0)
        throw new Error("Usser with this data already exists");

    const foundUserWithSameName = await User.find({ firstname: firstname, lastname: lastname });
    if (foundUserWithSameName.length > 0)
        throw new Error("User with this name already exists");

    const user = await User.create({
        firstname,
        lastname,
        email
    });

    return userToProfileInfo(user);
}

function userToProfileInfo({ _id, firstname, lastname, email }) {
    return { _id, firstname, lastname, email }
}