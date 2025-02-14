import { adm, db } from "../../config/firebase.js";

export async function createEnrollment(userId, courseId) {
  const enrollmentData = {
    userId,
    courseId,
    createdAt: adm.firestore.FieldValue.serverTimestamp(),
  };

  try {
    const docRef = await db.collection("enrollments").add(enrollmentData);
    const user= await db.collection("users").doc(userId).get();
    const email = user.data().email;
    return [docRef.id,email];
  } catch (error) {
    throw new Error(`Error adding enrollment: ${error.message}`);
  }
}

export async function getEnrollmentsByUserId(userId) {
  try {
    const querySnapshot = await db
      .collection("enrollments")
      .where("userId", "==", userId)
      .get();

    // Map through each document and build an array of enrollment objects.
    const enrollments = [];
    querySnapshot.forEach((doc) => {
      enrollments.push({ id: doc.id, ...doc.data() });
    });

    return enrollments;
  } catch (error) {
    throw new Error(`Error fetching enrollments: ${error.message}`);
  }
}

export async function updateEnrollmentProgress(userId, courseId, progress) {
  try {
    const enrollmentQuerySnapshot = await db
      .collection("enrollments")
      .where("userId", "==", userId)
      .where("courseId", "==", courseId)
      .limit(1)
      .get();

    if (enrollmentQuerySnapshot.empty) {
      throw new Error(
        `No enrollment found for userId ${userId} and courseId ${courseId}`
      );
    }

    const enrollmentDoc = enrollmentQuerySnapshot.docs[0];

    await db
      .collection("enrollments")
      .doc(enrollmentDoc.id)
      .update({ progress });

    return enrollmentDoc.id;
  } catch (error) {
    throw new Error(`Error updating enrollment progress: ${error.message}`);
  }
}
