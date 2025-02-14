import { Router } from "express";
import * as enrollController from "../controllers/enrollController.js";

const router = Router();

router.route("/").post(enrollController.addNewEnrollment);

export default router;
