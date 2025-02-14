import React from 'react';
import { Link } from 'react-router-dom';

export default function InstructorHeader() {
  return (
    <header className="bg-gray-800 p-4 w-full mb-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo or App Name */}
        <h1 className="text-white text-2xl font-semibold">Instructor Panel</h1>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link
            to="/instructorHomePage" // Home Page Link
            className="text-white text-lg hover:text-blue-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/instructorProfile" // Instructor Profile Link
            className="text-white text-lg hover:text-blue-400 transition duration-200"
          >
            Profile
          </Link>
          <Link
            to="/createCourse" // Create Course Link
            className="text-white text-lg hover:text-blue-400 transition duration-200"
          >
            Create Course
          </Link>
          <Link
            to="/editCourse" // Edit Course Link
            className="text-white text-lg hover:text-blue-400 transition duration-200"
          >
            Edit Course
          </Link>
        </nav>
      </div>
    </header>
  );
}
