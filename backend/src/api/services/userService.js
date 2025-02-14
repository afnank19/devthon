import { db } from "../../config/firebase.js";

export const addUser = async (userData) => {
  try {
    const res = await db.collection("users").add(userData);

    return res.id;
  } catch (error) {
    return null;
  }
};

export async function getUserDetailsByEmail(email) {
  try {
    // Query the "users" collection for the provided email.
    const querySnapshot = await db
      .collection("users")
      .where("email", "==", email)
      .get();

    if (querySnapshot.empty) {
      throw new Error(`No user found with email: ${email}`);
    }

    // Since email is unique, get the first document.
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    const { name, role, hash } = userData;

    // Check if all required fields are present.
    if (!name || !role || !hash) {
      throw new Error(`Missing required fields for user with email: ${email}`);
    }

    return { id: userDoc.id, name, role, hash };
  } catch (error) {
    throw new Error(`Error fetching user details: ${error.message}`);
  }
}
