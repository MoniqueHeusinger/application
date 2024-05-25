import { generateAndSaveAccessCode } from "./generateAndSaveAccessCode.js";
import { requestAccessCode } from "./requestAccessCode.js";
import { signUpUser } from "./signUpUser.js";
import { verifyAccess } from "./verifyAccess.js";

export const UserService = {
    requestAccessCode,
    signUpUser,
    generateAndSaveAccessCode,
    verifyAccess,
}