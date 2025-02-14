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
