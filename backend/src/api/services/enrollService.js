import { adm } from "../../config/firebase.js";

export async function createEnrollment(userId, courseId) {
  const enrollmentData = {
    userId,
    courseId,
    createdAt: adm.firestore.FieldValue.serverTimestamp(),
  };

  try {
    const docRef = await db.collection("enrollments").add(enrollmentData);
    return docRef.id;
  } catch (error) {
    throw new Error(`Error adding enrollment: ${error.message}`);
  }
}
