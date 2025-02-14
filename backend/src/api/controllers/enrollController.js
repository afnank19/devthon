import { createEnrollment } from "../services/enrollService";

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
