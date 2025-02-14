import React from "react";
import { useNavigate } from "react-router";
import UserHeader from "../../components/UserHeader";

export default function UserProfile() {
  const navigate = useNavigate();

  // Dummy user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "User",
    cmsId: "123456",
    profilePic:
      "https://randomuser.me/api/portraits/men/75.jpg", // Dummy image URL
    enrolledCourses: [
      { id: 1, name: "Singing Basics", progress: 70 },
      { id: 2, name: "Advanced Vocal Training", progress: 50 },
      { id: 3, name: "Live Performance Techniques", progress: 20 },
    ],
    completedCourses: [
      { id: 4, name: "Breathing Techniques" },
      { id: 5, name: "Pitch Perfection" },
    ],
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <UserHeader /> 

      <div className="bg-slate-600 bg-opacity-10 backdrop-blur-md shadow-xl rounded-2xl p-6 w-full max-w-md border border-gray-700">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg"
          />
          <h2 className="text-2xl font-bold mt-2">{user.name}</h2>
          <p className="text-gray-300 text-sm">{user.email}</p>
          <p className="text-gray-400 text-xs">
            {user.role} | CMS ID: {user.cmsId}
          </p>
        </div>

        {/* Enrolled Courses Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold border-b pb-2 border-gray-600">
            Enrolled Courses
          </h3>
          {user.enrolledCourses.length > 0 ? (
            user.enrolledCourses.map((course) => (
              <div key={course.id} className="mt-4">
                <p className="text-sm font-medium">{course.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-3 mt-1">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all animate-pulse"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400">{course.progress}% completed</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm mt-2">No active courses</p>
          )}
        </div>

        {/* Completed Courses Section */}
        <div>
          <h3 className="text-lg font-semibold border-b pb-2 border-gray-600">
            Completed Courses
          </h3>
          {user.completedCourses.length > 0 ? (
            <ul className="mt-2 list-disc list-inside text-sm text-gray-300">
              {user.completedCourses.map((course) => (
                <li key={course.id} className="py-1">{course.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-sm mt-2">No completed courses</p>
          )}
        </div>
          {/* See Certificates */}
        <div>
          <h3 className="text-lg font-semibold border-b pb-2 border-gray-600">
            Completed Courses Certificates
          </h3>
          {user.completedCourses.length > 0 ? (
            <ul className="mt-2 list-disc list-inside text-sm text-gray-300">
              {user.completedCourses.map((course) => (
                <li key={course.id} className="py-1">{course.name}</li>
              ))}
            {/* <button
              type="submit"
              onClick={() => navigate('/certificate')} 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Certificate
            </button> */}
            </ul>
          ) : (
            <p className="text-gray-400 text-sm mt-2">No completed courses</p>
          )}
        </div>

      </div>
    </div>
  );
}
