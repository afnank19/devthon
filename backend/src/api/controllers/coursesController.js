import { v4 as uuidv4 } from "uuid";
import { db } from "../../config/firebase.js";

export const createCourse = async (req, res, next) => {
 try {
  const { title, description, createdBy, lessons } = req.body;

  // Validate request body
  if (!title || !description || !createdBy || !Array.isArray(lessons)) {
   return res.status(400).json({ message: "Missing or invalid fields" });
  }

  // Generate a new ID for the course
  const courseId = uuidv4();
  const courseRef = db.collection("courses").doc(courseId);

  // Create the course document
  await courseRef.set({
   id: courseId,
   title,
   description,
   createdBy,
   createdAt: Date.now(),
  });

  // Add lessons as subcollection
  const lessonsRef = courseRef.collection("lessons");
  const lessonPromises = lessons.map(async (lesson) => {
   const { title, description, videoUrl, practiceGuide, lessonNumber, referenceTrack } = lesson;
   if (!title || !description || !videoUrl || !lessonNumber) {
    throw new Error(`Invalid lesson data: ${JSON.stringify(lesson)}`);
   }

   // Generate a new ID for each lesson
   const lessonId = uuidv4();

   await lessonsRef.doc(lessonId).set({
    id: lessonId,
    title,
    description,
    videoUrl,
    practiceGuide,
    lessonNumber,
    referenceTrack,
    createdAt: Date.now(),
   });
  });

  await Promise.all(lessonPromises);

  res.status(201).json({ message: "Course and lessons created successfully" });
 } catch (error) {
  console.error("Error creating course:", error);
  res.status(500).json({ message: "Failed to create course", error: error.message });
 }
};

export const getCourses = async (req, res, next) => {
 try {
  const { createdBy } = req.query;
  let coursesQuery = db.collection("courses");

  if (createdBy && createdBy !== "all") {
   coursesQuery = coursesQuery.where("createdBy", "==", createdBy);
  }

  const coursesSnapshot = await coursesQuery.get();

  if (coursesSnapshot.empty) {
   return res.status(404).json({ message: "No courses found" });
  }

  const courses = [];
  for (const doc of coursesSnapshot.docs) {
   const courseData = doc.data();
   const lessonsSnapshot = await doc.ref.collection("lessons").get();

   const lessons = lessonsSnapshot.docs.map((lessonDoc) => {
    return {
     id: lessonDoc.id,
     ...lessonDoc.data(),
    };
   });

   courses.push({
    id: doc.id,
    ...courseData,
    lessons,
   });
  }

  res.status(200).json(courses);
 } catch (error) {
  console.error("Error fetching courses:", error);
  res.status(500).json({ message: "Failed to fetch courses", error: error.message });
 }
};
