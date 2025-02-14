import { Router } from "express";
import * as sessionController from "../controllers/sessionController.js";

const router = Router();

router.route("/").post(sessionController.loginUser);

export default router;
