import express from "express";
const router = express.Router();
import {
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

   loginController,
   registerController,
   LogoutController,
} from "../controllers/userControllers.js";

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/logout/:id", LogoutController);

export { router as userRouter };
