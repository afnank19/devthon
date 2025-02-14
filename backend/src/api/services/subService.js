export async function getSubmissionsByUserId(userId) {
  try {
    const querySnapshot = await db
      .collection("submissions")
      .where("userId", "==", userId)
      .get();

    const submissions = [];
    querySnapshot.forEach((doc) => {
      submissions.push({ id: doc.id, ...doc.data() });
    });

    return submissions;
  } catch (error) {
    throw new Error(`Error fetching submissions: ${error.message}`);
  }
}
