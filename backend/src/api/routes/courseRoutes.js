import { Router } from "express";
import { createCourse, getCourses } from "../controllers/coursesController.js";

const router = Router();

// add course
router.route("/").post(createCourse);
router.route("/getCourses").get(getCourses);

export default router;
