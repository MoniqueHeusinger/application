import express from "express";
import { UserService } from "../services/index.js";

const userRouter = express.Router();

// Register new user
userRouter.post(
    "/",
    express.json(),
    async function postRegisterUserCtrl(req, res) {
        try {
            const result = await UserService.signUpUser(req.body);
            res.status(201).json({ success: true, result });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false, error, message: error.message || "Could not register user"
            });
        }
    }
);

// Generate and save new access code
userRouter.post(
    "/accessCode",
    express.json(),
    async function postGenerateAndSaveNewAccessCodeCtrl(req, res) {
        try {
            const { lastname, email } = req.body;
            const { user, accessCode } = await UserService.generateAndSaveNewAccessCode({ lastname, email });
            res.json({ success: true, user, accessCode });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false, error, message: error.message || "Could not generate and save access code."
            });
        }
    }
);

// Verify access to certificates
userRouter.post(
    "/verifyAccess",
    express.json(),
    async function postVerifyAccessCtrl(req, res) {
        try {
            const { lastname, accessCode } = req.body;
            const user = await UserService.verifyAccess({ lastname, accessCode });
            if (user) {
                res.json({ success: true, message: "Access granted" });
            } else {
                res.status(401).json({ success: false, message: "Invalid access credentials" });
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, error, message: error.message || "Could not verify access" });
        }
    })

export default userRouter;