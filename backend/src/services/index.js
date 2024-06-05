import { generateAndSaveNewAccessCode } from "./generateAndSaveNewAccessCode.js";
import { requestAccessCode } from "./requestAccessCode.js";
import { signUpUser } from "./signUpUser.js";
import { verifyAccess } from "./verifyAccess.js";

export const UserService = {
    requestAccessCode,
    signUpUser,
    generateAndSaveNewAccessCode,
    verifyAccess,
}