import { Router } from 'express';
import {
    registerUser,
    login,
    logoutUser,
    getCurrentUser,
    verifyEmail,
    resendEmailVerification,
    forgotPasswordRequest,
    resetForgotPassword,
    refreshAccessToken,
    changecurrentPassword,
} from '../controllers/auth.controllers.js';
import { userRegisterValidator } from "../validators/index.js";
import {
    userLoginValidator,
    userChangePasswordValidator,
    userForgotPasswordValidator,
    userResetPasswordValidator,
} from "../validators/index.js";
import { validate } from "../middlewares/validator.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

//unsecured routes
router.route('/register').post(userRegisterValidator(), validate, registerUser);
router.route('/login').post(userLoginValidator(), validate, login);

router
    .route('/verify-email/:verificationToken')
    .get(verifyEmail);
router
    .route('/refresh-token')
    .post(refreshAccessToken);

router
    .route('/forgot-password')
    .post(userForgotPasswordValidator(), validate, forgotPasswordRequest);
router
    .route('/reset-password/:resetToken')
    .post(userResetPasswordValidator(), validate, resetForgotPassword);

//secured routes
router.route('/logout').post(verifyJWT, logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/change-password").post(verifyJWT, userChangePasswordValidator(), validate, changecurrentPassword);
router.route("/resend-email-verification").post(verifyJWT, resendEmailVerification);
export default router;