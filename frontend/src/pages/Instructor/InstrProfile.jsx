import React, { useState, useEffect } from 'react';
import InstructorHeader from '../../components/InstructorHeader';

export default function InstrProfile() {
  // Mocked instructor data
  const [instructorData, setInstructorData] = useState({
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/150', // Mocked profile picture
    courses: [
      {
        id: 1,
        title: 'Advanced Vocal Training',
        enrolledStudents: 120,
        rating: 4.5,
      },
      {
        id: 2,
        title: 'Beginner Vocal Training',
        enrolledStudents: 200,
        rating: 4.8,
      },
      {
        id: 3,
        title: 'Intermediate Vocal Techniques',
        enrolledStudents: 150,
        rating: 4.2,
      },
    ],
  });

  // Function to display star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-${i <= rating ? 'yellow' : 'gray'}-400 transition duration-200`}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  useEffect(() => {
    // Here you can fetch instructor data if needed
    // setInstructorData(responseFromAPI);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen">
      <InstructorHeader />

      {/* Instructor Profile Info */}
      <div className="bg-slate-700 p-10 rounded-xl shadow-2xl text-center w-96 mx-auto mb-10 transition duration-300 hover:scale-105 transform hover:shadow-xl">
        <img
          src={instructorData.profilePicture}
          alt="Instructor Avatar"
          className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-yellow-500 shadow-lg"
        />
        <h3 className="text-3xl font-semibold text-white mb-2">{instructorData.name}</h3>
        <p className="text-white text-xl mb-6">Vocal Trainer & Music Educator</p>
      </div>

      {/* Instructor's Courses */}
      <div className="w-full max-w-7xl mx-auto">
        <h4 className="font-semibold text-slate-200 text-3xl mb-6 text-center">Courses Offered</h4>

        {/* Courses List */}
        {instructorData.courses.map((course) => (
          <div
            key={course.id}
            className="bg-slate-600 p-8 rounded-xl shadow-lg mb-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <h5 className="text-2xl font-semibold text-white mb-3">{course.title}</h5>
            <div className="flex items-center text-white">
              <span className="mr-4 text-lg">
                Enrolled Students: <span className="font-semibold">{course.enrolledStudents}</span>
              </span>
              <span className="flex items-center">
                Rating: <span className="ml-2">{renderStars(course.rating)}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
