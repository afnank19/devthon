import { Router } from "express";
import * as userController from "../controllers/userController.js";
import * as enrollController from "../controllers/enrollController.js";
import * as subController from "../controllers/subController.js";

const router = Router();

router.route("/").post(userController.registerUser);

router.route("/:id/enrollments").get(enrollController.getUserEnrollments);
router
  .route("/:id/submissions")
  .get(subController.getSubmissionsByUserIdController);

router
  .route("/submission")
  .get(subController.addSubmissionController);
export default router;
