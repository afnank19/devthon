import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserHomePage() {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Mock data for available and enrolled courses
    const allCourses = [
      { id: 1, title: 'Vocal Training Basics', description: 'Learn the basics of vocal training', progress: 50 },
      { id: 2, title: 'Advanced Vocal Techniques', description: 'Master advanced vocal techniques', progress: 0 },
      { id: 3, title: 'Singing for Performance', description: 'Prepare for live performances', progress: 100 },
    ];

    const userEnrolledCourses = [
      { id: 1, title: 'Vocal Training Basics', progress: 50 },
      { id: 3, title: 'Singing for Performance', progress: 100 },
    ];

    // Setting the available and enrolled courses
    setAvailableCourses(allCourses.filter(course => !userEnrolledCourses.some(enrolled => enrolled.id === course.id)));
    setEnrolledCourses(userEnrolledCourses);
  }, []);

  const joinCourse = (course) => {
    // Function to handle joining a course
    setEnrolledCourses((prev) => [...prev, { ...course, progress: 0 }]);
    setAvailableCourses((prev) => prev.filter((available) => available.id !== course.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white p-6 transition-all duration-500 ease-in-out">
      {/* Header */}
      <h1 className="text-5xl font-bold text-center mb-12 animate__animated animate__fadeIn">
        Welcome to Your Course Dashboard
      </h1>

      {/* Enrolled Courses Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Enrolled Courses</h2>
        {enrolledCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeIn animate__delay-1s">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-slate-500 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:bg-slate-400 ease-in-out duration-300">
                <h3 className="text-2xl font-semibold">{course.title}</h3>
                <p className="text-gray-300 mt-2">{course.description}</p>
                <div className="mt-4">
                  <p className="text-gray-300">Progress: {course.progress}%</p>
                  <div className="w-full bg-gray-600 h-2 rounded mt-2">
                    <div
                      className="h-2 bg-gradient-to-r from-blue-500 to-green-400"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <Link to={`/course/${course.id}`} className="text-blue-400 hover:text-white mt-4 inline-block">
                  View Course Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl">You haven't enrolled in any courses yet. Start learning today!</p>
        )}
      </section>

      {/* Available Courses Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Available Courses</h2>
        {availableCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeIn animate__delay-2s">
            {availableCourses.map((course) => (
              <div key={course.id} className="bg-slate-500 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:bg-slate-400 ease-in-out duration-300">
                <h3 className="text-2xl font-semibold">{course.title}</h3>
                <p className="text-gray-300 mt-2">{course.description}</p>
                <div className="mt-4">
                  <button
                    onClick={() => joinCourse(course)}
                    className="bg-gradient-to-r from-blue-500 to-green-400 hover:bg-gradient-to-l text-white px-6 py-3 rounded-md w-full mt-2 transition duration-300 transform hover:scale-105"
                  >
                    Join Course
                  </button>
                  <Link to={`/course/${course.id}`} className="text-blue-400 hover:text-white mt-4 inline-block">
                    View Course Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl">No available courses. Check back later for more!</p>
        )}
      </section>
    </div>
  );
}
