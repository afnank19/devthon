// InstructorFeedback.js
import React, { useState } from 'react';
import InstructorHeader from '../../components/InstructorHeader';

export default function InstructorFeedback() {
  // State to manage feedback data
  const [selectedCourse, setSelectedCourse] = useState('');
  const [studentFeedback, setStudentFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState('');

  // List of completed courses (for example purposes)
  const completedCourses = [
    { id: 1, title: 'Advanced Vocal Training', studentName: 'Alice' },
    { id: 2, title: 'Beginner Vocal Training', studentName: 'Bob' },
    { id: 3, title: 'Intermediate Vocal Techniques', studentName: 'Charlie' },
  ];

  // Handle course selection
  const handleCourseSelection = (e) => {
    setSelectedCourse(e.target.value);
  };

  // Handle feedback input
  const handleFeedbackChange = (e) => {
    setStudentFeedback(e.target.value);
  };

  // Handle feedback submission
  const handleSubmitFeedback = (e) => {
    e.preventDefault();

    if (!selectedCourse || !studentFeedback) {
      setError('Please select a course and provide feedback.');
      return;
    }

    setFeedbacks([
      ...feedbacks,
      {
        course: completedCourses.find((course) => course.id == selectedCourse),
        feedback: studentFeedback,
      },
    ]);

    // Clear input fields
    setSelectedCourse('');
    setStudentFeedback('');
    setError('');
    alert('Feedback submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700">
      <InstructorHeader />

      <div className="max-w-4xl mx-auto py-10 text-center text-white">
        <h2 className="text-3xl font-semibold mb-6">Provide Feedback to Students</h2>

        {/* Feedback Form */}
        <div className="bg-slate-800 p-8 rounded-xl shadow-2xl mb-8">
          <form onSubmit={handleSubmitFeedback} className="space-y-6">
            {/* Course Selection */}
            <div>
              <select
                value={selectedCourse}
                onChange={handleCourseSelection}
                className="w-full p-4 rounded-md text-white font-semibold bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Select a Course</option>
                {completedCourses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title} - {course.studentName}
                  </option>
                ))}
              </select>
            </div>

            {/* Feedback Text Area */}
            <div>
              <textarea
                placeholder="Enter your feedback for the student"
                value={studentFeedback}
                onChange={handleFeedbackChange}
                className="w-full p-5 rounded-md text-white font-bold bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows="5"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
              >
                Submit Feedback
              </button>
            </div>

            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>

        {/* Feedback History Section */}
        <div className="bg-slate-800 p-8 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-semibold mb-4">Submitted Feedback</h3>
          {feedbacks.length > 0 ? (
            <div className="space-y-4">
              {feedbacks.map((feedback, index) => (
                <div key={index} className="bg-slate-600 p-4 rounded-md">
                  <p className="font-semibold text-yellow-300">
                    {feedback.course.title} - {feedback.course.studentName}
                  </p>
                  <p className="text-white">{feedback.feedback}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white">No feedback submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
