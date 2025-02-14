import { Router } from "express";
import { createCourse } from "../controllers/coursesController";

const router = Router();

router.route("/").get().post();

// add course
router.route("/:id").post(createCourse);

export default router;
