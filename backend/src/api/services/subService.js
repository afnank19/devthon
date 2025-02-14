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

export async function addSubmission({ courseId, enrollmentId, lessonId, submissionUrl, userId }) {
  try {
    const newSubmission = {
      courseId,
      enrollmentId,
      lessonId,
      submissionUrl,
      userId,
      createdAt: new Date(),
    };

    const docRef = await db.collection("submissions").add(newSubmission);
    return { id: docRef.id, ...newSubmission };
  } catch (error) {
    throw new Error(`Error adding submission: ${error.message}`);
  }
}

