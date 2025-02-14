import {
  createEnrollment,
  getEnrollmentsByUserId,
  updateEnrollmentProgress,
} from "../services/enrollService";

export const addNewEnrollment = async (req, res, next) => {
  try {
    const { userId, courseId } = req.body;

    // Validate that both userId and courseId are provided.
    if (!userId || !courseId) {
      return res.status(400).json({ msg: "userId and courseId are required" });
    }

    // Create the enrollment and get the new document ID.
    const enrollmentId = await createEnrollment(userId, courseId);

    // Send a successful response back to the client.
    res
      .status(201)
      .json({ msg: "Enrollment created successfully", enrollmentId });
  } catch (error) {
    res.status(500).json({ msg: "an error occured" });
  }
};

export const getUserEnrollments = async (req, res, next) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ msg: "userId is required" });
    }

    const enrollments = await getEnrollmentsByUserId(userId);
    res.status(200).json({
      msg: "Enrollments fetched successfully",
      enrollments,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "An error occurred while fetching enrollments" });
  }
};

export const updateEnrollmentProgressController = async (req, res, next) => {
  try {
    const { userId, courseId, progress } = req.body;

    // Validate required fields.
    if (!userId || !courseId || progress === undefined) {
      return res
        .status(400)
        .json({ msg: "userId, courseId, and progress are required" });
    }

    // Update the enrollment's progress and get the document ID.
    const updatedEnrollmentId = await updateEnrollmentProgress(
      userId,
      courseId,
      progress
    );

    // Respond to the client.
    res.status(200).json({
      msg: "Enrollment progress updated successfully",
      enrollmentId: updatedEnrollmentId,
    });
  } catch (error) {
    console.error("Error updating enrollment progress:", error);
    res
      .status(500)
      .json({ msg: "An error occurred while updating enrollment progress" });
  }
};
