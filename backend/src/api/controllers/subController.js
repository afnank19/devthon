import { addSubmission } from "../services/subService.js";

export const getSubmissionsByUserIdController = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res
        .status(400)
        .json({ msg: "userId is required in the URL parameters" });
    }

    const submissions = await getSubmissionsByUserId(userId);
    res.status(200).json({
      msg: "Submissions fetched successfully",
      submissions,
    });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    res
      .status(500)
      .json({ msg: "An error occurred while fetching submissions" });
  }
};

//add submission
export const addSubmissionController = async (req, res, next) => {
  try {
    const { courseId, enrollmentId, lessonId, submissionUrl, userId } = req.body;

    if (!courseId || !enrollmentId || !lessonId || !submissionUrl || !userId) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newSubmission = await addSubmission({
      courseId,
      enrollmentId,
      lessonId,
      submissionUrl,
      userId,
    });

    res.status(201).json({
      msg: "Submission added successfully",
      submission: newSubmission,
    });
  } catch (error) {
    console.error("Error adding submission:", error);
    res.status(500).json({ msg: "An error occurred while adding the submission" });
  }
};